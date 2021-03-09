// boardPins.js

import { getSingleBoard, deleteBoard } from './boards';
import { getPins, getSinglePin, deletePin } from './pins';

const getBoardPins = (firebaseKey) => new Promise((resolve, reject) => {
  const pinsPr = getPins(firebaseKey);
  const boardPr = getSingleBoard(firebaseKey);

  Promise.all([pinsPr, boardPr])
    .then(([pinsResponse, boardResponse]) => resolve(
      { pins: pinsResponse, board: boardResponse }
    ))
    .catch((error) => reject(error));
});

const getParentBoard = (pinKey) => new Promise((resolve, reject) => {
  getSinglePin(pinKey).then((result) => getSingleBoard(result.board_firebaseKey))
    .then((boardResult) => resolve(boardResult))
    .catch((error) => reject(error));
});

const deleteBoardPins = (firebaseKey, userId) => new Promise((resolve, reject) => {
  getBoardPins(firebaseKey).then((dualObj) => {
    const pinsArr = Object.values(dualObj.pins);
    const deletedPins = pinsArr.map((pin) => deletePin(pin.firebaseKey));
    Promise.all(deletedPins).then(() => resolve(deleteBoard(firebaseKey, userId)))
      .catch((error) => reject(error));
  });
});

export {
  getBoardPins, getParentBoard,
  deleteBoardPins
};
