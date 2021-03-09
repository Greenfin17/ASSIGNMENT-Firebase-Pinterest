// formEvents.jsa
import expandedBoard from '../components/expandedBoard';
import boardsPage from '../components/boardsPage';
// import { getSingleBoard } from '../helpers/data/boards';
import pageHeader from '../components/pageHeader';
import { updateBoard, addBoard } from '../helpers/data/boards';
import { updatePin } from '../helpers/data/pins';
// import { getParentBoard } from '../helpers/data/boardPins';

const formEvents = (userId) => {
  document.querySelector('#form-container').addEventListener('click', (e) => {
    const firebaseKey = e.target.id.split('--')[1];
    const titleNode = document.querySelector('[id^=boardKey--]');
    const boardTitle = titleNode.innerHTML;
    const boardId = [...titleNode.id];
    const boardKey = boardId.join('').split('--')[1];
    if (e.target.id.includes('update-pin')) {
      const pinObj = {
        url: document.querySelector('#pin-url').value,
        imageUrl: document.querySelector('#pin-image-url').value,
        description: document.querySelector('#pin-description').value,
        comment: document.querySelector('#pin-comment').value,
        board_firebaseKey: document.querySelector('#pin-board').value,
      };
      updatePin(firebaseKey, pinObj).then(() => {
        pageHeader(boardTitle, boardKey);
        expandedBoard(boardKey);
      });
      $('#modalForm').modal('toggle');
    }

    if (e.target.id.includes('update-board')) {
      const boardObj = {
        title: document.querySelector('#board-title').value,
        description: document.querySelector('#board-description').value
      };
      updateBoard(userId, firebaseKey, boardObj).then(() => {
        pageHeader('Boards');
        boardsPage(userId);
      });
    }

    if (e.target.id.includes('add-board')) {
      const boardObj = {
        title: document.querySelector('#board-title').value,
        description: document.querySelector('#board-description').value,
        uid: userId
      };
      console.warn(boardObj);
      addBoard(userId, boardObj).then(() => {
        pageHeader('Boards');
        boardsPage(userId);
      });
    }
  });
};

export default formEvents;
