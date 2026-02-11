import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  { title: "Complete Guide to Driving Sossusvlei", category: "Destination Guides", gradient: "from-terracotta to-ochre" },
  { title: "Classic Northern Circuit: 10-Day Itinerary", category: "Trip Reports", gradient: "from-primary to-primary-dark" },
  { title: "5 Common Mistakes First-Time Visitors Make", category: "Travel Tips", gradient: "from-ochre to-sandstone" },
  { title: "Understanding Namibian Road Types", category: "Self-Drive Tips", gradient: "from-navy-dark to-foreground/80" },
  { title: "Best Camping Spots Along Skeleton Coast", category: "Accommodation", gradient: "from-primary-dark to-navy-dark" },
  { title: "Budget Breakdown: 2-Week Trip Cost", category: "Travel Planning", gradient: "from-sandstone to-terracotta" },
];

const Blog = () => (
  <div className="min-h-screen bg-muted">
    <Navbar />
    <div className="pt-[72px]">
      <div className="section-padding">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-navy-dark mb-4">
              Travel Stories & Guides
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and inspiration for your Namibian adventure
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-xl shadow-md overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`relative h-52 bg-gradient-to-br ${post.gradient} overflow-hidden`}>
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-heading font-bold text-navy-dark mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    Discover essential tips and insights for making the most of
                    your Namibian self-drive adventure.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight size={14} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Blog;
