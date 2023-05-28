// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Z3sk0-P6Rh8s8m9dyZYrKDAHqOGI32Y",
  authDomain: "countries-manage.firebaseapp.com",
  projectId: "countries-manage",
  storageBucket: "countries-manage.appspot.com",
  messagingSenderId: "872520921197",
  appId: "1:872520921197:web:0cfce3bf76b59dc7fd0f64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;