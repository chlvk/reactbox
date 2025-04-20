import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  return (
    <>
      <h2>user challenge</h2>
      {user ? (
        <>
          <h4>hello there, {user.name}</h4>
          <button className="btn" onClick={() => setUser(null)}>
            log out
          </button>
        </>
      ) : (
        <>
          <h4>please login</h4>
          <button
            className="btn"
            onClick={() => setUser({ name: "Someone Someonevic" })}
          >
            log in
          </button>
        </>
      )}
    </>
  );
};

export default UserChallenge;
