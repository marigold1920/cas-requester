import axios from "axios";

export const api = axios.create({
    baseURL: "http://192.168.1.170:3000/api/requester/requests"
    // baseURL: "http://192.168.1.170:5000/api/requester/requests"
});

export const saveRequest = (token, userId, request) => {
    return api.post(
        `/${userId}`,
        {
            ...request
        },
        {
            headers: {
                Authorization: token
            }
        }
    );
};

export const fetchRequest = (token, requestId) => {
    return api.get(`/${requestId}`, {
        headers: {
            Authorization: token
        }
    });
};

export const feedbackRequest = (token, requestId, feedback) => {
    return api.put(`/${requestId}`, feedback, {
        headers: {
            Authorization: token
        }
    });
};

export const cancelRequest = (token, requestId) => {
    return api.put(
        `/cancel/${requestId}`,
        {},
        {
            headers: {
                Authorization: token
            }
        }
    );
};
