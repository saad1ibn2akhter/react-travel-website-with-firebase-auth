import { getAuth } from "firebase/auth";// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// impo
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBmAZRyhXN6unEh_IPxpzapGBfh_1OaHs",
  authDomain: "react-travel-web-61acd.firebaseapp.com",
  projectId: "react-travel-web-61acd",
  storageBucket: "react-travel-web-61acd.appspot.com",
  messagingSenderId: "733320112596",
  appId: "1:733320112596:web:8aa1727bcbf3d8dd0d4e41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;