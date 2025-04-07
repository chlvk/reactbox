const ErrorExample = () => {
  let count = 0;
  function handleClick() {
    //doesn't work
    count++;
  }
  return (
    <>
      <h2>{count}</h2>
      <button className="btn" onClick={handleClick}>
        Count + 1?🤨
      </button>
    </>
  );
};

export default ErrorExample;
