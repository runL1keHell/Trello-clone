
  export function appendWarningModal() {
    const modalContainer = document.getElementById('openModal');
    modalContainer.innerHTML = `
    <div class="modal-dialog">

      <div class="modal-content">

        <div class="modal-header">

          <h3>Warning!</h3>

          

        </div>

        <div class="modal-body">

          <div>

              <div class="modal-buttons">

              <div class="button" id="close2">Cancel</div>

              <div class="button" id="confirmButton">Confirm</div>
              
              </div>

          </div>
        </div>

      </div>

    </div>
    `
  }


