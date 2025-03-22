import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";
import BookEdit from "./BookEdit";

export default function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { editBookById, deleteBookById } = useBooksContext();

  function handleDeleteClick() {
    deleteBookById(book.id);
  }

  function handleEditClick() {
    setShowEdit((prev) => !prev);
  }

  function handleSubmit() {
    setShowEdit((prev) => !prev);
  }

  return (
    <div className="book-show">
      📕📚
      {showEdit ? (
        <BookEdit book={book} onSubmit={handleSubmit} />
      ) : (
        <h3>{book.title}</h3>
      )}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
