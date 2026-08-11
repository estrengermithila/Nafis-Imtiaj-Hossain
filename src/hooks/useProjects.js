import { useEffect, useState } from "react";
import axiosPublic from "../api/axios";

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axiosPublic.get("/project");

        console.log("PROJECT RESPONSE:", res.data);

        setProjects(res.data.data || []);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
        console.error("Error:", error.response?.data);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return {
    projects,
    loading,
  };
};

export default useProjects;