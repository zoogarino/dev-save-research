import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const orgs = [
{
  name: "Tangeni Shilongo Namibia",
  url: "https://tangenishilongo.org",
  gradient: "from-yellow-600 via-red-600 to-green-700",
  description:
  "Supporting educational programs and providing school supplies, infrastructure improvements, and scholarship opportunities to students across Namibia's rural communities.",
  impact: [
  "1,200+ students supported annually",
  "15 schools in rural areas",
  "School supplies and infrastructure"]

},
{
  name: "Elephant Human Relations Aid (EHRA)",
  url: "https://www.desertelephant.org",
  gradient: "from-gray-700 to-gray-900",
  description:
  "Protecting Namibia's rare desert-adapted elephants through community-based conservation, conflict mitigation, and research in the Kunene Region.",
  impact: [
  "150+ desert elephants protected",
  "Human-wildlife conflict reduced 60%",
  "20+ local jobs created"]

},
{
  name: "Oonte Orphans and Vulnerable Children (OVC) Centre",
  url: "https://oonte.org",
  gradient: "from-blue-900 to-blue-700",
  description:
  "Providing holistic care, education, nutrition, and psychosocial support for orphaned and vulnerable children in northern Namibia.",
  impact: [
  "80+ children in residential care",
  "200+ families supported",
  "Education and healthcare provided"]

}];


const stats = [
{ value: "700+", label: "Travelers Supporting Change" },
{ value: "$42,000+", label: "Donated Since 2020" },
{ value: "3", label: "Partner Organizations" }];


const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const SupportNamibiaPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-dark to-gray-900 text-white pt-32 pb-20">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Travel With Purpose
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Every journey you take helps build a better future for Namibia
          </p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="bg-card py-20">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-navy-dark mb-6 text-center">
            Sustainability and the Community At Large
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p>
              For Namibia's conservation efforts to succeed long-term, they must
              be led by Namibians themselves. Education provides local
              communities with the environmental knowledge and technical skills
              to develop solutions tailored to their unique challenges—from
              managing water scarcity in the Namib Desert to protecting
              biodiversity in Etosha National Park.
            </p>
            <p>
              In tourism, this approach creates tangible benefits. When educated
              Namibians develop and operate their own tourism enterprises,
              economic gains stay within the community. Visitors experience
              authentic cultural connections, while local heritage is preserved
              and livelihoods are strengthened.
            </p>
            <p>
              Beyond conservation, education expands opportunity across every
              aspect of life—opening pathways to meaningful employment, improving
              health outcomes, and empowering Namibians to shape their own
              future.
            </p>
            <p className="font-semibold text-navy-dark">
              At Pocket Guide Namibia, we're committed to supporting this
              vision. We promote environmental conservation while championing
              educational opportunities for the people who call this
              extraordinary landscape home.
            </p>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="bg-accent py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            {...fadeUp}
            className="text-4xl font-heading font-bold text-navy-dark mb-12 text-center">

            How Your Bookings Make a Difference
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-card rounded-xl p-8 shadow-lg border-l-4 border-primary">

              <div className="text-5xl font-bold text-primary mb-4">5%</div>
              <h3 className="text-2xl font-heading font-bold text-navy-dark mb-3">
                Standard Bookings
              </h3>
              <p className="text-muted-foreground">
                When you book vehicles, accommodations, or activities through
                Pocket Guide Namibia, 5% of our commission goes directly to
                support our partner organizations.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-card rounded-xl p-8 shadow-lg border-l-4 border-ochre">

              <div className="text-5xl font-bold text-ochre mb-4">10%</div>
              <h3 className="text-2xl font-heading font-bold text-navy-dark mb-3">
                Premium Members
              </h3>
              <p className="text-muted-foreground">
                Pocket Guide Premium subscribers contribute even more—10% of
                membership fees directly support education and conservation
                initiatives across Namibia.
              </p>
            </motion.div>
          </div>

          <p className="text-center text-lg text-muted-foreground">
            100% of designated funds go directly to our partner
            organizations—no administrative fees deducted.
          </p>
        </div>
      </section>

      {/* Partner Organizations */}
      <section className="bg-card py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-navy-dark mb-4">
              Take a closer look into some of the projects we are currently
              working with
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We partner with organizations making real, measurable impact in
              conservation, education, and community development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {orgs.map((org, i) =>
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

                {/* Image area */}
                <div className="relative h-80 overflow-hidden">
                  <div
                  className={`absolute inset-0 bg-gradient-to-br ${org.gradient}`} />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-heading font-bold text-white">
                      {org.name}
                    </h3>
                  </div>
                  <a
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition shadow-lg">

                    <ExternalLink className="w-5 h-5 text-primary-foreground" />
                  </a>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {org.description}
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold text-primary mb-2">
                      Impact:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {org.impact.map((item) =>
                    <li key={item}>• {item}</li>
                    )}
                    </ul>
                  </div>
                  <a
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:underline">

                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground py-20">
        
























      </section>

      {/* CTA */}
      <section className="bg-card py-20">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading font-bold text-navy-dark mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Start planning your Namibian adventure and contribute to these
            life-changing initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/trips")}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary-dark transition shadow-lg">

              Start Planning Your Trip
            </button>
            <button
              onClick={() => navigate("/booking")}
              className="px-8 py-4 bg-card text-primary border-2 border-primary rounded-xl font-bold text-lg hover:bg-accent transition">

              Book Your Vehicle
            </button>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            Every booking helps build a better future for Namibia
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>);

};

export default SupportNamibiaPage;