// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjordhTWBhUMm_s1aYCXNBQDQwvXGucc0",
  authDomain: "volunteer-service-a0f8d.firebaseapp.com",
  projectId: "volunteer-service-a0f8d",
  storageBucket: "volunteer-service-a0f8d.appspot.com",
  messagingSenderId: "607490454952",
  appId: "1:607490454952:web:28a779af86fa880257199d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
