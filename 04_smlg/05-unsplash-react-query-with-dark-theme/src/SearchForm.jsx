import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const searchValue = evt.target.elements.search.value;

    if (!searchValue) return;
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className="title">Unsplash</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="search"
          placeholder="kitten"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
