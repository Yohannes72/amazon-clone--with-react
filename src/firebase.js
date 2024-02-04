import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAsynP4cQDEBQtA7h5vNwo0PvpKJrHHJBw",
    authDomain: "login-34a34.firebaseapp.com",
    projectId: "login-34a34",
    storageBucket: "login-34a34.appspot.com",
    messagingSenderId: "952464257345",
    appId: "1:952464257345:web:96d300829a528ed10ef1c0",
    measurementId: "G-1TR2SLKTZK"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
