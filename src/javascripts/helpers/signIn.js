import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  console.warn(provider);
  firebase.auth().signInWithPopup(provider);
};

export default signIn;
