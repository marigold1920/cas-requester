import axios from "axios";

export const api = axios.create({
    baseURL:
        "http://casservernodejsversion01-env.eba-dmxzbmkd.ap-southeast-1.elasticbeanstalk.com/api"
    // baseURL: "http://192.168.1.26:3000/api"
});

export const login = (username, password) => {
    return api.post("/users/login_requester", {
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
    return api.put(`/users/${userId}/profile`, user, {
        headers: {
            Authorization: token
        }
    });
};
