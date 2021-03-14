// startApplication.js
import pageBase from '../components/pageBase';
import boardsPage from '../components/boardsPage';
import pageHeader from '../components/pageHeader';
import formEvents from '../events/formEvents';
import headerEvents from '../events/headerEvents';
import pageEvents from '../events/pageEvents';
import logoutButton from '../components/logoutButton';

const startApplication = (userObj) => {
  const userId = userObj.uid;
  pageBase();
  logoutButton();
  pageHeader('Boards');
  boardsPage(userId);
  headerEvents(userId);
  pageEvents(userId);
  formEvents(userId);
};

export default startApplication;
