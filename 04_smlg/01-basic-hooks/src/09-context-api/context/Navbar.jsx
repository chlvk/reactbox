import { createContext, useContext, useState } from "react";
import Navlinks from "./Navlinks";

export const NavbarContext = createContext();

//custom hook
export const useAppContext = () => useContext(NavbarContext);

function Navbar() {
  const [user, setUser] = useState({ name: "Someone Someonevic" });
  function handleLogout() {
    setUser(null);
  }
  return (
    <NavbarContext.Provider value={{ user, handleLogout }}>
      <nav className="navbar">
        <h5>Context API</h5>
        <div className="nav-container">
          <Navlinks />
        </div>
      </nav>
    </NavbarContext.Provider>
  );
}

export default Navbar;
