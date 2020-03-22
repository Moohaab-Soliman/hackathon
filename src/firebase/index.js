import firebase from "firebase/app";
import "firebase/storage";
const config = {
  apiKey: "AIzaSyBgTLU2NonTYpTCCJsANkUNSEiUfivSXyU",
  authDomain: "wirvsvirus-931e0.firebaseapp.com",
  databaseURL: "https://wirvsvirus-931e0.firebaseio.com",
  projectId: "wirvsvirus-931e0",
  storageBucket: "wirvsvirus-931e0.appspot.com",
  messagingSenderId: "817287922277",
  appId: "1:817287922277:web:476f00bf2c60b907b77c8c",
  measurementId: "G-ZV1F4RB739"
};

firebase.initializeApp(config);
const storage = firebase.storage();

export { storage, firebase as default };
