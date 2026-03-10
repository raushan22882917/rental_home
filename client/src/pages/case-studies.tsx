import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target, BarChart3, Building2, Star } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    client: "Prestige Spaces",
    project: "Prestige Tranquil — Pune",
    category: "Lead Generation + Meta Ads",
    projectType: "Luxury Apartments",
    duration: "3 months",
    challenge:
      "New luxury project in a competitive Pune micro-market. Needed 200+ qualified leads/month to hit velocity targets. Previous agency had delivered generic leads with <5% site visit rate.",
    solution:
      "Built hyper-targeted Meta campaigns focused on NRI investors and HNI buyers. Created premium landing page with virtual tour integration. Implemented lead scoring to filter for genuine prospects.",
    results: [
      { metric: "Leads Generated", value: "847", icon: Target },
      { metric: "Site Visit Rate", value: "22%", icon: Users },
      { metric: "Cost Per Lead", value: "₹165", icon: TrendingUp },
      { metric: "Bookings in 3 Months", value: "38", icon: Building2 },
    ],
    testimonial:
      "Realtical's campaigns were transformational. In 3 months we generated more bookings than the previous 6 months with our old agency.",
    author: "Rajesh Sharma, Director",
    tag: "Featured",
    color: "from-[#0d1b38] to-[#1a2d5a]",
  },
  {
    id: 2,
    client: "Skyline Developers",
    project: "Skyline Heights — Mumbai",
    category: "Google Ads + Landing Page",
    projectType: "Mid-Segment Apartments",
    duration: "2 months",
    challenge:
      "Highly competitive keyword landscape in Mumbai. High CPCs eating into their marketing budget. Landing page converting at only 3%.",
    solution:
      "Restructured Google Ads account with long-tail keywords and location extensions. Rebuilt landing page with urgency triggers, social proof, and multiple micro-conversion points.",
    results: [
      { metric: "Leads Generated", value: "612", icon: Target },
      { metric: "CPC Reduction", value: "42%", icon: TrendingUp },
      { metric: "Landing Page CVR", value: "19%", icon: BarChart3 },
      { metric: "Revenue Attributed", value: "₹12Cr", icon: Building2 },
    ],
    testimonial:
      "The landing page redesign alone saved us lakhs in ad spend. Conversion rate went from 3% to 19% — that's a genuine game-changer.",
    author: "Priya Malhotra, Marketing Head",
    tag: "Google Ads",
    color: "from-[#1877f2] to-[#0d3580]",
  },
  {
    id: 3,
    client: "Greenfield Realty",
    project: "Green Valley — Bengaluru",
    category: "Full Marketing Strategy",
    projectType: "Villa & Plotted Development",
    duration: "6 months",
    challenge:
      "First-time developer launching plotted development. Zero brand presence. No marketing infrastructure, no CRM, no digital presence.",
    solution:
      "Built complete marketing infrastructure from scratch — website, landing pages, CRM, Meta + Google campaigns, content calendar. Set up sales team process and lead follow-up protocols.",
    results: [
      { metric: "Leads Generated", value: "2,100+", icon: Target },
      { metric: "Plots Sold", value: "94 of 120", icon: Building2 },
      { metric: "Avg. Cost Per Lead", value: "₹195", icon: TrendingUp },
      { metric: "Revenue Generated", value: "₹52Cr", icon: BarChart3 },
    ],
    testimonial:
      "As a first-time developer we had no idea where to start. Realtical built everything from scratch and we sold 78% of our plots in 6 months.",
    author: "Arun Kapoor, CEO",
    tag: "Full Strategy",
    color: "from-[#c4921f] to-[#8b6614]",
  },
  {
    id: 4,
    client: "Nexus Housing",
    project: "Nexus Park — Hyderabad",
    category: "CRM + Lead Generation",
    projectType: "Affordable Housing",
    duration: "4 months",
    challenge:
      "Massive lead volume with no system to manage or follow up. 500+ leads/month sitting in Excel sheets. Sales team overwhelmed and losing hot prospects.",
    solution:
      "Implemented LeadSquared CRM with custom workflows. Automated lead assignment, follow-up SMS, and reminder sequences. Trained 12-person sales team. Added lead scoring.",
    results: [
      { metric: "Lead-to-Visit Rate", value: "+68%", icon: TrendingUp },
      { metric: "Follow-ups Automated", value: "95%", icon: BarChart3 },
      { metric: "Hot Leads Recovered", value: "180+", icon: Target },
      { metric: "Sales Velocity", value: "+3x", icon: Building2 },
    ],
    testimonial:
      "We went from losing leads in spreadsheets to having every single inquiry tracked, followed up, and converted at rates we'd never seen before.",
    author: "Suresh Nair, Sales Director",
    tag: "CRM",
    color: "from-[#7c3aed] to-[#4c1d95]",
  },
];

const categories = ["All", "Lead Generation", "Meta Ads", "Google Ads", "CRM", "Full Strategy"];

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = caseStudies.filter(
    (cs) => activeCategory === "All" || cs.category.includes(activeCategory)
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0a1628] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{ backgroundImage: `radial-gradient(circle at 30% 70%, rgba(196,146,31,0.5) 0%, transparent 60%)` }}
        />
        <div className="container-custom relative z-10 text-center">
          <span className="text-[#e8b84b] text-sm font-bold uppercase tracking-widest">Case Studies</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white mt-4 mb-5 max-w-4xl mx-auto">
            Real Results for{" "}
            <span className="text-[#e8b84b]">Real Builders</span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            Don't take our word for it. See the exact campaigns, strategies, and results we've delivered for builders across India.
          </p>
        </div>
      </section>

      {/* Aggregate Stats */}
      <section className="bg-white border-b border-border">
        <div className="container-custom py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "2,400+", label: "Total Leads Delivered" },
              { value: "₹850Cr+", label: "Property Sales Enabled" },
              { value: "120+", label: "Projects Completed" },
              { value: "₹180", label: "Average Cost Per Lead" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl font-bold font-serif text-primary mb-1">{value}</div>
                <div className="text-muted-foreground text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="section-padding bg-gray-50/70">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                data-testid={`button-filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "gold-gradient text-white shadow-md"
                    : "bg-white border border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-12">
            {filtered.map(({ id, client, project, category, projectType, duration, challenge, solution, results, testimonial, author, tag, color }) => (
              <div
                key={id}
                data-testid={`card-case-study-${id}`}
                className="bg-white rounded-3xl border border-border overflow-hidden hover:shadow-xl transition-all"
              >
                <div className={`h-48 bg-gradient-to-br ${color} relative flex items-end p-8`}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 60%)` }} />
                  <div className="relative z-10">
                    <span className="bg-[#e8b84b] text-[#0a1628] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {tag}
                    </span>
                    <h2 className="text-2xl font-bold font-serif text-white mt-3">{project}</h2>
                    <p className="text-white/70 text-sm">{client} · {projectType} · {duration}</p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">The Challenge</h3>
                      <p className="text-foreground/75 text-sm leading-relaxed">{challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Our Solution</h3>
                      <p className="text-foreground/75 text-sm leading-relaxed">{solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {results.map(({ metric, value, icon: Icon }) => (
                      <div key={metric} className="bg-gray-50 rounded-xl p-4 text-center border border-border">
                        <Icon size={18} className="text-primary mx-auto mb-2" />
                        <div className="text-xl font-bold font-serif text-[#0d1b38] mb-0.5">{value}</div>
                        <div className="text-muted-foreground text-xs">{metric}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-primary/5 border border-primary/15 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <Star size={16} className="text-[#e8b84b] fill-[#e8b84b] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-foreground/75 text-sm leading-relaxed italic mb-2">"{testimonial}"</p>
                        <p className="text-primary text-xs font-semibold">— {author}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#0a1628] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
            Want Results Like These{" "}
            <span className="text-[#e8b84b]">for Your Project?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
            Book a free strategy call and we'll show you exactly what results we can achieve for your specific project and market.
          </p>
          <Link href="/lead-capture">
            <Button
              data-testid="button-case-studies-cta"
              size="lg"
              className="gold-gradient text-white border-0 font-semibold px-8"
            >
              Get Free Strategy Call <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
