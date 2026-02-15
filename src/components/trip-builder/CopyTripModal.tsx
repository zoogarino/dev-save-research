import { useState } from "react";
import { X, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RichTextEditor from "./RichTextEditor";

interface CopyTripModalProps {
  open: boolean;
  onClose: () => void;
  tripName: string;
  tripDescription?: string;
}

const CopyTripModal = ({ open, onClose, tripName, tripDescription = "" }: CopyTripModalProps) => {
  const [title, setTitle] = useState(`Copy of ${tripName}`);
  const [description, setDescription] = useState(tripDescription);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-foreground/50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] flex flex-col"
          >
            <div className="flex items-start justify-between p-5 border-b border-border flex-shrink-0">
              <div>
                <h3 className="font-heading font-bold text-navy-dark text-lg">
                  Copy & Customize Trip
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Editing: {tripName}
                </p>
              </div>
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground p-1">
                <X size={20} />
              </button>
            </div>

            {copied ? (
              <div className="p-8 text-center">
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check size={20} className="text-success" />
                </div>
                <p className="font-heading font-bold text-navy-dark">Trip Copied!</p>
                <p className="text-sm text-muted-foreground mt-1">Find it in "My Trips"</p>
              </div>
            ) : (
              <>
                <div className="p-5 space-y-4 overflow-y-auto flex-1">
                  <div>
                    <label className="block text-xs font-semibold text-foreground/70 mb-1">
                      Trip Title
                    </label>
                    <input
                      type="text"
                      maxLength={50}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-card font-semibold text-navy-dark"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {50 - title.length} characters remaining
                    </p>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground/70 mb-1">
                      Trip Description
                    </label>
                    <RichTextEditor content={description} onChange={setDescription} />
                    <p className="text-xs text-muted-foreground mt-1">
                      💡 Edit the description to personalize it for your journey
                    </p>
                  </div>
                </div>
                <div className="p-5 border-t border-border flex-shrink-0">
                  <button
                    onClick={handleCopy}
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-3 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    <Copy size={16} /> Save My Custom Trip
                  </button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Your customized trip will be saved to "My Trips"
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CopyTripModal;
