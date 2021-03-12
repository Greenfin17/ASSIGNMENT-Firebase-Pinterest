// filteredBoardsPage.js  Displays the home page when the user is logged out
// import logoutButton from './logoutButton';
import { searchBoards } from '../helpers/data/boards';
import boardCard from './cards/boardCard';
import { getPins } from '../helpers/data/pins';
// import pageEvents from '../events/pageEvents';

const filteredBoardsPage = (userId, searchStr) => {
  document.querySelector('#page-cards').innerHTML = '';
  searchBoards(userId, searchStr).then((response) => response.forEach((board) => {
    getPins(board.firebaseKey).then((pinsArr) => {
      document.querySelector('#page-cards').innerHTML
      += boardCard(board, pinsArr[0]);
    });
  }));
};

export default filteredBoardsPage;
