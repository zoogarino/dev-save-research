import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const orgs = [
  {
    name: "Tangeni Shilongo Namibia",
    description: "Supporting educational programs across Namibia",
  },
  {
    name: "Elephant Human Relations Aid (EHRA)",
    description:
      "Protecting desert elephants and reducing human-wildlife conflict",
  },
  {
    name: "Oonte Orphans and Vulnerable Children Centre",
    description: "Providing care and support for vulnerable children",
  },
];

const SupportNamibia = () => (
  <section className="section-padding bg-navy-dark">
    <div className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
          Every Journey Makes a Difference
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          For every booking made through Pocket Guide Namibia, a portion
          supports local organizations dedicated to conservation, education, and
          community development.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {orgs.map((org, i) => (
          <motion.div
            key={org.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-white/10 backdrop-blur rounded-xl p-6"
          >
            <div className="h-24 bg-gray-200/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-gray-400 text-sm font-medium">Logo</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-white mb-2">
              {org.name}
            </h3>
            <p className="text-gray-300 text-sm">{org.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <button className="inline-flex items-center gap-2 bg-white text-navy-dark font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
          Learn More About Our Impact <ArrowRight size={16} />
        </button>
      </div>
    </div>
  </section>
);

export default SupportNamibia;
