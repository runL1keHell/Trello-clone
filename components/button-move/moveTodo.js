import { countCards } from "../card/countCards.js";
import { modalStyling, closeModal, appendModal} from '../modal/modal.js';
import { renderTodo } from "../button/addToDo.js";
import { appendWarningModal, modalSmStyling } from "../modal/modalWarnings.js";
import { MOCK_API1, MOCK_API2, WARNING_LIMIT_INPROGRESS } from "../../constants/constants";
import { addMock_API, delete_MOCK_API } from "../../main.js";



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
        console.log('Add to LS');
        addMock_API(MOCK_API1, 'progress', elementToMove.id, elementToMove.title, elementToMove.desc, elementToMove.user, elementToMove.date, elementToMove.edited);
        console.log('Done');
        localStorageArr[0].splice(storageIndexOfElement, 1);
        console.log('Delete from LS');
        delete_MOCK_API(MOCK_API1, 'todo', targetId);
        console.log('Well done');
        localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));
        console.log('Rewrite LS');
        renderTodo();
        // location.reload();   
        
             
       } else {
        appendWarningModal(WARNING_LIMIT_INPROGRESS.warningText);
        modalStyling('small');
        const confirmDelAllBtn = document.getElementById('confirmButton');
        confirmDelAllBtn.addEventListener('click', () => {
            localStorageArr[1].push(elementToMove);
            localStorageArr[0].splice(storageIndexOfElement, 1);
            localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));
            renderTodo();
            location.reload();  
            addMock_API(MOCK_API1, 'progress', elementToMove.id, elementToMove.title, elementToMove.desc, elementToMove.user, elementToMove.date, elementToMove.edited);
            delete_MOCK_API(MOCK_API1, 'todo', targetId);
            // location.reload();
        })
       } 
    // location.reload();    
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
       addMock_API(MOCK_API1, 'todo', elementToMove.id, elementToMove.title, elementToMove.desc, elementToMove.user, elementToMove.date, elementToMove.edited);
       delete_MOCK_API(MOCK_API1, 'progress', targetId);
    //    location.reload();        
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
       addMock_API(MOCK_API2, 'done', elementToMove.id, elementToMove.title, elementToMove.desc, elementToMove.user, elementToMove.date, elementToMove.edited);
       delete_MOCK_API(MOCK_API1, 'progress', targetId);
    //    location.reload();        
    };
});