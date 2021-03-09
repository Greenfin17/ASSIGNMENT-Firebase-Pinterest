// selectBoard.js

import { getBoards } from '../../helpers/data/boards';

const selectBoard = (userId, pinObj) => {
  let selectStr = `<label for="board">Select a Board</label>
    <select class="form-control" id="pin-board" required>
    <option value="">Select a Board</option>`;
  getBoards(userId).then((boards) => {
    boards.forEach((board) => {
      console.warn('each board');
      if (board && board.firebaseKey === pinObj.board_firebaseKey) {
        selectStr += `<option selected value="${board.firebaseKey}">${board.title}</option>`;
      } else {
        selectStr += `<option value="${board.firebaseKey}">${board.title}</option>`;
      }
    });
    selectStr += '</select>';
    document.querySelector('#pin-select-board').innerHTML = selectStr;
    console.warn(document.querySelector('#pin-select-board').value);
  });
};

export default selectBoard;
