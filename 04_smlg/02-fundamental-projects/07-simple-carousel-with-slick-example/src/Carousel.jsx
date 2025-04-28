// import {shortList, list, longList} from './data'
import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { list } from "./data";

function Carousel() {
  const [people, setPeople] = useState(list);
  const [currentSlide, setCurrentSlide] = useState(0);
  const showPrevSlide = () => {
    setCurrentSlide((currentSlide) => {
      const slideToShow = (currentSlide - 1 + people.length) % people.length;
      return slideToShow;
    });
  };
  const showNextSlide = () => {
    setCurrentSlide((currentSlide) => {
      const slideToShow = (currentSlide + 1) % people.length;
      return slideToShow;
    });
  };
  // autoplay slides
  useEffect(() => {
    const timerId = setInterval(showNextSlide, 10000);
    return () => clearInterval(timerId);
  }, [currentSlide]);
  return (
    <section className="slider-container">
      {people.map((item, index) => {
        const { id, image, name, title, quote } = item;
        return (
          <article
            className="slide"
            style={{
              translate: `${100 * (index - currentSlide)}%`,
              opacity: index === currentSlide ? 1 : 0,
              visibility: index === currentSlide ? "visible" : "hidden",
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button className="prev" onClick={showPrevSlide}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={showNextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
}

export default Carousel;
