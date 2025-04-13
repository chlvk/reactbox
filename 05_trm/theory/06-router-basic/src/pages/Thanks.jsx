import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Thanks() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true }); //replace:true - clear history
      // navigate("/", { state: {maxPrice: 600} }); // using useLocation on Home page
      // navigate(-1); //back to a prevous page
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return <div>You will be redirected to the Home Page in three seconds...</div>;
}

export default Thanks;
