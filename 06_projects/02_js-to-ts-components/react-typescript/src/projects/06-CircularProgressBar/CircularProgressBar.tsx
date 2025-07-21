import { useEffect, useRef, useState } from "react";

const DEGREE_MULTIPLIER = 3.6;
const progressBar = {
  MIN_VALUE: 0,
  MAX_VALUE: 100,
  STEP: 10,
  LOADING_SPEED: 400,
  SIZE_SMALL: 60,
  SIZE_MEDIUM: 100,
  SIZE_BIG: 130,
};

const CircularProgressBar = () => {
  const [, setValue] = useState(progressBar.MIN_VALUE);
  const progressNode = useRef<HTMLDivElement | null>(null);
  const intervalId = useRef<number | null>(null);
  const startLoading = () => {
    if (intervalId.current !== null) {
      clearInterval(intervalId.current);
    }
    intervalId.current = window.setInterval(() => {
      setValue((prev) => {
        if (prev >= progressBar.MAX_VALUE) {
          clearInterval(intervalId.current!);
          return prev;
        } else {
          const newValue = prev + progressBar.STEP;
          progressNode.current?.setAttribute("data-value", String(newValue));
          progressNode.current?.style.setProperty("--progress", newValue * DEGREE_MULTIPLIER + "deg");
          return newValue;
        }
      });
    }, progressBar.LOADING_SPEED);
  };
  useEffect(() => {
    return () => {
      clearInterval(intervalId.current!);
    };
  }, []);
  const resetProgressBar = () => {
    if (intervalId.current !== null) {
      clearInterval(intervalId.current);
    }
    setValue(0);
    progressNode.current?.setAttribute("data-value", String(progressBar.MIN_VALUE));
    progressNode.current?.style.setProperty("--progress", "0deg");
  };
  const resizeProgressBar = (size: number) => {
    const newSize = size + "px";
    progressNode.current?.style.setProperty("--size", newSize);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="progress" data-value="0" ref={progressNode}></div>
      <div className="flex gap-2">
        <button className="button" type="button" onClick={startLoading}>
          Simulate dowlnoad
        </button>
        <button className="button" type="button" onClick={resetProgressBar}>
          Reset
        </button>
        <button className="button" type="button" onClick={() => resizeProgressBar(progressBar.SIZE_SMALL)}>
          Small
        </button>
        <button className="button" type="button" onClick={() => resizeProgressBar(progressBar.SIZE_MEDIUM)}>
          Medium
        </button>
        <button className="button" type="button" onClick={() => resizeProgressBar(progressBar.SIZE_BIG)}>
          Big
        </button>
      </div>
    </div>
  );
};

export default CircularProgressBar;
