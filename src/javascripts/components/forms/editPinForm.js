// pinForm.js

import selectBoard from './selectBoard';

const editPinForm = (userId, pinObj) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-book-form" class="mb-4">
      <div class="form-group">
        <label for="url">Pin Url</label>
        <input type="url" class="form-control" id="pin-url" aria-describedby="pinUrl" l
          placeholder="Enter Pin Link" value="${pinObj.url}" required>
      </div>
      <div class="form-group">
        <label for="image-url">Image URL</label>
        <input type="url" class="form-control" id="pin-image-url" 
          placeholder="Image URL" value="${pinObj.imageUrl}"required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="pin-description" 
          placeholder="Brief Description" value="${pinObj.description}" required>
      </div>
      <div class="form-group">
        <label for="comment">Comment</label>
        <input type="text" class="form-control" id="pin-comment" 
          placeholder="Comments" value="${pinObj.comment}">
      </div>
      <div class="form-group" id="pin-select-board">
      </div>
      <button type="submit" id="update-pin--${pinObj.firebaseKey}" 
        class="btn btn-success">Update Pin</button>
    </form>`;
  selectBoard(userId, pinObj);
};

export default editPinForm;
