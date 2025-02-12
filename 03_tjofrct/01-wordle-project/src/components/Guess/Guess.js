import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ result, answer }) {
  const checkedResult = checkGuess(result, answer);
  return (
    <p className="guess">
      {range(5).map((num) => {
        const cellClassName = result
          ? `cell ${checkedResult[num].status}`
          : "cell";
        return (
          <span className={cellClassName} key={num}>
            {result ? result[num] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
