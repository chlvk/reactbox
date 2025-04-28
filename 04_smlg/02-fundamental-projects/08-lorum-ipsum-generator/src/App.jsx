import { nanoid } from "nanoid";
import { useState } from "react";
import data from "./data";
const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, count));
  };
  return (
    <section className="section-center">
      <h4>Tired of boring Lorem Ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          max="8"
          step="1"
          value={count}
          onChange={(e) => setCount(() => parseInt(e.target.value, 10))}
        />
        <button className="btn" type="submit">
          Generate text
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => (
          <p key={nanoid()}>{item}</p>
        ))}
      </article>
    </section>
  );
};
export default App;
