import { useState } from "react";
import { subscribeToNewsletter } from "@/utils/convertkit";
import { trackNewsletterSignup } from "@/utils/analytics";
import { CheckCircle } from "lucide-react";

interface NewsletterFormProps {
  location?: string;
  placeholder?: string;
  buttonText?: string;
  showFirstName?: boolean;
  tags?: string[];
  variant?: "default" | "dark" | "inline";
}

const NewsletterForm = ({
  location = "unknown",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  showFirstName = false,
  tags = [],
  variant = "default",
}: NewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    if (email.trim().length > 255) {
      setStatus("error");
      setMessage("Email is too long");
      return;
    }

    try {
      const result = await subscribeToNewsletter(email.trim(), location, firstName.trim(), tags);

      if (result.success) {
        trackNewsletterSignup(location);
        setStatus("success");
        setMessage("🎉 Success! Check your email to confirm.");
        setEmail("");
        setFirstName("");
        localStorage.setItem("newsletter_subscribed", "true");
      } else {
        setStatus("error");
        setMessage(result.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Oops! Please try again.");
    }
  };

  const inputClass =
    variant === "dark"
      ? "w-full px-4 py-3 rounded-lg text-foreground bg-card focus:outline-none focus:ring-2 focus:ring-primary"
      : "flex-1 px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary";

  const btnClass =
    variant === "dark"
      ? "w-full px-6 py-3 bg-card text-primary rounded-lg font-bold hover:bg-muted transition"
      : "px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary-dark transition whitespace-nowrap";

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 p-4 rounded-lg bg-success/10 text-success">
        <CheckCircle className="w-6 h-6 flex-shrink-0" />
        <p className="font-semibold">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {showFirstName && (
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name (optional)"
          maxLength={100}
          className={inputClass}
        />
      )}

      <div className={variant === "dark" ? "space-y-3" : "flex gap-2"}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          maxLength={255}
          disabled={status === "loading"}
          className={inputClass}
        />
        <button type="submit" disabled={status === "loading"} className={btnClass}>
          {status === "loading" ? "Subscribing..." : buttonText}
        </button>
      </div>

      {status === "error" && (
        <p className="text-destructive text-sm">{message}</p>
      )}

      <p className="text-xs text-muted-foreground">
        Join 12,000+ travelers. No spam. Unsubscribe anytime.
      </p>
    </form>
  );
};

export default NewsletterForm;
