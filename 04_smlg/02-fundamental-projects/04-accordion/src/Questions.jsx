import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((item) => {
        return (
          <SingleQuestion
            key={item.id}
            {...item}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          ></SingleQuestion>
        );
      })}
    </section>
  );
};
export default Questions;
