import React from "react";
import SimpleBanner from "../SimpleBanner";

function WinningBanner({ answer }) {
  return (
    <SimpleBanner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </SimpleBanner>
  );
}

export default WinningBanner;
