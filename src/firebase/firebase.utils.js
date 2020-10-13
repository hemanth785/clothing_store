import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyDk9KZ54bt0sOGoX37C2o7fkf4HqSw5-hI",
    authDomain: "clothing-store-db-48c92.firebaseapp.com",
    databaseURL: "https://clothing-store-db-48c92.firebaseio.com",
    projectId: "clothing-store-db-48c92",
    storageBucket: "clothing-store-db-48c92.appspot.com",
    messagingSenderId: "121446863441",
    appId: "1:121446863441:web:05c8ff7d6475cc52b81e70",
    measurementId: "G-9233J61E2Z"
};

firebase.initializeApp(config); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase;