const portfolioItems = [
  {
    title: "Růžové ombré",
    description: "Luxusní jemný přechod na delší tvary nehtů s lesklým povrchem.",
    image: new URL("../../images/portfolio/photo_1_2026-06-22_09-39-18.jpg", import.meta.url).href,
  },
  {
    title: "Krémová elegance",
    description: "Čistý minimalistický vzhled s jemnými detaily a nadčasovým šik stylem.",
    image: new URL("../../images/portfolio/photo_2_2026-06-22_09-39-18.jpg", import.meta.url).href,
  },
  {
    title: "Soft glam design",
    description: "Elegantní zdobení s perleťovým leskem a sofistikovanými odstíny růžové.",
    image: new URL("../../images/portfolio/photo_3_2026-06-22_09-39-18.jpg", import.meta.url).href,
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="section-header">
        <p className="section-label">Moje práce</p>
        <h2 className="section-title">Elegantní ukázky nehtových designů</h2>
      </div>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <article key={item.title} className="portfolio-card">
            <img src={item.image} alt={item.title} className="portfolio-image" />
            <div className="portfolio-card-content">
              <h3 className="portfolio-card-title">{item.title}</h3>
              <p className="portfolio-card-text">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
