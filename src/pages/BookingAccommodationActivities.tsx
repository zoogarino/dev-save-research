import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import {
  Search, Sparkles, X, ChevronLeft, ChevronRight, MapPin, Clock,
  Star, Check, CheckCircle, Heart, SlidersHorizontal, ExternalLink, Truck,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";

/* ── Types ─────────────────────────────────────────────── */
type PinType = "accommodation" | "activity";
type PanelView = "hidden" | "details" | "inquiry" | "success";

/* ── Legend data ───────────────────────────────────────── */
const legendItems = [
  { color: "bg-blue-500", label: "Accommodation" },
  { color: "bg-warning", label: "Scenic Flights" },
  { color: "bg-terracotta", label: "Adventure Sports" },
  { color: "bg-success", label: "Wildlife & Safaris" },
  { color: "bg-purple-500", label: "Cultural Tours" },
];

/* ══════════════════════════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════════════════════════ */
const BookingAccommodationActivities = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [panelView, setPanelView] = useState<PanelView>("hidden");
  const [pinType, setPinType] = useState<PinType>("accommodation");

  const openDetails = (type: PinType) => {
    setPinType(type);
    setPanelView("details");
  };

  return (
    <Layout fullBleed>
      {/* ── Hero ──────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-primary-dark to-primary py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Book Accommodation &amp; Activities
          </h1>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Find lodges, camps, tours, and experiences across Namibia — all on one interactive map
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search lodges, activities, or regions… e.g., 'Sossusvlei', 'Balloon safari'"
                className="w-full pl-12 pr-4 py-4 h-14 rounded-xl text-base border-2 border-transparent focus-visible:ring-0 focus-visible:border-primary-foreground"
                maxLength={200}
              />
            </div>
            <p className="text-sm text-primary-foreground/60 mt-2">
              💡 Use the map search and filters below to explore all options
            </p>
          </div>
        </div>
      </div>

      {/* ── Map Section ──────────────────────────────── */}
      <div className="h-[calc(100vh-200px)] bg-muted/30 p-4 md:p-6">
        <div className="h-full w-full border border-border rounded-xl shadow-lg overflow-hidden relative bg-muted">

          {/* Placeholder Map */}
          <div className="h-full w-full flex items-center justify-center cursor-pointer"
            onClick={() => openDetails("accommodation")}
          >
            <div className="text-center p-8">
              <Sparkles className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-foreground font-semibold mb-2">Interactive Map Goes Here</p>
              <p className="text-sm text-muted-foreground max-w-md mb-4">
                DEVS: Replace with existing Mapbox map. Load pins from both accommodation AND activities databases. Click anywhere to preview panels.
              </p>
              <div className="flex gap-3 justify-center">
                <Button size="sm" variant="outline" onClick={(e) => { e.stopPropagation(); openDetails("accommodation"); }}>
                  Preview Accommodation
                </Button>
                <Button size="sm" variant="outline" onClick={(e) => { e.stopPropagation(); openDetails("activity"); }}>
                  Preview Activity
                </Button>
              </div>
            </div>
          </div>

          {/* Filter Button – Top Right */}
          <div className="absolute top-4 right-4 z-10">
            <Button variant="secondary" className="shadow-md gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              <span className="ml-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Button>
          </div>

          {/* Results Counter – Top Left */}
          <div className="absolute top-4 left-4 bg-card px-4 py-2 rounded-lg shadow-md z-10">
            <p className="text-sm font-semibold text-navy-dark">Showing 147 results</p>
            <p className="text-xs text-muted-foreground">89 accommodations • 58 activities</p>
          </div>

          {/* Legend – Bottom Left */}
          <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-md z-10">
            <p className="text-xs font-semibold text-navy-dark mb-2">Map Legend</p>
            <div className="space-y-1.5">
              {legendItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0`} />
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* ── Sliding Panel ────────────────────────── */}
          <AnimatePresence>
            {panelView !== "hidden" && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 250 }}
                className="absolute top-0 right-0 h-full w-full sm:w-[450px] bg-card shadow-2xl overflow-y-auto z-20"
              >
                {panelView === "details" && (
                  <DetailsPanel
                    pinType={pinType}
                    onClose={() => setPanelView("hidden")}
                    onInquire={() => setPanelView("inquiry")}
                  />
                )}
                {panelView === "inquiry" && (
                  <InquiryPanel
                    pinType={pinType}
                    onBack={() => setPanelView("details")}
                    onSubmit={() => setPanelView("success")}
                  />
                )}
                {panelView === "success" && (
                  <SuccessPanel
                    pinType={pinType}
                    onBrowse={() => setPanelView("hidden")}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Cross-Promotion Banner ───────────────────── */}
      <div className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Truck className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-heading font-bold text-navy-dark">Need a Vehicle?</p>
              <p className="text-sm text-muted-foreground">Book your 4×4 or camper to complete your Namibia adventure</p>
            </div>
          </div>
          <Button asChild>
            <Link to="/booking/vehicles">Book Vehicle →</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

/* ══════════════════════════════════════════════════════════
   DETAILS PANEL — adapts for accommodation vs activity
   ══════════════════════════════════════════════════════════ */
function DetailsPanel({
  pinType, onClose, onInquire,
}: { pinType: PinType; onClose: () => void; onInquire: () => void }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const images = ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"];

  const isAccommodation = pinType === "accommodation";

  return (
    <>
      <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-card/80 hover:bg-card transition">
        <X className="w-5 h-5 text-foreground" />
      </button>

      {/* Image Carousel */}
      <div className="relative h-64 bg-muted">
        <img src={images[imgIndex]} alt={isAccommodation ? "Accommodation" : "Activity"} className="w-full h-full object-cover" />
        <button onClick={() => setImgIndex((i) => Math.max(0, i - 1))}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-card/80 rounded-full hover:bg-card transition">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={() => setImgIndex((i) => Math.min(images.length - 1, i + 1))}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-card/80 rounded-full hover:bg-card transition">
          <ChevronRight className="w-5 h-5" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground/60 text-primary-foreground text-sm rounded-full">
          {imgIndex + 1} / {images.length}
        </div>
        <button className="absolute top-4 left-4 p-2 rounded-full bg-card/80 hover:bg-card transition">
          <Heart className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-2xl font-heading font-bold text-navy-dark mb-2">
          {isAccommodation ? "Sossusvlei Lodge" : "Sossusvlei Balloon Safari"}
        </h2>

        {/* Location / Duration */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{isAccommodation ? "Sossusvlei, Namib-Naukluft Park" : "Sossusvlei"}</span>
          </div>
          {!isAccommodation && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>1 hour</span>
            </div>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-warning text-warning" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({isAccommodation ? "127" : "89"} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="bg-accent rounded-lg p-4 mb-6">
          <p className="text-sm text-muted-foreground mb-1">From</p>
          <p className="text-3xl font-bold text-navy-dark">
            {isAccommodation ? "N$3,500" : "N$4,500"}
            <span className="text-lg font-normal text-muted-foreground">
              {isAccommodation ? "/night" : "/person"}
            </span>
          </p>
          {isAccommodation && (
            <p className="text-sm text-muted-foreground mt-1">2 people, breakfast included</p>
          )}
        </div>

        {/* Category Badge */}
        <div className="mb-6">
          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
            isAccommodation ? "bg-ochre/10 text-ochre" : "bg-terracotta/10 text-terracotta"
          }`}>
            {isAccommodation ? "🏨 Luxury Lodge" : "🎈 Adventure • Scenic Flight"}
          </span>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="font-semibold text-navy-dark mb-2">
            {isAccommodation ? "About This Property" : "About"}
          </h3>
          <p className={`text-muted-foreground text-sm leading-relaxed ${!expanded ? "line-clamp-3" : ""}`}>
            {isAccommodation
              ? "Luxury lodge at the gates of Sossusvlei with stunning desert views. Experience world-class hospitality in the heart of the Namib Desert. Our property offers the perfect base for exploring the iconic red dunes and ancient landscapes of this UNESCO World Heritage Site."
              : "Float over the world's oldest desert at sunrise. Witness the spectacular dunes of Sossusvlei from a unique perspective in this unforgettable hot air balloon experience."}
          </p>
          {isAccommodation && (
            <button onClick={() => setExpanded(!expanded)} className="text-sm text-primary font-medium mt-1 hover:underline">
              {expanded ? "Show less" : "Read more →"}
            </button>
          )}
        </div>

        {/* Amenities / Included */}
        <div className="mb-6">
          <h3 className="font-semibold text-navy-dark mb-3">
            {isAccommodation ? "Amenities & Features" : "What's Included"}
          </h3>
          {isAccommodation ? (
            <div className="grid grid-cols-2 gap-2 text-sm">
              {["Swimming pool", "Restaurant & bar", "Air conditioning", "WiFi in main areas", "Park permits assistance", "Guided tours available"].map((a) => (
                <div key={a} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {a}
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2 text-sm">
              {["1-hour balloon flight", "Champagne breakfast", "Hotel pick-up (Sesriem area)", "Flight certificate"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="space-y-3 pt-6 border-t border-border">
          <Button className="w-full" size="lg" onClick={onInquire}>
            Send Booking Inquiry
          </Button>
          <Button variant="outline" className="w-full gap-2" size="lg">
            View Website <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════════════
   INQUIRY PANEL — adaptive form fields
   ══════════════════════════════════════════════════════════ */
function InquiryPanel({
  pinType, onBack, onSubmit,
}: { pinType: PinType; onBack: () => void; onSubmit: () => void }) {
  const isAccommodation = pinType === "accommodation";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-dark to-primary p-6 text-primary-foreground">
        <button onClick={onBack} className="mb-4 flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition">
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Details</span>
        </button>
        <h2 className="text-2xl font-heading font-bold">Send Inquiry</h2>
        <p className="text-lg opacity-90">
          {isAccommodation ? "Sossusvlei Lodge" : "Sossusvlei Balloon Safari"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Section 1: Booking Details (adaptive) */}
        <div>
          <h3 className="text-sm font-semibold text-navy-dark mb-3">Booking Details</h3>

          {isAccommodation ? (
            <>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-xs text-muted-foreground mb-1">Check-in</label>
                  <Input type="date" required />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1">Check-out</label>
                  <Input type="date" required />
                </div>
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">Number of Guests</label>
                <Select defaultValue="2">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4].map((n) => (
                      <SelectItem key={n} value={String(n)}>{n} guest{n > 1 ? "s" : ""}</SelectItem>
                    ))}
                    <SelectItem value="5+">5+ guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-muted-foreground mb-1">Preferred Date</label>
                <Input type="date" required />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">Participants</label>
                <Select defaultValue="2">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4].map((n) => (
                      <SelectItem key={n} value={String(n)}>{n} {n === 1 ? "person" : "people"}</SelectItem>
                    ))}
                    <SelectItem value="5+">5+ people</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>

        {/* Section 2: Your Information */}
        <div>
          <h3 className="text-sm font-semibold text-navy-dark mb-3">Your Information</h3>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-muted-foreground mb-1">First Name</label>
                <Input placeholder="First Name" required maxLength={100} />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">Last Name</label>
                <Input placeholder="Last Name" required maxLength={100} />
              </div>
            </div>
            <div>
              <label className="block text-xs text-muted-foreground mb-1">Email Address</label>
              <Input type="email" placeholder="you@example.com" required maxLength={255} />
            </div>
            <div>
              <label className="block text-xs text-muted-foreground mb-1">Phone Number</label>
              <div className="flex gap-2">
                <Select defaultValue="+264">
                  <SelectTrigger className="w-24 flex-shrink-0"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+264">+264</SelectItem>
                    <SelectItem value="+27">+27</SelectItem>
                    <SelectItem value="+1">+1</SelectItem>
                    <SelectItem value="+44">+44</SelectItem>
                    <SelectItem value="+49">+49</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="tel" placeholder="Phone number" maxLength={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Additional Info */}
        <div>
          <h3 className="text-sm font-semibold text-navy-dark mb-3">Additional Information</h3>
          <label className="block text-xs text-muted-foreground mb-1">Special Requests (Optional)</label>
          <Textarea
            rows={4}
            placeholder="Any special requirements or questions? Let us know!"
            className="resize-none"
            maxLength={1000}
          />
        </div>

        {/* Section 4: Preferences */}
        <label className="flex items-start gap-3 cursor-pointer">
          <Checkbox className="mt-0.5" />
          <div>
            <span className="text-sm font-medium text-foreground">Add to My Favorites</span>
            <p className="text-xs text-muted-foreground">Save this property for easy access later</p>
          </div>
        </label>

        {/* Submit */}
        <div className="pt-2">
          <Button type="submit" className="w-full text-lg" size="lg">
            Send Inquiry
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-3">
            We'll get back to you within 24 hours with availability and pricing
          </p>
        </div>
      </form>
    </>
  );
}

/* ══════════════════════════════════════════════════════════
   SUCCESS PANEL
   ══════════════════════════════════════════════════════════ */
function SuccessPanel({
  pinType, onBrowse,
}: { pinType: PinType; onBrowse: () => void }) {
  const isAccommodation = pinType === "accommodation";
  const name = isAccommodation ? "Sossusvlei Lodge" : "Sossusvlei Balloon Safari";

  const steps = [
    "You'll receive a confirmation email shortly",
    isAccommodation ? "We'll contact the property for availability" : "We'll contact the provider for availability",
    "We'll send you options and pricing",
    "You choose and we'll finalize your booking",
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-8 text-center">
      <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mb-6">
        <CheckCircle className="w-12 h-12 text-success" />
      </div>
      <h2 className="text-3xl font-heading font-bold text-navy-dark mb-3">Inquiry Sent!</h2>
      <p className="text-muted-foreground mb-2">Thanks for your interest in <span className="font-semibold">{name}</span>.</p>
      <p className="text-muted-foreground mb-6 max-w-sm">
        We'll review your request and get back to you within 24 hours with availability and pricing.
      </p>

      {/* What Happens Next */}
      <div className="w-full max-w-sm bg-muted rounded-lg p-5 mb-8 text-left">
        <p className="text-sm font-semibold text-navy-dark mb-3">What happens next?</p>
        <div className="space-y-3">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              {step}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3 w-full max-w-sm">
        <Button className="w-full" size="lg" onClick={onBrowse}>
          Browse More Options
        </Button>
        <Button variant="outline" className="w-full" size="lg" onClick={onBrowse}>
          Close
        </Button>
      </div>
    </div>
  );
}

export default BookingAccommodationActivities;
