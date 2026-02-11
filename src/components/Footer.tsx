import { Compass } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-gray-300 pt-16 pb-8">
    <div className="section-container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Col 1 */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Compass className="h-7 w-7 text-primary" />
            <span className="font-heading font-bold text-lg text-white">
              Pocket Guide Namibia
            </span>
          </div>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            Start Your Journey, Explore Namibia Like Never Before!
          </p>
          <div className="flex gap-4">
            {/* Social placeholders */}
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-sm font-bold text-white">
              IG
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-sm font-bold text-white">
              FB
            </a>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-heading font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Support Namibia</a></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-heading font-semibold text-white mb-4">Support</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Use</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="font-heading font-semibold text-white mb-4">Get the App</h4>
          <div className="space-y-3">
            <div className="bg-white/10 rounded-lg px-4 py-3 text-sm text-gray-400 hover:bg-white/20 transition-colors cursor-pointer">
              📱 Google Play
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-3 text-sm text-gray-400 hover:bg-white/20 transition-colors cursor-pointer">
              🍎 App Store
            </div>
            <div className="mt-4 w-24 h-24 bg-white/10 rounded-lg flex items-center justify-center text-xs text-gray-500">
              QR Code
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Pocket Guide Namibia. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
