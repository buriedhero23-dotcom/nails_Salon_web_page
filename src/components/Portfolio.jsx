import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../style/Portfolio.css";

const imageModules = import.meta.glob(
  "../../images/portfolio/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    import: "default",
  }
);
console.log(imageModules);

const portfolioData = {
  "photo_3_2026-06-22_09-39-18": {
    title: "Soft glam design",
    description:
      "Elegantní zdobení s perleťovým leskem a sofistikovanými odstíny růžové.",
  },
  "photo_4_2026-06-22_09-39-18": {
    title: "Minimalistický glow",
    description: "Přirozená elegance s jemným leskem a precizní geometrií.",
  },
  "photo_5_2026-06-22_09-39-18": {
    title: "Rose quartz",
    description: "Měkký růžový tón s jemným shimmer efektem pro večerní vzhled.",
  },
  "photo_6_2026-06-22_09-39-18": {
    title: "Velvet nude",
    description: "Nadčasová nude paleta s luxusní strukturou a hladkým povrchem.",
  },
  "photo_11_2026-06-22_09-39-18": {
    title: "Pink Luxury",
    description: "Elegantní růžový design s jemným leskem.",
  },
  "photo_12_2026-06-22_09-39-18": {
    title: "Luxury Finish",
    description: "Precizně zpracovaný design s moderním vzhledem.",
  },
};

const portfolioItems = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, image]) => {
    const fileName = path.split("/").pop().replace(/\.[^.]+$/, "");

    return {
      title: portfolioData[fileName]?.title ?? "Portfolio",
      description: portfolioData[fileName]?.description ?? "Elegantní nehtový design.",
      image,
    };
  });

function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplayKey, setAutoplayKey] = useState(0);

  useEffect(() => {
    if (portfolioItems.length === 0) return;

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

  if (portfolioItems.length === 0) {
    return null;
  }

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
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(event, info) => {
                  if (info.velocity.x > 400 || info.offset.x > 80) {
                    goToPrevious();
                  }

                  if (info.velocity.x < -400 || info.offset.x < -80) {
                    goToNext();
                  }
                }}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="portfolio-carousel-image"
                />
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
            <p className="portfolio-counter">
              0{activeIndex + 1} / 0{portfolioItems.length}
            </p>
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