import { Map, Truck, Smartphone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Map,
    number: 1,
    title: "Plan Your Route",
    description:
      "Choose a pre-built itinerary or create your own custom route using our interactive trip builder.",
  },
  {
    icon: Truck,
    number: 2,
    title: "Book Your Essentials",
    description:
      "Request quotes for vehicles and accommodations directly through our platform from verified partners.",
  },
  {
    icon: Smartphone,
    number: 3,
    title: "Download for Offline",
    description:
      "Get the mobile app and download your trip, maps, and guides for offline access during your journey.",
  },
  {
    icon: MapPin,
    number: 4,
    title: "Explore with Confidence",
    description:
      "Navigate using offline maps, check real-time road conditions, and discover hidden gems along the way.",
  },
];

const HowItWorks = () => (
  <section className="section-padding bg-card">
    <div className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-dark">
          From Planning to Adventure in 4 Simple Steps
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-8 relative">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="text-center relative"
          >
            {/* Connector arrow (hidden on mobile, shown on md+) */}
            {i < steps.length - 1 && (
              <div className="hidden md:flex absolute top-7 -right-4 z-10 text-primary/40">
                <ArrowRight size={24} />
              </div>
            )}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-xl shadow-lg">
                {step.number}
              </div>
            </div>
            <div className="flex justify-center mb-3">
              <step.icon size={28} className="text-primary/60" />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy-dark mb-2">
              {step.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
