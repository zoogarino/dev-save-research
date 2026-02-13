import { useState } from "react";
import { Infinity, Star, Tag, Users, Phone, Map, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  { icon: Infinity, title: "Unlimited Trip Planning", desc: "Create unlimited custom routes" },
  { icon: Star, title: "Expert Trip Reviews", desc: "Get professional feedback on your itinerary" },
  { icon: Tag, title: "Exclusive Rental Discounts", desc: "Save on vehicle bookings" },
  { icon: Users, title: "Fireside Chats", desc: "Connect with fellow travelers on the road" },
  { icon: Phone, title: "Emergency Support", desc: "24/7 assistance when you need it" },
  { icon: Map, title: "Advanced Offline Maps", desc: "Geofencing alerts and enhanced navigation" },
];

const PremiumTeaser = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy-dark to-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block bg-primary-foreground/20 px-3 py-1 rounded-full text-xs font-semibold mb-4">
          Coming Soon
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Pocket Guide Premium
        </h2>
        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          Unlock the full potential of your Namibian adventure
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <f.icon className="w-10 h-10 mx-auto mb-3 text-primary-foreground/80" />
              <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-primary-foreground/80">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => { setShowWaitlist(true); setSubmitted(false); }}
          className="mt-10 bg-primary-foreground text-navy-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-foreground/90 shadow-xl transition-colors"
        >
          Join the Waitlist
        </button>
        <p className="text-sm text-primary-foreground/70 mt-3">
          Be the first to know when Premium launches
        </p>
      </div>

      {/* Waitlist Modal */}
      <AnimatePresence>
        {showWaitlist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowWaitlist(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card text-foreground rounded-2xl shadow-2xl w-full max-w-md p-8"
            >
              <button
                onClick={() => setShowWaitlist(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>

              {submitted ? (
                <div className="text-center py-4">
                  <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-navy-dark text-xl mb-2">You're on the list!</h3>
                  <p className="text-muted-foreground">We'll notify you as soon as Premium launches.</p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-heading font-bold text-navy-dark text-xl mb-2">
                      Join the Premium Waitlist
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Be among the first to experience Pocket Guide Premium
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground/70 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-card placeholder:text-muted-foreground"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-3 rounded-lg transition-colors"
                    >
                      Notify Me When It Launches
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PremiumTeaser;
