// editBoardForm.js

const editBoardForm = (userId, boardObj) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-book-form" class="mb-4">
      <div class="form-group">
        <label for="board-title">Board Title</label>
        <input type="text" class="form-control" id="board-title" aria-describedby="bookTitle" 
          placeholder="Enter Board Title" value="${boardObj.title}">
      </div>
      <div class="form-group">
        <label for="board-description">Description</label>
        <input type="text" class="form-control" id="board-description" 
          value="${boardObj.description}" required>
      </div>
      <button type="submit" id="update-board--${boardObj.firebaseKey}" class="btn btn-success">Update Board</button>
    </form>`;
};

export default editBoardForm;
