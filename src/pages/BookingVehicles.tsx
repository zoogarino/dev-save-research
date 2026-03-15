import Layout from "@/components/Layout";
import { Truck, ArrowRight } from "lucide-react";

const vehicles = [
  { emoji: "🚙", name: "4x4 SUV (2 Seats)", desc: "Perfect for couples exploring Namibia's rugged terrain", price: "From N$1,200/day" },
  { emoji: "🚗", name: "4x4 SUV (5 Seats)", desc: "Ideal for families and small groups", price: "From N$1,500/day" },
  { emoji: "⛺", name: "Camping Equipped 4x4", desc: "Rooftop tent, kitchen & all camping gear included", price: "From N$2,000/day" },
  { emoji: "🚐", name: "Large Camper", desc: "Full campervan with beds, kitchen & bathroom", price: "From N$2,800/day" },
];

const BookingVehicles = () => (
  <Layout className="bg-muted">
    <div className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Truck className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-navy-dark mb-4">
            Vehicle Rentals
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from trusted Namibian rental companies. 4x4s, camping-equipped vehicles, and campers for every adventure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {vehicles.map((v) => (
            <div key={v.name} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="text-4xl mb-3">{v.emoji}</div>
              <h3 className="font-heading font-bold text-navy-dark text-lg mb-1">{v.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{v.desc}</p>
              <p className="text-primary font-bold text-sm">{v.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/booking" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors">
            Get a Quote <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export default BookingVehicles;
