import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTours(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  const handleRemoveTour = (id) => {
    setTours((prev) => prev.filter((item) => item.id !== id));
  };
  if (isLoading) {
    return <Loading />;
  }
  if (tours.length < 1) {
    return (
      <div className="title">
        <h2>No tours left</h2>
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={fetchTours}
        >
          Refresh
        </button>
      </div>
    );
  }
  return (
    <main>
      <Tours tours={tours} onRemoveTour={handleRemoveTour} />
    </main>
  );
}
export default App;
