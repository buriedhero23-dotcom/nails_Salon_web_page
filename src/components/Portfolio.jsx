import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../style/Portfolio.css";

const imageModules = import.meta.glob(
  "../../images/portfolio/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    import: "default",
  }
);

const portfolioData = {
  "photo_3_2026-06-22_09-39-18": {
    title: "Soft glam design",
    description:
      "Elegantní zdobení s perleťovým leskem a sofistikovanými odstíny růžové.",
  },
  "photo_4_2026-06-22_09-39-18": {
    title: "Minimalistický glow",
    description:
      "Přirozená elegance s jemným leskem a precizní geometrií.",
  },
  "photo_5_2026-06-22_09-39-18": {
    title: "Rose quartz",
    description:
      "Měkký růžový tón s jemným shimmer efektem pro večerní vzhled.",
  },
  "photo_6_2026-06-22_09-39-18": {
    title: "Velvet nude",
    description:
      "Nadčasová nude paleta s luxusní strukturou a hladkým povrchem.",
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
  .sort(([leftPath], [rightPath]) =>
    leftPath.localeCompare(rightPath, undefined, { numeric: true })
  )
  .map(([path, image]) => {
    const fileName = path
      .split("/")
      .pop()
      .replace(/\.[^.]+$/, "");

    return {
      title: portfolioData[fileName]?.title ?? "Portfolio",
      description:
        portfolioData[fileName]?.description ??
        "Elegantní nehtový design.",
      image,
    };
  });

function Portfolio() {
  if (portfolioItems.length === 0) {
    return null;
  }

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="section-header">
        <p className="section-label">Moje práce</p>
        <h2 className="section-title">
          Elegantní ukázky nehtových designů
        </h2>
      </div>

      <Swiper
        className="portfolio-swiper"
        modules={[EffectCoverflow, Pagination, Autoplay]}
        effect="coverflow"
        centeredSlides
        grabCursor
        loop
        speed={750}
        slidesPerView="auto"
        spaceBetween={16}
        watchSlidesProgress
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 180,
          modifier: 1.8,
          scale: 0.84,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {portfolioItems.map((item) => (
          <SwiperSlide
            key={item.image}
            className="portfolio-swiper-slide"
          >
            <article className="portfolio-card">
              <div className="portfolio-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="portfolio-swiper-image"
                  loading="lazy"
                  draggable="false"
                />
              </div>

              <div className="portfolio-card-content">
                <h3 className="portfolio-card-title">{item.title}</h3>
                <p className="portfolio-card-text">{item.description}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Portfolio;