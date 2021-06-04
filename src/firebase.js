import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyAWqPDEDsi1CwiTUY5sMI1u1-vK_LOUHwo',
    authDomain: 'png-chat-app.firebaseapp.com',
    projectId: 'png-chat-app',
    storageBucket: 'png-chat-app.appspot.com',
    messagingSenderId: '246178283122',
    appId: '1:246178283122:web:591c208e6ee4cdfb0f0ceb',
    measurementId: 'G-LBV8ZHETCQ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storageService = firebase.storage();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { auth, storageService, googleProvider, facebookProvider };
export default db;
