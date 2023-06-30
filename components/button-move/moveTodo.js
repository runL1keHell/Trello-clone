import { countCards } from "../card/countCards.js";
import { modalStyling, closeModal, appendModal} from '../modal/modal.js';
import { renderTodo } from "../button/addToDo.js";
import { appendWarningModal, modalSmStyling } from "../modal/modalWarnings.js";



const todoColumn = document.getElementById('todoColumn');
todoColumn.addEventListener('click', (e) => {    
    if (e.target.id.includes("move")) {
       const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
       const targetId = e.target.id.split('-')[1];
       const storageIndexOfElement = localStorageArr[0].findIndex((element) => element.id.toString() === targetId);
       const amountOfCards = document.getElementById('in-progress-counter').textContent;
       const elementToMove = localStorageArr[0][storageIndexOfElement];
       if (Number(amountOfCards) < 6) {        
        localStorageArr[1].push(elementToMove);
        localStorageArr[0].splice(storageIndexOfElement, 1);
        localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));
        renderTodo();
        location.reload();      
       } else {
        appendWarningModal();
        modalSmStyling();
        const confirmDelAllBtn = document.getElementById('confirmButton');
        confirmDelAllBtn.addEventListener('click', () => {
            localStorageArr[1].push(elementToMove);
            localStorageArr[0].splice(storageIndexOfElement, 1);
            localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));
            renderTodo();
            location.reload();  
        })
       }         
    };
});

const todoColumnInProgress = document.getElementById('todoInProgress'); 
todoColumnInProgress.addEventListener('click', (e) => {    
    if (e.target.id.includes("back")) {
       const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
       const targetId = e.target.id.split('-')[1];
       const storageIndexOfElement = localStorageArr[1].findIndex((element) => element.id.toString() === targetId);
       const elementToMove = localStorageArr[1][storageIndexOfElement];
       localStorageArr[0].push(elementToMove);
       localStorageArr[1].splice(storageIndexOfElement, 1);
       localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));
       renderTodo();
       location.reload();        
    };
});


todoColumnInProgress.addEventListener('click', (e) => {    
    if (e.target.id.includes("complete")) {
       const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
       const targetId = e.target.id.split('-')[1];
       const storageIndexOfElement = localStorageArr[1].findIndex((element) => element.id.toString() === targetId);
       const elementToMove = localStorageArr[1][storageIndexOfElement];
       localStorageArr[2].push(elementToMove);
       localStorageArr[1].splice(storageIndexOfElement, 1);
       localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));
       renderTodo();
       location.reload();        
    };
});