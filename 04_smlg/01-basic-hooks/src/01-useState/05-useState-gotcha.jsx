import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  function handleClick() {
    console.log("clicked the button");
    setTimeout(() => {
      setValue((prev) => prev + 1);
    }, 3000);
  }
  return (
    <>
      <h2>{value}</h2>
      <button className="btn" onClick={handleClick}>
        Increase in 3 seconds
      </button>
    </>
  );
};

export default UseStateGotcha;
