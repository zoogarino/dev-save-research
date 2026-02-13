import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const posts = [
  {
    category: "Destination Guides",
    title: "Complete Guide to Driving Sossusvlei",
    excerpt:
      "Everything you need to know about navigating the iconic red dunes, from road conditions to best viewing times.",
    color: "bg-primary/10 text-primary",
  },
  {
    category: "Trip Reports",
    title: "Classic Northern Circuit: 10-Day Itinerary",
    excerpt:
      "A detailed breakdown of our most popular route, including daily stops, accommodation tips, and must-see highlights.",
    color: "bg-ochre/10 text-ochre",
  },
  {
    category: "Travel Tips",
    title: "5 Common Mistakes First-Time Visitors Make",
    excerpt:
      "Learn from others' experiences and avoid these pitfalls to make your Namibian adventure smooth and memorable.",
    color: "bg-success/10 text-success",
  },
  {
    category: "Self-Drive Tips",
    title: "Understanding Namibian Road Types",
    excerpt:
      "A comprehensive guide to tar roads, gravel roads, and salt roads—what to expect and how to prepare for each.",
    color: "bg-terracotta/10 text-terracotta",
  },
  {
    category: "Accommodation",
    title: "Best Camping Spots Along Skeleton Coast",
    excerpt:
      "Discover the most spectacular campsites along Namibia's dramatic and remote western coastline.",
    color: "bg-sandstone/10 text-sandstone",
  },
  {
    category: "Travel Planning",
    title: "Budget Breakdown: 2-Week Trip Cost",
    excerpt:
      "A realistic look at what a two-week self-drive adventure in Namibia actually costs, with tips for every budget.",
    color: "bg-primary-dark/10 text-primary-dark",
  },
];

const BlogPreview = () => (
  <section className="section-padding bg-card">
    <div className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-dark mb-4">
          Latest Travel Stories & Guides
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Insights, tips, and inspiration for your Namibian adventure
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="bg-background rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="relative h-44 bg-muted flex items-center justify-center">
              <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${post.color}`}>
                {post.category}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-navy-dark mb-2 text-lg leading-tight">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-1 font-semibold text-primary hover:gap-2 transition-all text-sm"
              >
                Read More <ArrowRight size={14} />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          View All Articles <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
);

export default BlogPreview;
