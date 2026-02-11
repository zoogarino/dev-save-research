import { ThumbsUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const reports = [
  {
    status: "bg-success",
    location: "B1 South of Windhoek",
    date: "2 days ago",
    text: "Gravel road in good condition, some corrugation after km 45",
    helpful: 12,
  },
  {
    status: "bg-warning",
    location: "C27 to Sossusvlei",
    date: "5 days ago",
    text: "Deep sand patches near entrance. 4x4 required, deflate tires.",
    helpful: 24,
  },
  {
    status: "bg-success",
    location: "D707 Damaraland",
    date: "1 week ago",
    text: "Rocky in sections but passable. Watch for wildlife.",
    helpful: 8,
  },
];

const RoadConditions = () => (
  <section className="section-padding bg-muted">
    <div className="section-container">
      <div className="grid lg:grid-cols-5 gap-8">
        {/* Left */}
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-heading font-bold text-navy-dark mb-3">
            Real-Time Road Conditions
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Community reports from travelers on the ground. Help keep info
            current by sharing your experiences.
          </p>

          <div className="space-y-4">
            {reports.map((r, i) => (
              <motion.div
                key={r.location}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-card p-5 rounded-lg shadow-sm"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${r.status}`} />
                    <span className="font-bold text-navy-dark">
                      {r.location}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {r.date}
                  </span>
                </div>
                <p className="text-muted-foreground mb-3">{r.text}</p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <ThumbsUp size={14} />
                  <span>{r.helpful} found helpful</span>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="mt-6 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-colors">
            View Full Road Conditions Forum <ArrowRight size={16} />
          </button>
        </div>

        {/* Right - Map preview */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-xl p-4 shadow-lg sticky top-24">
            <h3 className="font-heading font-bold text-navy-dark mb-3">
              Recent Reports Map
            </h3>
            <div className="h-80 bg-muted rounded-lg flex items-center justify-center text-muted-foreground font-medium">
              Map Preview
            </div>
            <div className="flex items-center gap-6 mt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-success" /> Good Condition
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-warning" /> Caution Advised
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-destructive" /> Poor/Closed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RoadConditions;
