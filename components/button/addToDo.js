import { timestamp } from "../time/time.js";

const addTodo = document.getElementById('addTodo');
addTodo.addEventListener('click', (event) => { 
    const inputTitle = document.getElementById('inputTitle');
    const description = document.getElementById('inputTextarea');
    const inputSelect = document.getElementById('inputSelect');
    inputTitle.value = '';
    description.value = '';
    inputSelect.value = '';     
    const confirmButton = document.getElementById('confirmButton');
    confirmButton.addEventListener('click', (event) => {
        console.log("OK");
        const id = Math.random();   
        createTodo(id, inputTitle.value, description.value, inputSelect.value, timestamp.innerHTML); 
        
    })
});


function createTodo(id, title, desc, user, date) {
   
    const todoColumn = document.getElementById('todoColumn');
    
    const newTodo = returnHTML(id, title, desc, user, date);
    todoColumn.innerHTML =  todoColumn.innerHTML + newTodo;
    addLocalstorageTodo(id, title, desc, user, timestamp.innerHTML)

};

function returnHTML(id, title, desc, user, date) {
    return  ` <div class="card" id="${id}">
                  
    <div class="card-top-buttons">
       <div class="button" id="some-id"><a href="#openModal">Edit</a></div>
       <div class="button" id="some-id2"><a href="#">button 2</a></div>
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
       returnHTML(element.id, element.title, element.desc, element.user, element.date)
    });

}