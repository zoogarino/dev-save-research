import { useEffect } from "react";
import { usePopup } from "@/contexts/PopupContext";
import { X } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

const ExitIntentPopup = () => {
  const { activePopup, showPopup, closePopup, hasSubscribed } = usePopup();

  useEffect(() => {
    if (hasSubscribed) return;
    let hasTriggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        hasTriggered = true;
        showPopup("exit");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasSubscribed, showPopup]);

  if (activePopup !== "exit") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 animate-slideUp">
        <button onClick={closePopup} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <p className="text-4xl mb-3">✋</p>
          <h3 className="text-2xl font-heading font-bold text-navy-dark mb-2">Before You Go...</h3>
          <p className="text-muted-foreground">Get our free Namibia travel guide delivered to your inbox.</p>
        </div>

        <NewsletterForm location="exit_intent" buttonText="Get Free Guide" tags={["exit_intent"]} />
      </div>
    </div>
  );
};

export default ExitIntentPopup;
