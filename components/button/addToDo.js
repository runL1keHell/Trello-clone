import { timestamp } from "../time/time.js";
import { countCards } from "../card/countCards.js";
import { modalStyling, closeModal } from '../modal/modal.js'

let flag = '';
let obj = {};

(() => {
   const confirmButton = document.getElementById('confirmButton');
   confirmButton.addEventListener('click', () => {
      if (!flag) {
         appendTodo();
         countCards();
         closeModal(); 
      } else {
         editTodo();
         closeModal();
         location.reload();         
      }
      
   }); 

   const addTodo = document.getElementById('addTodo');
   addTodo.addEventListener('click', () => {
      modalStyling('Add');   
   });

   const todoColumn = document.getElementById('todoColumn');
   todoColumn.addEventListener('click', (e) => {
      try {
         const targetId = e.target.closest('.editBtn').id.split('-')[1];
         modalStyling('Edit');   
         const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
         localStorageArr[0].forEach(element => {      
         if (element.id == targetId) {
            document.getElementById('inputTitle').value = `${element.title}`;
            document.getElementById('inputTextarea').value = `${element.desc}`;
            document.getElementById('inputSelect').value = `${element.user}`; 
            flag = element.id;
            console.log(flag);
            obj.id = element.id;
            obj.date = `${element.date}`;
            const ifEdit = document.getElementById('openModal');
            ifEdit.addEventListener('input', () => {
               obj.title = document.getElementById('inputTitle').value;
               obj.desc = document.getElementById('inputTextarea').value;
               obj.user = document.getElementById('inputSelect').value;                                                                 
            });                      
            return obj
         };   
      });
   } catch (err) {
      console.log('Отсуствует элемент для редактирования');
   }   
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

   // inputTitle.value = '';
   // description.value = '';
   // inputSelect.value = '';  
   // очищать надо как при создании карточки, так и редактировании. Поэтому очистку вынес в функцию закрытия модального окна
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


function editTodo() {
   const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
   localStorageArr[0].forEach((el, index) => {
      if (el.id === obj.id) {
         localStorageArr[0][index].title = obj.title;
         localStorageArr[0][index].desc = obj.desc;
         localStorageArr[0][index].user = obj.user;
      }
   })
   localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));         
   flag = '';
   obj = {};

};

  
   


