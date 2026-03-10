import { useState } from "react";
import { Link } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-bg.png"
          alt="Mumbai skyline"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#060e1f]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e1f]/95 via-[#0a1628]/75 to-[#050d1e]/60" />
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `radial-gradient(ellipse at 30% 70%, rgba(196,146,31,0.35) 0%, transparent 50%), radial-gradient(ellipse at 75% 25%, rgba(196,146,31,0.15) 0%, transparent 45%)` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20">
          <div className="inline-flex items-center gap-2 bg-[#e8b84b]/20 backdrop-blur-sm border border-[#e8b84b]/50 text-[#e8b84b] text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full mb-8 shadow-lg">
            <Award size={12} />
            India's Premium Real Estate Marketing Agency
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-bold font-serif text-white leading-[1.1] mb-6 max-w-5xl mx-auto drop-shadow-lg">
            Fill Your Property Pipeline with{" "}
            <span className="text-[#e8b84b] italic">Qualified Buyers</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/88 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
            We help real estate builders generate high-quality leads through precision-targeted digital marketing — Meta Ads, Google Ads, landing pages, and CRM automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/lead-capture">
              <Button
                data-testid="button-hero-strategy-call"
                size="lg"
                className="gold-gradient text-white border-0 text-base font-semibold px-8 py-6 shadow-2xl hover:opacity-90 hover:scale-105 transition-all"
              >
                Get Free Strategy Call
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button
                data-testid="button-hero-case-studies"
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-base font-semibold px-8 py-6 backdrop-blur-sm"
              >
                <Play size={15} className="mr-2 fill-white" />
                See Our Results
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                data-testid={`stat-${label.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl p-4 sm:p-5 hover:border-[#e8b84b]/40 transition-all"
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#e8b84b] font-serif mb-1">{value}</div>
                <div className="text-white/55 text-xs sm:text-sm leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/25 flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/45 rounded-full" />
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
      <section className="section-padding overflow-hidden relative">
        <div className="absolute inset-0">
          <img src="/images/about-office.png" alt="Office" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a1628]/93" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-[#e8b84b] text-sm font-bold uppercase tracking-widest">Why Realtical</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white mt-3 mb-6">
                We Don't Just Run Ads.{" "}
                <span className="text-[#e8b84b] italic">We Build Lead Machines.</span>
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-8">
                Generic marketing agencies don't understand real estate. We do. Every campaign we run is built on 5+ years of real estate-specific data, buyer psychology, and what actually converts in your market.
              </p>

              <div className="space-y-3.5">
                {[
                  "Real estate-exclusive agency — no distractions",
                  "Dedicated account manager per project",
                  "Transparent weekly reporting & dashboards",
                  "Lead quality guarantee — or we optimize for free",
                  "Full CRM integration from day one",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#e8b84b] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-[#0a1628] font-bold" />
                    </div>
                    <span className="text-white/78 text-sm">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/about">
                  <Button className="gold-gradient text-white border-0 font-semibold px-6">
                    About Realtical <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "7 Days", label: "Campaign Go-Live Time" },
                { value: "₹180", label: "Average Cost Per Lead" },
                { value: "18%", label: "Landing Page Conv. Rate" },
                { value: "45 Days", label: "Average ROI Breakeven" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white/8 border border-white/10 rounded-2xl p-6 hover:border-[#e8b84b]/40 hover:bg-white/12 transition-all">
                  <div className="text-3xl font-bold text-[#e8b84b] font-serif mb-2">{value}</div>
                  <div className="text-white/60 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Book a free 30-minute strategy call. We'll analyze your project and show you exactly how many leads we can generate.
          </p>

          <div className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl p-8 max-w-xl mx-auto">
            <p className="text-white/75 text-sm font-semibold mb-5">Enter your email to get started</p>
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
            <p className="text-white/30 text-xs mt-4">No credit card required. Free 30-minute consultation.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
