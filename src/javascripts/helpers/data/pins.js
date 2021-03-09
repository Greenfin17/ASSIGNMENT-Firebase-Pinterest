// pins.js

import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getPins = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="board_firebaseKey"&equalTo="${firebaseKey}"`)
    .then((response) => {
      const pinsArr = Object.values(response.data);
      if (response.data) {
        resolve(pinsArr);
      } else resolve([]);
    })
    .catch((error) => reject(error));
});

const deletePin = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/pins/${firebaseKey}.json`)
    .then(() => getPins(firebaseKey).then((pinsArr) => resolve(pinsArr))
      .catch((error) => reject(error)));
});

const getSinglePin = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins/${firebaseKey}.json`)
    .then((response) => {
      if (response.data) {
        resolve(response.data);
      } else resolve([]);
    }).catch((error) => reject(error));
});

const updatePin = (firebaseKey, pinObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/pins/${firebaseKey}.json`, pinObject)
    .then(() => getPins(firebaseKey).then((pinsArr) => resolve(pinsArr))
      .catch((error) => reject(error)));
});

export {
  getPins, getSinglePin,
  deletePin, updatePin
};
