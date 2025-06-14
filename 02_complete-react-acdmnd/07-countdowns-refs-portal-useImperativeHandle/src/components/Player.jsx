import { useRef, useState } from "react";

export default function Player() {
  const playerNameInput = useRef(null);
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const handleClick = () => {
    setEnteredPlayerName(playerNameInput.current.value);
    // not reccomended (better use declarative way instead of imperative way)
    playerNameInput.current.value = "";
  };
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerNameInput} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
