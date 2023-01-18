// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcwKdZfHE2jK9hCGeU8biQtUzrsXMGYDo",
  authDomain: "realtor-clone-1eb50.firebaseapp.com",
  projectId: "realtor-clone-1eb50",
  storageBucket: "realtor-clone-1eb50.appspot.com",
  messagingSenderId: "208282737090",
  appId: "1:208282737090:web:ee90be1c2e686d311c5e5b",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
