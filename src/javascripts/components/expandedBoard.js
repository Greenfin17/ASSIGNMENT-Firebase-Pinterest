// expandedBoard.js

// import { pinEvents } from '../events/pinEvents';
import { getBoardPins } from '../helpers/data/boardPins';
// import pageHeader from './pageHeader';
// import logoutButton from './logoutButton';
import pinCard from './pinCard';

const expandedBoard = (firebaseKey) => {
  getBoardPins(firebaseKey).then((boardPinsObj) => {
    document.querySelector('#page-cards').innerHTML = '';
    boardPinsObj.pins.forEach((pin) => {
      document.querySelector('#page-cards').innerHTML += pinCard(pin);
    });
  });
};

export default expandedBoard;
