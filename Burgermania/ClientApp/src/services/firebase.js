import * as firebase from 'firebase';
import "firebase/auth";
import { firebaseConfig } from '../configuration/firebaseConfig';

firebase.initializeApp(firebaseConfig);

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const googleAuth = () => {
    return firebase.auth().signInWithPopup(googleProvider)
}

export const auth = firebase.auth;  