import { useState } from "react";
import { Link } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Star,
  TrendingUp,
  Users,
  Target,
  Building2,
  BarChart3,
  Zap,
  Shield,
  Award,
  ChevronRight,
  Quote,
  Play,
} from "lucide-react";

const stats = [
  { value: "2,400+", label: "Qualified Leads Generated" },
  { value: "₹850 Cr+", label: "Worth of Property Sales" },
  { value: "120+", label: "Builder Projects Served" },
  { value: "92%", label: "Client Retention Rate" },
];

const services = [
  {
    icon: Target,
    title: "Real Estate Lead Generation",
    description: "Precision-targeted campaigns that deliver property buyers and investors directly to your sales team.",
    img: "/images/case-study-1.png",
  },
  {
    icon: BarChart3,
    title: "Meta Ads Management",
    description: "High-converting Facebook & Instagram campaigns crafted specifically for real estate projects.",
    img: "/images/service-meta-ads.png",
  },
  {
    icon: TrendingUp,
    title: "Google Ads Management",
    description: "Search and display ads that capture buyers actively looking for properties like yours.",
    img: "/images/service-google-ads.png",
  },
  {
    icon: Zap,
    title: "Landing Page Design",
    description: "Conversion-optimized landing pages that turn website visitors into genuine property inquiries.",
    img: "/images/service-landing-page.png",
  },
  {
    icon: Shield,
    title: "CRM Setup & Integration",
    description: "Complete CRM configuration so your team never misses a lead or a follow-up opportunity.",
    img: "/images/service-crm.png",
  },
  {
    icon: Building2,
    title: "Full Marketing Strategy",
    description: "End-to-end digital marketing blueprint tailored specifically for your real estate project.",
    img: "/images/case-study-3.png",
  },
];

const process = [
  {
    step: "01",
    title: "Project Discovery",
    description: "We deep dive into your project, target audience, and competitive landscape to build a bespoke strategy.",
  },
  {
    step: "02",
    title: "Campaign Launch",
    description: "Our team builds and launches precision-targeted campaigns across the right channels within 7 days.",
  },
  {
    step: "03",
    title: "Lead Delivery & Growth",
    description: "Qualified leads flow into your CRM daily. We optimize continuously to reduce cost-per-lead.",
  },
];

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Director, Prestige Spaces",
    content: "Realtical delivered 340 qualified leads in just 45 days for our Pune project. Our sales team was overwhelmed — in the best way. The ROI was exceptional.",
    rating: 5,
    avatar: "RS",
  },
  {
    name: "Priya Malhotra",
    role: "Marketing Head, Skyline Developers",
    content: "We've worked with multiple agencies, but Realtical truly understands real estate. Their Meta ads campaign reduced our cost-per-lead by 60%. Outstanding results.",
    rating: 5,
    avatar: "PM",
  },
  {
    name: "Arun Kapoor",
    role: "CEO, Greenfield Realty",
    content: "The landing pages Realtical built convert at 18% — three times industry average. Their CRM setup alone saved us from losing dozens of hot leads daily.",
    rating: 5,
    avatar: "AK",
  },
];

const blogPosts = [
  {
    category: "Lead Generation",
    title: "How Top Builders Generate 500+ Leads/Month Using Meta Ads",
    excerpt: "Discover the exact campaign structure, targeting approach, and creative strategy that consistently delivers qualified property buyers.",
    readTime: "6 min read",
    img: "/images/service-meta-ads.png",
  },
  {
    category: "Strategy",
    title: "The Real Estate Marketing Funnel That Actually Converts",
    excerpt: "Most agencies build campaigns. We build systems. Here's the 5-stage funnel we use for every builder client.",
    readTime: "8 min read",
    img: "/images/blog-featured.png",
  },
  {
    category: "CRM",
    title: "Why 70% of Real Estate Leads Get Wasted (And How to Fix It)",
    excerpt: "A leaky CRM costs builders crores in lost sales. Here's the exact setup we implement for all our clients.",
    readTime: "5 min read",
    img: "/images/service-crm.png",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const leadMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; phone: string }) => {
      const res = await apiRequest("POST", "/api/leads", { ...data, source: "hero-form" });
      return res.json();
    },
    onSuccess: () => {
      toast({ title: "Request Received!", description: "Our team will reach out within 24 hours." });
      setEmail("");
    },
  });

  return (
    <div className="min-h-screen">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050d1e]">
        {/* Background image — very subtle, right-side reveal */}
        <img
          src="/images/hero-bg.png"
          alt="Mumbai skyline"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.18]"
        />
        {/* Left-heavy dark overlay — content side stays pure dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d1e] via-[#050d1e]/92 to-[#050d1e]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d1e] via-transparent to-[#050d1e]/70" />
        {/* Gold radial glow — bottom left accent */}
        <div
          className="absolute bottom-0 left-0 w-[700px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(196,146,31,0.14) 0%, transparent 65%)" }}
        />
        {/* Subtle architectural grid */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "80px 80px" }}
        />

        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center">

            {/* ── LEFT: Content ── */}
            <div>
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="h-px w-8 bg-[#e8b84b]" />
                <span className="text-[#e8b84b] text-[11px] font-bold uppercase tracking-[0.28em]">India's Premier Real Estate Marketing Agency</span>
                <div className="h-px w-8 bg-[#e8b84b]/40" />
              </motion.div>

              {/* Heading — line by line animation */}
              <h1 className="font-bold font-serif leading-[1.04] mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="block text-white text-4xl sm:text-5xl lg:text-[4.5rem]"
                >
                  Fill Your Property
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="block text-white text-4xl sm:text-5xl lg:text-[4.5rem]"
                >
                  Pipeline with
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.45 }}
                  className="block text-[#e8b84b] italic text-4xl sm:text-5xl lg:text-[4.5rem] drop-shadow-[0_4px_24px_rgba(232,184,75,0.45)]"
                >
                  Qualified Buyers.
                </motion.span>
              </h1>

              {/* Gold accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                style={{ originX: 0 }}
                className="h-[2px] w-20 bg-gradient-to-r from-[#e8b84b] to-[#e8b84b]/20 mb-8 rounded-full"
              />

              {/* Animated subtitle */}
              <TextGenerateEffect
                words="We help real estate builders generate high-quality leads through precision-targeted digital marketing — Meta Ads, Google Ads, landing pages, and CRM automation."
                className="max-w-xl mb-10"
                textClassName="text-white/85 text-base sm:text-lg leading-relaxed"
                duration={0.35}
              />

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/lead-capture">
                  <Button
                    data-testid="button-hero-strategy-call"
                    size="lg"
                    className="gold-gradient text-white border-0 text-sm font-bold px-8 py-6 shadow-2xl shadow-[#e8b84b]/20 hover:opacity-90 hover:scale-105 transition-all tracking-wide"
                  >
                    Get Free Strategy Call
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button
                    data-testid="button-hero-case-studies"
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border border-white/25 hover:bg-white/8 hover:border-white/40 text-sm font-semibold px-8 py-6 backdrop-blur-sm tracking-wide transition-all"
                  >
                    <Play size={13} className="mr-2 fill-white" />
                    See Our Results
                  </Button>
                </Link>
              </motion.div>

              {/* Stats row — desktop bottom */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.7 }}
                className="hidden lg:flex gap-8 mt-14 pt-8 border-t border-white/10"
              >
                {stats.map(({ value, label }) => (
                  <div key={label} data-testid={`stat-${label.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}>
                    <div className="text-2xl font-bold text-[#e8b84b] font-serif leading-none mb-1">{value}</div>
                    <div className="text-white/60 text-xs tracking-wide">{label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT: Floating stats card ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Gold accent dot */}
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#e8b84b] shadow-lg shadow-[#e8b84b]/40" />
                <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e8b84b]" />
                    <span className="text-white/45 text-[11px] font-bold uppercase tracking-[0.2em]">Live Performance</span>
                  </div>
                  <div className="space-y-5">
                    {stats.map(({ value, label }, i) => (
                      <div key={label} className="flex items-center justify-between pb-5 border-b border-white/6 last:border-0 last:pb-0">
                        <span className="text-white/65 text-sm">{label}</span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 + i * 0.15 }}
                          className="text-[#e8b84b] font-bold font-serif text-xl"
                        >
                          {value}
                        </motion.span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 bg-[#e8b84b]/10 rounded-xl px-4 py-3">
                    <div className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                    <span className="text-white/70 text-xs">Updated in real-time</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile stats grid */}
          <div className="lg:hidden grid grid-cols-2 gap-3 mt-10">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                data-testid={`stat-${label.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                className="bg-white/5 border border-white/10 rounded-2xl p-4"
              >
                <div className="text-xl font-bold text-[#e8b84b] font-serif mb-1">{value}</div>
                <div className="text-white/65 text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
            <div className="w-0.5 h-1.5 bg-[#e8b84b]/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* ─── TRUSTED BY ────────────────────────────────────────── */}
      <section className="bg-[#0a1628] border-y border-white/8 py-6">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {["Prestige Spaces", "Skyline Developers", "Greenfield Realty", "Nexus Housing", "Pinnacle Group", "Urban Nest"].map((name) => (
              <span key={name} className="text-white text-sm font-bold uppercase tracking-widest">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ──────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#0d1b38] mt-3 mb-4">
              Everything You Need to{" "}
              <span className="text-primary italic">Dominate</span> Your Market
            </h2>
            <p className="text-muted-foreground text-lg">
              A complete digital marketing engine built exclusively for real estate builders and developers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description, img }) => (
              <div
                key={title}
                data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, "-").slice(0, 30)}`}
                className="group rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="w-9 h-9 rounded-lg bg-[#e8b84b] flex items-center justify-center shadow-lg">
                      <Icon size={18} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold font-serif text-[#0d1b38] mb-2 group-hover:text-primary transition-colors">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                  <div className="mt-4 flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services">
              <Button
                data-testid="button-all-services"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8"
              >
                View All Services <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY REALTICAL ─────────────────────────────────────── */}
      <section className="section-padding overflow-hidden relative bg-[#050d1e]">
        {/* Subtle relevant background — aerial real estate, barely visible */}
        <img src="/images/about-hero.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.07] pointer-events-none" />
        {/* Gold radial accent — right side */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(196,146,31,0.1) 0%, transparent 65%)" }}
        />
        {/* Thin top border */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#e8b84b]/30 to-transparent" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

            {/* LEFT: Content */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-6 bg-[#e8b84b]" />
                <span className="text-[#e8b84b] text-[11px] font-bold uppercase tracking-[0.25em]">Why Realtical</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white leading-tight mb-5">
                We Don't Just Run Ads.{" "}
                <span className="text-[#e8b84b] italic">We Build Lead Machines.</span>
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#e8b84b] to-transparent mb-6 rounded-full" />
              <p className="text-white/85 text-lg leading-relaxed mb-8">
                Generic marketing agencies don't understand real estate. We do. Every campaign we run is built on 5+ years of real estate-specific data, buyer psychology, and what actually converts in your market.
              </p>

              <div className="space-y-3">
                {[
                  "Real estate-exclusive agency — no distractions",
                  "Dedicated account manager per project",
                  "Transparent weekly reporting & dashboards",
                  "Lead quality guarantee — or we optimize for free",
                  "Full CRM integration from day one",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#e8b84b] flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-[#e8b84b]/20">
                      <Check size={11} className="text-[#050d1e] font-bold" />
                    </div>
                    <span className="text-white/90 text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/about">
                  <Button className="gold-gradient text-white border-0 font-semibold px-7 shadow-lg shadow-[#e8b84b]/20 hover:opacity-90 hover:scale-105 transition-all">
                    About Realtical <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </div>

            {/* RIGHT: Premium stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "7 Days", label: "Campaign Go-Live Time", icon: Zap },
                { value: "₹180", label: "Average Cost Per Lead", icon: TrendingUp },
                { value: "18%", label: "Landing Page Conv. Rate", icon: Target },
                { value: "45 Days", label: "Average ROI Breakeven", icon: BarChart3 },
              ].map(({ value, label, icon: Icon }, i) => (
                <div
                  key={label}
                  className={`relative rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02] group ${
                    i % 2 === 0
                      ? "bg-[#e8b84b]/8 border-[#e8b84b]/25 hover:border-[#e8b84b]/50"
                      : "bg-white/4 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#e8b84b]/15 flex items-center justify-center mb-4">
                    <Icon size={16} className="text-[#e8b84b]" />
                  </div>
                  <div className="text-3xl font-bold text-[#e8b84b] font-serif mb-1.5 leading-none">{value}</div>
                  <div className="text-white/70 text-sm leading-snug">{label}</div>
                  {i % 2 === 0 && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#e8b84b]/60 via-[#e8b84b]/20 to-transparent rounded-b-2xl" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Thin bottom border */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* ─── HOW WE WORK ───────────────────────────────────────── */}
      <section className="section-padding bg-gray-50/70">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">How We Work</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#0d1b38] mt-3 mb-4">
              From Onboarding to{" "}
              <span className="text-primary italic">Results in 7 Days</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[33%] right-[33%] h-px bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20" />
            {process.map(({ step, title, description }) => (
              <div key={step} className="relative text-center">
                <div className="w-20 h-20 rounded-2xl gold-gradient flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25">
                  <span className="text-white text-2xl font-bold font-serif">{step}</span>
                </div>
                <h3 className="text-xl font-bold font-serif text-[#0d1b38] mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ──────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Client Testimonials</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#0d1b38] mt-3 mb-4">
              Trusted by India's{" "}
              <span className="text-primary italic">Leading Builders</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, content, rating, avatar }) => (
              <div
                key={name}
                data-testid={`card-testimonial-${name.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-gray-50 rounded-2xl p-7 border border-border hover:shadow-xl transition-shadow relative group"
              >
                <Quote size={36} className="text-primary/12 absolute top-5 right-5 group-hover:text-primary/20 transition-colors" />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-[#e8b84b] text-[#e8b84b]" />
                  ))}
                </div>
                <p className="text-foreground/72 text-sm leading-relaxed mb-6 italic">{content}</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full gold-gradient flex items-center justify-center text-white text-sm font-bold shadow-md">
                    {avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#0d1b38]">{name}</div>
                    <div className="text-muted-foreground text-xs">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOG PREVIEW ──────────────────────────────────────── */}
      <section className="section-padding bg-gray-50/70">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-primary text-sm font-bold uppercase tracking-widest">Insights</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0d1b38] mt-2">
                Real Estate Marketing <span className="text-primary italic">Insights</span>
              </h2>
            </div>
            <Link href="/blog">
              <Button
                data-testid="button-view-all-blog"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white shrink-0 font-semibold"
              >
                View All Posts <ArrowRight className="ml-2" size={14} />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map(({ category, title, excerpt, readTime, img }) => (
              <Link key={title} href="/blog">
                <div
                  data-testid={`card-blog-${title.toLowerCase().replace(/\s+/g, "-").slice(0, 30)}`}
                  className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group cursor-pointer h-full"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/65 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 text-[#e8b84b] text-xs font-bold uppercase tracking-widest px-3 py-1 bg-[#0a1628]/70 backdrop-blur-sm rounded-full border border-[#e8b84b]/40">
                      {category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold font-serif text-[#0d1b38] text-base mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">{title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{excerpt}</p>
                    <div className="flex items-center gap-1 text-primary text-sm font-semibold">
                      Read more <ChevronRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────── */}
      <section className="relative section-padding overflow-hidden">
        <img
          src="/images/about-hero.png"
          alt="Real estate development"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#060e1f]/92" />
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `radial-gradient(circle at 50% 50%, rgba(196,146,31,0.6) 0%, transparent 65%)` }}
        />
        <div className="container-custom relative z-10 text-center">
          <span className="text-[#e8b84b] text-sm font-bold uppercase tracking-widest">Get Started Today</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white mt-4 mb-5 max-w-3xl mx-auto">
            Ready to Fill Your Sales Pipeline with{" "}
            <span className="text-[#e8b84b] italic">Qualified Leads?</span>
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
            Book a free 30-minute strategy call. We'll analyze your project and show you exactly how many leads we can generate.
          </p>

          <div className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl p-8 max-w-xl mx-auto">
            <p className="text-[#e8b84b]/90 text-sm font-semibold mb-5">Enter your email to get started</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                data-testid="input-cta-email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 flex-1"
              />
              <Link href="/lead-capture">
                <Button
                  data-testid="button-cta-book"
                  className="gold-gradient text-white border-0 font-semibold whitespace-nowrap w-full sm:w-auto"
                >
                  Book Strategy Call
                </Button>
              </Link>
            </div>
            <p className="text-white/60 text-xs mt-4">No credit card required. Free 30-minute consultation.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
