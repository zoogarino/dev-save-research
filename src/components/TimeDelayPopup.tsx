import { useEffect } from "react";
import { usePopup } from "@/contexts/PopupContext";
import { X } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

interface TimeDelayPopupProps {
  delaySeconds?: number;
}

const TimeDelayPopup = ({ delaySeconds = 30 }: TimeDelayPopupProps) => {
  const { activePopup, showPopup, closePopup, hasSubscribed } = usePopup();

  useEffect(() => {
    if (hasSubscribed) return;
    const timeoutId = setTimeout(() => showPopup("time"), delaySeconds * 1000);
    return () => clearTimeout(timeoutId);
  }, [hasSubscribed, showPopup, delaySeconds]);

  if (activePopup !== "time") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 animate-slideUp">
        <button onClick={closePopup} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <p className="text-4xl mb-3">📬</p>
          <h3 className="text-2xl font-heading font-bold text-navy-dark mb-2">Planning a Namibia Trip?</h3>
          <p className="text-muted-foreground">Get our free starter guide.</p>
        </div>

        <NewsletterForm location="time_delay" buttonText="Get Free Guide" tags={["time_delay"]} />
      </div>
    </div>
  );
};

export default TimeDelayPopup;
