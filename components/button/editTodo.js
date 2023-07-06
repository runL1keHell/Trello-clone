import { appendModal, modalStyling, closeModal } from "../modal/modal";
import { getUsers } from "../users/users";
import { MOCK_API1, remoteUsersCount } from "../../constants/constants.js";
import { edit_MOCK_API } from '../API/mockAPI.js';

const todoColumn = document.getElementById('todoColumn');

todoColumn.addEventListener('click', (e) => {
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
               if (document.getElementById('inputTitle').value) {
                 redefineValues(elementToEdit); 
               localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));
               edit_MOCK_API(MOCK_API1, 'todo', targetId, elementToEdit.title, elementToEdit.desc, elementToEdit.user, elementToEdit.edited);
               closeModal(); 
               };                                    
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
            if (document.getElementById('inputTitle').value) {
               redefineValues(elementToEdit);
               localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));
               edit_MOCK_API(MOCK_API1, 'todo', targetId, elementToEdit.title, elementToEdit.desc, elementToEdit.user, elementToEdit.edited);
               closeModal();   
            };
         };        
      });
   };
});

function redefineValues(element) {
   element.title = document.getElementById('inputTitle').value;
   element.desc = document.getElementById('inputTextarea').value;
   element.user = document.getElementById('inputSelect').value; 
   element.edited = true;  
   const elementInHtml = document.getElementById(element.id);
   elementInHtml.classList.add('card-edited')
}