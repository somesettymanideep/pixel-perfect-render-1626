import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Eye, EyeOff, Lock, Mail, ShieldCheck, Sparkles } from "lucide-react";
import logo from "@/assets/heal-grow-logo.png.asset.json";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [{ title: "Admin Login — Heal and Grow with Padma" }],
  }),
  component: AdminLoginPage,
});

function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      // Demo validation (allows admin@healandgrow.com / admin123 or any valid credentials)
      if ((email === "admin@healandgrow.com" && password === "admin123") || (email && password.length >= 6)) {
        localStorage.setItem("hg_admin_auth", "true");
        localStorage.setItem("hg_admin_email", email || "admin@healandgrow.com");
        navigate({ to: "/admin/dashboard" });
      } else {
        setError("Invalid email or password. Try admin@healandgrow.com / admin123");
        setLoading(false);
      }
    }, 600);
  };

  const autofillDemo = () => {
    setEmail("admin@healandgrow.com");
    setPassword("admin123");
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0E382C] via-[#0A2920] to-[#134D3D] text-white flex flex-col justify-between selection:bg-gold/30">
      {/* Top Bar */}
      <header className="p-6">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white p-2 shadow-md">
              <img src={logo.url} alt="Heal and Grow Logo" className="h-9 w-auto" />
            </div>
            <span className="font-display font-bold text-lg text-gold tracking-wide">
              Admin Portal
            </span>
          </div>

          <a
            href="/"
            className="text-xs font-semibold text-white/80 hover:text-gold transition-colors flex items-center gap-1"
          >
            ← Back to Website
          </a>
        </div>
      </header>

      {/* Main Login Form Container */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="relative overflow-hidden rounded-3xl bg-white/10 p-8 sm:p-10 backdrop-blur-xl border border-white/20 shadow-2xl">
            {/* Soft decorative glow behind card */}
            <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-[#0E382C] shadow-lg">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <h1 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                Welcome Back, Admin
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed">
                Sign in to manage client inquiries, contact submissions, and payment records.
              </p>
            </div>

            {/* Quick Autofill Demo Helper Badge */}
            <div className="mt-6 rounded-2xl bg-white/5 p-3.5 border border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-gold shrink-0" />
                <span className="text-white/80">
                  Demo: <strong className="text-gold font-mono">admin@healandgrow.com</strong>
                </span>
              </div>

              <button
                type="button"
                onClick={autofillDemo}
                className="rounded-full bg-gold/20 px-3 py-1 text-[11px] font-bold text-gold hover:bg-gold hover:text-[#0E382C] transition-all"
              >
                Auto-fill
              </button>
            </div>

            {/* Error Message Alert */}
            {error && (
              <div className="mt-4 rounded-xl bg-red-500/20 p-3 text-xs font-semibold text-red-200 border border-red-500/30 text-center animate-in fade-in">
                {error}
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@healandgrow.com"
                    className="w-full rounded-xl border border-white/20 bg-white/10 pl-10 pr-4 py-3 text-sm text-white placeholder-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-white/20 bg-white/10 pl-10 pr-10 py-3 text-sm text-white placeholder-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-white/70 hover:text-white">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="rounded border-white/30 bg-white/10 text-gold focus:ring-gold"
                  />
                  <span>Remember session</span>
                </label>
                <a href="#forgot" onClick={(e) => { e.preventDefault(); autofillDemo(); }} className="text-gold hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3.5 text-sm font-bold text-gold-foreground shadow-lg transition-all hover:bg-gold/90 hover:shadow-xl active:scale-98 disabled:opacity-70"
              >
                {loading ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <span>Sign In to Dashboard</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-xs text-white/60">
        © 2026 Heal and Grow with Padma — Secure Admin Management System
      </footer>
    </div>
  );
}
