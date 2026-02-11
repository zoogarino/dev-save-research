import { Map, MapPin, Truck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    gradient: "from-primary to-primary-dark",
    icon: Map,
    iconBg: "bg-primary/20 text-primary",
    title: "Build Your Custom Route",
    description:
      "Choose from 6 curated itineraries or create your own. See distances, driving times, and suggested stops along the way.",
    link: "Explore Trips",
    linkColor: "text-primary",
  },
  {
    gradient: "from-ochre to-terracotta",
    icon: MapPin,
    iconBg: "bg-ochre/20 text-ochre",
    title: "Explore 50+ Destinations",
    description:
      "Discover accommodations, activities, fuel stations, landmarks, and essential services across Namibia.",
    link: "Explore Map",
    linkColor: "text-ochre",
  },
  {
    gradient: "from-foreground/60 to-foreground",
    icon: Truck,
    iconBg: "bg-foreground/10 text-foreground/70",
    title: "Book Your 4x4 Adventure",
    description:
      "Get quotes from trusted Namibian rental companies. Choose from 2-seaters to fully-equipped camping vehicles.",
    link: "Get a Quote",
    linkColor: "text-foreground/70",
  },
];

const TripPlanningHub = () => (
  <section className="section-padding bg-card">
    <div className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-dark mb-4">
          Plan Your Perfect Adventure
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Everything you need to explore Namibia with confidence. Build custom
          routes, discover destinations, and book your journey—all in one place.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-card rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
          >
            <div className={`h-48 bg-gradient-to-br ${card.gradient}`} />
            <div className="p-6">
              <div className={`w-12 h-12 rounded-full ${card.iconBg} flex items-center justify-center -mt-12 mb-4 border-4 border-card`}>
                <card.icon size={22} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-navy-dark mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {card.description}
              </p>
              <a
                href="#"
                className={`inline-flex items-center gap-1 font-semibold ${card.linkColor} hover:gap-2 transition-all`}
              >
                {card.link} <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TripPlanningHub;
