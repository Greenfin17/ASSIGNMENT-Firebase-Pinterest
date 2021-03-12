// boardCard.js  Display each Board

const boardCard = (boardObj, pinObj = null) => {
  let imageUrl = '';
  if (pinObj) {
    imageUrl = pinObj.imageUrl;
  }
  const boardCardStr = `<div class="board-item">
  <div class="card board-card" id="board-card--${boardObj.firebaseKey}" style="width: 18rem;">
  <img src="${imageUrl}" id="board-img--${boardObj.firebaseKey}" class="card-img-top" alt="...">
  <div class="card-body">
    <a href="#"><h5 class="card-title" id="board-title--${boardObj.firebaseKey}">${boardObj.title}</h5></a>
    <p class="card-text">${boardObj.description}</p>
    <a href="#" class="btn btn-primary" id="show-pins--${boardObj.firebaseKey}">Show Pins</a>
    <a href="#" class="btn btn-primary" id="edit-board--${boardObj.firebaseKey}">Edit Board</a>
    <a href="#" class="btn btn-danger" id="delete-board--${boardObj.firebaseKey}">Delete Board</a>
  </div>
  </div></div>`;
  return boardCardStr;
};

export default boardCard;
