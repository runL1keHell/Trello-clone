import { timestamp } from "../time/time.js";
import { countCards } from "../card/countCards.js";
import { modalStyling, closeModal, appendModal } from '../modal/modal.js'


(() => {

   const addTodo = document.getElementById('addTodo');
   addTodo.addEventListener('click', () => {
      appendModal();
      modalStyling('Add');

      const confirmButton = document.getElementById('confirmButton');
      confirmButton.addEventListener('click', () => {
         appendTodo();
         countCards();
         closeModal(); 
      });
   });

})();


function appendTodo() {
   const id = Math.random(); 
   let inputTitle = document.getElementById('inputTitle');
   let description = document.getElementById('inputTextarea');
   let inputSelect = document.getElementById('inputSelect');   
   const time = timestamp.innerHTML;

   const todoColumn = document.getElementById('todoColumn');
   const newTodo = returnHTML(id, inputTitle.value, description.value, inputSelect.value, time);
   todoColumn.innerHTML =  todoColumn.innerHTML + newTodo;

   addLocalStorageTodo(id, inputTitle.value, description.value, inputSelect.value, time);
};


function returnHTML(id, title, desc, user, date) {
   return  ` 
      <div class="card" id="${id}">
                     
         <div class="card-top-buttons">
            <div class="button editBtn" id="edit-${id}">Edit</div>
            <div class="button" id="delete-${id}">Delete</div>
         </div>
         
         <div class="card-title">${title}</div>

         <div class="card-description">
            ${desc}
            <div class="button-move" id="move-${id}"> > </div>

         </div>

         <div class="user">${user}

            <div id="timeCreated">${date}</div>
         
         </div>
      </div>
   `
}


function addLocalStorageTodo (id, title, desc, user, date) {
   const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
   localStorageArr[0].push({
      id,
      title,
      desc,
      user,
      date,
   });

   localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));   
};


export function renderTodo() {    
    const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
    if (!localStorageArr[0]) return;
    localStorageArr[0].forEach(element => {      
      const todoColumn = document.getElementById('todoColumn');
      const newTodo = returnHTML(element.id, element.title, element.desc, element.user, element.date);
      todoColumn.innerHTML =  todoColumn.innerHTML + newTodo;
      countCards();
   });
};
   


