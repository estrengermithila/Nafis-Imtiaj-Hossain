import { useEffect, useState } from "react";
import axiosPublic from "../api/axios";


const useExperience = () => {

  const [experiences, setExperiences] = useState([]);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    axiosPublic
      .get("/experience")
      .then((res) => {

        setExperiences(res.data.data);

        setLoading(false);

      })
      .catch((error) => {

        console.log(error);

        setLoading(false);

      });


  }, []);



  return {
    experiences,
    loading,
  };

};


export default useExperience;