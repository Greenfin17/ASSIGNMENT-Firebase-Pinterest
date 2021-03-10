// addPinForm.js

import selectBoard from './selectBoard';

const addPinForm = (userId) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-book-form" class="mb-4">
      <div class="form-group">
        <label for="url">Pin Url</label>
        <input type="url" class="form-control" id="pin-url" aria-describedby="pinUrl" l
          placeholder="Enter Pin Link" required>
      </div>
      <div class="form-group">
        <label for="image-url">Image URL</label>
        <input type="url" class="form-control" id="pin-image-url" 
          placeholder="Image URL" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="pin-description" 
          placeholder="Brief Description" required>
      </div>
      <div class="form-group">
        <label for="comment">Comment</label>
        <input type="text" class="form-control" id="pin-comment" 
          placeholder="Comments">
      </div>
      <div class="form-group" id="pin-select-board">
      </div>
      <button type="submit" id="add-pin--${userId}" class="btn btn-success">Add Pin</button>
    </form>`;
  selectBoard(userId);
};

export default addPinForm;
