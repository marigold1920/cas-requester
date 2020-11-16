import axios from "axios";

export const api = axios.create({
    baseURL:
        "http://caselastic-env-1.eba-rh86ed2y.ap-southeast-1.elasticbeanstalk.com/api/requester/requests"
});

export const saveRequest = (token, request) => {
    return api.post(
        "/",
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
