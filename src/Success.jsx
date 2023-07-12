import "./Success.scss";

import AnimatedCheckmark, {
  MODES,
} from "react-animated-checkmark/lib/AnimatedCheckmark";

function Uploaded() {
  return (
    <div className="uploaded-container">
      <AnimatedCheckmark mode={MODES.SUCCESS} />
      <p className="message">Sucessfully Uploaded!</p>
    </div>
  );
}

export default Uploaded;
