import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <h2>Header</h2>
        <div className="nav">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/products"}>Products</NavLink>
          <NavLink to={"/search"}>Search</NavLink>
        </div>
      </header>
      <hr />
    </div>
  );
}

export default Header;
