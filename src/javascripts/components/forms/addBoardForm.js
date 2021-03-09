// addBoardForm.js

const addBoardForm = (userId) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-book-form" class="mb-4">
      <div class="form-group">
        <label for="board-title">Board Title</label>
        <input type="text" class="form-control" id="board-title" aria-describedby="bookTitle" 
          placeholder="Enter Board Title" value="">
      </div>
      <div class="form-group">
        <label for="board-description">Description</label>
        <input type="text" class="form-control" id="board-description" 
          placeholder="Enter a description" value="" required>
      </div>
      <button type="submit" id="add-board--${userId}" class="btn btn-success">Add Board</button>
    </form>`;
};
export default addBoardForm;
