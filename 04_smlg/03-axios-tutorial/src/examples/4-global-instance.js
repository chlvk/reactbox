import axios from "axios";
import { useEffect } from "react";

const PRODUCTS_URL = "https://www.course-api.com/react-store-products";
const RANDOM_USER_URL = "https://randomuser.me/api";

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      console.log("global axios instance");
      // both has equal headers set
      const response1 = await axios(PRODUCTS_URL);
      const response2 = await axios(RANDOM_USER_URL);
      console.log(response1.data);
      console.log(response2.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">global instance</h2>;
};
export default GlobalInstance;
