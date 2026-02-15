import { useState } from "react";
import { ArrowLeft, MapPin, Clock, Flag, Calendar, Sun } from "lucide-react";
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
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showCopy, setShowCopy] = useState(false);

  return (
    <>
      <div className="flex flex-col h-full">
        {/* Back + Title */}
        <div className="p-4 border-b border-border">
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
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Stats */}
          <div className="bg-accent rounded-xl p-4">
            <h4 className="font-heading font-bold text-navy-dark text-sm mb-3">Trip Summary</h4>
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
                  <p className="font-semibold text-navy-dark flex items-center gap-1">
                    <Calendar size={14} /> {trip.days}
                  </p>
                </div>
              )}
              {trip.season && (
                <div className="col-span-2">
                  <p className="text-muted-foreground text-xs">Best Time</p>
                  <p className="font-semibold text-navy-dark flex items-center gap-1">
                    <Sun size={14} /> {trip.season}
                  </p>
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
              <Copy size={16} /> Copy & Customize
            </button>
          </div>

          {/* Description - always visible */}
          <div className="border-t-4 border-primary rounded-b-xl bg-card">
            <div className="p-4 space-y-4">
              <div>
                <h3 className="text-xl font-heading font-bold text-navy-dark">{trip.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {trip.days} | {trip.km} | {trip.season}
                </p>
              </div>

              {trip.description && (
                <p className="text-sm text-muted-foreground leading-relaxed">{trip.description}</p>
              )}

              {/* Accommodation notice */}
              <div className="bg-accent border-l-4 border-primary p-3 rounded-r-lg">
                <p className="text-xs text-foreground/80 leading-relaxed">
                  <strong>🏨 ACCOMMODATION:</strong> All route descriptions exclude specific
                  accommodation recommendations. Contact Pocket Guide Namibia for personalized
                  booking assistance, lodge recommendations, and package options tailored to your
                  budget and travel style—from budget camping to luxury lodges.
                </p>
              </div>

              {/* Full HTML description */}
              {trip.fullDescription && (
                <div
                  className="trip-prose text-sm"
                  dangerouslySetInnerHTML={{ __html: trip.fullDescription }}
                />
              )}
            </div>
          </div>
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
        tripDescription={trip.description || ""}
      />
    </>
  );
};

export default TripDetail;
