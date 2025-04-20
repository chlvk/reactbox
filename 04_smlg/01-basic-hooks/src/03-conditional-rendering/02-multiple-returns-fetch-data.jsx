import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  async function fetchData() {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Error 🙄");
      }
      const data = await res.json();
      setUser(data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  return (
    <>
      <h2>Fetch Data </h2>
      <img src={user.avatar_url} alt="" />
      <h2>{user.name}</h2>
      <p>works at {user.company}</p>
    </>
  );
};
export default MultipleReturnsFetchData;
