import { useState } from "react";
import Layout from "@/components/Layout";
import { Search, Map, X, ChevronLeft, ChevronRight, MapPin, CheckCircle, Building2, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";

const accommodationTypes = [
  "Hotels",
  "Camping & Lodges",
  "Backpackers",
  "Self Catering",
  "Lodges",
  "Camping",
];

type PanelView = "hidden" | "details" | "inquiry" | "success";

const BookingAccommodation = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [panelView, setPanelView] = useState<PanelView>("hidden");

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const resetFilters = () => {
    setSelectedTypes([]);
    setSearchQuery("");
  };

  // Mock: open detail panel (will be triggered by map pin click)
  const openDetails = () => setPanelView("details");

  return (
    <Layout fullBleed>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-navy-dark to-foreground py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Find Your Perfect Stay in Namibia
          </h1>
          <p className="text-xl text-primary-foreground/70 mb-8">
            Browse our interactive map to discover lodges, camps, and accommodations
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search locations, lodge names, or regions… e.g., 'Sossusvlei', 'Etosha'"
                className="w-full pl-12 pr-4 py-4 h-14 rounded-xl text-base border-2 border-transparent focus-visible:ring-0 focus-visible:border-primary"
              />
            </div>
            <p className="text-sm text-primary-foreground/50 mt-2">
              💡 Tip: Use the map search to find accommodations across Namibia
            </p>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex h-[calc(100vh-200px)]">
        {/* Left Sidebar – Filters */}
        <div className="hidden md:flex flex-col w-80 min-w-[320px] bg-card border-r border-border overflow-y-auto">
          <div className="p-6 sticky top-0 bg-card border-b border-border z-10">
            <h3 className="text-lg font-heading font-bold text-navy-dark mb-1">Filters</h3>
            <p className="text-sm text-muted-foreground">Refine your search</p>
          </div>

          <div className="p-6 space-y-6">
            {/* Accommodation Type */}
            <div>
              <h4 className="font-semibold text-navy-dark mb-3">Accommodation Type</h4>
              <div className="space-y-3">
                {accommodationTypes.map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <Checkbox
                      checked={selectedTypes.includes(type)}
                      onCheckedChange={() => toggleType(type)}
                    />
                    <span className="text-foreground/70 group-hover:text-primary transition">
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={resetFilters}
            >
              Reset All Filters
            </Button>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Showing{" "}
                <span className="font-bold text-navy-dark">89 properties</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side – Map Area */}
        <div className="flex-1 relative p-4 md:p-6 bg-muted/30">
          <div className="h-full w-full border border-border rounded-xl shadow-lg overflow-hidden relative bg-muted">
            {/* Placeholder Map */}
            <div
              className="h-full w-full flex items-center justify-center cursor-pointer"
              onClick={openDetails}
            >
              <div className="text-center p-8">
                <Map className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-foreground font-semibold mb-2">
                  Interactive Map Goes Here
                </p>
                <p className="text-sm text-muted-foreground max-w-md">
                  DEVS: Integrate Mapbox map here with accommodation pins from
                  app database. Click anywhere to preview the details panel.
                </p>
              </div>
            </div>

            {/* Sliding Panel */}
            <AnimatePresence>
              {panelView !== "hidden" && (
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 250 }}
                  className="absolute top-0 right-0 h-full w-full sm:w-96 bg-card shadow-2xl overflow-y-auto z-20"
                >
                  {/* Details View */}
                  {panelView === "details" && (
                    <DetailsPanel
                      onClose={() => setPanelView("hidden")}
                      onInquire={() => setPanelView("inquiry")}
                    />
                  )}

                  {/* Inquiry Form */}
                  {panelView === "inquiry" && (
                    <InquiryPanel
                      onBack={() => setPanelView("details")}
                      onSubmit={() => setPanelView("success")}
                    />
                  )}

                  {/* Success */}
                  {panelView === "success" && (
                    <SuccessPanel onBrowse={() => setPanelView("hidden")} />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Layout>
  );
};

/* ─── Details Panel ────────────────────────────────────────── */
function DetailsPanel({
  onClose,
  onInquire,
}: {
  onClose: () => void;
  onInquire: () => void;
}) {
  const [imgIndex, setImgIndex] = useState(0);
  const images = ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"];

  return (
    <>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-card/80 hover:bg-card transition"
      >
        <X className="w-5 h-5 text-foreground" />
      </button>

      {/* Image Carousel */}
      <div className="relative h-64 bg-muted">
        <img
          src={images[imgIndex]}
          alt="Accommodation"
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => setImgIndex((i) => Math.max(0, i - 1))}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-card/80 rounded-full hover:bg-card transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() =>
            setImgIndex((i) => Math.min(images.length - 1, i + 1))
          }
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-card/80 rounded-full hover:bg-card transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground/60 text-primary-foreground text-sm rounded-full">
          {imgIndex + 1} / {images.length}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-2xl font-heading font-bold text-navy-dark mb-2">
          Sossusvlei Lodge
        </h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
          <MapPin className="w-4 h-4" />
          <span>Sossusvlei, Namib-Naukluft Park</span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-warning text-warning"
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">(127 reviews)</span>
        </div>

        {/* Price */}
        <div className="bg-accent rounded-lg p-4 mb-6">
          <p className="text-sm text-muted-foreground mb-1">From</p>
          <p className="text-3xl font-bold text-navy-dark">
            N$3,500
            <span className="text-lg font-normal text-muted-foreground">
              /night
            </span>
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            2 people, breakfast included
          </p>
        </div>

        {/* Category */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-ochre/10 text-ochre rounded-full text-sm font-semibold">
            🏨 Luxury Lodge
          </span>
        </div>

        {/* About */}
        <div className="mb-6">
          <h3 className="font-semibold text-navy-dark mb-2">About</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Luxury lodge at the gates of Sossusvlei with stunning desert views.
            Experience world-class hospitality in the heart of the Namib Desert.
          </p>
        </div>

        {/* Amenities */}
        <div className="mb-6">
          <h3 className="font-semibold text-navy-dark mb-3">Amenities</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[
              "Swimming pool",
              "Restaurant & bar",
              "Air conditioning",
              "WiFi",
              "Park permits",
            ].map((a) => (
              <div key={a} className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary">•</span>
                {a}
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3 pt-6 border-t border-border">
          <Button className="w-full" size="lg" onClick={onInquire}>
            Send Booking Inquiry
          </Button>
          <Button variant="outline" className="w-full" size="lg">
            View on Website ↗
          </Button>
        </div>
      </div>
    </>
  );
}

/* ─── Inquiry Panel ────────────────────────────────────────── */
function InquiryPanel({
  onBack,
  onSubmit,
}: {
  onBack: () => void;
  onSubmit: () => void;
}) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-primary-foreground">
        <button
          onClick={onBack}
          className="mb-4 flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Details</span>
        </button>
        <h2 className="text-2xl font-heading font-bold">Inquire About</h2>
        <p className="text-lg opacity-90">Sossusvlei Lodge</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Dates & Guests */}
        <div>
          <label className="block text-sm font-semibold text-navy-dark mb-2">
            When do you need it?
          </label>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs text-muted-foreground mb-1">
                Check-in
              </label>
              <Input type="date" />
            </div>
            <div>
              <label className="block text-xs text-muted-foreground mb-1">
                Check-out
              </label>
              <Input type="date" />
            </div>
            <div>
              <label className="block text-xs text-muted-foreground mb-1">
                Guests
              </label>
              <Input type="number" min={1} defaultValue={2} />
            </div>
          </div>
        </div>

        {/* Your Information */}
        <div>
          <h3 className="text-sm font-semibold text-navy-dark mb-3">
            Your Information
          </h3>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="First Name" required />
              <Input placeholder="Last Name" required />
            </div>
            <Input type="email" placeholder="Email" required />
            <Input type="tel" placeholder="Phone" />
          </div>
        </div>

        {/* Special Requests */}
        <div>
          <label className="block text-sm font-semibold text-navy-dark mb-2">
            Special Requests (optional)
          </label>
          <Textarea
            rows={4}
            placeholder="Dietary requirements, late check-in, accessibility needs, etc."
            className="resize-none"
          />
        </div>

        {/* Add to Favorites */}
        <label className="flex items-center gap-3 cursor-pointer">
          <Checkbox />
          <span className="text-sm text-muted-foreground">
            Add to Favorites
          </span>
        </label>

        <Button type="submit" className="w-full text-lg" size="lg">
          Send Inquiry
        </Button>
      </form>
    </>
  );
}

/* ─── Success Panel ────────────────────────────────────────── */
function SuccessPanel({ onBrowse }: { onBrowse: () => void }) {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 text-center">
      <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mb-6">
        <CheckCircle className="w-12 h-12 text-success" />
      </div>
      <h2 className="text-3xl font-heading font-bold text-navy-dark mb-3">
        Inquiry Sent!
      </h2>
      <p className="text-muted-foreground mb-8 max-w-sm">
        We'll review your request and get back to you within 24 hours with
        availability and pricing.
      </p>
      <Button size="lg" onClick={onBrowse}>
        Browse More Accommodation
      </Button>
    </div>
  );
}

export default BookingAccommodation;
