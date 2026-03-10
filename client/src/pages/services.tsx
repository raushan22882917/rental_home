import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Target, BarChart3, TrendingUp, Zap, Shield, Building2, Check,
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Real Estate Lead Generation",
    tagline: "More Site Visits. More Bookings.",
    description:
      "Our flagship service. We build end-to-end lead generation systems that identify the right buyers for your specific project — whether it's affordable housing, luxury apartments, or plotted development.",
    features: [
      "Hyper-targeted audience profiling",
      "Multi-channel campaign setup",
      "Lead scoring and qualification",
      "Dedicated calling & WhatsApp follow-up setup",
      "Real-time lead tracking dashboard",
    ],
    results: "Avg. 200–500 qualified leads/month",
    img: "/images/case-study-1.png",
  },
  {
    icon: BarChart3,
    title: "Meta Ads Management",
    tagline: "Facebook & Instagram Campaigns That Convert",
    description:
      "We design, launch, and optimize Meta ad campaigns built exclusively for real estate. From awareness to site visit bookings — we manage the full funnel on India's most-used social platforms.",
    features: [
      "Campaign strategy & creative brief",
      "Ad copywriting & design",
      "A/B testing & optimization",
      "Retargeting campaigns",
      "Weekly performance reports",
    ],
    results: "Avg. ₹180 cost per qualified lead",
    img: "/images/service-meta-ads.png",
  },
  {
    icon: TrendingUp,
    title: "Google Ads Management",
    tagline: "Capture High-Intent Buyers Searching Now",
    description:
      "Buyers searching 'flats in Mumbai' or '2BHK in Pune' are your warmest prospects. We capture them with precision-targeted Search and Display campaigns, converting search intent into site visits.",
    features: [
      "Keyword research & competitive analysis",
      "Search, Display & YouTube campaigns",
      "Landing page integration",
      "Conversion tracking setup",
      "Monthly budget optimization",
    ],
    results: "Avg. 25% lower cost-per-click vs benchmarks",
    img: "/images/service-google-ads.png",
  },
  {
    icon: Zap,
    title: "Landing Page Design",
    tagline: "Pages Built to Convert Visitors into Inquiries",
    description:
      "Your landing page is your digital showroom. We build high-converting pages that showcase your project, build trust, and make it effortless for buyers to reach your sales team.",
    features: [
      "Custom design per project",
      "Mobile-first responsive layout",
      "Fast loading (<2 seconds)",
      "A/B testing ready",
      "CRM form integration",
    ],
    results: "Avg. 18% conversion rate (3x industry avg.)",
    img: "/images/service-landing-page.png",
  },
  {
    icon: Shield,
    title: "CRM Setup & Integration",
    tagline: "Never Lose a Lead to Poor Follow-Up",
    description:
      "A lead without a follow-up system is money wasted. We set up your CRM, connect it to your campaigns, and automate lead assignment, follow-up reminders, and status tracking for your sales team.",
    features: [
      "CRM platform setup (Zoho, HubSpot, LeadSquared)",
      "Lead source tracking",
      "Automated follow-up sequences",
      "Sales team training",
      "Monthly CRM health audit",
    ],
    results: "Avg. 40% improvement in lead-to-visit conversion",
    img: "/images/service-crm.png",
  },
  {
    icon: Building2,
    title: "Full Marketing Strategy",
    tagline: "Complete Digital Blueprint for Your Project",
    description:
      "For developers who want a comprehensive marketing partner. We handle everything — strategy, creative, media buying, lead management, and reporting — so your sales team can focus on selling.",
    features: [
      "Project launch strategy",
      "Complete media planning",
      "Creative content production",
      "Multi-channel campaign management",
      "Bi-weekly strategy reviews",
    ],
    results: "Complete outsourced marketing for builders",
    img: "/images/case-study-3.png",
  },
];

const packages = [
  {
    name: "Starter",
    price: "₹35,000",
    period: "/month",
    description: "Perfect for first-time builders or a single project launch.",
    features: [
      "1 campaign channel (Meta or Google)",
      "1 landing page",
      "Lead tracking dashboard",
      "Fortnightly reports",
      "Email support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹65,000",
    period: "/month",
    description: "Our most popular plan for growing builders.",
    features: [
      "Meta + Google Ads",
      "2 optimized landing pages",
      "CRM integration",
      "Weekly reports & calls",
      "Dedicated account manager",
      "WhatsApp bot setup",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹1,20,000",
    period: "/month",
    description: "Full-service marketing for large-scale projects.",
    features: [
      "All Growth features",
      "Full marketing strategy",
      "Creative content production",
      "YouTube & Display campaigns",
      "CRM + sales automation",
      "Monthly strategy workshop",
    ],
    cta: "Book a Call",
    highlight: false,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">

      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <img
          src="/images/service-meta-ads.png"
          alt="Digital marketing services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060e1f] via-[#060e1f]/85 to-[#060e1f]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e1f]/70 via-transparent to-[#060e1f]/55" />
        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="max-w-full sm:max-w-[72%] lg:max-w-[55%]">
            <span className="text-[#e8b84b] text-sm font-bold uppercase tracking-widest">Our Services</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white mt-4 mb-5 leading-tight drop-shadow-lg">
              A Complete Marketing Engine for{" "}
              <span className="text-[#e8b84b] italic">Real Estate Builders</span>
            </h1>
            <p className="text-white/85 text-lg leading-relaxed">
              From lead generation to CRM automation — everything you need to build a predictable, scalable sales pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SERVICE DETAILS ────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom space-y-20">
          {services.map(({ icon: Icon, title, tagline, description, features, results, img }, i) => (
            <div
              key={title}
              data-testid={`card-service-detail-${title.toLowerCase().replace(/\s+/g, "-").slice(0, 30)}`}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Image */}
              <div className="relative group">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-72 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/8" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center shadow-xl shadow-primary/30">
                  <Icon size={26} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">{tagline}</span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0d1b38] mt-2 mb-4">{title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
                <ul className="space-y-2.5 mb-6">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <div className="w-5 h-5 rounded-full bg-primary/12 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
                  <TrendingUp size={14} />
                  {results}
                </div>
                <div>
                  <Link href="/lead-capture">
                    <Button
                      data-testid={`button-service-cta-${title.toLowerCase().replace(/\s+/g, "-").slice(0, 20)}`}
                      className="gold-gradient text-white border-0 font-semibold"
                    >
                      Get This Service <ArrowRight className="ml-2" size={14} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PRICING ────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50/70">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Pricing</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0d1b38] mt-3 mb-3">
              Transparent Pricing for <span className="text-primary italic">Every Stage</span>
            </h2>
            <p className="text-muted-foreground">All plans include a free onboarding session. No lock-in contracts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map(({ name, price, period, description, features, cta, highlight }) => (
              <div
                key={name}
                data-testid={`card-pricing-${name.toLowerCase()}`}
                className={`rounded-2xl p-7 border transition-all relative ${
                  highlight
                    ? "bg-[#0a1628] border-[#e8b84b]/40 text-white shadow-2xl scale-105 shadow-[#e8b84b]/10"
                    : "bg-white border-border hover:shadow-lg hover:border-primary/30"
                }`}
              >
                {highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 gold-gradient text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}
                <div className={`text-sm font-bold uppercase tracking-widest mb-2 ${highlight ? "text-[#e8b84b]" : "text-primary"}`}>
                  {name}
                </div>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-4xl font-bold font-serif ${highlight ? "text-white" : "text-[#0d1b38]"}`}>{price}</span>
                  <span className={`text-sm pb-1 ${highlight ? "text-white/50" : "text-muted-foreground"}`}>{period}</span>
                </div>
                <p className={`text-sm mb-6 ${highlight ? "text-white/55" : "text-muted-foreground"}`}>{description}</p>
                <ul className="space-y-2.5 mb-8">
                  {features.map((feature) => (
                    <li key={feature} className={`flex items-start gap-2 text-sm ${highlight ? "text-white/80" : "text-foreground/75"}`}>
                      <Check size={14} className={`shrink-0 mt-0.5 ${highlight ? "text-[#e8b84b]" : "text-primary"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/lead-capture">
                  <Button
                    data-testid={`button-pricing-${name.toLowerCase()}`}
                    className={`w-full font-semibold ${highlight ? "gold-gradient text-white border-0" : "border-primary text-primary hover:bg-primary hover:text-white"}`}
                    variant={highlight ? "default" : "outline"}
                  >
                    {cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-8">
            Need a custom plan?{" "}
            <Link href="/contact">
              <span className="text-primary font-semibold cursor-pointer hover:underline">Contact us</span>
            </Link>
            {" "}and we'll build a package for your project.
          </p>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────── */}
      <section className="relative section-padding overflow-hidden">
        <img src="/images/case-study-2.png" alt="Real estate project" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#060e1f]/92" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
            Not Sure Which Service is <span className="text-[#e8b84b] italic">Right for You?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
            Book a free 30-minute consultation and our team will recommend the right services for your project.
          </p>
          <Link href="/lead-capture">
            <Button
              data-testid="button-services-cta"
              size="lg"
              className="gold-gradient text-white border-0 font-semibold px-8"
            >
              Book Free Consultation <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
