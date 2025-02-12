import React from "react";

function Banner({ gameResults, gameStatus, answer }) {
  return (
    <>
      {gameStatus === "won" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{gameResults.length} guesses</strong>.
          </p>
        </div>
      )}
      {gameStatus === "lost" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
    //
  );
}

export default Banner;
