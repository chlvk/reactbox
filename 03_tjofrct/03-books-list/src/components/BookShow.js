import { useState } from "react";
import BookEdit from "./BookEdit";

export default function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  function handleDeleteClick() {
    onDelete(book.id);
  }

  function handleEditClick() {
    setShowEdit((prev) => !prev);
  }

  function handleSubmit(id, title) {
    onEdit(id, title);
    setShowEdit((prev) => !prev);
  }

  return (
    <div className="book-show">
      <img src="https://dummyimage.com/100x100/000/fff" alt="Book" />
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
