import { useState } from "react";
import { data } from "../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);
  function handleRemoveUser(id) {
    setUsers(users.filter((item) => item.id !== id));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    const newUser = {
      id: crypto.randomUUID(),
      name,
    };
    setUsers([...users, newUser]);
    setName("");
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <div>{item.name}</div>
            <button
              type="button"
              className="btn"
              onClick={() => handleRemoveUser(item.id)}
            >
              remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserChallenge;
