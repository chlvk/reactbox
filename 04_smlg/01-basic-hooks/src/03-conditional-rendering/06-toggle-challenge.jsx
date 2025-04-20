import { useState } from "react";

const ToggleChallenge = () => {
  const [isVisible, setIsVisisble] = useState(true);
  return (
    <>
      <h2>toggle challenge</h2>
      <button className="btn" onClick={() => setIsVisisble((prev) => !prev)}>
        Toggle
      </button>
      {isVisible && <Note />}
    </>
  );
};

function Note() {
  return <h3 className="alert alert-danger">You can see me</h3>;
}

export default ToggleChallenge;
