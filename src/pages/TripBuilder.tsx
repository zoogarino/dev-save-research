import { useState } from "react";
import {
  ZoomIn,
  ZoomOut,
  Crosshair,
  Lightbulb,
  Share2,
  Save,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import BrowseTrips from "@/components/trip-builder/BrowseTrips";
import TripDetail from "@/components/trip-builder/TripDetail";
import CreateTripSidebar from "@/components/trip-builder/CreateTripSidebar";
import { Trip } from "@/data/trips";

type ActiveTab = "browse" | "create";

const TripBuilder = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("browse");
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSelectTrip = (trip: Trip) => setSelectedTrip(trip);
  const handleBack = () => setSelectedTrip(null);

  const sidebarContent = selectedTrip ? (
    <TripDetail
      trip={selectedTrip}
      onBack={handleBack}
      onSwitchTrip={(t) => setSelectedTrip(t)}
    />
  ) : activeTab === "browse" ? (
    <BrowseTrips onSelectTrip={handleSelectTrip} />
  ) : (
    <CreateTripSidebar />
  );

  return (
    <div className="min-h-screen flex flex-col bg-card">
      <Navbar />

      {/* Title Bar */}
      <div className="mt-[72px] bg-card border-b border-border px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 flex-shrink-0">
        <div>
          <h1 className="text-2xl font-heading font-bold text-navy-dark">
            {selectedTrip ? selectedTrip.name : "Create Your Trip"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {selectedTrip ? "Expert-curated itinerary" : "Build your custom Namibian adventure"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-foreground/80 border border-border rounded-lg hover:bg-accent transition-colors text-sm font-medium">
            <Save size={16} /> Save Trip
          </button>
          <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            <Share2 size={16} /> Share Trip
          </button>
        </div>
      </div>

      {/* Tabs (only when no trip selected) */}
      {!selectedTrip && (
        <div className="bg-card border-b border-border px-6 flex flex-shrink-0">
          <button
            onClick={() => setActiveTab("browse")}
            className={`px-6 py-3 font-semibold border-b-2 transition text-sm ${
              activeTab === "browse"
                ? "text-primary border-primary"
                : "text-muted-foreground border-transparent hover:text-primary"
            }`}
          >
            Browse Trips
          </button>
          <button
            onClick={() => setActiveTab("create")}
            className={`px-6 py-3 font-semibold border-b-2 transition text-sm ${
              activeTab === "create"
                ? "text-primary border-primary"
                : "text-muted-foreground border-transparent hover:text-primary"
            }`}
          >
            Create Custom Trip
          </button>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-80 border-r border-border bg-card overflow-y-auto flex-shrink-0">
          {sidebarContent}
        </div>

        {/* Mobile Sidebar Toggle */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden absolute bottom-4 left-4 z-20 bg-primary text-primary-foreground w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
          aria-label="Open trip sidebar"
        >
          <MenuIcon size={22} />
        </button>

        {/* Mobile Sidebar Drawer */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-foreground/50 z-30 md:hidden"
                onClick={() => setSidebarOpen(false)}
              />
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed bottom-0 left-0 right-0 z-40 bg-card rounded-t-2xl max-h-[85vh] overflow-y-auto shadow-2xl md:hidden"
              >
                <div className="flex justify-center pt-3 pb-1">
                  <div className="w-10 h-1 bg-border rounded-full" />
                </div>
                <div className="flex justify-end px-4">
                  <button onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
                    <X size={22} className="text-muted-foreground" />
                  </button>
                </div>
                {sidebarContent}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Map Area */}
        <div className="flex-1 relative bg-muted">
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-medium text-lg">
            {selectedTrip
              ? `Route: ${selectedTrip.name}`
              : "Interactive Map Will Load Here"}
          </div>

          {/* Map Controls */}
          <div className="absolute top-4 right-4 bg-card rounded-lg shadow-lg p-1.5 flex flex-col gap-1">
            <button className="w-10 h-10 flex items-center justify-center hover:bg-accent rounded transition-colors" aria-label="Zoom in">
              <ZoomIn size={18} className="text-foreground" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center hover:bg-accent rounded transition-colors" aria-label="Zoom out">
              <ZoomOut size={18} className="text-foreground" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center hover:bg-accent rounded transition-colors" aria-label="Center map">
              <Crosshair size={18} className="text-foreground" />
            </button>
          </div>

          {/* Helper Tooltip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-card shadow-lg rounded-lg px-4 py-2 flex items-center gap-2">
            <Lightbulb size={16} className="text-ochre flex-shrink-0" />
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              {selectedTrip
                ? "Route displayed with numbered waypoints and connecting path"
                : "Tap pins on the map to add locations, or use the search."}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripBuilder;
