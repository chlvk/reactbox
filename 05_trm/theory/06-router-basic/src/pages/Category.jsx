import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { products } from "../data/data";

function Category() {
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // useLocation example
  // const maxPrice = location.state.maxPrice;

  const maxPrice = searchParams.get("maxPrice")
    ? Number(searchParams.get("maxPrice"))
    : Infinity;
  const currentCategoryData = products.filter(
    (item) => item.categoryId === categoryId && item.price <= maxPrice
  );
  function handleChange(e) {
    const value = e.target.value;
    setSearchParams(value ? { maxPrice: value } : {});
  }
  return (
    <div>
      {location.state?.from && (
        <small>We know you came from {location.state.from} btw 👀</small>
      )}
      <h1>Category: {categoryId.toUpperCase()}</h1>
      <div>
        <label htmlFor="max-price"></label>
        <input
          id="max-price"
          type="number"
          placeholder="Enter max price"
          value={searchParams.get("maxPrice") || ""}
          onChange={handleChange}
        />
      </div>
      <ul style={{ display: "flex", gap: "50px" }}>
        {currentCategoryData.map((item) => (
          <li key={item.id}>
            <Link to={`/product/${item.id}`}>
              {item.name} {item.price}$
              <img
                src={item.img}
                alt={item.name}
                style={{ width: "100px", display: "block" }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
