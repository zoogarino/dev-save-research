import Layout from "@/components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { Map, Edit3, Compass, ArrowRight, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const paths = [
  {
    icon: Map,
    title: "Start From a Template",
    body:
      "Browse our five pre-designed routes — each one built around real roads, tested stops, and handpicked accommodation. Find a trip that fits and inquire about booking it exactly as designed.",
  },
  {
    icon: Edit3,
    title: "Make It Yours",
    body:
      "Take any of our pre-designed trips and adapt it to suit you. Swap accommodation, extend a leg, or add an activity. Inquire with your adjusted version and we'll book it accordingly.",
  },
  {
    icon: Compass,
    title: "Build From Scratch",
    body:
      "Know where you want to go? Use our trip builder to plot your own route, choose your stops, and select your preferences. We'll turn your plan into a complete booking.",
  },
];

const steps = [
  {
    title: "Browse & Build",
    body: "Explore our pre-designed trips or create your own using the trip builder.",
  },
  {
    title: "Submit an Inquiry",
    body: "Tell us what you'd like booked. Your trip details are sent directly to our booking agent.",
  },
  {
    title: "We Handle the Rest",
    body: "Your agent confirms availability, finalises the details with you, and locks in every booking.",
  },
];

const BookingPackages = () => {
  const navigate = useNavigate();

  const goToPreBuilt = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("pre-built-trips")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <Layout className="bg-background">
      {/* Header */}
      <section className="bg-muted py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Available Now
          </p>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-navy-dark mb-5">
            Complete Trip Booking
          </h1>
          <p
            className="text-base text-muted-foreground mx-auto"
            style={{ maxWidth: "600px", lineHeight: 1.7 }}
          >
            From the first night's accommodation to the last stretch of road — we handle every
            booking so you can focus on the adventure. Browse our trips, make them your own, or
            start from scratch.
          </p>
        </div>
      </section>

      {/* Three Path Cards */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {paths.map((path, i) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-card rounded-xl border border-border shadow-sm p-7 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <path.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold text-navy-dark mb-3">
                  {path.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{path.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted py-14 px-4 sm:px-6 lg:px-8">
        <div className="section-container max-w-5xl mx-auto">
          <h2 className="text-center text-lg font-heading font-semibold text-navy-dark mb-10">
            How It Works
          </h2>
          <div className="relative grid md:grid-cols-3 gap-8 md:gap-4">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-5 left-[16.66%] right-[16.66%] h-px bg-primary/30" />
            {steps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                <div className="relative z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {i + 1}
                </div>
                <h3 className="text-sm font-semibold text-navy-dark mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation Band */}
      <section className="w-full py-10 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#edf7f0" }}>
        <div className="mx-auto text-center" style={{ maxWidth: "640px" }}>
          <div className="flex justify-center mb-4">
            <Leaf className="w-5 h-5" style={{ color: "#3a8c5c" }} aria-hidden="true" />
          </div>
          <p
            className="mx-auto"
            style={{
              fontSize: "16px",
              color: "#2a4a35",
              lineHeight: 1.8,
              maxWidth: "560px",
            }}
          >
            Every complete trip booking you make through Pocket Guide Namibia contributes directly
            to conservation and education initiatives across Namibia — on your behalf, at no extra
            cost to you.
          </p>
          <Link
            to="/support-namibia"
            className="inline-block mt-5 underline underline-offset-4"
            style={{ fontSize: "13px", color: "#3a8c5c" }}
          >
            Learn about the organisations we support →
          </Link>
        </div>
      </section>

      {/* Single CTA */}
      <section className="bg-card py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-heading font-bold text-navy-dark mb-3">
            Ready to start planning?
          </h2>
          <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
            Our pre-designed trips are a great place to begin — each one is fully adaptable and
            ready to inquire about.
          </p>
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={goToPreBuilt}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-7 py-3 rounded-lg transition-colors"
            >
              Browse Pre-Designed Trips <ArrowRight size={16} />
            </button>
            <Link
              to="/trips"
              className="text-sm text-muted-foreground hover:text-primary underline underline-offset-4 transition-colors"
            >
              Or build your own route →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookingPackages;
