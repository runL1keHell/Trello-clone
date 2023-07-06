import { BUTTON_TITLES } from "../../constants/constants";  
  
  export function appendWarningModal(text) {
    const modalContainer = document.getElementById('openModal');
    modalContainer.innerHTML = `
    <div class="modal-dialog">

      <div class="modal-content">

        <div class="modal-header">

          <h3>Warning!</h3>

          

        </div>

        <div class="modal-body">
  
        <div class="modal-warining-text">${text}</div>


          <div>

              <div class="modal-buttons">

              <div class="button" id="close2">${BUTTON_TITLES.cancel}</div>

              <div class="button" id="confirmButton">${BUTTON_TITLES.confirm}</div>
              
              </div>

          </div>
        </div>

      </div>

    </div>
    `
  }


