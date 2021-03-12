// pinCard.js  Display each pin

const pinCard = (pinObj) => {
  const pinCardStr = `<div class="pin-item" id="pin-item--${pinObj.firebaseKey}">
  <div class="card pin-card" style="width: 252px; background-image: url(${pinObj.imageUrl});">
  <div class="card-body" id="card-body--${pinObj.firebaseKey}">
    <a href="${pinObj.url}"><h5 class="pin-url" 
    id="pin-url--${pinObj.firebaseKey}">${pinObj.url.substring(0, 20)}...</h5></a>
    <p class="pin-text" id="pin-text--${pinObj.firebaseKey}">${pinObj.description}</p>
    <p class="pin-comment" id="pin-comment--${pinObj.firebaseKey}">${pinObj.comment}</p>
    <a href="#" class="btn btn-primary" id="edit-pin-btn--${pinObj.firebaseKey}"
       parent-key="${pinObj.board_firebaseKey}">Edit Pin</a>
    <a href="#" class="btn btn-danger" id="delete-pin-btn--${pinObj.firebaseKey}">Delete Pin</a>
  </div>
  </div></div>`;
  return pinCardStr;
};

export default pinCard;
