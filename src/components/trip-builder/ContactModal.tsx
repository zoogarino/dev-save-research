import { useState } from "react";
import { X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  tripName: string;
}

const ContactModal = ({ open, onClose, tripName }: ContactModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-foreground/50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card rounded-2xl shadow-2xl w-full max-w-md"
          >
            <div className="flex items-start justify-between p-5 border-b border-border">
              <div>
                <h3 className="font-heading font-bold text-navy-dark text-lg">Get in Touch</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Ask about: {tripName}
                </p>
              </div>
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground p-1">
                <X size={20} />
              </button>
            </div>

            {submitted ? (
              <div className="p-8 text-center">
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Send size={20} className="text-success" />
                </div>
                <p className="font-heading font-bold text-navy-dark">Message Sent!</p>
                <p className="text-sm text-muted-foreground mt-1">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-foreground/70 mb-1">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-card"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground/70 mb-1">Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-card"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground/70 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-card placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground/70 mb-1">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your travel plans..."
                    className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-card resize-none placeholder:text-muted-foreground"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-3 rounded-lg transition-colors text-sm"
                >
                  Contact Us
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
