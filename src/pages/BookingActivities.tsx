import Layout from "@/components/Layout";
import { Sparkles, ArrowRight } from "lucide-react";

const activities = [
  { emoji: "🦁", name: "Safari Game Drives", desc: "Guided drives through Etosha and private reserves" },
  { emoji: "🏜️", name: "Desert Experiences", desc: "Dune climbing, sandboarding, and stargazing tours" },
  { emoji: "🚁", name: "Scenic Flights", desc: "Aerial tours over the Skeleton Coast and Sossusvlei" },
  { emoji: "🤿", name: "Coastal Adventures", desc: "Kayaking, dolphin cruises, and seal colony visits" },
];

const BookingActivities = () => (
  <Layout className="bg-muted">
    <div className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="w-14 h-14 bg-terracotta/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-7 h-7 text-terracotta" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-navy-dark mb-4">
            Activities & Tours
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Safaris, scenic flights, desert adventures, and coastal experiences — make your trip unforgettable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {activities.map((a) => (
            <div key={a.name} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-terracotta/30 transition-all">
              <div className="text-4xl mb-3">{a.emoji}</div>
              <h3 className="font-heading font-bold text-navy-dark text-lg mb-1">{a.name}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/booking" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors">
            Book an Activity <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export default BookingActivities;
