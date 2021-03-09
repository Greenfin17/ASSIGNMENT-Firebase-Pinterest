// boards.js
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getBoards = (userId) => new Promise((resolve, reject) => {
  console.warn(`in getBoards: userId = ${userId}`);
  console.warn(`in getBoards: dbUrl = ${dbUrl}`);
  axios.get(`${dbUrl}/boards.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => {
      const boardsArray = Object.values(response.data);
      if (response.data) {
        resolve(boardsArray);
      } else resolve([]);
    }).catch((error) => reject(error));
});

export default getBoards;
