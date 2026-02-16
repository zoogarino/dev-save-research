import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface PopupContextType {
  activePopup: string | null;
  hasSubscribed: boolean;
  showPopup: (type: string) => void;
  closePopup: () => void;
  onSubscribe: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const usePopup = () => {
  const ctx = useContext(PopupContext);
  if (!ctx) throw new Error("usePopup must be used within PopupProvider");
  return ctx;
};

export function PopupProvider({ children }: { children: ReactNode }) {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [hasSubscribed, setHasSubscribed] = useState(false);
  const [hasClosedPopup, setHasClosedPopup] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("newsletter_subscribed") === "true") {
      setHasSubscribed(true);
      return;
    }
    if (sessionStorage.getItem("popup_closed") === "true") {
      setHasClosedPopup(true);
    }
  }, []);

  const showPopup = (type: string) => {
    if (!hasSubscribed && !hasClosedPopup && !activePopup) {
      setActivePopup(type);
    }
  };

  const closePopup = () => {
    setActivePopup(null);
    setHasClosedPopup(true);
    sessionStorage.setItem("popup_closed", "true");
  };

  const onSubscribe = () => {
    setHasSubscribed(true);
    setActivePopup(null);
    localStorage.setItem("newsletter_subscribed", "true");
  };

  return (
    <PopupContext.Provider value={{ activePopup, hasSubscribed, showPopup, closePopup, onSubscribe }}>
      {children}
    </PopupContext.Provider>
  );
}
