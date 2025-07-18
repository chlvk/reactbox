import { useFetchTasks } from "./reactQueryCustomHooks";
import SingleItem from "./SingleItem";

const Items = () => {
  // isPending in react-query 5
  const { isLoading, data, isError } = useFetchTasks();
  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading...</p>;
  }
  if (isError) {
    return (
      <p style={{ marginTop: "1rem", color: "red" }}>There was an error...</p>
    );
  }
  /*  if (error) {
    // return <p style={{ marginTop: "1rem", color: "red" }}>{error.message}</p>;
    return (
      <p style={{ marginTop: "1rem", color: "red" }}>{error.response.data}</p>
    );
  } */
  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
