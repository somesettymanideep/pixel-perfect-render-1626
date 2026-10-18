import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Lock, Mail, ShieldCheck } from "lucide-react";
import logo from "@/assets/heal-grow-logo.png.asset.json";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [
      { title: "Admin Login — Heal and Grow with Padma" },
      { name: "description", content: "Private admin sign-in for Heal and Grow with Padma." },
      { property: "og:title", content: "Admin Login — Heal and Grow with Padma" },
      { property: "og:description", content: "Private admin sign-in." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminLoginPage,
});

function AdminLoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setInfo("");
    setLoading(true);
    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setLoading(false);
      if (error) return setError(error.message);
      navigate({ to: "/admin/dashboard" });
    } else {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/admin/dashboard` },
      });
      setLoading(false);
      if (error) return setError(error.message);
      if (data.session) navigate({ to: "/admin/dashboard" });
      else setInfo("Check your inbox and click the confirmation link, then sign in here.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-forest-deep text-forest-foreground">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-background p-2">
            <img src={logo.url} alt="Heal and Grow" className="h-9 w-auto" />
          </div>
          <span className="font-display text-lg font-bold text-gold">Admin Portal</span>
        </div>
        <a href="/" className="text-xs font-semibold opacity-80 hover:text-gold">← Back to website</a>
      </header>
      <main className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md rounded-3xl bg-background p-8 text-foreground shadow-2xl">
          <div className="text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gold text-gold-foreground">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h1 className="mt-4 font-display text-2xl font-bold">
              {mode === "signin" ? "Admin sign in" : "Create admin account"}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {mode === "signin"
                ? "Manage contact messages, orders and prices."
                : "Only the very first account becomes the admin."}
            </p>
          </div>
          {error && <p className="mt-4 rounded-xl bg-destructive/10 p-3 text-center text-sm text-destructive">{error}</p>}
          {info && <p className="mt-4 rounded-xl bg-muted p-3 text-center text-sm">{info}</p>}
          <form onSubmit={submit} className="mt-6 space-y-4">
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
                className="w-full rounded-xl border border-input bg-background py-3 pl-10 pr-4 text-sm" />
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password (8+ characters)"
                className="w-full rounded-xl border border-input bg-background py-3 pl-10 pr-4 text-sm" />
            </div>
            <button disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3.5 text-sm font-bold text-gold-foreground disabled:opacity-60">
              {loading ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          <button onClick={() => setMode(mode === "signin" ? "signup" : "signin")} className="mt-4 w-full text-center text-xs font-semibold text-muted-foreground hover:text-foreground">
            {mode === "signin" ? "First time? Create the admin account" : "Already have an account? Sign in"}
          </button>
        </div>
      </main>
    </div>
  );
}
