import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://nafis-imtiaj-hossain-server-opal.vercel.app/api",
});

export default axiosPublic;