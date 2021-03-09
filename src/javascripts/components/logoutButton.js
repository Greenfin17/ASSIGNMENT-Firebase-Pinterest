import firebase from 'firebase/app';
import 'firebase/auth';

const signMeOut = () => {
  firebase.auth().signOut();
};

const logoutButton = () => {
  const domString = `<nav class="navbar fixed-top navbar-expand mb-4">
    <button id="google-auth" class="btn btn-danger">SIGNOUT</button>
    </nav>`;
  document.querySelector('#login-form-container').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
