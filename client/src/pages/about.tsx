import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Award, Building2, Check } from "lucide-react";

const team = [
  {
    name: "Arjun Mehta",
    role: "Founder & CEO",
    bio: "10+ years in real estate marketing. Formerly at PropTiger & Housing.com. Built lead generation systems for 50+ builders.",
    avatar: "AM",
    color: "from-[#0d1b38] to-[#1a2d5a]",
  },
  {
    name: "Sneha Patel",
    role: "Head of Digital Strategy",
    bio: "Ex-Google certified expert with 8 years in performance marketing. Managed ₹25Cr+ in annual ad spends.",
    avatar: "SP",
    color: "from-[#c4921f] to-[#e8b84b]",
  },
  {
    name: "Vikram Singh",
    role: "Head of Creative",
    bio: "Award-winning designer with 200+ landing pages built exclusively for real estate. Average CVR of 16%.",
    avatar: "VS",
    color: "from-[#152242] to-[#0d1b38]",
  },
  {
    name: "Riya Desai",
    role: "CRM & Automation Lead",
    bio: "HubSpot & Zoho certified expert. Implemented CRM systems for 80+ real estate projects across India.",
    avatar: "RD",
    color: "from-[#e8b84b] to-[#c4921f]",
  },
];

const values = [
  {
    icon: Target,
    title: "Results First",
    description: "We obsess over your ROI. Every decision we make is driven by data and tied to measurable outcomes.",
  },
  {
    icon: Building2,
    title: "Real Estate Exclusive",
    description: "We work only with builders and developers. This focus means deeper expertise and better results.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description: "Your dedicated account manager knows your project as well as you do. We're an extension of your team.",
  },
  {
    icon: Award,
    title: "Transparent Always",
    description: "Weekly reports, real-time dashboards, and honest conversations — no hidden fees, no surprises.",
  },
];

const milestones = [
  { year: "2019", event: "Realtical founded in Mumbai with a focus on real estate digital marketing" },
  { year: "2020", event: "Crossed 50 builder clients. Launched proprietary lead qualification system" },
  { year: "2021", event: "Expanded to Google Ads and CRM automation services. Team grew to 15" },
  { year: "2022", event: "Generated ₹200Cr+ in property sales. Opened offices in Pune and Bengaluru" },
  { year: "2023", event: "Launched full-service marketing packages. Crossed ₹500Cr in sales enabled" },
  { year: "2024", event: "₹850Cr+ total sales enabled. 120+ active builder clients. 28-person team" },
];

export default function About() {
  return (
    <div className="min-h-screen">

      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className="relative min-h-[540px] flex items-center overflow-hidden">
        <img
          src="/images/about-hero.png"
          alt="Real estate aerial view"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060e1f] via-[#060e1f]/85 to-[#060e1f]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e1f]/70 via-transparent to-[#060e1f]/55" />
        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="max-w-full sm:max-w-[70%] lg:max-w-[52%]">
            <span className="text-[#e8b84b] text-sm font-bold uppercase tracking-widest">About Realtical</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white mt-4 mb-6 leading-tight drop-shadow-lg">
              We're on a Mission to{" "}
              <span className="text-[#e8b84b] italic">Transform</span>{" "}
              Real Estate Marketing in India
            </h1>
            <p className="text-white/85 text-lg leading-relaxed">
              Founded by real estate marketing veterans, Realtical exists for one purpose: helping builders and developers generate a consistent, predictable flow of qualified property buyers.
            </p>
          </div>
        </div>
      </section>

      {/* ─── STORY ──────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-primary text-sm font-bold uppercase tracking-widest">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0d1b38] mt-3 mb-5">
                Born Out of Frustration with Generic Marketing Agencies
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[0.95rem]">
                <p>
                  In 2019, our founders — having worked in-house at India's largest real estate portals — saw a recurring problem: builders were paying lakhs to generic digital marketing agencies who didn't understand property buyers, project types, or local market dynamics.
                </p>
                <p>
                  The result? Expensive leads that never converted. Sales teams chasing ghost numbers. Marketing budgets wasted. Projects struggling to hit their velocity targets.
                </p>
                <p>
                  Realtical was built as the antidote. A specialist agency that understands real estate from the inside out — buyer psychology, project positioning, the complete sales funnel from awareness to site visit to booking.
                </p>
                <p>
                  Today, we're trusted by 120+ builders across India, from first-time developers launching a single tower to large developer groups running multiple simultaneous projects.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/team-meeting.png"
                alt="Realtical team at work"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-5 -left-5 bg-white border border-border rounded-2xl p-5 shadow-xl max-w-[200px]">
                <div className="text-3xl font-bold font-serif text-primary mb-1">5+</div>
                <div className="text-muted-foreground text-xs">Years of Real Estate Marketing Excellence</div>
              </div>
              <div className="absolute -top-5 -right-5 bg-[#0a1628] border border-[#e8b84b]/30 rounded-2xl p-5 shadow-xl">
                <div className="text-3xl font-bold font-serif text-[#e8b84b] mb-1">120+</div>
                <div className="text-white/60 text-xs">Builder Projects</div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "120+", label: "Builder Projects Served" },
              { value: "2,400+", label: "Qualified Leads Generated" },
              { value: "28", label: "Expert Team Members" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-gray-50 border border-border rounded-2xl p-6 text-center hover:border-primary/30 hover:shadow-md transition-all">
                <div className="text-3xl font-bold font-serif text-primary mb-2">{value}</div>
                <div className="text-muted-foreground text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50/70">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0d1b38] mt-3">
              The Principles That Drive{" "}
              <span className="text-primary italic">Every Decision</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                data-testid={`card-value-${title.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-white rounded-2xl p-7 border border-border hover:shadow-lg hover:border-primary/30 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-5 shadow-md shadow-primary/20">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-base font-bold font-serif text-[#0d1b38] mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ───────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">The Team</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0d1b38] mt-3">
              Real Estate Marketing <span className="text-primary italic">Veterans</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, bio, avatar, color }) => (
              <div
                key={name}
                data-testid={`card-team-${name.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className={`h-36 bg-gradient-to-br ${color} flex items-center justify-center relative`}>
                  <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 70%)` }}
                  />
                  <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center shadow-xl relative z-10">
                    <span className="text-white text-xl font-bold font-serif">{avatar}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold font-serif text-[#0d1b38] mb-0.5 group-hover:text-primary transition-colors">{name}</h3>
                  <div className="text-primary text-xs font-semibold mb-3">{role}</div>
                  <p className="text-muted-foreground text-xs leading-relaxed">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OFFICE PHOTO ───────────────────────────────────── */}
      <section className="section-padding bg-gray-50/70">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-primary text-sm font-bold uppercase tracking-widest">Our Workspace</span>
              <h2 className="text-3xl font-bold font-serif text-[#0d1b38] mt-3 mb-5">
                Built for Focus,{" "}
                <span className="text-primary italic">Driven by Results</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our Mumbai headquarters is designed for deep work — a space where our strategists, creatives, and analysts collaborate to build marketing systems that move the needle for builders across India.
              </p>
              <div className="space-y-3">
                {[
                  "Real-time campaign monitoring dashboards",
                  "Weekly performance review war rooms",
                  "Dedicated creative studio for ad production",
                  "Offices in Mumbai, Pune, and Bengaluru",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3 text-sm text-foreground/78">
                    <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <Check size={11} className="text-primary" />
                    </div>
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/about-office.png"
                alt="Realtical office"
                className="w-full h-72 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ───────────────────────────────────────── */}
      <section className="section-padding bg-[#0a1628] text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#e8b84b] text-sm font-bold uppercase tracking-widest">Our Journey</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mt-3">
              5 Years of <span className="text-[#e8b84b] italic">Growth & Impact</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map(({ year, event }, index) => (
              <div key={year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                    <span className="text-white text-xs font-bold">{year}</span>
                  </div>
                  {index < milestones.length - 1 && <div className="w-px flex-1 bg-white/10 mt-3" />}
                </div>
                <div className="pb-8 last:pb-0 pt-3">
                  <p className="text-white/72 text-sm leading-relaxed">{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0d1b38] mb-4">
            Ready to Work with <span className="text-primary italic">Our Team?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Book a free strategy call and see why 120+ builders trust Realtical with their marketing.
          </p>
          <Link href="/lead-capture">
            <Button
              data-testid="button-about-cta"
              size="lg"
              className="gold-gradient text-white border-0 font-semibold px-8 py-6"
            >
              Book Free Strategy Call <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
