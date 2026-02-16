import { useEffect } from "react";
import { usePopup } from "@/contexts/PopupContext";
import { X } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

interface ScrollPopupProps {
  triggerPercentage?: number;
}

const ScrollPopup = ({ triggerPercentage = 50 }: ScrollPopupProps) => {
  const { activePopup, showPopup, closePopup, hasSubscribed } = usePopup();

  useEffect(() => {
    if (hasSubscribed) return;
    let hasTriggered = false;

    const handleScroll = () => {
      if (hasTriggered) return;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (window.scrollY / documentHeight) * 100;
      if (percentage >= triggerPercentage) {
        hasTriggered = true;
        showPopup("scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasSubscribed, showPopup, triggerPercentage]);

  if (activePopup !== "scroll") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 animate-slideUp">
        <button onClick={closePopup} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <p className="text-4xl mb-3">🎁</p>
          <h3 className="text-2xl font-heading font-bold text-navy-dark mb-2">Enjoying This Guide?</h3>
          <p className="text-muted-foreground">Get more expert tips delivered weekly.</p>
        </div>

        <NewsletterForm location="scroll_popup" buttonText="Subscribe Free" tags={["scroll_popup"]} />
      </div>
    </div>
  );
};

export default ScrollPopup;
