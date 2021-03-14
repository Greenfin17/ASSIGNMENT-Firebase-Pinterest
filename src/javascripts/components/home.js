// home.js  Displays the home page when the user is logged out
import loginButton from './loginButton';

const homePage = () => {
  loginButton();
  document.querySelector('#page-header').innerHTML = `
    <h1>Almost Pinterest</h1>`;
};

export default homePage;
