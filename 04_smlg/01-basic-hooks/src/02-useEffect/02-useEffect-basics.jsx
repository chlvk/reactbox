import { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = (callLocation = "from UseEffectBasics component") => {
    console.log("hello there " + callLocation);
  };
  useEffect(() => {
    sayHello("from useEffect hook");
  }, []);
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
export default UseEffectBasics;
