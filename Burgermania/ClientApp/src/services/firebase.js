import * as firebase from 'firebase';
import "firebase/auth";
import 'firebase/firestore';
import { firebaseConfig } from '../configuration/firebaseConfig';

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const googleAuth = () => {
    return firebase.auth().signInWithPopup(googleProvider)
}

export const auth = firebase.auth;

export default firebase