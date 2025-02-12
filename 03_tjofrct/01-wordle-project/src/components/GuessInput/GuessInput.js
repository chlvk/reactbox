import React, { useState } from "react";

function GuessInput({ onGuessSubmit, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (tentativeGuess.length !== 5) {
      window.alert("Please input a five letter word!🥺");
      return;
    }
    onGuessSubmit(tentativeGuess);
    setTentativeGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess</label>
      <input
        required
        disabled={gameStatus !== "running"}
        minLength="5"
        maxLength="5"
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
