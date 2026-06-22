function Contact() {
  return (
    <section id="contacts" className="section contact-section">
      <div className="section-header">
        <p className="section-label">Kontakty</p>
        <h2 className="section-title">Rezervace a kontakt</h2>
      </div>
      <div className="contact-card">
        <h3>Stačí napsat nebo zavolat</h3>
        <p>Rezervujte si svůj čas v RunaNails Studio a zažijte prvotřídní nehtovou péči.</p>
        <div className="contact-details">
          <div className="contact-tag">Telefon: +420 123 456 789</div>
          <div className="contact-tag">Email: info@runanails.cz</div>
          <div className="contact-tag">Adresa: Krásné náměstí 5, Praha</div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
