// basePage.js

import logoutButton from './loginButton';

const pageBase = () => {
  logoutButton();
  const appElement = document.querySelector('#app');
  appElement.innerHTML = `<nav id="page-nav">
    <button type="button" class="btn btn-primary" id="home">Home</button>
    </nav>
    <main><header class=page-header id="page-header"></header>
      <div class="cards d-flex justify-content-around flex-wrap" id="page-cards" ></div>
    </main>`;
};

export default pageBase;
