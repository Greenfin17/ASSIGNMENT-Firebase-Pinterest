// boards.js  Displays the home page when the user is logged out
// import logoutButton from './logoutButton';
import { getBoards } from '../helpers/data/boards';
import boardCard from './cards/boardCard';
// import pageEvents from '../events/pageEvents';

const boardsPage = (userId) => {
  document.querySelector('#page-cards').innerHTML = '';
  getBoards(userId).then((response) => response.forEach((board) => {
    document.querySelector('#page-cards').innerHTML += boardCard(board);
  }));
};

export default boardsPage;
