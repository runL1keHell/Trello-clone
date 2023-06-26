import { appendModal, modalStyling, closeModal } from "../modal/modal";

const todoColumn = document.getElementById('todoColumn');

todoColumn.addEventListener('click', (e) => {
   // console.log(e.target);
   if (e.target.id.includes("edit")) {
      const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
      const targetId = e.target.id.split('-')[1];
      const storageIndexOfElement = localStorageArr[0].findIndex((element) => element.id.toString() === targetId);
      const elementToEdit = localStorageArr[0][storageIndexOfElement];
      appendModal();
      modalStyling('Edit');

      document.getElementById('inputTitle').value = elementToEdit.title;
      document.getElementById('inputTextarea').value = elementToEdit.desc;
      document.getElementById('inputSelect').value = elementToEdit.user;

      const modal = document.querySelector('.modal-dialog')



      modal.addEventListener('keydown', (e) => {
         if (e.keyCode === 13) {
            if (document.getElementById('inputTitle').value === elementToEdit.title &&
            document.getElementById('inputTextarea').value === elementToEdit.desc &&
            document.getElementById('inputSelect').value === elementToEdit.user) {
               closeModal();
            } else {
               redefineValues(elementToEdit); 
               localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));
               closeModal();
               location.reload();
            };    
         };  
      });
      const confirmButton = document.getElementById('confirmButton');
      
      confirmButton.addEventListener('click', () => {
         if (document.getElementById('inputTitle').value === elementToEdit.title &&
         document.getElementById('inputTextarea').value === elementToEdit.desc &&
         document.getElementById('inputSelect').value === elementToEdit.user) {
            closeModal();
         } else {
            redefineValues(elementToEdit);
            localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));
            closeModal();
            location.reload();
         }         
      })
   };
});

function redefineValues(element) {
   element.title = document.getElementById('inputTitle').value;
   element.desc = document.getElementById('inputTextarea').value;
   element.user = document.getElementById('inputSelect').value; 
   element.edited = true;  
}