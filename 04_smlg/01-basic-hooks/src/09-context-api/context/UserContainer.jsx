import { useAppContext } from "./Navbar";

function UserContainer() {
  const { user, handleLogout } = useAppContext();
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>{user.name}</p>
          <button className="btn" onClick={handleLogout}>
            Log out
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
}

export default UserContainer;
