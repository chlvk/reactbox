function Options({ question, dispatch, answer }) {
  const { options, correctOption } = question;
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {options.map((item, index) => (
        <button
          className={`btn btn-option
            ${index === answer ? "answer" : ""}
            ${
              hasAnswered ? (index === correctOption ? "correct" : "wrong") : ""
            }`}
          key={item}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Options;
