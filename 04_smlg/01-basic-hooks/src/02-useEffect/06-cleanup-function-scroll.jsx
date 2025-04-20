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
    const randomFunction = () => {};
    window.addEventListener("scroll", randomFunction);
    return () => {
      window.removeEventListener("scroll", randomFunction);
    };
  }, []);
  return <h4>I'm reincarnated</h4>;
}

export default CleanupFunction;
