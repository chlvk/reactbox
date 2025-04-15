import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  function handleLogOut() {
    navigate("/", { state: { login: "You are not logged in" } });
  }
  return (
    <div>
      Login Page
      <Link to={"/"} state={{ login: "You are logged in" }}>
        <button>Log in</button>
      </Link>
      <button onClick={handleLogOut}>Forgot login data</button>
    </div>
  );
}

export default LoginPage;
