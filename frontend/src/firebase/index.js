import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKQe1OxUgtCcccMezufbsZpQgV8REg0Ns",
  authDomain: "evansmeja-4d80b.firebaseapp.com",
  databaseURL: "https://evansmeja-4d80b.firebaseio.com",
  projectId: "evansmeja-4d80b",
  storageBucket: "evansmeja-4d80b.appspot.com",
  messagingSenderId: "954347620648",
  appId: "1:954347620648:web:6d714597c66e33115c681d",
  measurementId: "G-QR9RTRXSPC",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
