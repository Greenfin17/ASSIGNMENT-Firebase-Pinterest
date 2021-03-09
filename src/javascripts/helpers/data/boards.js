// boards.js
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getBoards = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => {
      const boardsArray = Object.values(response.data);
      if (response.data) {
        resolve(boardsArray);
      } else resolve([]);
    }).catch((error) => reject(error));
});

const getSingleBoard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards/${firebaseKey}.json`)
    .then((response) => {
      if (response.data) {
        resolve(response.data);
      } else resolve([]);
    }).catch((error) => reject(error));
});

const deleteBoard = (firebaseKey, userId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/boards/${firebaseKey}.json`)
    .then(() => getBoards(userId).then((pinsArr) => resolve(pinsArr))
      .catch((error) => reject(error)));
});

export {
  getBoards, getSingleBoard,
  deleteBoard
};
