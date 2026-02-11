import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Plus,
  X,
  ZoomIn,
  ZoomOut,
  Crosshair,
  Lightbulb,
  Share2,
  Save,
  Menu as MenuIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Stop {
  id: number;
  value: string;
}

const TripBuilder = () => {
  const [tripName, setTripName] = useState("");
  const [stops, setStops] = useState<Stop[]>([
    { id: 1, value: "" },
    { id: 2, value: "" },
  ]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [calculating, setCalculating] = useState(false);

  const addStop = () => {
    setStops((prev) => [...prev, { id: Date.now(), value: "" }]);
  };

  const removeStop = (id: number) => {
    if (stops.length <= 2) return;
    setStops((prev) => prev.filter((s) => s.id !== id));
  };

  const updateStop = (id: number, value: string) => {
    setStops((prev) => prev.map((s) => (s.id === id ? { ...s, value } : s)));
  };

  const handleCalculate = () => {
    setCalculating(true);
    setTimeout(() => setCalculating(false), 1500);
  };

  const sidebar = (
    <div className="p-6 space-y-6">
      {/* Trip Name */}
      <div>
        <label className="block text-sm font-semibold text-foreground/70 mb-2">
          Trip Name
        </label>
        <input
          type="text"
          placeholder="My Namibian Adventure"
          value={tripName}
          onChange={(e) => setTripName(e.target.value)}
          className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-card text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {/* Route Stops */}
      <div>
        <label className="block text-sm font-semibold text-foreground/70 mb-3">
          Route Stops
        </label>
        <div className="space-y-3">
          {stops.map((stop, i) => (
            <motion.div
              key={stop.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground flex-shrink-0 ${
                  i === stops.length - 1 ? "bg-destructive" : "bg-primary"
                }`}
              >
                {i + 1}
              </div>
              <input
                type="text"
                placeholder={i === 0 ? "Starting point" : i === stops.length - 1 ? "Destination" : `Stop ${i + 1}`}
                value={stop.value}
                onChange={(e) => updateStop(stop.id, e.target.value)}
                className="flex-1 border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-card text-foreground placeholder:text-muted-foreground"
              />
              {stops.length > 2 && (
                <button
                  onClick={() => removeStop(stop.id)}
                  className="text-muted-foreground hover:text-destructive transition-colors p-1"
                  aria-label="Remove stop"
                >
                  <X size={18} />
                </button>
              )}
            </motion.div>
          ))}
        </div>

        <button
          onClick={addStop}
          className="mt-3 w-full border-2 border-dashed border-border hover:border-primary text-muted-foreground hover:text-primary rounded-lg py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2"
        >
          <Plus size={16} /> Add Stop
        </button>
      </div>

      {/* Trip Summary */}
      <div className="bg-accent rounded-lg p-4">
        <h3 className="font-heading font-bold text-navy-dark mb-3">
          Trip Summary
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total Distance</span>
            <span className="font-semibold text-navy-dark">— KM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Driving Time</span>
            <span className="font-semibold text-navy-dark">— hrs</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Stops</span>
            <span className="font-semibold text-navy-dark">{stops.length}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <button
          onClick={handleCalculate}
          disabled={calculating}
          className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-3 rounded-lg transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
        >
          {calculating ? (
            <>
              <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Calculating...
            </>
          ) : (
            "Calculate Route"
          )}
        </button>
        <button className="w-full border-2 border-primary text-primary hover:bg-primary/10 font-semibold py-3 rounded-lg transition-colors">
          Book Along Route
        </button>
      </div>
    </div>
  );

  return (
    <div className="h-screen flex flex-col bg-card">
      {/* Top Bar */}
      <div className="bg-navy-dark text-primary-foreground px-6 py-4 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <Link to="/" className="hover:text-primary transition-colors" aria-label="Back to home">
            <ArrowLeft size={22} />
          </Link>
          <h1 className="text-xl font-heading font-bold">Create Your Trip</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 bg-foreground/20 hover:bg-foreground/30 text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            <Save size={16} /> Save Trip
          </button>
          <button className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            <Share2 size={16} /> Share Trip
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-80 border-r border-border bg-card overflow-y-auto flex-shrink-0">
          {sidebar}
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
                {sidebar}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Map Area */}
        <div className="flex-1 relative bg-muted">
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-medium text-lg">
            Interactive Map Will Load Here
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
              Tap pins on the map to add locations, or use the search.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripBuilder;
