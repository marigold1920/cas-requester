import axios from "axios";

export const api = axios.create({
    // baseURL: "http://192.168.1.170:5000/api"
    // baseURL: "https://cas-capstone.herokuapp.com/api"
    // baseURL: "http://caselastic-env.eba-iukmv232.ap-southeast-1.elasticbeanstalk.com/api"
    baseURL: "http://caselastic-env-1.eba-rh86ed2y.ap-southeast-1.elasticbeanstalk.com/api"
});

export const login = (username, password) => {
    return api.post("/users/login", {
        username,
        password
    });
};

export const updateProfile = (userId, token, healthInformation) => {
    return api.put(`/requesters/${userId}/health_information`, healthInformation, {
        headers: {
            Authorization: token
        }
    });
};

export const updateUser = (userId, token, user) => {
    return api.put(`/storage/update-profile-image/${userId}`, user, {
        headers: {
            Authorization: token
        }
    });
};
