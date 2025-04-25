import { useCallback, useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = useCallback(async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Fetching failure");
      }
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    <>
      <h2>fetch data example</h2>
      <ul className="users">
        {users.map((item) => (
          <li key={item.id}>
            <img src={item.avatar_url} alt={item.login} />
            <div className="user__info">
              <h5>{item.login}</h5>
              <a href={item.url}>Profile</a>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default FetchData;
