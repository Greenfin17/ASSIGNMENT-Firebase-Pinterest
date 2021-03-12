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
    console.warn('PAGE HEADER');
    if (e.target.id.includes('home')) {
      console.warn('HOME BUTTON');
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
  document.querySelector('#search-boards').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search-boards').value.toLowerCase();
    console.warn(e.target.id);
    if (e.keyCode === 13) {
      const searchType = e.target.nextElementSibling.value;
      console.warn(searchType);
      if (e.target.nextElementSibling.value === 'boards') {
        pageHeader('Boards');
        filteredBoardsPage(userId, searchValue);
      } else if (e.target.nextElementSibling.value === 'pins') {
        console.warn('Pins');
        pageHeader('Pins');
        filteredPinsPage(userId, searchValue);
      }
    }
  });
};

export default headerEvents;
