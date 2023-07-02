import { countCards } from "../card/countCards";
import { modalStyling } from "../modal/modal.js";
import { appendWarningModal, modalSmStyling } from "../modal/modalWarnings.js";
import { WARNING_DELETE_ALL_CARDS } from "../../constants/constants";
import { delete_MOCK_API_todo } from '../../main.js'

(() => {
    const todoColumn = document.getElementById('todoColumn');
    todoColumn.addEventListener('click', (e) => {      
      if (e.target.id.includes("delete")) {
         const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
         const targetId = e.target.id.split('-')[1];
         const storageIndexOfElement = localStorageArr[0].findIndex((element) => element.id.toString() === targetId);
         const todoToRemove = document.getElementById(targetId);
         todoToRemove.remove();
         localStorageArr[0].splice(storageIndexOfElement, 1);
         localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));
         delete_MOCK_API_todo(storageIndexOfElement + 1);
         countCards();
      };
   });

   const todoColumnDone = document.getElementById('todoDone'); 
   todoColumnDone.addEventListener('click', (e) => {
      if (e.target.id.includes("delete")) {
         const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
         const targetId = e.target.id.split('-')[1];         
         const storageIndexOfElement = localStorageArr[2].findIndex((element) => element.id.toString() === targetId);
         const todoToRemove = document.getElementById(targetId);
         todoToRemove.remove();
         localStorageArr[2].splice(storageIndexOfElement, 1);
         localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));
         countCards();
      };
   });

   const deleteAll = document.getElementById('DeleteAll'); 
   deleteAll.addEventListener('click', (e) => {
         appendWarningModal(WARNING_DELETE_ALL_CARDS.warningText);         
         modalStyling('small');
         const confirmDelAllBtn = document.getElementById('confirmButton');
         confirmDelAllBtn.addEventListener('click', () => {
            const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
            localStorageArr[2].splice(0);
            localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));
            countCards();
            location.reload();  
         })
      
   });
   

})();