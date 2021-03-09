// boards.js  Displays the home page when the user is logged out
import logoutButton from './logoutButton';
import getBoards from '../helpers/data/boards';
import boardCard from './boardCard';

const boardsPage = (userObj) => {
  logoutButton();
  const appElement = document.querySelector('#app');
  appElement.innerHTML = `<header>
    <h1>Boards</h1></header>
    <main><div class="boards" id="boards-page"></div></div>
    </main>`;
  getBoards(userObj.uid).then((response) => response.forEach((board) => {
    console.warn(`boards are: ${board}`);
    document.querySelector('#boards-page').innerHTML = boardCard(board);
  }));
};

export default boardsPage;
