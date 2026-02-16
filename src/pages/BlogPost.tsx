import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Eye, Link as LinkIcon, Share2, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { blogPosts } from "@/data/blogPosts";
import { toast } from "@/hooks/use-toast";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-muted">
        <Navbar />
        <div className="pt-[72px] section-padding text-center">
          <h1 className="text-3xl font-heading font-bold text-navy-dark mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary font-semibold hover:underline">← Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  if (relatedPosts.length < 3) {
    const extras = blogPosts.filter((p) => p.slug !== post.slug && !relatedPosts.includes(p)).slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...extras);
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: "Link copied!", description: "The article link has been copied to your clipboard." });
  };

  return (
    <div className="min-h-screen bg-muted">
      <Navbar />
      <div className="pt-[72px]">
        <article>
          {/* Header */}
          <div className="section-container px-4 sm:px-6 lg:px-8 py-12">
            {/* Breadcrumbs */}
            <nav className="text-sm text-muted-foreground mb-6 flex items-center gap-1 flex-wrap">
              <Link to="/" className="hover:text-primary transition">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/blog" className="hover:text-primary transition">Blog</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground line-clamp-1">{post.title}</span>
            </nav>

            <div className="inline-block bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full mb-4">
              {post.category}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-navy-dark mb-6 max-w-4xl">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-muted rounded-full flex-shrink-0" />
                <div>
                  <p className="font-semibold text-navy-dark text-sm">John Vanca</p>
                  <p className="text-xs">Pocket Guide Team</p>
                </div>
              </div>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-1 text-sm"><Calendar className="w-4 h-4" />{post.date}</span>
              <span className="flex items-center gap-1 text-sm"><Clock className="w-4 h-4" />{post.readTime}</span>
              <span className="flex items-center gap-1 text-sm"><Eye className="w-4 h-4" />{post.views.toLocaleString()} views</span>
            </div>

            {/* Share Buttons */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, "_blank")}
                className="flex items-center gap-2 px-4 py-2 bg-foreground/80 text-primary-foreground rounded-lg hover:bg-foreground transition text-sm"
              >
                <Share2 className="w-4 h-4" /> Tweet
              </button>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition text-sm"
              >
                <LinkIcon className="w-4 h-4" /> Copy Link
              </button>
            </div>

            {/* Featured Image */}
            <div className={`relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br ${post.gradient}`} />
          </div>

          {/* Content */}
          <div className="section-container px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Intro */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl text-muted-foreground leading-relaxed">{post.content[0]}</p>
            </div>

            {/* Mid-article Newsletter CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="my-12 bg-gradient-to-r from-accent to-primary/10 border-l-4 border-primary rounded-r-xl p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="text-4xl sm:text-5xl">📩</div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-navy-dark mb-2">
                    Want more guides like this?
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Join 12,000+ travelers getting our best Namibia tips delivered weekly. Free destination guides, itineraries, and insider secrets.
                  </p>
                  <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
                    <Input type="email" placeholder="Enter your email" className="flex-1 h-12 bg-card border-border" required />
                    <button className="h-12 px-6 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary-dark transition whitespace-nowrap">
                      Get Free Guides
                    </button>
                  </form>
                  <p className="text-xs text-muted-foreground mt-2">No spam. Unsubscribe anytime.</p>
                </div>
              </div>
            </motion.div>

            {/* Rest of content */}
            <div className="prose prose-lg max-w-none space-y-4 mb-8">
              {post.content.slice(1).map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
              ))}
              <h2 className="text-2xl font-heading font-bold text-navy-dark mt-8">When to Visit</h2>
              <p className="text-muted-foreground leading-relaxed">
                The best time depends on your priorities. For cooler temperatures and clear skies, visit between May and September. For dramatic cloud formations and the chance to see the desert bloom, consider the rainy season from December to March.
              </p>
              <h2 className="text-2xl font-heading font-bold text-navy-dark mt-8">Road Conditions & Vehicle Requirements</h2>
              <p className="text-muted-foreground leading-relaxed">
                A 4x4 vehicle is recommended for most off-tar routes. Always check current road conditions before departing and carry sufficient water, fuel, and supplies for your journey.
              </p>
            </div>

            {/* Sponsor Zone 3 */}
            <div className="my-12 border border-border rounded-xl p-6 bg-secondary/30">
              <p className="text-xs text-muted-foreground uppercase mb-3">Sponsored Content</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="aspect-square bg-muted rounded-lg" />
                </div>
                <div className="md:col-span-2">
                  <h4 className="text-xl font-heading font-bold text-navy-dark mb-2">Get Insured for Your Namibia Trip</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    World Nomads covers you for medical emergencies, trip cancellations, and adventure activities across Namibia.
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none space-y-4 mb-8">
              <h2 className="text-2xl font-heading font-bold text-navy-dark mt-8">Best Photography Spots</h2>
              <p className="text-muted-foreground leading-relaxed">
                Early morning light creates the most dramatic contrasts. Arrive at sunrise for golden hour photography that showcases the rich red and orange hues of the landscape.
              </p>
              <h2 className="text-2xl font-heading font-bold text-navy-dark mt-8">Packing Essentials</h2>
              <p className="text-muted-foreground leading-relaxed">
                Don't forget sun protection, sufficient water (at least 3 liters per person per day), sturdy footwear, and a good camera. A wide-angle lens is essential for capturing the vast landscapes.
              </p>
            </div>
          </div>

          {/* Bottom Conversion Zone */}
          <div className="section-container px-4 sm:px-6 lg:px-8 max-w-4xl mt-16 space-y-12">
            {/* Services CTA */}
            <div className="bg-gradient-to-br from-navy-dark to-primary text-primary-foreground rounded-2xl p-8 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4">Ready to Experience This?</h3>
              <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8">
                Book your 4x4 rental and start planning your Namib Desert adventure today
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/booking")}
                  className="px-8 py-4 bg-primary-foreground text-primary rounded-xl font-bold text-lg hover:bg-primary-foreground/90 transition text-center"
                >
                  Get Vehicle Quotes
                </button>
                <button
                  onClick={() => navigate("/trips")}
                  className="px-8 py-4 bg-primary-foreground/10 backdrop-blur text-primary-foreground border-2 border-primary-foreground rounded-xl font-bold text-lg hover:bg-primary-foreground/20 transition text-center"
                >
                  Plan Your Route
                </button>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-card rounded-xl p-6 sm:p-8 shadow-md border border-border">
              <div className="flex gap-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-muted rounded-full flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-heading font-bold text-navy-dark mb-2">About John Vanca</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    CEO of Pocket Guide Namibia with 10+ years exploring every corner of this incredible country. Self-drive expert and conservation advocate.
                  </p>
                  <div className="flex gap-4">
                    <Link to="/blog" className="text-primary hover:underline text-sm font-semibold">More Posts</Link>
                    <Link to="/about" className="text-primary hover:underline text-sm font-semibold">About Us</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-navy-dark mb-8">You Might Also Like</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((rp) => (
                    <Link key={rp.slug} to={`/blog/${rp.slug}`} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
                      <div className={`h-40 bg-gradient-to-br ${rp.gradient}`} />
                      <div className="p-5">
                        <span className="text-xs text-primary font-bold">{rp.category}</span>
                        <h4 className="font-heading font-bold text-navy-dark mt-1 mb-2 group-hover:text-primary transition line-clamp-2 text-sm">
                          {rp.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">{rp.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Final Newsletter CTA */}
            <div className="bg-accent rounded-2xl p-8 sm:p-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-navy-dark mb-4">
                Get More Guides Like This
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join 12,000+ travelers getting weekly destination guides, road trip itineraries, and insider tips delivered free to their inbox.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
                <Input type="email" placeholder="Enter your email" className="flex-1 h-14 text-lg bg-card border-border" required />
                <button className="h-14 px-8 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary-dark transition whitespace-nowrap">
                  Subscribe Free
                </button>
              </form>
              <p className="text-sm text-muted-foreground mt-4">No spam ever. Unsubscribe with one click.</p>
            </div>
          </div>
        </article>

        <div className="py-16" />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
