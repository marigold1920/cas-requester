import axios from "axios";
import { RNS3 } from "react-native-aws3";

import aws from "../config/awskey";

const api = axios.create({
    baseURL: "http://caselastic-env-1.eba-rh86ed2y.ap-southeast-1.elasticbeanstalk.com/api"
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

export const fetchHistories = (token, userId) => {
    return api.get(`/requests/history/${userId}?pageIndex=0`, {
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
