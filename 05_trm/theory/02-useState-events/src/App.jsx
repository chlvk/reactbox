import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isClosed, setIsClosed] = useState(true);
  const [activeLogo, setActiveLogo] = useState("");
  function toggleIsOpen() {
    setIsClosed((prev) => !prev);
  }
  function handleMouseEnter(logo) {
    setActiveLogo(logo);
  }
  function handleMouseLeave() {
    setActiveLogo("");
  }
  return (
    <>
      {isClosed ? (
        <button onClick={toggleIsOpen}>Начать</button>
      ) : (
        <span className="cross" onClick={toggleIsOpen}>
          &times;
        </span>
      )}
      {!isClosed && (
        <>
          <h1>Vite + React = {count >= 3 && "Love"}</h1>

          <div className="logo-container">
            <img
              src="/vite.svg"
              className={`logo ${
                count >= 1 || activeLogo === "vite" ? "active" : ""
              }`}
              alt="Vite logo"
              onMouseEnter={() => handleMouseEnter("vite")}
              onMouseLeave={handleMouseLeave}
            />
            <p>+</p>
            <img
              src="/react.svg"
              className={`logo ${
                count >= 2 || activeLogo === "react" ? "active" : ""
              }`}
              alt="React logo"
              onMouseEnter={() => handleMouseEnter("react")}
              onMouseLeave={handleMouseLeave}
            />
            <p>=</p>
            <img
              src="/love.svg"
              className={`logo ${
                count >= 3 || activeLogo === "love" ? "active" : ""
              }`}
              alt="Love logo"
              onMouseEnter={() => handleMouseEnter("love")}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <hr />
          <div className="card">
            <p className="count-paragraph">count is {count}</p>
            <div className="increment-buttons">
              <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
              <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
              <button onClick={() => setCount(0)}>Reset</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
