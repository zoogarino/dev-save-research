import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PopupProvider } from "@/contexts/PopupContext";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ScrollToHash from "@/components/ScrollToHash";
import PopupManager from "@/components/PopupManager";
import Index from "./pages/Index";
import TripBuilder from "./pages/TripBuilder";
import Booking from "./pages/Booking";
import BookingVehicles from "./pages/BookingVehicles";
import BookingAccommodation from "./pages/BookingAccommodation";
import BookingActivities from "./pages/BookingActivities";
import BookingPackages from "./pages/BookingPackages";
import BookingAccommodationActivities from "./pages/BookingAccommodationActivities";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import SupportNamibia from "./pages/SupportNamibia";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PopupProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <GoogleAnalytics />
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/trips" element={<TripBuilder />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking/vehicles" element={<BookingVehicles />} />
            <Route path="/booking/accommodation" element={<BookingAccommodation />} />
            <Route path="/booking/activities" element={<BookingActivities />} />
            <Route path="/booking/packages" element={<BookingPackages />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/support-namibia" element={<SupportNamibia />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <PopupManager />
        </BrowserRouter>
      </PopupProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
