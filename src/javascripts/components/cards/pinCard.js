// pinCard.js  Display each pin

const pinCard = (pinObj) => {
  const pinCardStr = `<div class="pin-item" id="pin-item--${pinObj.firebaseKey}">
  <div class="card" style="width: 18rem;">
  <img src="${pinObj.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <a href="${pinObj.url}"><h5 class="pin-url" 
    id="pin-url--${pinObj.firebaseKey}">${pinObj.url.substring(0, 20)}...</h5></a>
    <p class="card-text">${pinObj.description}</p>
    <a href="#" class="btn btn-primary" id="edit-pin-btn--${pinObj.firebaseKey}"
       parent-key="${pinObj.board_firebaseKey}">Edit Pin</a>
    <a href="#" class="btn btn-danger" id="delete-pin-btn--${pinObj.firebaseKey}">Delete Pin</a>
  </div>
  </div></div>`;
  return pinCardStr;
};

export default pinCard;
