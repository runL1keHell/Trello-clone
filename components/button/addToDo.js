import { timestamp } from "../time/time.js";
import { countCards } from "../card/countCards.js";
import { editCard } from "./editTodo.js";
import { modalOpenClose, closeMod } from '..//../components/modal/modal.js'

let id;

(() => {
   const confirmButton = document.getElementById('confirmButton');
   confirmButton.addEventListener('click', (ev) => {   
   const inputTitle = document.getElementById('inputTitle');
   const description = document.getElementById('inputTextarea');
   const inputSelect = document.getElementById('inputSelect');   
   // const id = Math.random();   
   if (!id) { 
      createTodo(inputTitle.value, description.value, inputSelect.value, timestamp.innerHTML)
   } else {
      editTodo();
   };
   inputTitle.value = '';
   description.value = '';
   inputSelect.value = '';
   id = undefined;
 
       }); 
})();

const addTodo = document.getElementById('addTodo');
addTodo.addEventListener('click', (event) => {
   modalOpenClose('Add');   
   });

function createTodo(title, desc, user, date) {
   const todoColumn = document.getElementById('todoColumn');
   id = Math.random(); 
   const newTodo = returnHTML(id, title, desc, user, date);
    
    todoColumn.innerHTML =  todoColumn.innerHTML + newTodo;
    addLocalstorageTodo(id, title, desc, user, timestamp.innerHTML);
    countCards();
    closeMod();
    id = undefined;
   
   

};

function returnHTML(id, title, desc, user, date) {
   return  ` <div class="card" id="${id}">
                  
    <div class="card-top-buttons">
       <div class="button editBtn" id="edit-${id}">Edit</div>
       <div class="button" id="delete-${id}">Delete</div>
    </div>
    
    <div class="card-title">${title}</div>

    <div class="card-description">
       ${desc}
       <div class="button-move" id="some-id3"><a href="#">></a></div>
   
    </div>

    <div class="user">${user}

       <div id="timeCreated">${date}</div>
    
    </div>
 </div>`
}

function addLocalstorageTodo (id, title, desc, user, date) {
    const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
    localStorageArr[0].push (
        {
           id,
           title,
           desc,
           user,
           date
        }
    );
    localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));   
};

export function renderTodo() {    
    const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
    localStorageArr[0].forEach(element => {      
       const todoColumn = document.getElementById('todoColumn');
       const newTodo = returnHTML(element.id, element.title, element.desc, element.user, element.date);
       todoColumn.innerHTML =  todoColumn.innerHTML + newTodo;
       countCards();
      });
}

