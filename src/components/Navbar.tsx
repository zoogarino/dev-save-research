import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Compass, ChevronDown, Map, Route, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const planYourTripItems = [
  {
    label: "Trip Builder",
    subtitle: "Create your custom route",
    href: "/trips",
    icon: Map,
    iconBg: "bg-primary",
  },
  {
    label: "Pre-Built Trips",
    subtitle: "5 expert itineraries",
    href: "/#pre-built-trips",
    icon: Route,
    iconBg: "bg-ochre",
  },
  {
    label: "Travel Advice",
    subtitle: "Essential tips & guides",
    href: "/#travel-advice",
    icon: Info,
    iconBg: "bg-success",
  },
];

const navLinks = [
  { label: "Booking", href: "/booking" },
  { label: "Road Conditions", href: "/#road-conditions" },
  { label: "Blog", href: "/blog" },
  { label: "Support Namibia", href: "/support-namibia" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg">
        Skip to main content
      </a>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
          scrolled
            ? "bg-card shadow-lg backdrop-blur-md"
            : "bg-card/80 backdrop-blur-sm"
        }`}
      >
        <div className="section-container w-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Compass className="h-8 w-8 text-primary" />
            <span className="font-heading font-bold text-xl text-navy-dark">
              Pocket Guide <span className="text-primary">Namibia</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Plan Your Trip Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Plan Your Trip
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[280px] bg-card rounded-xl shadow-xl p-4 z-50 border border-border"
                  >
                    {planYourTripItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent/50 transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <div className={`w-9 h-9 rounded-full ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                          <item.icon size={18} className="text-primary-foreground" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground">{item.label}</div>
                          <div className="text-xs text-muted-foreground">{item.subtitle}</div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
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
            className="lg:hidden text-foreground z-[60] relative"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 bg-navy-dark flex flex-col justify-center items-center lg:hidden"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 text-primary-foreground"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <div className="flex flex-col items-center gap-6">
              {/* Plan Your Trip Accordion */}
              <div className="flex flex-col items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileDropdownOpen(!mobileDropdownOpen);
                  }}
                  className="flex items-center gap-2 text-2xl font-heading font-semibold text-primary-foreground hover:text-primary transition-colors"
                >
                  Plan Your Trip
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileDropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden mt-3"
                    >
                      <div className="flex flex-col items-center gap-3">
                        {planYourTripItems.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="text-lg text-primary-foreground/80 hover:text-primary transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (i + 1) * 0.06 }}
                >
                  <Link
                    to={link.href}
                    className="text-2xl font-heading font-semibold text-primary-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <hr className="w-24 border-primary-foreground/20 my-2" />
              <button className="text-lg text-primary-foreground/80 hover:text-primary transition-colors">
                Login
              </button>
              <button className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold text-lg px-8 py-3 rounded-lg transition-colors mt-2">
                Get the App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
