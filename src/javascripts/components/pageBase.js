// basePage.js

import logoutButton from './loginButton';
import pinterestIcon from './images/Pinterest-red.svg';

const pageBase = () => {
  logoutButton();
  const appElement = document.querySelector('#app');
  appElement.innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="page-nav">
    <a class="navbar-brand" href="#" id="pinterest-brand">Almost Pinterest</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#" id="home">
          <img src="${pinterestIcon}" id="pinterest-icon">
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="add-board">Add Board</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="add-pin">Add Pin</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0" id="search-all-form">
      <select id="search-select" name="search-select">
        <option value="boards">Boards</option>
        <option value="pins">Pins</option>
      </select>
      <input class="form-control mr-sm-2" type="search" placeholder="Search" 
        id="search-all" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" 
        type="submit" id="search-submit">Search</button>
    </form>
    <div id="logout-button"></div>
  </div>
</nav>   
  <h1>Almost Pinterest</h1>
    <main><header class=page-header id="page-header"></header>
      <div class="modal-forms" id="form-container"></div>
      <div class="cards d-flex justify-content-around flex-wrap" id="page-cards" ></div>
    </main>`;
};

export default pageBase;
