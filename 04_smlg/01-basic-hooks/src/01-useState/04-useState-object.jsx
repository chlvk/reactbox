import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Alex",
    age: 25,
    hobby: "fishing",
  });
  function changePerson() {
    setPerson({
      ...person,
      name: "Alexa",
      age: 26,
      hobby: "knitting",
    });
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h4>{person.age}</h4>
      <h5>Loves: {person.hobby}</h5>
      <button className="btn" onClick={changePerson}>
        Change person
      </button>
    </>
  );
};

export default UseStateObject;
