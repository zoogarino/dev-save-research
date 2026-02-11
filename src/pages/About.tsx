import { motion } from "framer-motion";
import { MapPin, BarChart3, Users, Navigation, Heart, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const offerings = [
  { icon: Compass, text: "Expert-curated itineraries" },
  { icon: BarChart3, text: "Real-time road conditions" },
  { icon: Users, text: "Trusted booking partners" },
  { icon: Navigation, text: "Offline navigation" },
  { icon: Heart, text: "Community support" },
];

const About = () => (
  <div className="min-h-screen bg-muted">
    <Navbar />
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="section-padding bg-card text-center">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-dark mb-4">
              About Pocket Guide Namibia
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for self-drive adventures in Namibia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                Pocket Guide Namibia was born from a passion for this incredible
                country and a desire to make self-drive travel accessible to
                everyone. We believe that exploring Namibia independently should
                be straightforward, safe, and enriching.
              </p>
              <p>
                Our team of travel specialists has spent years exploring every
                corner of Namibia, from the towering dunes of Sossusvlei to the
                wildlife-rich plains of Etosha. We've turned that knowledge into
                a comprehensive platform that helps thousands of travelers plan
                their perfect adventure.
              </p>

              <h2 className="text-2xl font-heading font-bold text-navy-dark mt-10 mb-6">
                What We Offer
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {offerings.map((item) => (
                  <div key={item.text} className="flex items-center gap-3 bg-card p-4 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <span className="font-medium text-navy-dark">{item.text}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-heading font-bold text-navy-dark mt-10 mb-4">
                Our Commitment
              </h2>
              <p>
                Every booking made through our platform supports local
                conservation and community organizations. We believe tourism
                should benefit the places and people we visit.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default About;
