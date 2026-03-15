import Layout from "@/components/Layout";
import { Building2, ArrowRight } from "lucide-react";

const types = [
  { emoji: "🏨", name: "Lodges & Hotels", desc: "Comfortable stays with stunning views across Namibia" },
  { emoji: "⛺", name: "Campsites", desc: "Well-maintained sites in national parks and private reserves" },
  { emoji: "🏡", name: "Guest Farms", desc: "Authentic Namibian farm stays and homestays" },
  { emoji: "✨", name: "Luxury Retreats", desc: "Premium safari lodges and exclusive desert camps" },
];

const BookingAccommodation = () => (
  <Layout className="bg-muted">
    <div className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="w-14 h-14 bg-ochre/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Building2 className="w-7 h-7 text-ochre" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-navy-dark mb-4">
            Accommodation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From luxury lodges to rustic campsites — find the perfect place to rest on your Namibian adventure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {types.map((t) => (
            <div key={t.name} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-ochre/30 transition-all">
              <div className="text-4xl mb-3">{t.emoji}</div>
              <h3 className="font-heading font-bold text-navy-dark text-lg mb-1">{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/booking" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors">
            Inquire Now <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export default BookingAccommodation;
