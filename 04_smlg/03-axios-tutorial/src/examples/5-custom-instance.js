import { useEffect } from "react";

import axios from "axios";
import authFetch from "../axios/custom";

const RANDOM_USER_URL = "https://randomuser.me/api";

const CustomInstance = () => {
  const fetchData = async () => {
    console.log("custom axios instance");
    try {
      const responce1 = await authFetch("/react-store-products");
      const responce2 = await axios(RANDOM_USER_URL);
      console.log(responce1);
      console.log(responce2);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
