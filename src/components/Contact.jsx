import phoneIcon from "../../images/icons/phone-icon.png";
import instagramIcon from "../../images/icons/Instagram-icon.png";
import whatsappIcon from "../../images/icons/WhatsApp-icon.png";
import locationIcon from "../../images/icons/location-icon.png";

function Contact() {
  return (
    <section id="contacts" className="section contact-section">
      <div className="section-header">
        <div className="contact-details">
          <div className="contact-tag">
            <img src={phoneIcon} alt="Phone" className="contact-icon" />
            <span>+420 723 439 293</span>
          </div>

          <a
            href="https://www.instagram.com/direct/t/101290281502870"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-tag"
          >
            <img src={instagramIcon} alt="Instagram" className="contact-icon" />
            <span>Instagram</span>
          </a>

          <a
            href="https://wa.me/420723439293"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-tag"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="contact-icon" />
            <span>WhatsApp</span>
          </a>

          <div className="contact-tag">
            <img src={locationIcon} alt="Location" className="contact-icon" />
            <span>Krásné náměstí 5, Praha</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
