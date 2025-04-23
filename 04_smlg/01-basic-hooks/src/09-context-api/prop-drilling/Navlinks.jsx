import UserContainer from "./UserContainer";
function Navlinks({ user, onLogout }) {
  return (
    <div className="nav-links">
      <a href="#">Home</a>
      <a href="#">About</a>
      <UserContainer user={user} onLogout={onLogout} />
    </div>
  );
}

export default Navlinks;
