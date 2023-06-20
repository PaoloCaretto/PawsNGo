// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt9PcP0BHn6TNoKL17m91yK8JCV6KUUGE",
  authDomain: "pawsngo-59a9d.firebaseapp.com",
  projectId: "pawsngo-59a9d",
  storageBucket: "pawsngo-59a9d.appspot.com",
  messagingSenderId: "625387232757",
  appId: "1:625387232757:web:c6b289986fd753868a94bc",
  measurementId: "G-FXXRWLX41K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
