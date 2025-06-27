import "./sandbox.css";
const Example = () => {
  const handleClick = () => {
    alert("Yes, Sir!");
  };
  return (
    <>
      <button className="btn" onClick={handleClick}>
        React
      </button>
    </>
  );
};

export default Example;
