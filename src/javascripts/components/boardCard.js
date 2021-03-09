// boardCard.js  Display each Board

const boardCard = (boardObj) => {
  const boardCardStr = `<div class="board-item">
  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <a href="#"><h5 class="card-title" id="board-title--${boardObj.firebaseKey}">${boardObj.title}</h5></a>
    <p class="card-text">${boardObj.description}</p>
    <a href="#" class="btn btn-primary" id="show-pins--${boardObj.firebaseKey}">Show Pins</a>
    <a href="#" class="btn btn-danger" id="delete-board--${boardObj.firebaseKey}">Delete Board</a>
  </div>
  </div></div>`;
  return boardCardStr;
};

export default boardCard;
