function UserContainer({ user, onLogout }) {
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>{user.name}</p>
          <button className="btn" onClick={onLogout}>
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
