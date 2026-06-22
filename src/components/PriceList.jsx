function PriceList() {
  return (
    <section id="prices" className="section price-section">
      <div className="section-header">
        <p className="section-label">Ceník a služby</p>
        <h2 className="section-title">Vyberte si servis pro své nehty</h2>
      </div>
      <div className="price-grid">
        <article className="price-card">
          <h3>Manikúra Classic</h3>
          <p>Pečlivá úprava nehtů, pilování, péče o kůžičku a lakování.</p>
          <span className="price-value">750 Kč</span>
        </article>
        <article className="price-card">
          <h3>Gelové nehty</h3>
          <p>Modeláž gelovými produkty pro dlouhotrvající lesk a tvar.</p>
          <span className="price-value">1 250 Kč</span>
        </article>
        <article className="price-card">
          <h3>Doplňování</h3>
          <p>Obnova gelových nehtů s vylepšeným designem a úpravou délky.</p>
          <span className="price-value">950 Kč</span>
        </article>
        <article className="price-card">
          <h3>Design & Nail art</h3>
          <p>Jedinečný zdobný efekt, perleťové akcenty a luxusní detaily.</p>
          <span className="price-value">od 450 Kč</span>
        </article>
      </div>
    </section>
  );
}

export default PriceList;
