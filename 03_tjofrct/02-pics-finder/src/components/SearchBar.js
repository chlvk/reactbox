import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit(term);
  }

  function handleChange(e) {
    setTerm(e.target.value);
  }

  return (
    <div className="search-bar">
      <form action="get" onSubmit={handleFormSubmit}>
        <label htmlFor="search">Enter Search Term</label>
        <input type="text" id="search" value={term} onChange={handleChange} />
      </form>
    </div>
  );
}
