import { useEffect, useState } from "react";
import axiosPublic from "../api/axios";


const useProfile = () => {

  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);



  useEffect(() => {


    const fetchProfile = async () => {


      try {


        const res = await axiosPublic.get("/profile");


        setProfile(res.data.data);



      } catch (error) {


        console.log("Profile Fetch Error:", error);


        setError(error.message);



      } finally {


        setLoading(false);


      }


    };



    fetchProfile();



  }, []);




  return {

    profile,

    loading,

    error,

  };


};


export default useProfile;