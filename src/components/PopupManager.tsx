import ExitIntentPopup from "./ExitIntentPopup";
import ScrollPopup from "./ScrollPopup";
import TimeDelayPopup from "./TimeDelayPopup";

interface PopupManagerProps {
  enableExitIntent?: boolean;
  enableScroll?: boolean;
  enableTimeDelay?: boolean;
  scrollTrigger?: number;
  timeDelay?: number;
}

const PopupManager = ({
  enableExitIntent = true,
  enableScroll = true,
  enableTimeDelay = true,
  scrollTrigger = 50,
  timeDelay = 30,
}: PopupManagerProps) => (
  <>
    {enableExitIntent && <ExitIntentPopup />}
    {enableScroll && <ScrollPopup triggerPercentage={scrollTrigger} />}
    {enableTimeDelay && <TimeDelayPopup delaySeconds={timeDelay} />}
  </>
);

export default PopupManager;
