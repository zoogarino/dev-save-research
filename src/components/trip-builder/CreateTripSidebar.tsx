import { useState } from "react";
import { Plus, X, Search, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import FilterModal from "./FilterModal";
import RichTextEditor from "./RichTextEditor";

interface Stop {
  id: number;
  value: string;
}

const CreateTripSidebar = () => {
  const [tripName, setTripName] = useState("");
  const [tripDescription, setTripDescription] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [stops, setStops] = useState<Stop[]>([
    { id: 1, value: "" },
    { id: 2, value: "" },
  ]);
  const [calculating, setCalculating] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const addStop = () => setStops((prev) => [...prev, { id: Date.now(), value: "" }]);

  const removeStop = (id: number) => {
    if (stops.length <= 2) return;
    setStops((prev) => prev.filter((s) => s.id !== id));
  };

  const updateStop = (id: number, value: string) =>
    setStops((prev) => prev.map((s) => (s.id === id ? { ...s, value } : s)));

  const handleCalculate = () => {
    setCalculating(true);
    setTimeout(() => setCalculating(false), 1500);
  };

  return (
    <>
      <div className="p-6 space-y-6">
        {/* Trip Name */}
        <div>
          <label className="block text-sm font-semibold text-foreground/70 mb-2">Trip Name</label>
          <input
            type="text"
            placeholder="My Namibian Adventure"
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
            className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-card text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Trip Description - Rich Text Editor */}
        <div>
          <label className="block text-sm font-semibold text-foreground/70 mb-2">
            Trip Description
          </label>
          <RichTextEditor content={tripDescription} onChange={setTripDescription} />
          <p className="text-xs text-muted-foreground mt-1">
            Use the formatting tools to organize your itinerary, add day-by-day details, or include
            tips for travelers.
          </p>
        </div>

        {/* Route Stops */}
        <div>
          <label className="block text-sm font-semibold text-foreground/70 mb-3">Route Stops</label>

          {/* Search with Filter */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-12 py-3 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-card text-foreground placeholder:text-muted-foreground"
            />
            <button
              onClick={() => setShowFilter(true)}
              className="absolute right-2 top-2 p-2 bg-accent rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              title="Filter map pins"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>

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
                  placeholder={
                    i === 0
                      ? "Starting point"
                      : i === stops.length - 1
                        ? "Destination"
                        : `Stop ${i + 1}`
                  }
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
          <h3 className="font-heading font-bold text-navy-dark mb-3">Trip Summary</h3>
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
        <div>
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
        </div>
      </div>

      <FilterModal open={showFilter} onClose={() => setShowFilter(false)} />
    </>
  );
};

export default CreateTripSidebar;
