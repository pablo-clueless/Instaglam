import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDTN1AnA7LrU-ZIbmUhIeW_02BgSoggOEU",
    authDomain: "instaglam-77eb7.firebaseapp.com",
    projectId: "instaglam-77eb7",
    storageBucket: "instaglam-77eb7.appspot.com",
    messagingSenderId: "820360696161",
    appId: "1:820360696161:web:7b940f32c0a22ba765b520",
    measurementId: "G-CBT56DL3PC"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, firestore, timestamp };