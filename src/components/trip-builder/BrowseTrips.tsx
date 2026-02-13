import { MapPin, Clock, Flag, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { trips, Trip } from "@/data/trips";

interface BrowseTripsProps {
  onSelectTrip: (trip: Trip) => void;
}

const BrowseTrips = ({ onSelectTrip }: BrowseTripsProps) => (
  <div className="p-6 space-y-4">
    <h3 className="text-lg font-heading font-bold text-navy-dark">
      Expert-Curated Routes
    </h3>
    <div className="space-y-3">
      {trips.map((trip, i) => (
        <motion.button
          key={trip.id}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.05 }}
          onClick={() => onSelectTrip(trip)}
          className="w-full bg-accent rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all border-2 border-transparent hover:border-primary text-left"
        >
          <div className="flex items-start justify-between mb-2">
            <h4 className="font-heading font-bold text-navy-dark text-sm leading-tight">
              {trip.name}
            </h4>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
            <span className="flex items-center gap-1">
              <MapPin size={12} /> {trip.km}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> {trip.time}
            </span>
            <span className="flex items-center gap-1">
              <Flag size={12} /> {trip.stops}
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-primary font-semibold text-xs">
            View Details <ArrowRight size={12} />
          </span>
        </motion.button>
      ))}
    </div>
  </div>
);

export default BrowseTrips;
