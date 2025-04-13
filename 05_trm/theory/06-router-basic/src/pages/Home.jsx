import { Link } from "react-router-dom";
import { categories } from "../data/data";

function Home() {
  return (
    <div>
      {/* for state in useLocation example*/}
      <Link to={"category/electronics"} state={{ from: "Home page" }}>
        Category test (using useLocation)
      </Link>
      <br />
      <Link to={"category/electronics"} state={{ maxPrice: 600 }}>
        Get cheapest electronics (using useLocation)
      </Link>
      {/* 2nd variant (to = {Object}) */}
      {/* <Link
        to={{
          pathname: "/category/Electronics",
          search: "?maxPrice=600",
          hash: "#info",
          state: { from: "Home Page", maxPrice: 600 },
        }}
      >
        Look at our cheapest electroniks
      </Link> */}
      <h1>Categories</h1>
      <ul style={{ display: "flex", gap: "20px" }}>
        {categories.map((item) => (
          <li key={item.id}>
            <Link to={`/category/${item.name}`}>
              {item.name}
              <img src={item.img} alt={item.name} style={{ width: "150px" }} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
