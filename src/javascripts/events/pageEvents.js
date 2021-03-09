// boardEvents.js

import expandedBoard from '../components/expandedBoard';
import { getParentBoard, deleteBoardPins } from '../helpers/data/boardPins';
import pageHeader from '../components/pageHeader';
import { deletePin } from '../helpers/data/pins';
// import pageBase from '../components/pageBase';
import boardsPage from '../components/boardsPage';
// import { getBoards } from '../helpers/data/boards';
// import deleteBoard from '../helpers/data/boards';

const pageEvents = (userId) => {
  document.querySelector('#page-cards').addEventListener('click', (e) => {
    console.warn(`User Id is ${userId}`);
    const firebaseKey = e.target.id.split('--')[1];
    if (e.target.id.includes('show-pins')) {
      console.warn('CLICKED SHOW PINS');
      expandedBoard(firebaseKey);
    }

    if (e.target.id.includes('pin-item')) {
      console.warn('CLICKED PIN ITEM');
      expandedBoard(firebaseKey);
    }

    if (e.target.id.includes('delete-board')) {
      console.warn('CLICKED DELETE BOARD');
      deleteBoardPins(firebaseKey, userId).then(() => boardsPage(userId));
    }

    if (e.target.id.includes('delete-pin')) {
      console.warn('CLICKED DELETE PIN');
      getParentBoard(firebaseKey).then((parentObj) => {
        pageHeader(parentObj.title);
        deletePin(firebaseKey).then(() => expandedBoard(parentObj.firebaseKey));
      });
    }
  });
};

export default pageEvents;
