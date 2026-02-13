import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trips, Trip } from "@/data/trips";

interface TripSwitcherModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (trip: Trip) => void;
  currentTripId: string;
}

const TripSwitcherModal = ({ open, onClose, onSelect, currentTripId }: TripSwitcherModalProps) => (
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
          className="bg-card rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col"
        >
          <div className="flex items-center justify-between p-5 border-b border-border">
            <h3 className="font-heading font-bold text-navy-dark text-lg">All Trips</h3>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground p-1">
              <X size={20} />
            </button>
          </div>
          <div className="p-4 space-y-3 overflow-y-auto">
            {trips.map((trip) => (
              <button
                key={trip.id}
                onClick={() => onSelect(trip)}
                className={`w-full rounded-xl p-4 text-left transition-all border-2 ${
                  trip.id === currentTripId
                    ? "bg-primary/10 border-primary"
                    : "bg-accent hover:bg-accent/80 border-transparent hover:border-primary"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-heading font-bold text-navy-dark text-sm">{trip.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {trip.km} • {trip.time} • {trip.stops} stops
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-primary flex-shrink-0" />
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default TripSwitcherModal;
