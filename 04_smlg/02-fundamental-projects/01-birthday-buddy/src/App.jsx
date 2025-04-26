import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>{people.length} people have birthdays</h3>
        <List people={people} />
        <button className="btn btn-block" onClick={() => setPeople([])}>
          Clear list
        </button>
      </div>
    </main>
  );
}
export default App;
