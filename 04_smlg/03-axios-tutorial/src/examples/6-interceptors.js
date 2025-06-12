import { useEffect } from "react";
import authFetch from "../axios/interceptors";

const URL = "https://www.course-api.com/react-store-productsss";

const Interceptors = () => {
  const fetchData = async () => {
    try {
      // const responce = await authFetch("/react-store-products");
      const responce = await authFetch(URL);
      console.log(responce);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;
