import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoZMgVOP2jgkgLe4SW5m3LUTrK6Olu8xA",
  authDomain: "twitter-clone-79bb9.firebaseapp.com",
  projectId: "twitter-clone-79bb9",
  storageBucket: "twitter-clone-79bb9.appspot.com",
  messagingSenderId: "488644006565",
  appId: "1:488644006565:web:ece4a2d7f627e75c90334c",
  measurementId: "G-S3CWKJVT3R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
