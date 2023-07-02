import { BUTTON_TITLES } from "../../constants/constants";
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
        
              </select>

              <div class="button" id="close2">${BUTTON_TITLES.cancel}</div>

              <div class="button" id="confirmButton">${BUTTON_TITLES.confirm}</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }

  export function modalStyling(param1, param2) {
    
    const modalWindow = document.getElementById('openModal');
    modalWindow.style.opacity = 1;
    modalWindow.style.pointerEvents = 'auto';
    modalWindow.style.overflowY = 'auto';   

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

    if (param1 === 'big') {
      if (param2 === 'Add') {
        document.querySelector('.modal-title').innerText = 'Add';
        } else if (param2 === 'Edit') {
            document.querySelector('.modal-title').innerText = 'Edit';
        };    
          
        const closeByX = document.getElementById('close1');    
        closeByX.addEventListener('click', closeModal);
         
    } else if (param1 === 'small') {
        
      document.querySelector('.modal-header').classList.add('modal-header-sm');
      document.querySelector('.modal-dialog').classList.add('modal-dialog-sm');
      document.querySelector('.modal-content').classList.add('modal-cont-sm');
      document.querySelector('.modal-buttons').classList.add('modal-buttons-sm');
        
    }
  }

   

export function closeModal() {
   const modalWindow = document.getElementById('openModal');
   modalWindow.style.opacity = 0;
   modalWindow.style.pointerEvents = 'none';
   modalWindow.style.overflowY = 'none';   
  
  if (document.getElementById('inputTitle')) {
    document.getElementById('inputTitle').value = '';
    document.getElementById('inputTextarea').value = '';
    document.getElementById('inputSelect').value = ''; 
  }
  
  deleteModalFromHtml();
}


const deleteModalFromHtml = () => {
  const modalContainer = document.getElementById('openModal');
  modalContainer.innerHTML = '';
}