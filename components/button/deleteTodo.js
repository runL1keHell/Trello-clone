import { countCards } from "../card/countCards";
import { closeModal, modalStyling } from "../modal/modal.js";
import { appendWarningModal, modalSmStyling } from "../modal/modalWarnings.js";
import { MOCK_API1, MOCK_API2, WARNING_DELETE_ALL_CARDS } from "../../constants/constants";
import { delete_MOCK_API, delete_ALL_MOCK_API} from '../../main.js'

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
         delete_MOCK_API(MOCK_API1, 'todo', targetId);
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
         delete_MOCK_API(MOCK_API2, 'done', targetId)
         countCards();
      };
   });

   const deleteAll = document.getElementById('DeleteAll'); 
   deleteAll.addEventListener('click', (e) => {
         if (document.getElementById('done-counter').textContent > 0) {
            appendWarningModal(WARNING_DELETE_ALL_CARDS.warningText);         
            modalStyling('small');
            const confirmDelAllBtn = document.getElementById('confirmButton');
            confirmDelAllBtn.addEventListener('click', () => {
               const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
               const len = localStorageArr[2].length;
               // console.log(len);
               localStorageArr[2].splice(0);
               localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));
               let doneColumn = document.getElementById('todoDone');
               doneColumn.innerHTML = '';
               closeModal();
               for (let i = 1; i <= len; i++) {
                  delete_ALL_MOCK_API(MOCK_API2, 'done', i)
               };            
               countCards();
            // location.reload();  
         })
         }
              
   });   

})();