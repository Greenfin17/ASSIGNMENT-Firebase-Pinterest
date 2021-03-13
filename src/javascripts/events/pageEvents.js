// boardEvents.js

import expandedBoard from '../components/expandedBoard';
import { getParentBoard, deleteBoardPins } from '../helpers/data/boardPins';
import pageHeader from '../components/pageHeader';
import { deletePin, getSinglePin } from '../helpers/data/pins';
// import pageBase from '../components/pageBase';
import boardsPage from '../components/boardsPage';
import modalForm from '../components/forms/modalForm';
import editPinForm from '../components/forms/editPinForm';
import editBoardForm from '../components/forms/editBoardForm';
import { getSingleBoard } from '../helpers/data/boards';
// import { getBoards } from '../helpers/data/boards';
// import deleteBoard from '../helpers/data/boards';

const pageEvents = (userId) => {
  document.querySelector('#page-cards').addEventListener('click', (e) => {
    const firebaseKey = e.target.id.split('--')[1];
    if (e.target.id.includes('show-pins')
      || e.target.id.includes('board-title')
      || e.target.id.includes('board-img')) {
      getSingleBoard(firebaseKey).then((boardObj) => pageHeader(boardObj.title, firebaseKey));
      expandedBoard(firebaseKey);
    }

    if (e.target.id.includes('edit-pin-btn')) {
      modalForm('Edit Pin');
      getSinglePin(firebaseKey).then((pinObj) => editPinForm(userId, pinObj));
      $('#modalForm').modal('toggle');
    }

    if (e.target.id.includes('delete-pin-btn')) {
      getParentBoard(firebaseKey).then((parentObj) => {
        pageHeader(parentObj.title);
        deletePin(firebaseKey).then(() => expandedBoard(parentObj.firebaseKey));
      });
    }

    if (e.target.id.includes('card-body')
        || e.target.id.includes('pin-comment')
        || e.target.id.includes('pin-text')) {
      const comment = document.querySelector(`#pin-comment--${firebaseKey}`);
      const pinText = document.querySelector(`#pin-text--${firebaseKey}`);
      if (comment.style.display === '') {
        comment.style.display = 'block';
      } else if (comment.style.display === 'block') {
        comment.style.display = '';
      }
      if (pinText.style.display === '') {
        pinText.style.display = 'block';
      } else if (pinText.style.display === 'block') {
        pinText.style.display = '';
      }
    }

    if (e.target.id.includes('edit-board')) {
      modalForm('Edit Board');
      getSingleBoard(firebaseKey).then((board) => editBoardForm(userId, board));
      $('#modalForm').modal('toggle');
    }

    if (e.target.id.includes('delete-board')) {
      if (window.confirm('Are you sure? All associated pins will be deleted!')) {
        deleteBoardPins(firebaseKey, userId).then(() => boardsPage(userId));
      }
    }
  });
};

export default pageEvents;
