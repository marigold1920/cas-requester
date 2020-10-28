import axios from "axios";

export default axios.create({
    // baseURL: "http://192.168.1.170:8084/api"
    baseURL: "https://cas-capstone.herokuapp.com/api"
});
