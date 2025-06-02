const SingleItem = ({ removeItem, editItem, item }) => {
  const { completed, name, id } = item;
  return (
    <div className="single-item">
      <input
        type="checkbox"
        name="completed"
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: completed && "line-through",
        }}
      >
        {name}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => removeItem(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default SingleItem;
