import axios from "axios";

export const api = axios.create({
    baseURL:
        "http://casservernodejsversion01-env.eba-dmxzbmkd.ap-southeast-1.elasticbeanstalk.com/api/requester/requests"
    // baseURL: "http://192.168.1.26:3000/api"
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

export const rejectedRequest = (token, requestId) => {
    return api.put(
        `/rejected/${requestId}`,
        {},
        {
            headers: {
                Authorization: token
            }
        }
    );
};
