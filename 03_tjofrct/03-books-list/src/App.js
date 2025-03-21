import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

export default function App() {
  const [books, setBooks] = useState([]);

  function deleteBookById(id) {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  }

  function editBookById(id, title) {
    console.log(id, title);
    const updatedBooks = books.map((book) => {
      return book.id === id ? { ...book, title } : book;
    });
    setBooks(updatedBooks);
  }

  function createBook(title) {
    const updatedBooks = [...books, { id: crypto.randomUUID(), title }];
    setBooks(updatedBooks);
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </div>
  );
}
