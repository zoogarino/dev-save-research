import { MapPin, Clock, Flag, ArrowRight, Sun } from "lucide-react";
import { motion } from "framer-motion";

const trips = [
  { name: "Classic Northern Circuit", km: "3241.2 KM", time: "49h 31m", stops: 17 },
  { name: "Central Namibian Safari", km: "1406.4 KM", time: "18h 57m", stops: 8 },
  { name: "The Southern Circuit", km: "2442.8 KM", time: "31h 33m", stops: 12 },
  { name: "The Northern Wilderness Explorer", km: "3521.2 KM", time: "47h 32m", stops: 13 },
  { name: "The Etosha and Waterberg Experience", km: "1477.3 KM", time: "21h 24m", stops: 9 },
  { name: "Swakopmund Holiday Weekend Getaway", km: "858.9 KM", time: "11h 3m", stops: 5 },
];

const gradients = [
  "from-primary/60 to-primary-dark/80",
  "from-ochre/60 to-terracotta/80",
  "from-sandstone/60 to-ochre/80",
  "from-primary-dark/60 to-navy-dark",
  "from-terracotta/60 to-sandstone/80",
  "from-primary/40 to-ochre/60",
];

const PreBuiltTrips = () => (
  <section className="section-padding bg-background">
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
            key={trip.name}
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
              <a
                href="#"
                className="inline-flex items-center gap-1 font-semibold text-primary hover:gap-2 transition-all text-sm"
              >
                View Details <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PreBuiltTrips;
