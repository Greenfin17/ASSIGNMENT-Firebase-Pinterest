// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
import checkLoginStatus from './helpers/auth';

import '../styles/main.scss';

const init = () => {
  checkLoginStatus();
  // USE WITH FIREBASE AUTH
  // checkLoginStatus();
};

init();
