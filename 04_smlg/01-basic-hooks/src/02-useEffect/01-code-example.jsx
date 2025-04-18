import { useState } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(0);
  function sayHello() {
    console.log("Hello there!");
  }
  // executes on every rerender (bad practice)
  sayHello();
  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
