import firebase from 'firebase/app';
import 'firebase/auth';
import logoutButton from '../components/logoutButton';
import firebaseConfig from './apiKeys';
import startApplication from '../views/startApplication';
// import homePage from '../components/home';
import loginButton from '../components/loginButton';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((userObj) => {
    if (userObj) {
      startApplication(userObj);

      // person is logged in do something...
      logoutButton();
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default checkLoginStatus;
