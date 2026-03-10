import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Clock, ChevronRight, ArrowRight, Tag } from "lucide-react";

const posts = [
  {
    id: 1,
    category: "Lead Generation",
    title: "How Top Builders Generate 500+ Leads/Month Using Meta Ads",
    excerpt:
      "Discover the exact campaign structure, targeting approach, and creative strategy that consistently delivers 500+ qualified property buyers every month — without blowing your budget.",
    content: "Full post coming soon.",
    readTime: "6 min read",
    date: "March 5, 2026",
    featured: true,
    color: "from-[#0d1b38] to-[#1a2d5a]",
  },
  {
    id: 2,
    category: "Strategy",
    title: "The Real Estate Marketing Funnel That Actually Converts",
    excerpt:
      "Most agencies build campaigns. We build systems. Here's the 5-stage funnel we use for every builder client — from awareness to booking.",
    content: "Full post coming soon.",
    readTime: "8 min read",
    date: "February 28, 2026",
    featured: false,
    color: "from-[#c4921f] to-[#8b6614]",
  },
  {
    id: 3,
    category: "CRM",
    title: "Why 70% of Real Estate Leads Get Wasted (And How to Fix It)",
    excerpt:
      "A leaky CRM costs builders crores in lost sales. Here's the exact setup we implement for all our clients — and how you can do it too.",
    content: "Full post coming soon.",
    readTime: "5 min read",
    date: "February 20, 2026",
    featured: false,
    color: "from-[#7c3aed] to-[#4c1d95]",
  },
  {
    id: 4,
    category: "Google Ads",
    title: "The Complete Guide to Google Ads for Real Estate Builders in 2026",
    excerpt:
      "Search intent is the highest-quality signal in digital marketing. Here's how to capture it effectively with Google Ads specifically for real estate.",
    content: "Full post coming soon.",
    readTime: "10 min read",
    date: "February 12, 2026",
    featured: false,
    color: "from-[#34a853] to-[#0d6e2d]",
  },
  {
    id: 5,
    category: "Landing Pages",
    title: "7 Landing Page Secrets That Tripled Our Conversion Rates",
    excerpt:
      "We've tested 200+ real estate landing pages. Here are the 7 elements that consistently double or triple conversion rates for property developers.",
    content: "Full post coming soon.",
    readTime: "7 min read",
    date: "February 5, 2026",
    featured: false,
    color: "from-[#1877f2] to-[#0d3580]",
  },
  {
    id: 6,
    category: "Market Insights",
    title: "Real Estate Digital Marketing Trends to Watch in 2026",
    excerpt:
      "From AI-generated creatives to WhatsApp automation, here are the trends reshaping how Indian builders attract and convert buyers.",
    content: "Full post coming soon.",
    readTime: "5 min read",
    date: "January 28, 2026",
    featured: false,
    color: "from-[#0a1628] to-[#152242]",
  },
];

const categories = ["All", "Lead Generation", "Strategy", "CRM", "Google Ads", "Landing Pages", "Market Insights"];

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  const filtered = rest.filter((p) => {
    const matchCategory = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0a1628] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{ backgroundImage: `radial-gradient(circle at 50% 60%, rgba(196,146,31,0.5) 0%, transparent 60%)` }}
        />
        <div className="container-custom relative z-10 text-center">
          <span className="text-[#e8b84b] text-sm font-bold uppercase tracking-widest">Insights</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white mt-4 mb-5 max-w-3xl mx-auto">
            Real Estate Marketing{" "}
            <span className="text-[#e8b84b]">Insights</span>
          </h1>
          <p className="text-white/65 text-lg max-w-xl mx-auto mb-8">
            Actionable strategies, deep dives, and industry insights for real estate builders and developers.
          </p>
          <div className="max-w-md mx-auto relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <Input
              data-testid="input-blog-search"
              type="search"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#e8b84b]/60"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Featured Post */}
          {featured && (
            <div
              data-testid="card-blog-featured"
              className="bg-[#0a1628] rounded-3xl overflow-hidden mb-12 group cursor-pointer hover:shadow-2xl transition-all"
            >
              <div className="grid lg:grid-cols-2">
                <div className={`h-72 lg:h-full bg-gradient-to-br ${featured.color} min-h-[200px] flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, rgba(232,184,75,0.4) 0%, transparent 70%)` }} />
                  <span className="text-[#e8b84b] text-xs font-bold uppercase tracking-widest px-4 py-2 border border-[#e8b84b]/40 rounded-full relative z-10">
                    Featured Article
                  </span>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-1 text-[#e8b84b] text-xs font-bold uppercase tracking-widest mb-4">
                    <Tag size={10} />
                    {featured.category}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold font-serif text-white mb-4 group-hover:text-[#e8b84b] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-white/40 text-xs">
                      <span>{featured.date}</span>
                      <span>·</span>
                      <div className="flex items-center gap-1">
                        <Clock size={10} />
                        {featured.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[#e8b84b] text-sm font-semibold">
                      Read more <ChevronRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                data-testid={`button-blog-filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "gold-gradient text-white shadow-md"
                    : "bg-gray-100 text-muted-foreground hover:border-primary hover:text-primary border border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(({ id, category, title, excerpt, readTime, date, color }) => (
                <div
                  key={id}
                  data-testid={`card-blog-${id}`}
                  className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all group cursor-pointer"
                >
                  <div className={`h-40 bg-gradient-to-br ${color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 70%)` }} />
                    <span className="text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-2 border border-white/30 rounded-full relative z-10">
                      {category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold font-serif text-[#0d1b38] text-base mb-2 leading-snug group-hover:text-primary transition-colors">
                      {title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground text-xs">
                        <Clock size={10} />
                        {readTime}
                        <span>·</span>
                        <span>{date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No articles found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-[#0a1628] text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-[#e8b84b] text-sm font-bold uppercase tracking-widest">Newsletter</span>
            <h2 className="text-3xl font-bold font-serif text-white mt-3 mb-4">
              Get Weekly Real Estate{" "}
              <span className="text-[#e8b84b]">Marketing Tips</span>
            </h2>
            <p className="text-white/60 mb-8">
              Join 2,000+ builders and developers who read our weekly insights on real estate marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                data-testid="input-newsletter-email"
                type="email"
                placeholder="your@email.com"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 flex-1"
              />
              <Button
                data-testid="button-newsletter-subscribe"
                className="gold-gradient text-white border-0 font-semibold whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-white/30 text-xs mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
