import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyBrA1uV5HEcZzFiX_kPpgPTJIr-tihNo2M",
  authDomain: "movie-hub-61d7a.firebaseapp.com",
  projectId: "movie-hub-61d7a",
  storageBucket: "movie-hub-61d7a.appspot.com",
  messagingSenderId: "730737768313",
  appId: "1:730737768313:web:5d6b85b5f377bf36eae1a8",
});

export const db = firebaseapp.firestore();
