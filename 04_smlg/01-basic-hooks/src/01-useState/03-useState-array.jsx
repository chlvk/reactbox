import { useState } from "react";
import { data } from "../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  function handleRemoveItem(id) {
    setPeople((prev) => prev.filter((item) => item.id !== id));
  }
  function handleClearList() {
    setPeople([]);
  }
  return (
    <>
      <ul>
        {people.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>{" "}
            <button
              onClick={() => handleRemoveItem(item.id)}
              style={{ padding: "2px" }}
            >
              remove me🥺
            </button>
          </li>
        ))}
      </ul>
      <button className="btn" onClick={handleClearList}>
        Clear list
      </button>
    </>
  );
};

export default UseStateArray;
