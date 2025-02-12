import React, { useState } from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import LosingBanner from "../LosingBanner";
import WinningBanner from "../WinningBanner";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { sample } from "../../utils";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState("running");
  const [guessResults, setGuessResults] = useState([]);
  function handleGuessSubmit(tentativeGuess) {
    const nextGuessResults = [...guessResults, tentativeGuess];
    setGuessResults(nextGuessResults);
    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }
  return (
    <>
      <GuessResults results={guessResults} answer={answer} />
      <GuessInput onGuessSubmit={handleGuessSubmit} gameStatus={gameStatus} />
      {/* {gameStatus !== "running" && (
        <Banner
          gameResults={guessResults}
          gameStatus={gameStatus}
          answer={answer}
        />
      )} */}
      {/* Using an univesal component SimpleBanner and its variations */}
      {gameStatus === "won" && <WinningBanner gameResults={guessResults} />}
      {gameStatus === "lost" && <LosingBanner answer={answer} />}
    </>
  );
}

export default Game;
