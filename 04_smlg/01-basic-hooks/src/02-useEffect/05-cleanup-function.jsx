import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <h2>cleanup function</h2>
      <button className="btn" onClick={() => setIsVisible(!isVisible)}>
        Toggle
      </button>
      {isVisible && <ComponentWithEffect />}
    </>
  );
};

function ComponentWithEffect() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("You better clean me up");
    }, 1000);
    return () => {
      console.log("Cleanup ❌ happening");
      clearInterval(intervalId);
    };
  }, []);
  return <h4>I'm reincarnated</h4>;
}

export default CleanupFunction;
