import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TripPlanningHub from "@/components/TripPlanningHub";
import PreBuiltTrips from "@/components/PreBuiltTrips";
import WhyPocketGuide from "@/components/WhyPocketGuide";
import RoadConditions from "@/components/RoadConditions";
import SupportNamibia from "@/components/SupportNamibia";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen" id="main-content">
    <Navbar />
    <HeroSection />
    <TripPlanningHub />
    <PreBuiltTrips />
    <WhyPocketGuide />
    <RoadConditions />
    <SupportNamibia />
    <HowItWorks />
    <Footer />
  </div>
);

export default Index;
