
// document.addEventListener("DOMContentLoaded", function(){   
//   let scrollbar = document.body.clientWidth - window.innerWidth + 'px';
//     document.querySelector('[href="#openModal"]').addEventListener('click',function(){
//       document.body.style.overflow = 'hidden';
//       document.querySelector('#openModal').style.marginLeft = scrollbar;
//       });
    // document.querySelector('[href="#close"]').addEventListener('click',function(){
    //   document.body.style.overflow = 'visible';
    //   document.querySelector('#openModal').style.marginLeft = '0px';
     
    // });
  // });

  export function appendModal () {
    const modalContainer = document.getElementById('openModal');
    modalContainer.innerHTML = `
    <div class="modal-dialog">

      <div class="modal-content">

        <div class="modal-header">

          <h3 class="modal-title">Add/Edit todo</h3>

          <title="Close" class="close" id="close1">×</a>

        </div>

        <div class="modal-body">

          <div>

            <input type="text" class="input-title" id="inputTitle" placeholder="Enter title" autofocus required>
            
            <input type="textarea" class="input-textarea" id="inputTextarea" placeholder="Description" maxlength="200">
        
            <div class="modal-buttons">

              <select name="select" class="input-select" id="inputSelect">

                <option disabled selected>Select user</option>

                <option value="User1">User 1</option>

                <option value="User2">User 2</option>
        
              </select>

              <div class="button" id="fake-id77">
                <a href="#" id="close2">Cancel</a>
              </div>

              <div class="button" id="confirmButton">
                Confirm
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }

  

  export function modalStyling(param) {
    
    if (param === 'Add') {
    document.querySelector('.modal-title').innerText = 'Add';
    } else if (param === 'Edit') {
        document.querySelector('.modal-title').innerText = 'Edit';
    };

    const modalWindow = document.getElementById('openModal');
    modalWindow.style.opacity = 1;
    modalWindow.style.pointerEvents = 'auto';
    modalWindow.style.overflowY = 'auto';  

    const closeByX = document.getElementById('close1');
    closeByX.addEventListener('click', closeModal);

    const closeByCancel = document.getElementById('close2');
    closeByCancel.addEventListener('click', closeModal);

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeModal()
      }
      });
  
    window.addEventListener('click', (e) => {
      if (e.target == modalWindow) {            
        closeModal();
      }
  });
    
}

export function closeModal() {
   const modalWindow = document.getElementById('openModal');
   modalWindow.style.opacity = 0;
   modalWindow.style.pointerEvents = 'none';
   modalWindow.style.overflowY = 'none';   

  document.getElementById('inputTitle').value = '';
  document.getElementById('inputTextarea').value = '';
  document.getElementById('inputSelect').value = ''; 
  deleteModalFromHtml();
}

const deleteModalFromHtml = () => {
  const modalContainer = document.getElementById('openModal');
  modalContainer.innerHTML = '';
}