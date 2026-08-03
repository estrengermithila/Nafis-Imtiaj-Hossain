import axios from "axios";


const API = axios.create({

    baseURL:"http://localhost:5000/api"

});


export const createProfile = (formData) => {

    return API.post(
        "/profile",
        formData,
        {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }
    );

};