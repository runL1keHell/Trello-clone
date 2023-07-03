"use strict";

import './components/modal/modal.js';
import './components/time/time.js';
import './components/localStorage/localStorage.js';
// import './components/button/addToDo.js';
import './components/button/editTodo.js';
import './components/button/deleteTodo.js';
import './components/button-move/moveTodo.js';
import './components/users/users.js';

import { addLocalStorageTodo, renderTodo } from './components/button/addToDo.js'
import { MOCK_API } from './constants/constants.js'

(function getMockAPI() {
fetch(MOCK_API, {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
    const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
    localStorageArr[0] = task;
    localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));   
   
  // Do something with the list of tasks

//  
}).catch(error => {
  // handle error
  console.log('Ошибка получения данных');
})
})();

// export function setMocki() {
   
 
export function addMock_API_todo(id, title, desc, user, date, classEdit) {
  const newTask = {
    id: id,
    title: title,
    desc: desc,
    user: user,
    date: date,
    edited: classEdit
    };

  fetch(MOCK_API, {
    method: 'POST',
    headers: {'content-type':'application/json'},
    // Send your data in the request body as JSON
    body: JSON.stringify(newTask)
    }); 

}

export function delete_MOCK_API_todo(targetId) {
  const url = new URL(MOCK_API);
  url.searchParams.append('id', targetId);
  
fetch(url, {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(tasks => {
     fetch(`${MOCK_API}/${tasks[0].mocapi_id}`, {
    method: 'DELETE',
  });

  // mockapi returns only tasks that match `hello` string
}).catch(error => {
  // handle error
});

};
 
export function edit_MOCK_API_todo(param, title, desc, user, classEdit) {
  fetch(`${MOCK_API}/${param}`, {
    method: 'PUT', // or PATCH
    headers: {'content-type':'application/json'},
    // body: JSON.stringify({title}, {desc}, {user}, {edited: true})
    body: JSON.stringify({title: title, desc: desc, user: user, edited: true})
  });
};
  
//   .then(res => {
//     if (res.ok) {
//         return res.json();
//         // console.log('123');
//     }
//     // handle error
//   }).then(task => {
//     // console.log(task);
//     // Do something with updated task
//   }).catch(error => {
//     // handle error
//   })
// };
        



// import {ACTIONS, BUTTON_TITLES, CARD_FIELDS, CARDS_LIMIT_INPROGRESS, CARD_COLORS, ERROR_TITLE, WARNING_LIMIT_INPROGRESS, WARNING_DELETE_ALL_CARDS}  from "./constants/constants.js"
// константы (тексты кнопок и ошибки, цвета, лимиты).