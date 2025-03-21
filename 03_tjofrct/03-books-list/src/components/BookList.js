import BookShow from "./BookShow";

export default function BookList({ books, onDelete, onEdit }) {
  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
  ));

  return <div className="book-list">{renderedBooks}</div>;
}
