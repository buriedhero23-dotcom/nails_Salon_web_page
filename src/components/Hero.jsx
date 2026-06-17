function Hero({title, text, buttonText}){
  return(
    <section className="hero">
      <h1 className="hero-title">{title}</h1>
      <p className="hero-text">{text}</p>
      <button className="hero-button">{buttonText}</button>
    </section>
  );
}

export default Hero;