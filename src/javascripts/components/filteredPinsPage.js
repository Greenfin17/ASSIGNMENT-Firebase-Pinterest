// filteredPinsPage.js

// import { pinEvents } from '../events/pinEvents';
import { searchPins } from '../helpers/data/pins';
// import pageHeader from './pageHeader';
// import logoutButton from './logoutButton';
import pinCard from './cards/pinCard';

const filteredPins = (userId, searchStr) => {
  searchPins(userId, searchStr).then((pinsArr) => {
    document.querySelector('#page-cards').innerHTML = '';
    pinsArr.forEach((pin) => {
      document.querySelector('#page-cards').innerHTML += pinCard(pin);
    });
  });
};

export default filteredPins;
