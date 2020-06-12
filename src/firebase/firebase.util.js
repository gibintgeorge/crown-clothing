import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBllWw7z8H7FKZaMyT1g6saDak2b_RjA8c",
  authDomain: "crown-db-98e78.firebaseapp.com",
  databaseURL: "https://crown-db-98e78.firebaseio.com",
  projectId: "crown-db-98e78",
  storageBucket: "crown-db-98e78.appspot.com",
  messagingSenderId: "1076790794606",
  appId: "1:1076790794606:web:20db6cfba0160be68b497f",
  measurementId: "G-324WB2N57J",
};

export const createUserProfileDocumnet = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshotRef = await userRef.get();


  if (!snapshotRef.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating User ', error.message);
    }

  }
  return userRef;
};
//   Initialize Firebase
firebase.initializeApp(config);
//   firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
