// formModal.js

const modalForm = (title) => {
  document.querySelector('#form-container').innerHTML = `
    <div class="modal fade" id="modalForm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">${title}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" id="modal-body">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" 
              data-dismiss="modal" id="close-btn">Close</button>
          </div>
        </div>
      </div>
    </div>`;
};

export default modalForm;
