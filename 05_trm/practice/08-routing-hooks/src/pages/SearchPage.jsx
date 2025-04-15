//Rus
// 01. Пропишите в URL путь /searchpage?q=hello-world!
// 02. Получите значение параметра query string и отобразите его в <p>Search term: </p>
// 03. Создайте функцию, которая будет изменять значение параметра q в query string на то, что будет введено в input.

import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleChange(e) {
    const value = e.target.value;
    setSearchParams(value ? { q: value } : {});
  }
  return (
    <div>
      <h1>Search Results</h1>
      <p>Search term: {searchParams.get("q")}</p>

      {/* Поле ввода для изменения строки запроса */}
      <input
        type="text"
        value={searchParams.get("q") || ""}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchPage;
