import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  CreditCard,
  Download,
  Eye,
  FileText,
  Filter,
  LogOut,
  Mail,
  MessageSquare,
  Phone,
  Plus,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Trash2,
  TrendingUp,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import logo from "@/assets/heal-grow-logo.png.asset.json";
import heroCoach from "@/assets/hero-coach.jpg";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({
    meta: [{ title: "Admin Dashboard — Heal and Grow with Padma" }],
  }),
  component: AdminDashboardPage,
});

// Types for Contact Forms & Payments
interface ContactSubmission {
  id: string;
  date: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  status: "New" | "Contacted" | "In Progress" | "Resolved";
}

interface PaymentTransaction {
  id: string;
  date: string;
  customerName: string;
  email: string;
  program: string;
  amount: number;
  currency: string;
  method: "UPI" | "Razorpay" | "Credit Card" | "Stripe" | "NetBanking";
  status: "Completed" | "Pending" | "Refunded";
}

const initialContactForms: ContactSubmission[] = [
  {
    id: "INF-2026-091",
    date: "29 Sep 2026, 04:15 PM",
    name: "Ananya Sharma",
    email: "ananya.sharma@gmail.com",
    phone: "+91 98765 43210",
    interest: "Ho'oponopono (Advanced Hawaiian Healing)",
    message:
      "Hello Padma, I have been dealing with relationship distress and anxiety for over a year. I want to book the 4-week Ho'oponopono healing program.",
    status: "New",
  },
  {
    id: "INF-2026-090",
    date: "29 Sep 2026, 02:40 PM",
    name: "Vikram Malhotra",
    email: "vikram.m@outlook.com",
    phone: "+91 98234 56789",
    interest: "Financial Freedom Blueprint – 10X Fortune Manifestation",
    message:
      "Hi Padma team, I want to understand how the 16-week financial freedom blueprint works for corporate managers. Please call me back.",
    status: "New",
  },
  {
    id: "INF-2026-089",
    date: "29 Sep 2026, 11:20 AM",
    name: "Priya Nair",
    email: "priya.nair@yahoo.com",
    phone: "+91 97112 33445",
    interest: "Innerchild Healing (Trauma Healing)",
    message:
      "I am interested in the 6-week trauma release work. Can I schedule a 1-on-1 discovery call before starting?",
    status: "Contacted",
  },
  {
    id: "INF-2026-088",
    date: "28 Sep 2026, 06:15 PM",
    name: "Rajesh K. Verma",
    email: "rajesh.verma@techsolutions.com",
    phone: "+91 99887 76655",
    interest: "Corporate Team Alignment Workshop",
    message:
      "We want to organize a 1-day executive leadership and energy healing seminar for 45 employees in Visakhapatnam.",
    status: "In Progress",
  },
  {
    id: "INF-2026-087",
    date: "28 Sep 2026, 03:50 PM",
    name: "Sneha Reddy",
    email: "sneha.reddy@gmail.com",
    phone: "+91 96543 21098",
    interest: "Aura Reset – Heal from Within",
    message:
      "Enrolled yesterday and completed session 1. Just wanted to clarify the daily 15-minute sound meditation audio schedule.",
    status: "Resolved",
  },
  {
    id: "INF-2026-086",
    date: "27 Sep 2026, 05:10 PM",
    name: "Rohan Kapoor",
    email: "rohan.kapoor@gmail.com",
    phone: "+91 94321 09876",
    interest: "Law of Attraction",
    message:
      "Interested in the manifestation science course starting next month. Please share syllabus details.",
    status: "Resolved",
  },
  {
    id: "INF-2026-085",
    date: "27 Sep 2026, 01:15 PM",
    name: "Meera Krishnan",
    email: "meera.k@gmail.com",
    phone: "+91 91234 56780",
    interest: "Numerology Reports & Personal Guidance",
    message:
      "I paid for the custom numerology report. When can I expect the 30-page PDF report and personal call date?",
    status: "Contacted",
  },
];

const initialPayments: PaymentTransaction[] = [
  {
    id: "TXN-998412",
    date: "29 Sep 2026, 03:45 PM",
    customerName: "Vikram Malhotra",
    email: "vikram.m@outlook.com",
    program: "Financial Freedom Blueprint – 10X Fortune Manifestation",
    amount: 24999,
    currency: "INR",
    method: "Razorpay",
    status: "Completed",
  },
  {
    id: "TXN-998411",
    date: "29 Sep 2026, 01:20 PM",
    customerName: "Ananya Sharma",
    email: "ananya.sharma@gmail.com",
    program: "Ho'oponopono (Advanced Hawaiian Healing)",
    amount: 14999,
    currency: "INR",
    method: "UPI",
    status: "Completed",
  },
  {
    id: "TXN-998410",
    date: "28 Sep 2026, 07:10 PM",
    customerName: "Rajesh K. Verma",
    email: "rajesh.verma@techsolutions.com",
    program: "Corporate Team Alignment Workshop (Advance Deposit)",
    amount: 75000,
    currency: "INR",
    method: "NetBanking",
    status: "Completed",
  },
  {
    id: "TXN-998409",
    date: "28 Sep 2026, 02:15 PM",
    customerName: "Sneha Reddy",
    email: "sneha.reddy@gmail.com",
    program: "Aura Reset – Heal from Within",
    amount: 8999,
    currency: "INR",
    method: "Credit Card",
    status: "Completed",
  },
  {
    id: "TXN-998408",
    date: "27 Sep 2026, 04:30 PM",
    customerName: "Rohan Kapoor",
    email: "rohan.kapoor@gmail.com",
    program: "Law of Attraction Mastery",
    amount: 12999,
    currency: "INR",
    method: "UPI",
    status: "Completed",
  },
  {
    id: "TXN-998407",
    date: "27 Sep 2026, 12:00 PM",
    customerName: "Meera Krishnan",
    email: "meera.k@gmail.com",
    program: "Numerology Reports & Personal Guidance",
    amount: 6999,
    currency: "INR",
    method: "Razorpay",
    status: "Completed",
  },
  {
    id: "TXN-998406",
    date: "26 Sep 2026, 06:40 PM",
    customerName: "Daniel Paul",
    email: "daniel.paul@gmail.com",
    program: "90 Days Transformational Healing",
    amount: 45000,
    currency: "INR",
    method: "Stripe",
    status: "Completed",
  },
  {
    id: "TXN-998405",
    date: "26 Sep 2026, 02:15 PM",
    customerName: "Pooja Hegde",
    email: "pooja.hegde@yahoo.com",
    program: "Love Alchemy Academy",
    amount: 18999,
    currency: "INR",
    method: "UPI",
    status: "Pending",
  },
  {
    id: "TXN-998404",
    date: "25 Sep 2026, 05:00 PM",
    customerName: "Karthik Raja",
    email: "karthik.raja@gmail.com",
    program: "Ancestral Healing (Karma Healing)",
    amount: 14999,
    currency: "INR",
    method: "Credit Card",
    status: "Refunded",
  },
];

function AdminDashboardPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"contacts" | "payments" | "analytics">("contacts");

  // Contact Submissions State
  const [submissions, setSubmissions] = useState<ContactSubmission[]>(initialContactForms);
  const [contactSearch, setContactSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);

  // Payments State
  const [payments, setPayments] = useState<PaymentTransaction[]>(initialPayments);
  const [paymentSearch, setPaymentSearch] = useState("");
  const [paymentStatusFilter, setPaymentStatusFilter] = useState<string>("All");
  const [paymentMethodFilter, setPaymentMethodFilter] = useState<string>("All");
  const [selectedPayment, setSelectedPayment] = useState<PaymentTransaction | null>(null);

  // Authentication check
  useEffect(() => {
    const isAuth = localStorage.getItem("hg_admin_auth") === "true";
    if (!isAuth) {
      navigate({ to: "/admin/login" });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("hg_admin_auth");
    navigate({ to: "/admin/login" });
  };

  // Filter Submissions
  const filteredSubmissions = submissions.filter((sub) => {
    const matchesSearch =
      sub.name.toLowerCase().includes(contactSearch.toLowerCase()) ||
      sub.email.toLowerCase().includes(contactSearch.toLowerCase()) ||
      sub.phone.toLowerCase().includes(contactSearch.toLowerCase()) ||
      sub.interest.toLowerCase().includes(contactSearch.toLowerCase());
    const matchesStatus = statusFilter === "All" || sub.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Filter Payments
  const filteredPayments = payments.filter((pay) => {
    const matchesSearch =
      pay.customerName.toLowerCase().includes(paymentSearch.toLowerCase()) ||
      pay.email.toLowerCase().includes(paymentSearch.toLowerCase()) ||
      pay.id.toLowerCase().includes(paymentSearch.toLowerCase()) ||
      pay.program.toLowerCase().includes(paymentSearch.toLowerCase());
    const matchesStatus = paymentStatusFilter === "All" || pay.status === paymentStatusFilter;
    const matchesMethod = paymentMethodFilter === "All" || pay.method === paymentMethodFilter;
    return matchesSearch && matchesStatus && matchesMethod;
  });

  // Calculate Metrics
  const totalRevenue = payments
    .filter((p) => p.status === "Completed")
    .reduce((sum, p) => sum + p.amount, 0);

  const newInquiriesCount = submissions.filter((s) => s.status === "New").length;

  const updateSubmissionStatus = (id: string, newStatus: ContactSubmission["status"]) => {
    setSubmissions((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
    if (selectedSubmission && selectedSubmission.id === id) {
      setSelectedSubmission({ ...selectedSubmission, status: newStatus });
    }
  };

  const deleteSubmission = (id: string) => {
    if (confirm("Are you sure you want to delete this contact inquiry?")) {
      setSubmissions((prev) => prev.filter((item) => item.id !== id));
      if (selectedSubmission?.id === id) setSelectedSubmission(null);
    }
  };

  const exportCSV = (type: "contacts" | "payments") => {
    if (type === "contacts") {
      const headers = "ID,Date,Name,Email,Phone,Service Interest,Status,Message\n";
      const rows = filteredSubmissions
        .map(
          (s) =>
            `"${s.id}","${s.date}","${s.name}","${s.email}","${s.phone}","${s.interest}","${s.status}","${s.message.replace(/"/g, '""')}"`
        )
        .join("\n");
      const blob = new Blob([headers + rows], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `contact_inquiries_${new Date().toISOString().slice(0, 10)}.csv`;
      a.click();
    } else {
      const headers = "Transaction ID,Date,Customer Name,Email,Program,Amount (INR),Method,Status\n";
      const rows = filteredPayments
        .map(
          (p) =>
            `"${p.id}","${p.date}","${p.customerName}","${p.email}","${p.program}",${p.amount},"${p.method}","${p.status}"`
        )
        .join("\n");
      const blob = new Blob([headers + rows], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `payment_transactions_${new Date().toISOString().slice(0, 10)}.csv`;
      a.click();
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7F5] text-foreground selection:bg-gold/30 flex flex-col">
      {/* ========================================================= */}
      {/* ADMIN HEADER BAR                                          */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-40 border-b border-forest/10 bg-[#0E382C] text-white shadow-md">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-3.5">
          {/* Brand Logo & Portal Name */}
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white p-1.5 shadow-sm">
              <img src={logo.url} alt="Heal and Grow Logo" className="h-8 w-auto" />
            </div>
            <div>
              <div className="font-display font-bold text-base text-gold leading-tight">
                Heal and Grow Admin
              </div>
              <div className="text-[11px] text-white/70">Management Dashboard</div>
            </div>
          </div>

          {/* Center Search Input */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
              <input
                type="text"
                value={activeTab === "contacts" ? contactSearch : paymentSearch}
                onChange={(e) =>
                  activeTab === "contacts"
                    ? setContactSearch(e.target.value)
                    : setPaymentSearch(e.target.value)
                }
                placeholder={
                  activeTab === "contacts"
                    ? "Search inquiries by name, email, phone, service..."
                    : "Search transactions by ID, customer name, email..."
                }
                className="w-full rounded-full border border-white/20 bg-white/10 pl-10 pr-4 py-2 text-xs text-white placeholder-white/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
          </div>

          {/* Right Profile & Logout */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 border-r border-white/10 pr-4">
              <img
                src={heroCoach}
                alt="Padma Pavani"
                className="h-9 w-9 rounded-full object-cover object-top border-2 border-gold"
              />
              <div className="text-right">
                <div className="text-xs font-bold text-white">Padma Pavani</div>
                <div className="text-[10px] text-gold font-medium">Super Admin</div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-destructive hover:text-white transition-all shadow-xs"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* KPI METRICS OVERVIEW BAR                                 */}
      {/* ========================================================= */}
      <section className="bg-white border-b border-forest/10 py-6 shadow-2xs">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* KPI 1: Contact Inquiries */}
            <div className="flex items-center justify-between rounded-2xl border border-forest/10 bg-[#F5F8F6] p-5 shadow-2xs">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Total Inquiries
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold text-[#0E382C]">
                    {submissions.length}
                  </span>
                  {newInquiriesCount > 0 && (
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-extrabold text-blue-700">
                      {newInquiriesCount} New
                    </span>
                  )}
                </div>
                <div className="mt-1 text-[11px] text-muted-foreground">
                  {submissions.filter((s) => s.status === "Contacted").length} In Progress
                </div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E382C] text-gold shadow-xs">
                <MessageSquare className="h-6 w-6" />
              </div>
            </div>

            {/* KPI 2: Total Revenue */}
            <div className="flex items-center justify-between rounded-2xl border border-forest/10 bg-[#F5F8F6] p-5 shadow-2xs">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Total Revenue
                </div>
                <div className="mt-2 font-display text-2xl font-bold text-[#0E382C]">
                  ₹{totalRevenue.toLocaleString("en-IN")}
                </div>
                <div className="mt-1 text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" /> +18.4% growth this month
                </div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-[#0E382C] shadow-xs">
                <CreditCard className="h-6 w-6" />
              </div>
            </div>

            {/* KPI 3: Completed Transactions */}
            <div className="flex items-center justify-between rounded-2xl border border-forest/10 bg-[#F5F8F6] p-5 shadow-2xs">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Completed Payments
                </div>
                <div className="mt-2 font-display text-2xl font-bold text-[#0E382C]">
                  {payments.filter((p) => p.status === "Completed").length}
                </div>
                <div className="mt-1 text-[11px] text-muted-foreground">98.2% Gateway success rate</div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#155D4E] text-white shadow-xs">
                <CheckCircle2 className="h-6 w-6" />
              </div>
            </div>

            {/* KPI 4: Popular Service */}
            <div className="flex items-center justify-between rounded-2xl border border-forest/10 bg-[#F5F8F6] p-5 shadow-2xs">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Top Requested Program
                </div>
                <div className="mt-2 font-display text-base font-bold text-[#0E382C] line-clamp-1">
                  Ho'oponopono Healing
                </div>
                <div className="mt-1 text-[11px] text-gold-foreground font-semibold">
                  38% of total student inquiries
                </div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 shadow-xs">
                <Sparkles className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* MAIN CONTENT AREA WITH TABS                               */}
      {/* ========================================================= */}
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-[1400px] px-6">
          {/* Navigation Tabs Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-forest/10 pb-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("contacts")}
                className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                  activeTab === "contacts"
                    ? "bg-[#0E382C] text-white shadow-md"
                    : "bg-white text-foreground hover:bg-[#EEF4F0] border border-forest/10"
                }`}
              >
                <MessageSquare className="h-4 w-4" />
                <span>Contact Inquiries ({submissions.length})</span>
                {newInquiriesCount > 0 && (
                  <span className="rounded-full bg-gold px-2 py-0.5 text-[10px] text-[#0E382C] font-extrabold">
                    {newInquiriesCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveTab("payments")}
                className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                  activeTab === "payments"
                    ? "bg-[#0E382C] text-white shadow-md"
                    : "bg-white text-foreground hover:bg-[#EEF4F0] border border-forest/10"
                }`}
              >
                <CreditCard className="h-4 w-4" />
                <span>Payments &amp; Transactions ({payments.length})</span>
              </button>
            </div>

            {/* Export CSV Action Button */}
            <button
              onClick={() => exportCSV(activeTab === "contacts" ? "contacts" : "payments")}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-forest/20 bg-white px-4 py-2.5 text-xs font-bold text-[#0E382C] hover:bg-[#EEF4F0] transition shadow-2xs"
            >
              <Download className="h-4 w-4 text-[#155D4E]" />
              <span>Export {activeTab === "contacts" ? "Inquiries" : "Transactions"} CSV</span>
            </button>
          </div>

          {/* ========================================================= */}
          {/* TAB 1: CONTACT FORM SUBMISSIONS DISPLAY                  */}
          {/* ========================================================= */}
          {activeTab === "contacts" && (
            <div className="mt-6 space-y-6">
              {/* Filter Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-2xl bg-white p-4 border border-forest/10 shadow-2xs">
                {/* Search Bar for Mobile */}
                <div className="relative md:hidden w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={contactSearch}
                    onChange={(e) => setContactSearch(e.target.value)}
                    placeholder="Search by name, email, phone..."
                    className="w-full rounded-xl border border-border bg-muted/40 pl-9 pr-4 py-2 text-xs"
                  />
                </div>

                {/* Status Filter Buttons */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                  <span className="text-muted-foreground mr-1 flex items-center gap-1">
                    <Filter className="h-3.5 w-3.5" /> Filter Status:
                  </span>
                  {["All", "New", "Contacted", "In Progress", "Resolved"].map((st) => (
                    <button
                      key={st}
                      onClick={() => setStatusFilter(st)}
                      className={`rounded-lg px-3.5 py-1.5 transition ${
                        statusFilter === st
                          ? "bg-[#155D4E] text-white shadow-xs"
                          : "bg-muted/50 text-foreground hover:bg-muted"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>

                <div className="text-xs text-muted-foreground font-medium">
                  Showing <strong className="text-[#0E382C]">{filteredSubmissions.length}</strong> of{" "}
                  {submissions.length} inquiries
                </div>
              </div>

              {/* Submissions Table Card */}
              <div className="overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#EEF4F0] font-display text-xs font-bold uppercase tracking-wider text-[#0E382C]">
                      <tr>
                        <th className="px-5 py-4">Inquiry ID &amp; Date</th>
                        <th className="px-5 py-4">Client Contact</th>
                        <th className="px-5 py-4">Service Interest</th>
                        <th className="px-5 py-4">Status</th>
                        <th className="px-5 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      {filteredSubmissions.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="py-12 text-center text-muted-foreground">
                            No inquiries match your current search or status filter.
                          </td>
                        </tr>
                      ) : (
                        filteredSubmissions.map((sub) => (
                          <tr key={sub.id} className="hover:bg-[#F8FAF9] transition-colors">
                            <td className="px-5 py-4 align-top">
                              <div className="font-mono text-xs font-bold text-[#0E382C]">{sub.id}</div>
                              <div className="mt-1 text-[11px] text-muted-foreground">{sub.date}</div>
                            </td>

                            <td className="px-5 py-4 align-top">
                              <div className="font-bold text-[#0E382C] text-sm">{sub.name}</div>
                              <div className="mt-0.5 text-xs text-muted-foreground flex items-center gap-1">
                                <Mail className="h-3 w-3 text-gold" /> {sub.email}
                              </div>
                              <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                                <Phone className="h-3 w-3 text-gold" /> {sub.phone}
                              </div>
                            </td>

                            <td className="px-5 py-4 align-top max-w-xs">
                              <div className="font-semibold text-xs text-[#155D4E] bg-[#EEF4F0] px-2.5 py-1 rounded-md inline-block">
                                {sub.interest}
                              </div>
                              <p className="mt-1.5 text-xs text-muted-foreground line-clamp-1 italic">
                                "{sub.message}"
                              </p>
                            </td>

                            <td className="px-5 py-4 align-top">
                              <span
                                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold ${
                                  sub.status === "New"
                                    ? "bg-blue-100 text-blue-800"
                                    : sub.status === "Contacted"
                                    ? "bg-amber-100 text-amber-800"
                                    : sub.status === "In Progress"
                                    ? "bg-purple-100 text-purple-800"
                                    : "bg-emerald-100 text-emerald-800"
                                }`}
                              >
                                {sub.status}
                              </span>
                            </td>

                            <td className="px-5 py-4 align-top text-right">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => setSelectedSubmission(sub)}
                                  className="inline-flex items-center gap-1 rounded-lg bg-[#0E382C] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#155D4E] transition shadow-2xs"
                                >
                                  <Eye className="h-3.5 w-3.5" />
                                  View
                                </button>
                                <button
                                  onClick={() => deleteSubmission(sub.id)}
                                  className="rounded-lg p-1.5 text-muted-foreground hover:bg-red-50 hover:text-red-600 transition"
                                  title="Delete Inquiry"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 2: PAYMENTS & TRANSACTIONS DISPLAY                    */}
          {/* ========================================================= */}
          {activeTab === "payments" && (
            <div className="mt-6 space-y-6">
              {/* Filter Controls Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-2xl bg-white p-4 border border-forest/10 shadow-2xs">
                {/* Search Bar for Mobile */}
                <div className="relative md:hidden w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={paymentSearch}
                    onChange={(e) => setPaymentSearch(e.target.value)}
                    placeholder="Search transactions..."
                    className="w-full rounded-xl border border-border bg-muted/40 pl-9 pr-4 py-2 text-xs"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Filter className="h-3.5 w-3.5" /> Gateway:
                  </span>
                  <select
                    value={paymentMethodFilter}
                    onChange={(e) => setPaymentMethodFilter(e.target.value)}
                    className="rounded-lg border border-border bg-white px-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-gold"
                  >
                    <option value="All">All Methods</option>
                    <option value="UPI">UPI / GPay</option>
                    <option value="Razorpay">Razorpay</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Stripe">Stripe</option>
                    <option value="NetBanking">NetBanking</option>
                  </select>

                  <span className="text-muted-foreground ml-2">Status:</span>
                  <select
                    value={paymentStatusFilter}
                    onChange={(e) => setPaymentStatusFilter(e.target.value)}
                    className="rounded-lg border border-border bg-white px-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-gold"
                  >
                    <option value="All">All Statuses</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                    <option value="Refunded">Refunded</option>
                  </select>
                </div>

                <div className="text-xs text-muted-foreground font-medium">
                  Showing <strong className="text-[#0E382C]">{filteredPayments.length}</strong> of{" "}
                  {payments.length} transactions
                </div>
              </div>

              {/* Payments Table */}
              <div className="overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#EEF4F0] font-display text-xs font-bold uppercase tracking-wider text-[#0E382C]">
                      <tr>
                        <th className="px-5 py-4">TXN ID &amp; Date</th>
                        <th className="px-5 py-4">Customer Details</th>
                        <th className="px-5 py-4">Program Purchased</th>
                        <th className="px-5 py-4">Amount</th>
                        <th className="px-5 py-4">Gateway</th>
                        <th className="px-5 py-4">Status</th>
                        <th className="px-5 py-4 text-right">Receipt</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      {filteredPayments.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-12 text-center text-muted-foreground">
                            No payment transactions match your search or filter criteria.
                          </td>
                        </tr>
                      ) : (
                        filteredPayments.map((pay) => (
                          <tr key={pay.id} className="hover:bg-[#F8FAF9] transition-colors">
                            <td className="px-5 py-4 align-top">
                              <div className="font-mono text-xs font-bold text-[#0E382C]">{pay.id}</div>
                              <div className="mt-1 text-[11px] text-muted-foreground">{pay.date}</div>
                            </td>

                            <td className="px-5 py-4 align-top">
                              <div className="font-bold text-[#0E382C]">{pay.customerName}</div>
                              <div className="text-xs text-muted-foreground mt-0.5">{pay.email}</div>
                            </td>

                            <td className="px-5 py-4 align-top max-w-xs">
                              <div className="font-semibold text-xs text-foreground line-clamp-1">
                                {pay.program}
                              </div>
                            </td>

                            <td className="px-5 py-4 align-top font-display text-sm font-bold text-[#0E382C]">
                              ₹{pay.amount.toLocaleString("en-IN")}
                            </td>

                            <td className="px-5 py-4 align-top">
                              <span className="inline-block rounded-md bg-muted/60 px-2.5 py-1 text-[11px] font-semibold text-foreground">
                                {pay.method}
                              </span>
                            </td>

                            <td className="px-5 py-4 align-top">
                              <span
                                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold ${
                                  pay.status === "Completed"
                                    ? "bg-emerald-100 text-emerald-800"
                                    : pay.status === "Pending"
                                    ? "bg-amber-100 text-amber-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                {pay.status}
                              </span>
                            </td>

                            <td className="px-5 py-4 align-top text-right">
                              <button
                                onClick={() => setSelectedPayment(pay)}
                                className="inline-flex items-center gap-1 rounded-lg border border-forest/20 bg-white px-3 py-1.5 text-xs font-semibold text-[#0E382C] hover:bg-[#EEF4F0] transition shadow-2xs"
                              >
                                <FileText className="h-3.5 w-3.5 text-gold" />
                                Receipt
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* ========================================================= */}
      {/* MODAL 1: VIEW FULL INQUIRY DETAILS                        */}
      {/* ========================================================= */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-border">
            <button
              onClick={() => setSelectedSubmission(null)}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground/80 hover:bg-destructive hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-white bg-[#0E382C] px-3 py-1 rounded-full">
                {selectedSubmission.id}
              </span>
              <span className="text-xs text-muted-foreground">{selectedSubmission.date}</span>
            </div>

            <h2 className="mt-4 font-display text-2xl font-bold text-[#0E382C]">
              Inquiry from {selectedSubmission.name}
            </h2>

            {/* Client Info Grid */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-2xl bg-[#F5F8F6] p-4 text-xs font-semibold text-[#0E382C]">
              <div>
                <span className="text-muted-foreground block text-[11px]">Email:</span>
                <a href={`mailto:${selectedSubmission.email}`} className="text-[#155D4E] hover:underline">
                  {selectedSubmission.email}
                </a>
              </div>
              <div>
                <span className="text-muted-foreground block text-[11px]">Phone:</span>
                <a href={`tel:${selectedSubmission.phone}`} className="text-[#155D4E] hover:underline">
                  {selectedSubmission.phone}
                </a>
              </div>
              <div className="sm:col-span-2 border-t border-border/50 pt-2">
                <span className="text-muted-foreground block text-[11px]">Program Interested In:</span>
                <span className="text-[#0E382C] font-bold text-sm">
                  {selectedSubmission.interest}
                </span>
              </div>
            </div>

            {/* Message Body */}
            <div className="mt-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                Client Message Content:
              </label>
              <div className="rounded-2xl border border-border/70 p-4 text-sm leading-relaxed text-foreground/90 bg-white">
                "{selectedSubmission.message}"
              </div>
            </div>

            {/* Status Changer */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0E382C]">
                <span>Change Status:</span>
                <select
                  value={selectedSubmission.status}
                  onChange={(e) =>
                    updateSubmissionStatus(
                      selectedSubmission.id,
                      e.target.value as ContactSubmission["status"]
                    )
                  }
                  className="rounded-lg border border-border bg-white px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-gold"
                >
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/${selectedSubmission.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700 transition"
                >
                  WhatsApp Reply
                </a>
                <a
                  href={`mailto:${selectedSubmission.email}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#0E382C] px-4 py-2 text-xs font-bold text-white hover:bg-[#155D4E] transition"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 2: VIEW PAYMENT RECEIPT                              */}
      {/* ========================================================= */}
      {selectedPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-border">
            <button
              onClick={() => setSelectedPayment(null)}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground/80 hover:bg-destructive hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center border-b border-border pb-6">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-[#0E382C]">
                Payment Receipt
              </h3>
              <div className="text-xs font-mono font-semibold text-muted-foreground mt-1">
                {selectedPayment.id}
              </div>
            </div>

            {/* Receipt Items */}
            <div className="mt-6 space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="text-muted-foreground">Date &amp; Time:</span>
                <span className="font-semibold text-foreground">{selectedPayment.date}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="text-muted-foreground">Customer Name:</span>
                <span className="font-bold text-[#0E382C]">{selectedPayment.customerName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="text-muted-foreground">Email:</span>
                <span className="font-semibold text-foreground">{selectedPayment.email}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="text-muted-foreground">Program Enrolled:</span>
                <span className="font-bold text-[#155D4E] text-right max-w-[240px]">
                  {selectedPayment.program}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="text-muted-foreground">Payment Method:</span>
                <span className="font-semibold text-foreground">{selectedPayment.method}</span>
              </div>
              <div className="flex justify-between py-2 border-b-2 border-[#0E382C] text-sm">
                <span className="font-bold text-[#0E382C]">Total Amount Paid:</span>
                <span className="font-display font-extrabold text-[#0E382C]">
                  ₹{selectedPayment.amount.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedPayment(null)}
                className="rounded-full border border-border px-5 py-2 text-xs font-semibold text-foreground hover:bg-muted"
              >
                Close
              </button>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 rounded-full bg-[#0E382C] px-5 py-2 text-xs font-bold text-white hover:bg-[#155D4E]"
              >
                Print Receipt
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
