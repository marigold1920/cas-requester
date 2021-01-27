import axios from "axios";
import { RNS3 } from "react-native-aws3";

import aws from "../config/awskey";

const api = axios.create({
    baseURL:
        "http://casservernodejsversion01-env.eba-dmxzbmkd.ap-southeast-1.elasticbeanstalk.com/api"
    // baseURL: "http://192.168.1.26:3000/api"
});

export const uploadImageToS3 = file => {
    const config = {
        bucket: aws.bucketName,
        region: "ap-southeast-1",
        accessKey: aws.accessKey,
        secretKey: aws.secretKey,
        successActionStatus: 201
    };

    return RNS3.put(file, config);
};

export const fetchHistories = (token, userId, pageIndex) => {
    return api.get(`/requester/${userId}/requests/history?pageIndex=${pageIndex}`, {
        headers: {
            Authorization: token
        }
    });
};

export const fetchRequestDetails = (token, requestId) => {
    return api.get(`/requests/history/details/${requestId}`, {
        headers: {
            Authorization: token
        }
    });
};

export const checkExistedPhoneNumber = phone => {
    return api.get(`/users/check_exist?username=${phone}`);
};

export const checkIsRegister = phone => {
    return api.get(`/users/requesters/registered?username=${phone}`);
};

export const registerAccount = user => {
    return api.post("/users/signup_requester", user);
};

export const fetchConfig = token => {
    return api.get("/system/configurations", {
        headers: {
            Authorization: token
        }
    });
};

export const resetPassword = user => {
    return api.put("/users/requesters/forget_password", user);
};
