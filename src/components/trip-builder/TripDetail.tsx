import { useState } from "react";
import { ArrowLeft, MapPin, Clock, Flag, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Trip } from "@/data/trips";
import TripSwitcherModal from "./TripSwitcherModal";
import ContactModal from "./ContactModal";
import CopyTripModal from "./CopyTripModal";
import { Repeat, Mail, Copy } from "lucide-react";

interface TripDetailProps {
  trip: Trip;
  onBack: () => void;
  onSwitchTrip: (trip: Trip) => void;
}

const TripDetail = ({ trip, onBack, onSwitchTrip }: TripDetailProps) => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showCopy, setShowCopy] = useState(false);

  return (
    <>
      {/* Sidebar content */}
      <div className="p-6 space-y-5">
        {/* Back + Title */}
        <div className="flex items-start gap-3">
          <button
            onClick={onBack}
            className="mt-1 p-1.5 rounded-lg hover:bg-accent transition-colors text-muted-foreground"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <h3 className="font-heading font-bold text-navy-dark text-lg leading-tight">
              {trip.name}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">Expert-curated itinerary</p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-accent rounded-xl p-4 space-y-3">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-muted-foreground text-xs">Duration</p>
              <p className="font-semibold text-navy-dark flex items-center gap-1">
                <Clock size={14} /> {trip.time}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs">Distance</p>
              <p className="font-semibold text-navy-dark flex items-center gap-1">
                <MapPin size={14} /> {trip.km}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs">Stops</p>
              <p className="font-semibold text-navy-dark flex items-center gap-1">
                <Flag size={14} /> {trip.stops}
              </p>
            </div>
            {trip.days && (
              <div>
                <p className="text-muted-foreground text-xs">Suggested</p>
                <p className="font-semibold text-navy-dark">{trip.days}</p>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <button
            onClick={() => setShowSwitcher(true)}
            className="w-full flex items-center gap-2 justify-center border-2 border-primary text-primary hover:bg-primary/10 font-semibold py-2.5 rounded-lg transition-colors text-sm"
          >
            <Repeat size={16} /> Switch Trip
          </button>
          <button
            onClick={() => setShowContact(true)}
            className="w-full flex items-center gap-2 justify-center border-2 border-border text-foreground/80 hover:bg-accent font-semibold py-2.5 rounded-lg transition-colors text-sm"
          >
            <Mail size={16} /> Contact Us
          </button>
          <button
            onClick={() => setShowCopy(true)}
            className="w-full flex items-center gap-2 justify-center bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-2.5 rounded-lg transition-colors text-sm"
          >
            <Copy size={16} /> Copy Trip
          </button>
        </div>

        {/* Collapsible Description */}
        <div className="border border-border rounded-xl overflow-hidden">
          <button
            onClick={() => setPanelOpen(!panelOpen)}
            className="w-full flex items-center justify-between p-4 hover:bg-accent transition-colors"
          >
            <span className="font-heading font-bold text-navy-dark text-sm">Trip Details</span>
            {panelOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <AnimatePresence>
            {panelOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 space-y-3 text-sm text-muted-foreground">
                  {trip.season && (
                    <p className="text-xs">
                      {trip.days} | {trip.km} | {trip.season}
                    </p>
                  )}
                  <p>{trip.description}</p>
                  <div className="bg-accent rounded-lg p-3 text-xs">
                    <p>
                      🏕️ <strong>ACCOMMODATION:</strong> All route descriptions exclude specific accommodation
                      recommendations. Contact Pocket Guide Namibia for personalized booking assistance.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Modals */}
      <TripSwitcherModal
        open={showSwitcher}
        onClose={() => setShowSwitcher(false)}
        onSelect={(t) => {
          onSwitchTrip(t);
          setShowSwitcher(false);
        }}
        currentTripId={trip.id}
      />
      <ContactModal
        open={showContact}
        onClose={() => setShowContact(false)}
        tripName={trip.name}
      />
      <CopyTripModal
        open={showCopy}
        onClose={() => setShowCopy(false)}
        tripName={trip.name}
      />
    </>
  );
};

export default TripDetail;
