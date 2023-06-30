
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



export function modalSmStyling() {
    
  const modalWindow = document.getElementById('openModal');
  modalWindow.style.opacity = 1;
  modalWindow.style.pointerEvents = 'auto';
  modalWindow.style.overflowY = 'auto';   

  document.querySelector('.modal-header').classList.add('modal-header-sm');
  document.querySelector('.modal-dialog').classList.add('modal-dialog-sm');
  document.querySelector('.modal-content').classList.add('modal-cont-sm');
  document.querySelector('.modal-buttons').classList.add('modal-buttons-sm');
  
  const closeByCancel = document.getElementById('close2');
  closeByCancel.addEventListener('click', closeModal);
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal()
    }
    });

  window.addEventListener('mousedown', (e) => {
    if (e.target == modalWindow) {            
      closeModal();
    }
});
  
}

const deleteModalFromHtml = () => {
  const modalContainer = document.getElementById('openModal');
  modalContainer.innerHTML = '';
}

export function closeModal() {
  const modalWindow = document.getElementById('openModal');
  modalWindow.style.opacity = 0;
  modalWindow.style.pointerEvents = 'none';
  modalWindow.style.overflowY = 'none';   

deleteModalFromHtml();
}