import useFetch from "./hooks/useFetch";

const API = "https://jsonplaceholder.typicode.com/users";

function App() {
  const { data, error, loading } = useFetch(API);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default App;
