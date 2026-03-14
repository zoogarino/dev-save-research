import { useState } from "react";
import { MapPin, Clock, Flag, ArrowRight, Search, SlidersHorizontal, Copy } from "lucide-react";
import { motion } from "framer-motion";
import { trips, Trip } from "@/data/trips";

interface BrowseTripsProps {
  onSelectTrip: (trip: Trip) => void;
  selectedTripId?: string;
}

const BrowseTrips = ({ onSelectTrip, selectedTripId }: BrowseTripsProps) => {
  const [filter, setFilter] = useState("pocket-guide");

  return (
    <div className="flex flex-col">
      {/* Top Filter Section */}
      <div className="p-6 border-b border-border bg-card">
        <div className="flex items-center gap-3">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="flex-1 px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary bg-card font-semibold text-foreground text-base"
          >
            <option value="pocket-guide">Pocket Guide Trips ({trips.length})</option>
            <option value="my-trips">My Trips (0)</option>
            <option value="all">All Trips ({trips.length})</option>
          </select>

          <button className="p-3 border-2 border-border rounded-lg hover:border-primary hover:bg-accent transition-colors">
            <Search size={20} className="text-muted-foreground" />
          </button>

          <button className="p-3 border-2 border-border rounded-lg hover:border-primary hover:bg-accent transition-colors">
            <SlidersHorizontal size={20} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Trip Cards */}
      <div className="p-6 space-y-4">
        {trips.map((trip, i) => {
          const isSelected = selectedTripId === trip.id;
          return (
            <motion.button
              key={trip.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => onSelectTrip(trip)}
              className={`w-full rounded-xl p-5 cursor-pointer border-2 transition-all duration-200 text-left ${
                isSelected
                  ? "border-primary shadow-lg bg-primary/5"
                  : "border-transparent bg-accent hover:border-primary hover:shadow-lg hover:-translate-y-0.5"
              }`}
            >
              {/* Header Row */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-1 leading-tight">
                    {trip.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {trip.days} • {trip.season || "Year-round"}
                  </p>
                </div>
                <div className="text-2xl ml-2">☀️</div>
              </div>

              {/* Stats Row */}
              <div className="flex items-center gap-4 py-3 border-t border-b border-border my-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-primary" />
                  <span className="font-semibold">{trip.km}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={16} className="text-primary" />
                  <span className="font-semibold">{trip.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Flag size={16} className="text-primary" />
                  <span className="font-semibold">{trip.stops} stops</span>
                </div>
              </div>

              {/* Description Preview */}
              {trip.description && (
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {trip.description}
                </p>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2">
                <span className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-card text-primary border border-primary rounded-lg font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                  View Details <ArrowRight size={14} />
                </span>
                <span
                  className="px-3 py-2 bg-card text-muted-foreground border border-border rounded-lg hover:border-primary hover:text-primary transition-colors flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Copy size={16} />
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default BrowseTrips;
