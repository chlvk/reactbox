import axios from "axios";

axios.defaults.headers.common["Accept"] = "application/json";

// In latest axios version common property returns "undefined"
// deprecated: axios.defaults.headers.common['Accept'] = 'application/json';

// actual:
/* axios.defaults.headers["Accept"] = "application/json";

axios.defaults.baseURL = "https://api.example.com"; */

// In latest axios version common property returns "undefined"
// deprecated: axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// actual:
/* axios.defaults.headers["Authorization"] = AUTH_TOKEN;

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"; */
