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
  Phone,
  BarChart3,
  Zap,
  Shield,
  Award,
  ChevronRight,
  Quote,
} from "lucide-react";

const stats = [
  { value: "2,400+", label: "Qualified Leads Generated" },
  { value: "₹850 Cr+", label: "Worth of Property Sales Enabled" },
  { value: "120+", label: "Builder Projects Served" },
  { value: "92%", label: "Client Retention Rate" },
];

const services = [
  {
    icon: Target,
    title: "Real Estate Lead Generation",
    description: "Precision-targeted campaigns that deliver property buyers and investors directly to your sales team.",
  },
  {
    icon: BarChart3,
    title: "Meta Ads Management",
    description: "High-converting Facebook and Instagram ad campaigns crafted specifically for real estate projects.",
  },
  {
    icon: TrendingUp,
    title: "Google Ads Management",
    description: "Search and display ads that capture buyers actively looking for properties like yours.",
  },
  {
    icon: Zap,
    title: "Landing Page Design",
    description: "Conversion-optimized landing pages that turn website visitors into genuine property inquiries.",
  },
  {
    icon: Shield,
    title: "CRM Setup & Integration",
    description: "Complete CRM configuration so your team never misses a lead or a follow-up opportunity.",
  },
  {
    icon: Building2,
    title: "Full Marketing Strategy",
    description: "End-to-end digital marketing blueprint tailored specifically for your real estate project.",
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
    href: "/blog",
  },
  {
    category: "Strategy",
    title: "The Real Estate Marketing Funnel That Actually Converts",
    excerpt: "Most agencies build campaigns. We build systems. Here's the 5-stage funnel we use for every builder client.",
    readTime: "8 min read",
    href: "/blog",
  },
  {
    category: "CRM",
    title: "Why 70% of Real Estate Leads Get Wasted (And How to Fix It)",
    excerpt: "A leaky CRM costs builders crores in lost sales. Here's the exact setup we implement for all our clients.",
    readTime: "5 min read",
    href: "/blog",
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
      toast({
        title: "Request Received!",
        description: "Our team will reach out within 24 hours.",
      });
      setEmail("");
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again or WhatsApp us directly.",
      });
    },
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#060e1f]/95 via-[#0d1b38]/85 to-[#0a1628]/90" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 60%, rgba(196,146,31,0.3) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(196,146,31,0.15) 0%, transparent 50%)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#e8b84b]/30 text-[#e8b84b] text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full mb-8">
            <Award size={12} />
            India's Premium Real Estate Marketing Agency
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-serif text-white leading-tight mb-6 max-w-5xl mx-auto">
            Fill Your Property Pipeline with{" "}
            <span className="text-[#e8b84b]">Qualified Buyers</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
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
                See Our Results
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                data-testid={`stat-${label.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-4 sm:p-5"
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#e8b84b] font-serif mb-1">{value}</div>
                <div className="text-white/60 text-xs sm:text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#0d1b38] mt-3 mb-4">
              Everything You Need to{" "}
              <span className="text-primary">Dominate</span> Your Market
            </h2>
            <p className="text-muted-foreground text-lg">
              A complete digital marketing engine built exclusively for real estate builders and developers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, "-").slice(0, 30)}`}
                className="group p-7 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon size={22} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold font-serif text-[#0d1b38] mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                <div className="mt-5 flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ChevronRight size={14} />
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

      {/* Why Realtical */}
      <section className="section-padding bg-[#0a1628] text-white overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 80% 20%, rgba(196,146,31,0.4) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(196,146,31,0.2) 0%, transparent 50%)`,
          }}
        />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-[#e8b84b] text-sm font-bold uppercase tracking-widest">Why Realtical</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white mt-3 mb-6">
                We Don't Just Run Ads.{" "}
                <span className="text-[#e8b84b]">We Build Lead Machines.</span>
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-8">
                Generic marketing agencies don't understand real estate. We do. Every campaign we run is built on 5+ years of real estate-specific data, buyer psychology, and what actually converts in your market.
              </p>

              <div className="space-y-4">
                {[
                  "Real estate-exclusive agency — no distractions",
                  "Dedicated account manager per project",
                  "Transparent weekly reporting & dashboards",
                  "Lead quality guarantee — or we optimize for free",
                  "Full CRM integration from day one",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#e8b84b] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-[#0a1628]" />
                    </div>
                    <span className="text-white/80 text-sm">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/about">
                  <Button
                    data-testid="button-about-realtical"
                    className="gold-gradient text-white border-0 font-semibold px-6"
                  >
                    About Realtical <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "7 Days", label: "Campaign Go-Live Time" },
                { value: "₹180", label: "Average Cost Per Lead" },
                { value: "18%", label: "Average Landing Page CVR" },
                { value: "45 Days", label: "Average ROI Breakeven" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white/8 border border-white/10 rounded-2xl p-6 hover:border-[#e8b84b]/40 hover:bg-white/12 transition-all"
                >
                  <div className="text-3xl font-bold text-[#e8b84b] font-serif mb-2">{value}</div>
                  <div className="text-white/60 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50/70">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">How We Work</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#0d1b38] mt-3 mb-4">
              From Onboarding to{" "}
              <span className="text-primary">Results in 7 Days</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[33%] right-[33%] h-0.5 bg-gradient-to-r from-primary/30 via-primary to-primary/30" />

            {process.map(({ step, title, description }) => (
              <div key={step} className="relative text-center">
                <div className="w-20 h-20 rounded-2xl gold-gradient flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold font-serif">{step}</span>
                </div>
                <h3 className="text-xl font-bold font-serif text-[#0d1b38] mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Client Testimonials</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#0d1b38] mt-3 mb-4">
              Trusted by India's{" "}
              <span className="text-primary">Leading Builders</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, content, rating, avatar }) => (
              <div
                key={name}
                data-testid={`card-testimonial-${name.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-gray-50 rounded-2xl p-7 border border-border hover:shadow-lg transition-shadow relative"
              >
                <Quote size={32} className="text-primary/20 absolute top-6 right-6" />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-[#e8b84b] text-[#e8b84b]" />
                  ))}
                </div>
                <p className="text-foreground/75 text-sm leading-relaxed mb-6">{content}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-white text-sm font-bold">
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

      {/* Blog Preview */}
      <section className="section-padding bg-gray-50/70">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-primary text-sm font-bold uppercase tracking-widest">Insights</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0d1b38] mt-2">
                Real Estate Marketing{" "}
                <span className="text-primary">Insights</span>
              </h2>
            </div>
            <Link href="/blog">
              <Button
                data-testid="button-view-all-blog"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white shrink-0"
              >
                View All Posts <ArrowRight className="ml-2" size={14} />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map(({ category, title, excerpt, readTime, href }) => (
              <Link key={title} href={href}>
                <div
                  data-testid={`card-blog-${title.toLowerCase().replace(/\s+/g, "-").slice(0, 30)}`}
                  className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group cursor-pointer h-full"
                >
                  <div className="h-40 bg-gradient-to-br from-[#0d1b38] to-[#152242] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, rgba(196,146,31,0.4) 0%, transparent 70%)` }} />
                    <span className="text-[#e8b84b] text-xs font-bold uppercase tracking-widest px-4 py-2 border border-[#e8b84b]/40 rounded-full relative z-10">
                      {category}
                    </span>
                  </div>
                  <div className="p-6">
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

      {/* CTA Section */}
      <section className="section-padding bg-[#0a1628] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, rgba(196,146,31,0.5) 0%, transparent 70%)` }} />
        <div className="container-custom relative z-10 text-center">
          <span className="text-[#e8b84b] text-sm font-bold uppercase tracking-widest">Get Started Today</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white mt-4 mb-5 max-w-3xl mx-auto">
            Ready to Fill Your Sales Pipeline with{" "}
            <span className="text-[#e8b84b]">Qualified Leads?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Book a free 30-minute strategy call with our team. We'll analyze your project and show you exactly how many leads we can generate.
          </p>

          <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-8 max-w-xl mx-auto">
            <p className="text-white/80 text-sm font-semibold mb-5">Enter your email to get started</p>
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
            <p className="text-white/35 text-xs mt-4">
              No credit card required. Free 30-minute consultation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
