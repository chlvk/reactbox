import axios from "axios";
import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }

  async function deleteBookById(id) {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  }

  async function editBookById(id, title) {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });
    const updatedBooks = books.map((book) => {
      return book.id === id ? { ...book, ...response.data } : book;
    });
    setBooks(updatedBooks);
  }

  async function createBook(title) {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  }

  const valueToShare = {
    books,
    fetchBooks,
    deleteBookById,
    editBookById,
    createBook,
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
