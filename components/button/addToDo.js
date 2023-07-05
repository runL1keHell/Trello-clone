import { timestamp } from "../time/time.js";
import { countCards } from "../card/countCards.js";
import { modalStyling, closeModal, appendModal } from '../modal/modal.js'
import { getUsers } from "../users/users.js";
import { remoteUsersCount } from "../../constants/constants.js";
import { MOCK_API1, MOCK_API2 } from '../../constants/constants.js';
import { addMock_API } from '../API/mockAPI.js'

(() => {

   const addTodo = document.getElementById('addTodo');
   addTodo.addEventListener('click', () => {
      appendModal();
      getUsers(remoteUsersCount);
      modalStyling('big', 'Add');

      const confirmButton = document.getElementById('confirmButton');
      confirmButton.addEventListener('click', () => {
         if (document.getElementById('inputTitle').value) {
            appendTodo();
            countCards();
            closeModal();    
         };
      });
     
      const modal = document.querySelector('.modal-dialog')
      modal.addEventListener('keydown', (e) => {
         if (e.keyCode === 13) {
            if (document.getElementById('inputTitle').value) {
               appendTodo();
               countCards();
               closeModal();  
            };
         };    
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
   const newTodo = returnHTML(id, inputTitle.value, description.value, inputSelect.value, time, '');
   todoColumn.innerHTML =  todoColumn.innerHTML + newTodo;
   
   
   
   addMock_API(MOCK_API1,'todo', id, inputTitle.value, description.value, inputSelect.value, time, false);
   addLocalStorageTodo(id, inputTitle.value, description.value, inputSelect.value, time, false);
   closeModal();
};


function returnHTML(id, title, desc, user, date, classEdit) {
   return  ` 
      <div class="card ${classEdit}" id="${id}">
                     
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
};

function returnHTML_inprogress(id, title, desc, user, date, classEdit) {
   return  ` 
      <div class="card inprogress" id="${id}">
                     
         <div class="card-top-buttons">
            <div class="button backBtn" id="back-${id}">Back</div>
            <div class="button" id="complete-${id}">Complete</div>
         </div>
         
         <div class="card-title">${title}</div>

         <div class="card-description">${desc}</div>

         <div class="user">${user}

            <div id="timeCreated">${date}</div>
         
         </div>
      </div>
   `
};

function returnHTML_done(id, title, desc, user, date, classEdit) {
   return  ` 
      <div class="card done" id="${id}">
                     
         <div class="card-top-buttons">
            <div class="button" id="delete-${id}">Delete</div>
         </div>
         
         <div class="card-title">${title}</div>

         <div class="card-description">${desc}</div>

         <div class="user">${user}

            <div id="timeCreated">${date}</div>
         
         </div>
      </div>
   `
};


function addLocalStorageTodo (id, title, desc, user, date, edit) {
   const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
   localStorageArr[0].push({
      id,
      title,
      desc,
      user,
      date,
      edited: false
   });

   localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));   

};


export function renderTodo() {    
   const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
   if (!localStorageArr[0]) return;
   localStorageArr[0].forEach(element => {   
      if (!document.getElementById(element.id)) {
         const todoColumn = document.getElementById('todoColumn');
         let newTodo;
         if (element.edited) {
            newTodo = returnHTML(element.id, element.title, element.desc, element.user, element.date, 'card-edited')
         } else {
            newTodo = returnHTML(element.id, element.title, element.desc, element.user, element.date, '')
         }
         todoColumn.innerHTML =  todoColumn.innerHTML + newTodo;     

         countCards();  
      };
   });
   localStorageArr[1].forEach(element => {
      if (!document.getElementById(element.id)) {
         const todoInProgress = document.getElementById('todoInProgress');
         const newTodoColumn2 = returnHTML_inprogress(element.id, element.title, element.desc, element.user, element.date, element.edit)
         todoInProgress.innerHTML = todoInProgress.innerHTML + newTodoColumn2;
         countCards();
      };
   });
   localStorageArr[2].forEach(element => {
      if (!document.getElementById(element.id)) {
         const todoDone = document.getElementById('todoDone');
         const newTodoColumn3 = returnHTML_done(element.id, element.title, element.desc, element.user, element.date, element.edit)
         todoDone.innerHTML = todoDone.innerHTML + newTodoColumn3;
         countCards();
      };
   });
};


