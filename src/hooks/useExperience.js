import { useEffect, useState } from "react";
import axiosPublic from "../api/axios";

const useExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosPublic
      .get("/experience")
      .then((res) => {
        console.log("EXPERIENCE API:", res.data);

        const data = Array.isArray(res.data)
          ? res.data
          : res.data.data || [];

        setExperiences(data);
      })
      .catch((error) => {
        console.error("EXPERIENCE ERROR:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    experiences,
    loading,
  };
};

export default useExperience;