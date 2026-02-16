import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Search, Star, Calendar, Clock, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { blogPosts, categories, popularPosts } from "@/data/blogPosts";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All Posts" || post.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredPost = blogPosts.find((p) => p.featured);
  const gridPosts = filteredPosts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-muted">
      <Navbar />
      <div className="pt-[72px]">
        {/* Hero with Newsletter CTA */}
        <section className="relative bg-gradient-to-br from-navy-dark via-navy-dark to-primary text-primary-foreground py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
          </div>
          <div className="relative section-container px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6">
              Namibia Travel Insights & Stories
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 max-w-3xl mx-auto">
              Expert guides, trip reports, and insider tips delivered to your inbox every week
            </p>

            {/* Email Capture */}
            <div className="max-w-2xl mx-auto">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3 bg-primary-foreground/10 backdrop-blur-md p-3 rounded-xl border border-primary-foreground/20"
              >
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 h-12 sm:h-14 text-base sm:text-lg bg-primary-foreground text-foreground border-0 rounded-lg"
                  required
                />
                <button
                  type="submit"
                  className="h-12 sm:h-14 px-8 bg-primary text-primary-foreground rounded-lg font-bold text-base sm:text-lg hover:bg-primary-dark transition shadow-lg whitespace-nowrap"
                >
                  Subscribe Free
                </button>
              </form>
              <p className="text-sm text-primary-foreground/60 mt-4">
                Join 12,000+ travelers. Unsubscribe anytime. Weekly newsletter, no spam.
              </p>

              {/* Social Proof */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-muted-foreground/40 border-2 border-primary-foreground"
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-muted-foreground/60 border-2 border-primary-foreground flex items-center justify-center text-xs font-bold">
                    +12K
                  </div>
                </div>
                <p className="text-sm text-primary-foreground/70">
                  Trusted by thousands of travelers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Category Filter */}
        <div className="sticky top-[72px] z-40 bg-card border-b border-border shadow-sm">
          <div className="section-container px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition ${
                      activeCategory === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="relative hidden md:block flex-shrink-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-56"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && activeCategory === "All Posts" && !searchQuery && (
          <section className="section-container px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 text-warning" />
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-wide">
                Featured This Week
              </span>
            </div>
            <Link to={`/blog/${featuredPost.slug}`} className="group block">
              <div className="grid md:grid-cols-2 gap-0 bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
                <div className={`relative h-72 md:h-auto bg-gradient-to-br ${featuredPost.gradient} overflow-hidden`}>
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {featuredPost.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy-dark mb-4 group-hover:text-primary transition">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{featuredPost.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{featuredPost.readTime}</span>
                    <span className="flex items-center gap-1"><Eye className="w-4 h-4" />{featuredPost.views.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                    Read Full Guide <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Main Grid + Sidebar */}
        <section className="section-container px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                {gridPosts.slice(0, 4).map((post, i) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group"
                  >
                    <Link to={`/blog/${post.slug}`}>
                      <div className={`relative h-48 bg-gradient-to-br ${post.gradient} overflow-hidden`}>
                        <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-heading font-bold text-navy-dark mb-3 group-hover:text-primary transition line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>

              {/* Sponsor Zone 1 */}
              <div className="border-2 border-dashed border-border rounded-xl p-8 bg-secondary/50">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4">Sponsored</p>
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-muted rounded-lg flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy-dark mb-2">Partner Content Placeholder</h4>
                    <p className="text-sm text-muted-foreground">Native advertising space for travel gear, insurance, or rental companies</p>
                  </div>
                </div>
              </div>

              {/* More Posts */}
              <div className="grid md:grid-cols-2 gap-8">
                {gridPosts.slice(4).map((post, i) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group"
                  >
                    <Link to={`/blog/${post.slug}`}>
                      <div className={`relative h-48 bg-gradient-to-br ${post.gradient} overflow-hidden`}>
                        <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-heading font-bold text-navy-dark mb-3 group-hover:text-primary transition line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2 pt-8">
                <button className="px-4 py-2 border border-border rounded-lg hover:bg-secondary transition text-sm font-medium">Previous</button>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">1</button>
                <button className="px-4 py-2 border border-border rounded-lg hover:bg-secondary transition text-sm font-medium">2</button>
                <button className="px-4 py-2 border border-border rounded-lg hover:bg-secondary transition text-sm font-medium">3</button>
                <button className="px-4 py-2 border border-border rounded-lg hover:bg-secondary transition text-sm font-medium">Next</button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Newsletter Signup */}
              <div className="sticky top-32 space-y-8">
                <div className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground rounded-xl p-6 shadow-xl">
                  <div className="text-3xl mb-3">📧</div>
                  <h3 className="text-2xl font-heading font-bold mb-3">Never Miss a Guide</h3>
                  <p className="text-primary-foreground/80 mb-4 text-sm">
                    Get our best travel tips, destination guides, and Namibia insights delivered to your inbox every week.
                  </p>
                  <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Your email"
                      className="w-full h-12 bg-primary-foreground text-foreground border-0"
                    />
                    <button className="w-full h-12 bg-primary-foreground text-primary rounded-lg font-bold hover:bg-primary-foreground/90 transition">
                      Subscribe Free
                    </button>
                  </form>
                  <p className="text-xs text-primary-foreground/60 mt-3">
                    12,000+ subscribers. No spam. Unsubscribe anytime.
                  </p>
                </div>

                {/* Popular Posts */}
                <div className="bg-card rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-heading font-bold text-navy-dark mb-4 border-b border-border pb-3">
                    Most Popular
                  </h3>
                  <div className="space-y-4">
                    {popularPosts.map((post, i) => (
                      <Link key={post.slug} to={`/blog/${post.slug}`} className="flex gap-3 group">
                        <div className="text-3xl font-bold text-border group-hover:text-primary transition">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-navy-dark group-hover:text-primary transition text-sm mb-1 line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">{post.views.toLocaleString()} views</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Sponsor Zone 2 */}
                <div className="bg-secondary/50 rounded-xl p-6 border-2 border-dashed border-border">
                  <p className="text-xs text-muted-foreground uppercase mb-2">Advertisement</p>
                  <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">300×300 Ad Space</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Display advertising zone</p>
                </div>

                {/* Categories Widget */}
                <div className="bg-card rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-heading font-bold text-navy-dark mb-4">Browse by Category</h3>
                  <div className="space-y-2">
                    {categories.filter((c) => c !== "All Posts").map((cat) => {
                      const count = blogPosts.filter((p) => p.category === cat).length;
                      return (
                        <button
                          key={cat}
                          onClick={() => { setActiveCategory(cat); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                          className="flex items-center justify-between w-full p-3 bg-secondary/50 rounded-lg hover:bg-primary hover:text-primary-foreground transition group"
                        >
                          <span className="font-semibold text-sm">{cat}</span>
                          <span className="text-sm text-muted-foreground group-hover:text-primary-foreground">({count})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
