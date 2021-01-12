import * as TaskManager from "expo-task-manager";

import { syncLocationToRequest } from "../firebase/firebase.utils";

export const configureTask = ({ requestId }) => {
    TaskManager.defineTask("syncLocation", ({ data, error }) => {
        if (error) {
            return;
        }
        if (data) {
            const { latitude, longitude } = data.locations[0].coords;
            syncLocationToRequest(requestId, latitude, longitude);
        }
    });
};
