import React from "react";
import SimpleBanner from "../SimpleBanner";

function WinningBanner({ gameResults }) {
  return (
    <SimpleBanner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{gameResults.length} guesses</strong>.
      </p>
    </SimpleBanner>
  );
}

export default WinningBanner;
