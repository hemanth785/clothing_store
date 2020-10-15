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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase;