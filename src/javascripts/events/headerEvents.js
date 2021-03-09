// headerEvents.js

import boardsPage from '../components/boardsPage';
import pageHeader from '../components/pageHeader';
import modalForm from '../components/forms/modalForm';
import addBoardForm from '../components/forms/addBoardForm';

const headerEvents = (userId) => {
  document.querySelector('#page-nav').addEventListener('click', (e) => {
    console.warn('PAGE HEADER');
    if (e.target.id.includes('home')) {
      console.warn('HOME BUTTON');
      pageHeader('Boards');
      boardsPage(userId);
    }

    if (e.target.id.includes('add-board')) {
      console.warn('CLICKED ADD BOARD');
      modalForm('Add Board');
      addBoardForm();
      $('#modalForm').modal('toggle');
    }
  });
};

export default headerEvents;
