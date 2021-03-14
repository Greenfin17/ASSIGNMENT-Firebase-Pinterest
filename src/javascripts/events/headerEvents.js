// headerEvents.js

import boardsPage from '../components/boardsPage';
import filteredBoardsPage from '../components/filteredBoardsPage';
import filteredPinsPage from '../components/filteredPinsPage';
import pageHeader from '../components/pageHeader';
import modalForm from '../components/forms/modalForm';
import addBoardForm from '../components/forms/addBoardForm';
import addPinForm from '../components/forms/addPinForm';

const headerEvents = (userId) => {
  document.querySelector('#page-nav').addEventListener('click', (e) => {
    if (e.target.id.includes('home')
      || e.target.id.includes('pinterest-icon')
      || e.target.id.includes('pinterest-brand')) {
      pageHeader('Boards');
      boardsPage(userId);
    }

    if (e.target.id.includes('add-board')) {
      modalForm('Add Board');
      addBoardForm();
      $('#modalForm').modal('toggle');
    }

    if (e.target.id.includes('add-pin')) {
      modalForm('Add Pin');
      addPinForm(userId);
      $('#modalForm').modal('toggle');
    }
  });

  document.querySelector('#search-all-form').addEventListener('click', (e) => {
    e.preventDefault();
    console.warn('CLICKED');
    const searchValue = document.querySelector('#search-all').value.toLowerCase();
    if (e.target.id.includes('search-submit')) {
      if (document.querySelector('#search-select').value === 'boards') {
        pageHeader('Boards');
        filteredBoardsPage(userId, searchValue);
      } else if (document.querySelector('#search-select').value === 'pins') {
        pageHeader('Pins');
        filteredPinsPage(userId, searchValue);
      }
    }
  });

  document.querySelector('#search-all-form').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search-all').value.toLowerCase();
    if (e.keyCode === 13) {
      if (e.target.previousElementSibling.value === 'boards') {
        pageHeader('Boards');
        filteredBoardsPage(userId, searchValue);
      } else if (e.target.previousElementSibling.value === 'pins') {
        pageHeader('Pins');
        filteredPinsPage(userId, searchValue);
      }
    }
  });
};

export default headerEvents;
