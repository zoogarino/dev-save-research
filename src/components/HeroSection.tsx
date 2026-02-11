import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-namibia.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 section-container w-full pt-[72px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
            Discover Namibia Like Never Before
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-10 leading-relaxed max-w-xl">
            Your passport to the wonders of this breathtaking land. Plan routes,
            book vehicles, and explore 50+ destinations with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold text-lg px-8 py-4 rounded-lg transition-colors shadow-lg">
              Start Planning Your Trip
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 rounded-lg transition-colors">
              Download App
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="h-8 w-8 text-white animate-bounce-slow" />
      </div>
    </section>
  );
};

export default HeroSection;
