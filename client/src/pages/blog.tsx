import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Clock, ChevronRight, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    category: "Lead Generation",
    title: "How Top Builders Generate 500+ Leads/Month Using Meta Ads",
    excerpt:
      "Discover the exact campaign structure, targeting approach, and creative strategy that consistently delivers 500+ qualified property buyers every month — without blowing your budget.",
    readTime: "6 min read",
    date: "March 5, 2026",
    featured: true,
    img: "/images/service-meta-ads.png",
  },
  {
    id: 2,
    category: "Strategy",
    title: "The Real Estate Marketing Funnel That Actually Converts",
    excerpt:
      "Most agencies build campaigns. We build systems. Here's the 5-stage funnel we use for every builder client — from awareness to booking.",
    readTime: "8 min read",
    date: "February 28, 2026",
    featured: false,
    img: "/images/blog-featured.png",
  },
  {
    id: 3,
    category: "CRM",
    title: "Why 70% of Real Estate Leads Get Wasted (And How to Fix It)",
    excerpt:
      "A leaky CRM costs builders crores in lost sales. Here's the exact setup we implement for all our clients — and how you can do it too.",
    readTime: "5 min read",
    date: "February 20, 2026",
    featured: false,
    img: "/images/service-crm.png",
  },
  {
    id: 4,
    category: "Google Ads",
    title: "The Complete Guide to Google Ads for Real Estate Builders in 2026",
    excerpt:
      "Search intent is the highest-quality signal in digital marketing. Here's how to capture it effectively with Google Ads specifically for real estate.",
    readTime: "10 min read",
    date: "February 12, 2026",
    featured: false,
    img: "/images/service-google-ads.png",
  },
  {
    id: 5,
    category: "Landing Pages",
    title: "7 Landing Page Secrets That Tripled Our Conversion Rates",
    excerpt:
      "We've tested 200+ real estate landing pages. Here are the 7 elements that consistently double or triple conversion rates for property developers.",
    readTime: "7 min read",
    date: "February 5, 2026",
    featured: false,
    img: "/images/service-landing-page.png",
  },
  {
    id: 6,
    category: "Market Insights",
    title: "Real Estate Digital Marketing Trends to Watch in 2026",
    excerpt:
      "From AI-generated creatives to WhatsApp automation, here are the trends reshaping how Indian builders attract and convert buyers.",
    readTime: "5 min read",
    date: "January 28, 2026",
    featured: false,
    img: "/images/case-study-3.png",
  },
];

const categories = ["All", "Lead Generation", "Strategy", "CRM", "Google Ads", "Landing Pages", "Market Insights"];

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = posts.find((p) => p.featured)!;
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

      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#060e1f]" />
        <img src="/images/about-office.png" alt="Marketing office" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0"
          style={{ backgroundImage: `radial-gradient(ellipse at 30% 50%, rgba(196,146,31,0.18) 0%, transparent 55%), radial-gradient(ellipse at 75% 30%, rgba(13,27,56,0.8) 0%, transparent 60%)` }}
        />
        <div className="container-custom relative z-10 text-center">
          <span className="text-[#e8b84b] text-sm font-bold uppercase tracking-widest">Insights</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white mt-4 mb-5 max-w-3xl mx-auto leading-tight">
            Real Estate Marketing <span className="text-[#e8b84b] italic">Insights</span>
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

          {/* ─── FEATURED ─────────────────────────────────────── */}
          <div
            data-testid="card-blog-featured"
            className="rounded-3xl overflow-hidden mb-12 group cursor-pointer hover:shadow-2xl transition-all border border-border"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <img
                  src={featured.img}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-transparent" />
                <span className="absolute top-5 left-5 bg-[#e8b84b] text-[#0a1628] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  Featured Article
                </span>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center bg-[#0a1628]">
                <span className="text-[#e8b84b] text-xs font-bold uppercase tracking-widest mb-4">{featured.category}</span>
                <h2 className="text-2xl lg:text-3xl font-bold font-serif text-white mb-4 group-hover:text-[#e8b84b] transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-white/55 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-white/35 text-xs">
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

          {/* ─── CATEGORY FILTER ──────────────────────────────── */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                data-testid={`button-blog-filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "gold-gradient text-white shadow-md"
                    : "bg-gray-100 text-muted-foreground hover:text-primary border border-transparent hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ─── POSTS GRID ───────────────────────────────────── */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(({ id, category, title, excerpt, readTime, date, img }) => (
                <div
                  key={id}
                  data-testid={`card-blog-${id}`}
                  className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 text-[#e8b84b] text-xs font-bold uppercase tracking-widest px-3 py-1 bg-[#0a1628]/70 backdrop-blur-sm rounded-full border border-[#e8b84b]/30">
                      {category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold font-serif text-[#0d1b38] text-base mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2 flex-1">
                      {title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2 text-muted-foreground text-xs">
                        <Clock size={10} />
                        {readTime}
                        <span>·</span>
                        <span>{date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-primary text-xs font-semibold">
                        Read <ChevronRight size={12} />
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

      {/* ─── NEWSLETTER ─────────────────────────────────────── */}
      <section className="relative section-padding overflow-hidden">
        <img src="/images/service-meta-ads.png" alt="Digital marketing" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#060e1f]/93" />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-[#e8b84b] text-sm font-bold uppercase tracking-widest">Newsletter</span>
            <h2 className="text-3xl font-bold font-serif text-white mt-3 mb-4">
              Get Weekly Real Estate <span className="text-[#e8b84b] italic">Marketing Tips</span>
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
                Subscribe <ArrowRight className="ml-1" size={14} />
              </Button>
            </div>
            <p className="text-white/30 text-xs mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
