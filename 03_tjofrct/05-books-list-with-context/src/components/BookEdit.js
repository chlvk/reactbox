import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

export default function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  }

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>
        Title
        <input className="input" value={title} onChange={handleChange} />
      </label>
      <button className="button is-primary">Save</button>
    </form>
  );
}
