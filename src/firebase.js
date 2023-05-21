// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfVJHnbpF-Ko0lVN3ykhzxNnbgrIghFqI",
  authDomain: "movie-app-6b7fd.firebaseapp.com",
  projectId: "movie-app-6b7fd",
  storageBucket: "movie-app-6b7fd.appspot.com",
  messagingSenderId: "472128932527",
  appId: "1:472128932527:web:bd684b88d4fd7529d5e25a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
