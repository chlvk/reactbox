import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const getIndex = (number) => number % people.length;
  const showPrevPerson = () => {
    setIndex((prev) => getIndex(prev - 1 + people.length));
  };
  const showNextPerson = () => {
    setIndex((prev) => getIndex(prev + 1));
  };
  const getRandomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) randomNumber = index + 1;
    setIndex(randomNumber % people.length);
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={showPrevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={showNextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn" onClick={getRandomPerson}>
          Get random person
        </button>
      </article>
    </main>
  );
};
export default App;
