import { useLocation } from "react-router-dom";

function HomePage() {
  const location = useLocation();
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        {location.state?.login ? location.state.login : "You are not logged in"}
      </p>
    </div>
  );
}

export default HomePage;
