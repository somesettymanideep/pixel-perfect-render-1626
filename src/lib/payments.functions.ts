import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const createSchema = z.object({
  productId: z.string().min(1).max(100),
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30).optional().default(""),
});

export const createRazorpayOrder = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => createSchema.parse(d))
  .handler(async ({ data }) => {
    const keyId = process.env["RAZORPAY_KEY_ID"];
    const keySecret = process.env["RAZORPAY_KEY_SECRET"];
    if (!keyId || !keySecret) {
      return { error: "Online payments are not set up yet. Please contact us to enroll." as string };
    }
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: product } = await supabaseAdmin
      .from("products")
      .select("id,title,price_inr,active")
      .eq("id", data.productId)
      .maybeSingle();
    if (!product || !product.active) return { error: "This program is not available right now." };

    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(`${keyId}:${keySecret}`),
      },
      body: JSON.stringify({
        amount: product.price_inr * 100,
        currency: "INR",
        notes: { product_id: product.id, email: data.email },
      }),
    });
    if (!res.ok) {
      console.error("Razorpay order failed", res.status, await res.text());
      return { error: "Could not start the payment. Please try again." };
    }
    const rz = (await res.json()) as { id: string; amount: number };
    const { error } = await supabaseAdmin.from("orders").insert({
      product_id: product.id,
      product_title: product.title,
      amount_inr: product.price_inr,
      customer_name: data.name,
      customer_email: data.email,
      customer_phone: data.phone || null,
      razorpay_order_id: rz.id,
    });
    if (error) {
      console.error(error);
      return { error: "Could not start the payment. Please try again." };
    }
    return { error: null, keyId, orderId: rz.id, amount: rz.amount, title: product.title };
  });

const verifySchema = z.object({
  orderId: z.string().min(1).max(100),
  paymentId: z.string().min(1).max(100),
  signature: z.string().min(1).max(200),
});

async function hmacHex(secret: string, msg: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(msg));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export const verifyRazorpayPayment = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => verifySchema.parse(d))
  .handler(async ({ data }) => {
    const keySecret = process.env["RAZORPAY_KEY_SECRET"];
    if (!keySecret) return { ok: false };
    const expected = await hmacHex(keySecret, `${data.orderId}|${data.paymentId}`);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    if (expected !== data.signature) {
      await supabaseAdmin.from("orders").update({ status: "failed" }).eq("razorpay_order_id", data.orderId).eq("status", "pending");
      return { ok: false };
    }
    await supabaseAdmin
      .from("orders")
      .update({ status: "paid", razorpay_payment_id: data.paymentId, paid_at: new Date().toISOString() })
      .eq("razorpay_order_id", data.orderId);
    return { ok: true };
  });
