import { useEffect, useState } from "react";
import BtnContainer from "./BtnContainer";
import Jobinfo from "./Jobinfo";

const url = "https://www.course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setJobs(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <Jobinfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
}
export default App;
