import firebase from "firebase/app";
import "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyA1akYjqm5cVgCJvcgAFVguS0sw70hv4ds",
    authDomain: "charitym-ambulance.firebaseapp.com",
    databaseURL: "https://charitym-ambulance.firebaseio.com",
    projectId: "charitym-ambulance",
    storageBucket: "charitym-ambulance.appspot.com",
    messagingSenderId: "801731513492",
    appId: "1:801731513492:web:30978d836981cb9b6d3881"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const createRequest = async (
    requestId,
    sourceLatitude,
    sourceLongitude,
    destinationLatitude,
    destinationLongitude
) => {
    const requestRef = firestore.collection("requests").doc(`${requestId}`);

    await requestRef.set({
        sourceLatitude,
        sourceLongitude,
        destinationLatitude,
        destinationLongitude,
        blacklist: []
    });
};

export const cancelRequestFirestore = async requestId => {
    const requestRef = firestore.collection("requests").doc(`${requestId}`);

    await requestRef.update({
        status: "cancelled"
    });
};

export const syncLocationToRequest = async (requestId, sourceLatitude, sourceLongitude) => {
    const requestRef = firestore.collection("requests").doc(`${requestId}`);

    await requestRef.set({ sourceLatitude, sourceLongitude }, { merge: true });
};

export default firebase;
