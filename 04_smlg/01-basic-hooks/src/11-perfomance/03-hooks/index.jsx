import { useCallback, useMemo, useState } from "react";
import { data } from "../../data";
import List from "./List";
import slowFunction from "./slowFunction";
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  // with useMemo slow function calculates only on initial render
  const value = useMemo(() => slowFunction(), []);
  console.log(value);

  // without using useCallback removePerson function creates again on every re-render causing <List /> re-render via props (passing newly created function) change
  // with useCallback re-rendering happens only when state is changing
  const removePerson = useCallback(
    (id) => {
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    },
    [people]
  );
  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>
      {/* using memo */}
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;
