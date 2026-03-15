import Layout from "@/components/Layout";
import { Package, Bell } from "lucide-react";
import { useState } from "react";

const BookingPackages = () => {
  const [notified, setNotified] = useState(false);

  return (
    <Layout className="bg-muted">
      <div className="section-padding">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Package className="w-7 h-7 text-primary" />
            </div>
            <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
              COMING SOON
            </span>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-navy-dark mb-4">
              Complete Packages
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              All-inclusive trip packages with vehicle, accommodation, activities, and expert-planned routes — all in one booking. We're putting the finishing touches on this feature.
            </p>

            {notified ? (
              <div className="bg-success/10 border border-success/30 rounded-xl p-6">
                <p className="text-success font-semibold">🎉 You'll be the first to know when packages launch!</p>
              </div>
            ) : (
              <button
                onClick={() => setNotified(true)}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                <Bell size={18} /> Notify Me When Available
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookingPackages;
