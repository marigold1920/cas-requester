import firebase from "firebase/app";
import "firebase/firestore";
import * as geofirestore from "geofirestore";

const firebaseConfig = {
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

const GeoFirestore = geofirestore.initializeApp(firestore);
const geocollection = GeoFirestore.collection("drivers");

export const findNearest = async (latitude, longitude) => {
    // let results = [];
    const query = geocollection
        .near({
            center: new firebase.firestore.GeoPoint(latitude, longitude),
            radius: 200
        })
        .limit(5);

    // query.onSnapshot(snapshot => {
    //     snapshot.docs.forEach(item => {
    //         results.push(item.id);
    //     });
    // });

    // console.log(results.length || "NO THINGGGGGGGGGGGGGGGGGGGGGGGG");

    return query;
};

export const fillRequest = async (drivers, requestId) => {
    const batch = firestore.batch();
    const collectionDriverRef = firestore.collection("drivers");

    drivers.forEach(driver => {
        const documentRef = collectionDriverRef.doc(driver);
        batch.update(documentRef, {
            requestId: requestId
        });
    });

    await batch.commit();
};

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
        destinationLongitude
    });
};

export default firebase;
