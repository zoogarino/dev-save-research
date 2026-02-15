import { MapPin, Clock, Flag, ArrowRight, Sun, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { trips } from "@/data/trips";

const gradients = [
  "from-primary/60 to-primary-dark/80",
  "from-ochre/60 to-terracotta/80",
  "from-sandstone/60 to-ochre/80",
  "from-primary-dark/60 to-navy-dark",
  "from-terracotta/60 to-sandstone/80",
];

const PreBuiltTrips = () => (
  <section id="pre-built-trips" className="section-padding bg-background">
    <div className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-dark mb-4">
          Expert-Curated Itineraries
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Start with our signature routes designed by Namibia travel specialists.
          Customize them to make your own.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trips.map((trip, i) => (
          <motion.div
            key={trip.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-accent rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className={`relative h-48 bg-gradient-to-br ${gradients[i]}`}>
              <div className="absolute top-3 right-3 bg-card rounded-full p-2 shadow">
                <Sun size={18} className="text-ochre" />
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-heading font-bold text-navy-dark mb-3">
                {trip.name}
              </h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {trip.km}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {trip.time}
                </span>
                <span className="flex items-center gap-1">
                  <Flag size={14} /> {trip.stops}
                </span>
              </div>
              <Link
                to="/trip-builder"
                className="inline-flex items-center gap-1 font-semibold text-primary hover:gap-2 transition-all text-sm"
              >
                View Details <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        ))}

        {/* Create Your Own CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-card rounded-xl overflow-hidden border-2 border-dashed border-border hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center p-8 text-center min-h-[320px]"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Plus size={28} className="text-primary" />
          </div>
          <h3 className="text-xl font-heading font-bold text-navy-dark mb-2">
            Create Your Own
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Build a custom itinerary
          </p>
          <Link
            to="/trip-builder"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
          >
            Get Started <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PreBuiltTrips;
