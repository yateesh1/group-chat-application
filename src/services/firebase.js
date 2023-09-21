import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

// Firebase Configs
const firebaseConfig = {
  apiKey: "AIzaSyBmJx0HtnqHz3MWkmTERdxS_41a9g_2L9A",
  authDomain: "group-chat-cbbf6.firebaseapp.com",
  projectId: "group-chat-cbbf6",
  storageBucket: "group-chat-cbbf6.appspot.com",
  messagingSenderId: "320971689986",
  appId: "1:320971689986:web:bdc8cc67ad5567be72171b",
};

// Checking if app already initialize then don't initialize again
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { db, auth, googleProvider, storage };
