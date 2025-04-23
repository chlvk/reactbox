import { useState } from "react";
import Navlinks from "./Navlinks";
function Navbar() {
  const [user, setUser] = useState({ name: "Someone Someonevic" });
  function handleLogout() {
    setUser(null);
  }
  return (
    <div className="navbar">
      <h5>context API</h5>
      <div className="nav-container">
        <Navlinks user={user} onLogout={handleLogout} />
      </div>
    </div>
  );
}

export default Navbar;
