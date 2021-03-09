import firebase from 'firebase/app';
import 'firebase/auth';
import logoutButton from '../components/logoutButton';
import firebaseConfig from './apiKeys';
import startApplication from '../views/startApplication';
import homePage from '../components/home';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  console.warn('BEFORE onAuthStateChange');
  firebase.auth().onAuthStateChanged((userObj) => {
    if (userObj) {
      console.warn('LOGGED IN');
      startApplication(userObj);

      // person is logged in do something...
      logoutButton();
    } else {
      // person is NOT logged in
      homePage();
    }
  });
};

export default checkLoginStatus;
