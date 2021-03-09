// headerEvents.js

import boardsPage from '../components/boardsPage';
// import pageBase from '../components/pageBase';
import pageHeader from '../components/pageHeader';

const headerEvents = (userId) => {
  document.querySelector('#page-nav').addEventListener('click', (e) => {
    console.warn('PAGE HEADER');
    if (e.target.id.includes('home')) {
      console.warn('HOME BUTTON');
      pageHeader('Boards');
      boardsPage(userId);
    }
  });
};

export default headerEvents;
