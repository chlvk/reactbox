import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

export default function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useBooksContext();

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    createBook(title);
    setTitle("");
  }

  return (
    <div className="book-create">
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}
