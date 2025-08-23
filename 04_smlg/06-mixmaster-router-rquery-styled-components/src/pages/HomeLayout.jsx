import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const NavigationState = {
  LOADING: "loading",
  DEFAULT: "idle",
};

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === NavigationState.LOADING;
  const contextValueExample = "pass something to child routes";
  return (
    <div>
      <Navbar />
      <section className="page">
        {isPageLoading ? (
          <div className="loading"></div>
        ) : (
          <Outlet context={{ contextValueExample }} />
        )}
      </section>
    </div>
  );
};

export default HomeLayout;
