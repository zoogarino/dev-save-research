import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { GA_ID } from "@/utils/analytics";
import { PopupProvider } from "@/contexts/PopupContext";
import PopupManager from "@/components/PopupManager";
import Index from "./pages/Index";
import TripBuilder from "./pages/TripBuilder";
import Booking from "./pages/Booking";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import SupportNamibia from "./pages/SupportNamibia";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const GoogleAnalytics = () => {
  useEffect(() => {
    if (GA_ID === 'G-XXXXXXXXXX') return; // Skip if placeholder
    const script1 = document.createElement('script');
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `;
    document.head.appendChild(script2);
  }, []);
  return null;
};

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [hash, pathname]);
  return null;
};

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
