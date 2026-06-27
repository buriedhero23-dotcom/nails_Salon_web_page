import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../style/Portfolio.css";

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
  {
    title: "Minimalistický glow",
    description: "Přirozená elegance s jemným leskem a precizní geometrií.",
    image: new URL("../../images/portfolio/photo_4_2026-06-22_09-39-18.jpg", import.meta.url).href,
  },
  {
    title: "Rose quartz",
    description: "Měkký růžový tón s jemným shimmer efektem pro večerní vzhled.",
    image: new URL("../../images/portfolio/photo_5_2026-06-22_09-39-18.jpg", import.meta.url).href,
  },
  {
    title: "Velvet nude",
    description: "Nadčasová nude paleta s luxusní strukturou a hladkým povrchem.",
    image: new URL("../../images/portfolio/photo_6_2026-06-22_09-39-18.jpg", import.meta.url).href,
  },
];

function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplayKey, setAutoplayKey] = useState(0);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % portfolioItems.length);
    }, 3800);

    return () => window.clearInterval(timerId);
  }, [autoplayKey]);

  const goToSlide = (index) => {
    setActiveIndex(index);
    setAutoplayKey((currentValue) => currentValue + 1);
  };

  const goToPrevious = () => {
    goToSlide((activeIndex - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const goToNext = () => {
    goToSlide((activeIndex + 1) % portfolioItems.length);
  };

  const activeItem = portfolioItems[activeIndex];

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="section-header">
        <p className="section-label">Moje práce</p>
        <h2 className="section-title">Elegantní ukázky nehtových designů</h2>
      </div>

      <div className="portfolio-carousel-shell">
        <div className="portfolio-visual">
          <button
            type="button"
            className="portfolio-nav-button"
            onClick={goToPrevious}
            aria-label="Předchozí portfolio"
          >
            <span aria-hidden="true">←</span>
          </button>

          <div className="portfolio-viewport">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeItem.title}
                className="portfolio-slide"
                initial={{ opacity: 0, x: 36 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -36 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={activeItem.image} alt={activeItem.title} className="portfolio-carousel-image" />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            className="portfolio-nav-button"
            onClick={goToNext}
            aria-label="Další portfolio"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="portfolio-caption">
          <div className="portfolio-caption-top">
            <p className="portfolio-counter">0{activeIndex + 1} / 0{portfolioItems.length}</p>
            <h3 className="portfolio-card-title">{activeItem.title}</h3>
          </div>

          <p className="portfolio-card-text">{activeItem.description}</p>

          <div className="portfolio-dots" role="tablist" aria-label="Vyberte portfolio">
            {portfolioItems.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={`portfolio-dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Přejít na ${index + 1}. portfolio`}
                aria-pressed={index === activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
