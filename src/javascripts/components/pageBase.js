// basePage.js

import logoutButton from './loginButton';

const pageBase = () => {
  logoutButton();
  const appElement = document.querySelector('#app');
  appElement.innerHTML = `<h1>Almost Pinterest</h1>
    </div><nav class="page-nav" id="page-nav">
    <button type="button" class="btn btn-primary" id="home">Home</button>
    <button type="button" class="btn btn-primary" id="add-board">Add Board</button>
    <button type="button" class="btn btn-primary" id="add-pin">Add Pin</button>
    </nav>
    <main><header class=page-header id="page-header"></header>
      <div class="modal-forms" id="form-container"></div>
      <div class="cards d-flex justify-content-around flex-wrap" id="page-cards" ></div>
    </main>`;
};

export default pageBase;
