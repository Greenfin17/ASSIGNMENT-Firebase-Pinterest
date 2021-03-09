import signIn from '../helpers/signIn';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `<nav class="navbar fixed-top navbar-expand mb-4">
  <button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>
  </nav>`;
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
