import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2>Header</h2>
      <nav className="nav">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/cart"}>Cart</NavLink>
      </nav>
    </header>
  );
}

export default Header;
