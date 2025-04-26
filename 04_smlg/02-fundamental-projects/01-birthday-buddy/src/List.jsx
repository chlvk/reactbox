import Person from "./Person";

function List({ people }) {
  return (
    <section>
      {people.map((item) => (
        <Person key={item.id} {...item} />
      ))}
    </section>
  );
}

export default List;
