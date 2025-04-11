import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        console.log("Timer running:", count);
        setCount((prev) => prev + 1);
      }, 1000);
    }

    // Cleanup function to clear the timer
    return () => {
      if (timer) {
        console.log("Cleaning up the timer");
        clearInterval(timer);
      }
    };
  }, [isRunning]); // Dependencies: run the effect when `isRunning` changes

  return (
    <div>
      <h1>Timer: {count}</h1>
      <button onClick={() => setIsRunning((prev) => !prev)}>
        {isRunning ? "Stop Timer" : "Start Timer"}
      </button>
      <button onClick={() => setCount(0)} disabled={isRunning}>
        Reset Timer
      </button>
    </div>
  );
}

export default Timer;
