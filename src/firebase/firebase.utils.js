import * as firebase from "firebase";
import "@firebase/auth";

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

export default firebase;
