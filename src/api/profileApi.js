
import axios from "axios";

const API = axios.create({
  baseURL: "https://nafis-imtiaj-hossain-server-opal.vercel.app/api",
});

export const createProfile = (formData) => {
  return API.post("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

