import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { CreditCard, IndianRupee, LogOut, Mail, MessageSquare, RefreshCw, Tag, Trash2 } from "lucide-react";
import logo from "@/assets/heal-grow-logo.png.asset.json";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin/dashboard")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Heal and Grow with Padma" },
      { name: "description", content: "Contact messages and course orders." },
      { property: "og:title", content: "Admin Dashboard — Heal and Grow with Padma" },
      { property: "og:description", content: "Private admin dashboard." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Dashboard,
});

type Tab = "messages" | "orders" | "prices";
const fmt = (d: string) => new Date(d).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });

function Dashboard() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const [state, setState] = useState<"loading" | "ok" | "denied">("loading");
  const [email, setEmail] = useState("");
  const [tab, setTab] = useState<Tab>("messages");

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) return navigate({ to: "/admin/login", replace: true });
      setEmail(data.user.email ?? "");
      const { data: isAdmin } = await supabase.rpc("has_role", { _user_id: data.user.id, _role: "admin" });
      setState(isAdmin ? "ok" : "denied");
    })();
  }, [navigate]);

  const enabled = state === "ok";
  const messages = useQuery({
    queryKey: ["admin", "messages"], enabled,
    queryFn: async () => (await supabase.from("contact_messages").select("*").order("created_at", { ascending: false })).data ?? [],
  });
  const orders = useQuery({
    queryKey: ["admin", "orders"], enabled,
    queryFn: async () => (await supabase.from("orders").select("*").order("created_at", { ascending: false })).data ?? [],
  });
  const products = useQuery({
    queryKey: ["admin", "products"], enabled,
    queryFn: async () => (await supabase.from("products").select("*").order("kind").order("title")).data ?? [],
  });

  const signOut = async () => {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/admin/login", replace: true });
  };

  if (state === "loading") return <div className="grid min-h-screen place-items-center text-muted-foreground">Loading…</div>;
  if (state === "denied")
    return (
      <div className="grid min-h-screen place-items-center p-6 text-center">
        <div>
          <h1 className="font-display text-2xl font-bold">No admin access</h1>
          <p className="mt-2 text-sm text-muted-foreground">This account ({email}) is not the admin.</p>
          <button onClick={signOut} className="mt-4 rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground">Sign out</button>
        </div>
      </div>
    );

  const paid = (orders.data ?? []).filter((o) => o.status === "paid");
  const revenue = paid.reduce((s, o) => s + o.amount_inr, 0);
  const newMsgs = (messages.data ?? []).filter((m) => m.status === "new").length;

  const setMsgStatus = async (id: string, status: string) => {
    await supabase.from("contact_messages").update({ status }).eq("id", id);
    qc.invalidateQueries({ queryKey: ["admin", "messages"] });
  };
  const delMsg = async (id: string) => {
    if (!confirm("Delete this message?")) return;
    await supabase.from("contact_messages").delete().eq("id", id);
    qc.invalidateQueries({ queryKey: ["admin", "messages"] });
  };
  const savePrice = async (id: string, price: number, active: boolean) => {
    if (!Number.isFinite(price) || price < 1) return alert("Enter a valid price");
    await supabase.from("products").update({ price_inr: Math.round(price), active, updated_at: new Date().toISOString() }).eq("id", id);
    qc.invalidateQueries({ queryKey: ["admin", "products"] });
  };

  const stats = [
    { label: "New messages", value: newMsgs, icon: MessageSquare },
    { label: "Paid orders", value: paid.length, icon: CreditCard },
    { label: "Revenue", value: `₹${revenue.toLocaleString("en-IN")}`, icon: IndianRupee },
  ];

  return (
    <div className="min-h-screen bg-muted/40">
      <header className="bg-forest-deep text-forest-foreground">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-background p-1.5"><img src={logo.url} alt="Heal and Grow" className="h-8 w-auto" /></div>
            <span className="font-display text-lg font-bold text-gold">Admin Dashboard</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="hidden opacity-80 sm:inline">{email}</span>
            <button onClick={signOut} className="flex items-center gap-1.5 rounded-full border border-forest-foreground/30 px-3 py-1.5 text-xs font-semibold hover:bg-forest-foreground/10">
              <LogOut className="h-3.5 w-3.5" /> Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1280px] space-y-6 px-6 py-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 rounded-2xl bg-card p-5 shadow-soft">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/20"><s.icon className="h-5 w-5 text-forest" /></span>
              <div><p className="text-xs text-muted-foreground">{s.label}</p><p className="text-2xl font-bold">{s.value}</p></div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {([["messages", "Contact messages", Mail], ["orders", "Payments & orders", CreditCard], ["prices", "Prices", Tag]] as const).map(([k, l, I]) => (
            <button key={k} onClick={() => setTab(k)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${tab === k ? "bg-primary text-primary-foreground" : "bg-card hover:bg-muted"}`}>
              <I className="h-4 w-4" /> {l}
            </button>
          ))}
          <button onClick={() => qc.invalidateQueries({ queryKey: ["admin"] })} className="ml-auto flex items-center gap-1.5 rounded-full bg-card px-4 py-2 text-sm hover:bg-muted">
            <RefreshCw className="h-4 w-4" /> Refresh
          </button>
        </div>

        {tab === "messages" && (
          <div className="space-y-3">
            {(messages.data ?? []).length === 0 && <Empty text="No messages yet." />}
            {(messages.data ?? []).map((m) => (
              <div key={m.id} className="rounded-2xl bg-card p-5 shadow-soft">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">{m.name} {m.interest && <span className="ml-2 rounded-full bg-gold/20 px-2 py-0.5 text-xs">{m.interest}</span>}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      <a href={`mailto:${m.email}`} className="hover:underline">{m.email}</a>
                      {m.phone && <> · <a href={`tel:${m.phone}`} className="hover:underline">{m.phone}</a></>} · {fmt(m.created_at)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <select value={m.status} onChange={(e) => setMsgStatus(m.id, e.target.value)} className="rounded-lg border border-input bg-background px-2 py-1 text-xs">
                      <option value="new">New</option><option value="contacted">Contacted</option><option value="resolved">Resolved</option>
                    </select>
                    <button onClick={() => delMsg(m.id)} aria-label="Delete" className="rounded-lg p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </div>
                <p className="mt-3 whitespace-pre-wrap text-sm">{m.message}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "orders" && (
          <div className="overflow-x-auto rounded-2xl bg-card shadow-soft">
            {(orders.data ?? []).length === 0 ? <Empty text="No orders yet." /> : (
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border text-xs uppercase text-muted-foreground">
                  <tr><th className="p-3">Date</th><th className="p-3">Customer</th><th className="p-3">Program</th><th className="p-3">Amount</th><th className="p-3">Status</th><th className="p-3">Payment ID</th></tr>
                </thead>
                <tbody>
                  {(orders.data ?? []).map((o) => (
                    <tr key={o.id} className="border-b border-border last:border-0">
                      <td className="p-3 whitespace-nowrap">{fmt(o.created_at)}</td>
                      <td className="p-3"><p className="font-medium">{o.customer_name}</p><p className="text-xs text-muted-foreground">{o.customer_email}{o.customer_phone && ` · ${o.customer_phone}`}</p></td>
                      <td className="p-3">{o.product_title}</td>
                      <td className="p-3 font-semibold">₹{o.amount_inr.toLocaleString("en-IN")}</td>
                      <td className="p-3"><span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${o.status === "paid" ? "bg-forest/15 text-forest" : o.status === "failed" ? "bg-destructive/15 text-destructive" : "bg-gold/25"}`}>{o.status}</span></td>
                      <td className="p-3 font-mono text-xs">{o.razorpay_payment_id ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {tab === "prices" && (
          <div className="overflow-x-auto rounded-2xl bg-card shadow-soft">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border text-xs uppercase text-muted-foreground">
                <tr><th className="p-3">Type</th><th className="p-3">Program</th><th className="p-3">Price (₹)</th><th className="p-3">For sale</th><th className="p-3"></th></tr>
              </thead>
              <tbody>
                {(products.data ?? []).map((p) => <PriceRow key={p.id} p={p} onSave={savePrice} />)}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}

function PriceRow({ p, onSave }: { p: { id: string; kind: string; title: string; price_inr: number; active: boolean }; onSave: (id: string, price: number, active: boolean) => void }) {
  const [price, setPrice] = useState(String(p.price_inr));
  const [active, setActive] = useState(p.active);
  const dirty = Number(price) !== p.price_inr || active !== p.active;
  return (
    <tr className="border-b border-border last:border-0">
      <td className="p-3 capitalize text-muted-foreground">{p.kind}</td>
      <td className="p-3 font-medium">{p.title}</td>
      <td className="p-3"><input type="number" min={1} value={price} onChange={(e) => setPrice(e.target.value)} className="w-28 rounded-lg border border-input bg-background px-2 py-1" /></td>
      <td className="p-3"><input type="checkbox" checked={active} onChange={(e) => setActive(e.target.checked)} /></td>
      <td className="p-3"><button disabled={!dirty} onClick={() => onSave(p.id, Number(price), active)} className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground disabled:opacity-40">Save</button></td>
    </tr>
  );
}

function Empty({ text }: { text: string }) {
  return <p className="rounded-2xl bg-card p-10 text-center text-sm text-muted-foreground">{text}</p>;
}
