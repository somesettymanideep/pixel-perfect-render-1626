import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle2, CreditCard, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { createRazorpayOrder, verifyRazorpayPayment } from "@/lib/payments.functions";

declare global {
  interface Window {
    Razorpay?: new (opts: Record<string, unknown>) => { open: () => void };
  }
}

function loadRazorpay() {
  return new Promise<boolean>((resolve) => {
    if (window.Razorpay) return resolve(true);
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

export function BuyButton({ productId, className }: { productId: string; className?: string }) {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const createOrder = useServerFn(createRazorpayOrder);
  const verify = useServerFn(verifyRazorpayPayment);

  const { data: product } = useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      const { data } = await supabase.from("products").select("title,price_inr,active").eq("id", productId).maybeSingle();
      return data;
    },
  });

  if (!product || !product.active) return null;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const f = new FormData(e.currentTarget);
    setBusy(true);
    try {
      const res = await createOrder({
        data: {
          productId,
          name: String(f.get("name") || ""),
          email: String(f.get("email") || ""),
          phone: String(f.get("phone") || ""),
        },
      });
      if (res.error || !("orderId" in res)) {
        setError(res.error || "Something went wrong.");
        return;
      }
      if (!(await loadRazorpay()) || !window.Razorpay) {
        setError("Could not load the payment window. Please try again.");
        return;
      }
      const rz = new window.Razorpay({
        key: res.keyId,
        order_id: res.orderId,
        amount: res.amount,
        currency: "INR",
        name: "Heal and Grow with Padma",
        description: res.title,
        prefill: { name: f.get("name"), email: f.get("email"), contact: f.get("phone") },
        theme: { color: "#0E382C" },
        handler: async (r: { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string }) => {
          const v = await verify({
            data: { orderId: r.razorpay_order_id, paymentId: r.razorpay_payment_id, signature: r.razorpay_signature },
          });
          if (v.ok) setDone(true);
          else setError("We couldn't confirm your payment. Please contact us.");
        },
      });
      rz.open();
    } catch {
      setError("Please check your details and try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => { setOpen(true); setDone(false); setError(""); }}
        className={className ?? "inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-xs font-bold text-gold-foreground hover:brightness-105 transition"}
      >
        <CreditCard className="h-4 w-4" /> Buy Now · ₹{product.price_inr.toLocaleString("en-IN")}
      </button>
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/60 p-4">
          <div className="relative w-full max-w-md rounded-3xl bg-background p-6 shadow-2xl">
            <button onClick={() => setOpen(false)} aria-label="Close" className="absolute right-4 top-4 rounded-full p-2 hover:bg-muted">
              <X className="h-4 w-4" />
            </button>
            {done ? (
              <div className="py-6 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-forest" />
                <h3 className="mt-3 font-display text-xl font-bold">Payment successful</h3>
                <p className="mt-2 text-sm text-muted-foreground">Thank you! Padma will reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-3">
                <h3 className="font-display text-xl font-bold">{product.title}</h3>
                <p className="text-sm text-muted-foreground">Amount: ₹{product.price_inr.toLocaleString("en-IN")}</p>
                <input name="name" required maxLength={100} placeholder="Full name" className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm" />
                <input name="email" type="email" required maxLength={255} placeholder="Email" className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm" />
                <input name="phone" maxLength={30} placeholder="Phone (optional)" className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm" />
                {error && <p className="text-sm text-destructive">{error}</p>}
                <button disabled={busy} className="w-full rounded-full bg-primary py-3 text-sm font-bold text-primary-foreground disabled:opacity-60">
                  {busy ? "Starting payment…" : "Continue to payment"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
