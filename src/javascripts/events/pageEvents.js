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
    if (e.target.id.includes('show-pins')) {
      console.warn('CLICKED SHOW PINS');
      getSingleBoard(firebaseKey).then((boardObj) => pageHeader(boardObj.title, firebaseKey));
      expandedBoard(firebaseKey);
    }

    if (e.target.id.includes('edit-pin-btn')) {
      console.warn('CLICKED EDIT PIN');
      modalForm('Edit Pin');
      getSinglePin(firebaseKey).then((pinObj) => editPinForm(userId, pinObj));
      $('#modalForm').modal('toggle');
    }

    if (e.target.id.includes('delete-pin-btn')) {
      console.warn('CLICKED DELETE PIN');
      getParentBoard(firebaseKey).then((parentObj) => {
        pageHeader(parentObj.title);
        deletePin(firebaseKey).then(() => expandedBoard(parentObj.firebaseKey));
      });
    }

    if (e.target.id.includes('pin-item')) {
      console.warn('CLICKED PIN ITEM');
      expandedBoard(firebaseKey);
    }

    if (e.target.id.includes('edit-board')) {
      console.warn('CLICKED EDIT BOARD');
      modalForm('Edit Board');
      getSingleBoard(firebaseKey).then((board) => editBoardForm(userId, board));
      $('#modalForm').modal('toggle');
    }

    if (e.target.id.includes('delete-board')) {
      console.warn('CLICKED DELETE BOARD');
      deleteBoardPins(firebaseKey, userId).then(() => boardsPage(userId));
    }
  });
};

export default pageEvents;
