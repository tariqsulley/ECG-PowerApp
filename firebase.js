// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
//import {initializeApp} from "firebase/app";
//import {getAuth} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGT5P8OQwrG26MsqGBTWoJ82VbwhBSCZs",
  authDomain: "ecg-app-9244d.firebaseapp.com",
  projectId: "ecg-app-9244d",
  storageBucket: "ecg-app-9244d.appspot.com",
  messagingSenderId: "969455338617",
  appId: "1:969455338617:web:fb6facbf8a27e4fba640a8",
  measurementId: "G-ED3Y640SJH"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
//const app =initializeApp(firebaseConfig);
//export const auth = getAuth(app)
//const analytics = getAnalytics(app);