import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  {
    name: "About the App & Website",
    faqs: [
      { q: "What is Pocket Guide Namibia?", a: "A comprehensive travel platform designed to help you plan, book, and navigate self-drive adventures across Namibia. Access curated itineraries, offline maps, real-time road conditions, and trusted booking partners—all in one place." },
      { q: "Is the app free to download?", a: "Yes, the Pocket Guide Namibia app is free to download on both iOS and Android. Some premium features may require a subscription." },
      { q: "Can I use the app offline?", a: "Absolutely! Download maps, guides, and your trip details before you go. Access everything offline in Namibia's remote areas where cell service is limited." },
    ],
  },
  {
    name: "Trip Planning & Booking",
    faqs: [
      { q: "How does vehicle booking work?", a: "Submit an inquiry form with your travel details and preferences. We'll forward your request to our network of trusted Namibian rental companies, and you'll receive competitive quotes within 24-48 hours." },
      { q: "Can I customize the pre-built itineraries?", a: "Yes! Our 6 expert-curated routes serve as starting points. You can modify stops, adjust timing, and add your own destinations using our interactive trip builder." },
      { q: "Do you book accommodations too?", a: "Yes, we can help you find and book accommodations along your route through our partner network of lodges, guesthouses, and campsites." },
    ],
  },
  {
    name: "Road Conditions & Safety",
    faqs: [
      { q: "Is it safe to self-drive in Namibia?", a: "Yes, with proper preparation. Namibia is one of the safest countries in Africa for self-drive tourism. Our platform provides real-time road conditions, safety tips, and recommended vehicle types for each route." },
      { q: "How current is road condition information?", a: "Updated continuously by travelers on the ground. Our community-driven reports give you the latest conditions, including road surface quality, wildlife sightings, and weather-related hazards." },
    ],
  },
  {
    name: "Partnerships & Support",
    faqs: [
      { q: "How do you select rental partners?", a: "All rental companies on our platform are vetted for reliability, vehicle quality, and customer service. We only work with established Namibian businesses with proven track records." },
      { q: "How does my booking support local communities?", a: "A portion of every booking goes to organizations like Tangeni Shilongo Namibia, EHRA, and Oonte Children's Centre, supporting education, conservation, and community development." },
    ],
  },
];

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-muted">
      <Navbar />
      <div className="pt-[72px]">
        <div className="section-padding">
          <div className="section-container max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-heading font-bold text-navy-dark mb-4">
                Frequently Asked Questions
              </h1>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {categories.map((cat, i) => (
                <button
                  key={cat.name}
                  onClick={() => { setActiveTab(i); setOpenFaq(null); }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === i
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground hover:text-primary border border-border"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-3">
              {categories[activeTab].faqs.map((faq) => {
                const isOpen = openFaq === faq.q;
                return (
                  <div key={faq.q} className="bg-card rounded-lg border border-border overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : faq.q)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span className="font-semibold text-navy-dark pr-4">{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-muted-foreground flex-shrink-0 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-colors">
                Contact Us <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
