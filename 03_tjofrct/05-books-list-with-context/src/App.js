import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/use-books-context";

export default function App() {
  const { fetchBooks } = useBooksContext();
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate />
      <BookList />
    </div>
  );
}
