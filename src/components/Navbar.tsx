import { useState, useEffect } from "react";
import { Menu, X, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  "Plan Your Trip",
  "Explore",
  "Booking",
  "Road Conditions",
  "Blog",
  "About",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
        scrolled
          ? "bg-card shadow-lg backdrop-blur-md"
          : "bg-card/80 backdrop-blur-sm"
      }`}
    >
      <div className="section-container w-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Compass className="h-8 w-8 text-primary" />
          <span className="font-heading font-bold text-xl text-navy-dark">
            Pocket Guide <span className="text-primary">Namibia</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors px-4 py-2">
            Login
          </button>
          <button className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors">
            Get the App
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[72px] left-0 right-0 bg-card shadow-lg border-t border-border lg:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {link}
                </a>
              ))}
              <hr className="border-border" />
              <button className="text-base font-medium text-foreground/80 hover:text-primary py-2 text-left">
                Login
              </button>
              <button className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold text-base px-5 py-3 rounded-lg transition-colors w-full">
                Get the App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
