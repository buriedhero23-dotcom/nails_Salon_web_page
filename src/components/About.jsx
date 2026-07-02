import salonPhoto from "../../images/salon.jpg";

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-header">
        <p className="section-label">O mně</p>
        <h2 className="section-title">Luxusní péče o vaše nehty</h2>
      </div>
      <div className="about-layout">
        <div className="about-text">
          <h3>Osobní přístup a styl</h3>
          <p>
            V RunaNails Studio vytváříme jemné a elegantní nehtové designy s důrazem na
            kvalitu a čisté linie. Každou návštěvu ladíme do pohodového salonu s
            příjemnou atmosférou a profesionálním přístupem.
          </p>
          <p>
            Naše služby zahrnují péči o nehty, modeláže, doplňování barev a stylový nail art.
            Design je vytvořen tak, aby byl nadčasový, elegantní a přesně podle vašeho přání.
          </p>
        </div>
        <div className="about-photo">
          <img
            src={salonPhoto}
            alt="RunaNails Studio salon interior"
            className="about-photo-img"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
