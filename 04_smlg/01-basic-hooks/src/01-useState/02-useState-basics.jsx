import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h4>You clicked button {count} times</h4>
      <button className="btn" onClick={handleClick}>
        Do it!
      </button>
    </>
  );
};

export default UseStateBasics;
