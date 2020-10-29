import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBGpmYbgxuyeHD0rwLD8No4VD2avpRhh7I",
  authDomain: "gunpla-shop.firebaseapp.com",
  databaseURL: "https://gunpla-shop.firebaseio.com",
  projectId: "gunpla-shop",
  storageBucket: "gunpla-shop.appspot.com",
  messagingSenderId: "368534784616",
  appId: "1:368534784616:web:9965c930b6f63879b1c9dd",
  measurementId: "G-XCXB0XBQT5"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;