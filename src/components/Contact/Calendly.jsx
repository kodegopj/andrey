import { useEffect } from "react";
import "../../styles/Calendly.css";
import { Link } from "react-router-dom";

const Calendly = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="contact-section" id="calendly">
      <div className="contact-container">

        <div className="contact-header">
          <h1>Book a Call</h1>
          <p>
            Have a project in mind? Let's discuss how I can help.
          </p>
        </div>

        <div className="calendly-container">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/pauljohncunanan5/30min"
          ></div>
        </div>

      </div>
    </section>
  );
};

export default Calendly;