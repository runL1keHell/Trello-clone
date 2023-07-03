import { appendModal, modalStyling, closeModal } from "../modal/modal";
import { getUsers } from "../users/users";
import { remoteUsersCount } from "../../constants/constants.js";
import { edit_MOCK_API_todo } from "../../main.js";

const todoColumn = document.getElementById('todoColumn');

todoColumn.addEventListener('click', (e) => {
   // console.log(e.target);
   if (e.target.id.includes("edit")) {
      const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
      const targetId = e.target.id.split('-')[1];
      const storageIndexOfElement = localStorageArr[0].findIndex((element) => element.id.toString() === targetId);
      const elementToEdit = localStorageArr[0][storageIndexOfElement];
      appendModal();
      getUsers(remoteUsersCount);
      modalStyling('big', 'Edit');

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
               console.log(document.getElementById('inputTitle').value);
               edit_MOCK_API_todo(storageIndexOfElement + 1, document.getElementById('inputTitle').value, document.getElementById('inputTextarea').value, document.getElementById('inputSelect').value, true);
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
            edit_MOCK_API_todo(storageIndexOfElement + 1, document.getElementById('inputTitle').value, document.getElementById('inputTextarea').value, document.getElementById('inputSelect').value, true);
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