import { CloudDownload, Compass, AlertTriangle, CalendarCheck, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: CloudDownload,
    title: "Navigate Without Internet",
    description:
      "Download maps and guides before you go. Access everything offline in Namibia's remote areas where cell service is limited.",
  },
  {
    icon: Compass,
    title: "Local Knowledge, Expert Routes",
    description: "5 professionally designed itineraries created by Namibia travel specialists.",
  },
  {
    icon: AlertTriangle,
    title: "Stay Informed, Stay Safe",
    description:
      "Community-driven road condition updates. Know before you go with reports from fellow travelers on the ground.",
  },
  {
    icon: CalendarCheck,
    title: "Book Everything in One Place",
    description:
      "Request quotes from trusted rental companies and accommodations. No hidden fees, transparent pricing.",
  },
  {
    icon: Users,
    title: "Join 700+ Travelers",
    description:
      "Share experiences, ask questions, and contribute road updates. Help fellow adventurers plan better trips.",
  },
  {
    icon: Heart,
    title: "Book with Purpose",
    description: "Every booking supports local conservation, education, and community organizations across Namibia.",
  },
];

const WhyPocketGuide = () => (
  <section className="section-padding bg-card">
    <div className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-dark mb-4">
          Everything You Need for Your Namibian Adventure
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          From planning to navigation, we've got you covered every step of the way.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="p-6 rounded-xl hover:bg-accent transition-colors duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <feature.icon size={26} className="text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy-dark mb-2">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyPocketGuide;
