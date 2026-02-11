import { useState } from "react";
import { MapPin, Calendar, Users, Mail, Phone, CheckSquare, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const vehicleTypes = [
  { emoji: "🚙", name: "4x4 (2 Seats)", popular: false },
  { emoji: "🚗", name: "4x4 (5 Seats)", popular: true },
  { emoji: "⛺", name: "Camping Equipped", popular: true },
  { emoji: "🚐", name: "Large Camper", popular: false },
];

const Booking = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(1);
  const [camping, setCamping] = useState(false);
  const [namibianOnly, setNamibianOnly] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-muted">
      <Navbar />
      <div className="pt-[72px]">
        <div className="section-padding">
          <div className="section-container">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-heading font-bold text-navy-dark mb-4">
                Book Your Perfect 4x4 Adventure Vehicle
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from trusted Namibian rental companies. Get quotes for
                2-seaters to fully-equipped camping vehicles.
              </p>
            </div>

            {/* Vehicle Selector */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {vehicleTypes.map((v, i) => (
                <motion.button
                  key={v.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedVehicle(i)}
                  className={`relative p-6 rounded-xl border-2 transition-all text-center ${
                    selectedVehicle === i
                      ? "border-primary bg-accent shadow-md"
                      : v.popular
                      ? "border-primary/30 bg-card hover:border-primary"
                      : "border-border bg-card hover:border-primary"
                  }`}
                >
                  {v.popular && (
                    <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded">
                      Popular
                    </span>
                  )}
                  <div className="text-4xl mb-2">{v.emoji}</div>
                  <div className="font-heading font-bold text-navy-dark text-sm">
                    {v.name}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Booking Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-xl shadow-lg p-6 sm:p-8 max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left - Trip Details */}
                <div>
                  <h2 className="text-2xl font-heading font-bold text-navy-dark mb-6">
                    Trip Details
                  </h2>
                  <div className="space-y-5">
                    <InputField icon={MapPin} label="Pick-up Location" placeholder="e.g., Windhoek Airport" />
                    <InputField icon={MapPin} label="Drop-off Location" placeholder="e.g., Windhoek Airport" />
                    <div className="grid grid-cols-2 gap-4">
                      <InputField icon={Calendar} label="Pick-up Date" placeholder="Select date" type="date" />
                      <InputField icon={Calendar} label="Drop-off Date" placeholder="Select date" type="date" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground/70 mb-2">
                        Participants
                      </label>
                      <div className="relative">
                        <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <select className="w-full border border-border rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-card text-foreground appearance-none">
                          {[1, 2, 3, 4, "5+"].map((n) => (
                            <option key={n} value={n}>{n} {typeof n === "number" && n === 1 ? "person" : "people"}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right - Personal Details */}
                <div>
                  <h2 className="text-2xl font-heading font-bold text-navy-dark mb-6">
                    Your Details
                  </h2>
                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <InputField label="First Name" placeholder="John" />
                      <InputField label="Last Name" placeholder="Doe" />
                    </div>
                    <InputField icon={Mail} label="Email" placeholder="you@email.com" type="email" />
                    <InputField icon={Phone} label="Phone" placeholder="+264 ..." type="tel" />
                    <div className="space-y-3">
                      <Checkbox checked={camping} onChange={setCamping} label="Camping equipment required" />
                      <Checkbox checked={namibianOnly} onChange={setNamibianOnly} label="Only Namibian rentals" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Comments */}
              <div className="mt-6">
                <label className="block text-sm font-semibold text-foreground/70 mb-2">
                  Additional Requests
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g., second driver, insurance needs, child seat requirements..."
                  className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-card text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              {/* Submit */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-bold text-lg py-4 rounded-lg transition-colors shadow-lg disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> Submitting...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
                <p className="text-center text-sm text-muted-foreground mt-3">
                  You'll receive quotes from rental partners within 24-48 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl p-8 max-w-md w-full text-center shadow-2xl"
            >
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckSquare size={32} className="text-success" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-navy-dark mb-2">
                Inquiry Received!
              </h2>
              <p className="text-muted-foreground mb-6">
                We've sent your request to our rental partners. Expect quotes
                within 24-48 hours at your email.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/"
                  className="flex-1 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-3 rounded-lg transition-colors text-center"
                >
                  Continue Planning
                </a>
                <a
                  href="/trips"
                  className="flex-1 border-2 border-primary text-primary hover:bg-primary/10 font-semibold py-3 rounded-lg transition-colors text-center"
                >
                  Browse Trips
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

/* Reusable form components */
const InputField = ({
  icon: Icon,
  label,
  placeholder,
  type = "text",
}: {
  icon?: React.ElementType;
  label: string;
  placeholder: string;
  type?: string;
}) => (
  <div>
    <label className="block text-sm font-semibold text-foreground/70 mb-2">
      {label}
    </label>
    <div className="relative">
      {Icon && (
        <Icon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full border border-border rounded-lg ${
          Icon ? "pl-10" : "pl-4"
        } pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-card text-foreground placeholder:text-muted-foreground`}
      />
    </div>
  </div>
);

const Checkbox = ({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (val: boolean) => void;
  label: string;
}) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <div
      onClick={() => onChange(!checked)}
      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
        checked ? "bg-primary border-primary" : "border-border group-hover:border-primary"
      }`}
    >
      {checked && (
        <svg width="12" height="12" viewBox="0 0 12 12" className="text-primary-foreground">
          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      )}
    </div>
    <span className="text-sm text-foreground/80">{label}</span>
  </label>
);

export default Booking;
