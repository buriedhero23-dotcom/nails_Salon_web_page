import "../style/Prices.css"
function PriceList() {
  const services = [
    {
      title: "Hygienická manikúra",
      price: "300 Kč",
    },
    {
      title: "Manikúra + gelové zpevnění",
      note: "dle délky",
      price: "500 / 600 Kč",
    },
  ];

  const designs = [
    {
      title: "Kočičí oko / vtírka",
      price: "+50 Kč",
    },
    {
      title: "Kamínky 3D",
      price: "+20 Kč",
    },
    {
      title: "Ostatní designy",
      price: "+50–100 Kč",
    },
  ];

  return (
    <section id="prices" className="section price-section">
      <div className="section-header">
        <p className="section-label">Ceník a služby</p>
        <h2 className="section-title">Ceník</h2>
      </div>

      <div className="price-list">

        <div className="price-group">
          {services.map((item) => (
            <div key={item.title} className="price-row">
              <div className="price-info">
                <h3>{item.title}</h3>

                {item.note && (
                  <p className="price-note">{item.note}</p>
                )}
              </div>

              <span className="price-value">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="price-divider"></div>

        <h3 className="design-title">Design</h3>

        <div className="price-group">
          {designs.map((item) => (
            <div key={item.title} className="price-row">
              <div className="price-info">
                <h3>{item.title}</h3>
              </div>

              <span className="price-value">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="price-divider"></div>

        <div className="price-row">
          <div className="price-info">
            <h3>Odstranění práce jiného mistra</h3>
          </div>

          <span className="price-value">+50 Kč</span>
        </div>

      </div>
    </section>
  );
}

export default PriceList;