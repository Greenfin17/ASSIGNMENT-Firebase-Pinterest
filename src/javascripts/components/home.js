// home.js  Displays the home page when the user is logged out
import loginButton from './loginButton';

const homePage = () => {
  loginButton();
  document.querySelector('#app').innerHTML = `<header>
    <h1>Pinterest</h1></header>`;
};

export default homePage;
