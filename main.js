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
import { MOCK_API1, MOCK_API2 } from './constants/constants.js'

// function getMockAPI(MOCK_API, param) {
// fetch(`${MOCK_API}/${param}`, {
//   method: 'GET',
//   headers: {'content-type':'application/json'},
// }).then(res => {
//   if (res.ok) {
//       return res.json();
//   }
//   // handle error
// }).then(task => {
//     const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
//     localStorageArr[0] = task;
//     localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));   
    
//   // Do something with the list of tasks

// //  
// }).catch(error => {
//   // handle error
//   console.log('Ошибка получения данных');
// })
// };
async function getMockAPI(MOCK_API, param) {
  let response = await fetch(`${MOCK_API}/${param}`, {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }
  )
  if (response.status !== 200) return "Bad response";
    let result = await response.json()
    return result  
  };
getMockAPI(MOCK_API1, 'todo');
getMockAPI(MOCK_API1, 'progress');
getMockAPI(MOCK_API2, 'done');



// export function addMock_API(MOCK_API, param, id, title, desc, user, date, classEdit) {
//   const newTask = {
//     id: id,
//     title: title,
//     desc: desc,
//     user: user,
//     date: date,
//     edited: classEdit
//     };

//   fetch(`${MOCK_API}/${param}`, {
//     method: 'POST',
//     headers: {'content-type':'application/json'},
//     // Send your data in the request body as JSON
//     body: JSON.stringify(newTask)
//     }).then(res => {
//       if (res.ok) {
//           return res.json();
//       }
//       // handle error
//     }).then(task => {
//         console.log('Добавляю в моки');
//         // location.reload();  
        
//       // Do something with the list of tasks
    
//     //  
//     }).catch(error => {
//       // handle error      
//     }); 

// };

export async function addMock_API(MOCK_API, param, id, title, desc, user, date, classEdit) {
    const newTask = {
      id: id,
      title: title,
      desc: desc,
      user: user,
      date: date,
      edited: classEdit
      };
  
    let response = await fetch(`${MOCK_API}/${param}`, {
      method: 'POST',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(newTask)
      }
    )
    if (response.status !== 200) return "Bad response";
    let result = await response.json()
    return result    
  
  };

// export function delete_MOCK_API(MOCK_API, param, targetId) {
//   const url = new URL(`${MOCK_API}/${param}`);
//   url.searchParams.append('id', targetId);
  
// fetch(url, {
//   method: 'GET',
//   headers: {'content-type':'application/json'},
// }).then(res => {
//   if (res.ok) {
//     return res.json();
// }
//   // handle error
// }).then(tasks => {
//      fetch(`${MOCK_API}/${param}/${tasks[0].mocapi_id}`, {
//        method: 'DELETE',
//   }).then(res => {
//     if (res.ok) {
//         return res.json();
//     }
//     // handle error
//   }).then(task => {
//     console.log('Удаляю из МОКИ');
//       // location.reload();  
      
//     // Do something with the list of tasks
  
//   //  
//   })
// }).catch(error => {
//   // handle error
// });

// };

export async function delete_MOCK_API(MOCK_API, param, targetId) {
  const url = new URL(`${MOCK_API}/${param}`);
  url.searchParams.append('id', targetId);
  
  let response = await fetch(url, {
    method: 'GET',
    headers: {'content-type':'application/json'},
  })
  if (response.status !== 200) return "Bad response";
  let tasks = await response.json()
  let res = await fetch(`${MOCK_API}/${param}/${tasks[0].mocapi_id}`, {
    method: 'DELETE',
  })
  if (res.ok) return res.json();
};

// export function delete_ALL_MOCK_API(MOCK_API, param, number) {
  
//   fetch(`${MOCK_API}/${param}/${number}`, {
//        method: 'DELETE',
//   }).then(res => {
//     if (res.ok) {
//         return res.json();
//     }
//     // handle error
//   }).then(task => {
//     console.log('Удаляю dct из МОКИ');
//       // location.reload();  
      
//     // Do something with the list of tasks
  
//   //  
//   }).catch(error => {
//   // handle error
// });

// };

export async function delete_ALL_MOCK_API(MOCK_API, param, number) {
  
  let res = await fetch(`${MOCK_API}/${param}/${number}`, {
       method: 'DELETE',
  })
  if (res.status !== 200) return "Bad response";
    let result = await response.json()
    return result  
};
 
// export function edit_MOCK_API(MOCK_API, param, targetId, title, desc, user, edited) {
//   const url = new URL(`${MOCK_API}/${param}`);
//   url.searchParams.append('id', targetId);
  
//   fetch(url, {
//     method: 'GET',
//     headers: {'content-type':'application/json'},
//   }).then(res => {
//     if (res.ok) {
//         return res.json();
        
//     }
//     // handle error
//   }).then(tasks => {
//       fetch(`${MOCK_API}/${param}/${tasks[0].mocapi_id}`, {
//         method: 'PUT', // or PATCH
//         headers: {'content-type':'application/json'},
//         // body: JSON.stringify({title}, {desc}, {user}, {edited: true})
//         body: JSON.stringify({title: title, desc: desc, user: user, edited: edited})        
//       }).then(res => {
//         if (res.ok) {
//           // location.reload(); 
//         }
//        })
//       }).catch(error => {
//         console.log('error');
//     // handle error
//     });  
// };

export async function edit_MOCK_API(MOCK_API, param, targetId, title, desc, user, edited) {
  const url = new URL(`${MOCK_API}/${param}`);
  url.searchParams.append('id', targetId);
  
  let res = await fetch(url, {
    method: 'GET',
    headers: {'content-type':'application/json'},
  })
  if (res.status !== 200) return "Bad response"; 
  let tasks = await fetch(`${MOCK_API}/${param}/${tasks[0].mocapi_id}`, {
        method: 'PUT', // or PATCH
        headers: {'content-type':'application/json'},
        // body: JSON.stringify({title}, {desc}, {user}, {edited: true})
        body: JSON.stringify({title: title, desc: desc, user: user, edited: edited})        
      })
      if (res.ok) return res.json();
  };






// import {ACTIONS, BUTTON_TITLES, CARD_FIELDS, CARDS_LIMIT_INPROGRESS, CARD_COLORS, ERROR_TITLE, WARNING_LIMIT_INPROGRESS, WARNING_DELETE_ALL_CARDS}  from "./constants/constants.js"
// константы (тексты кнопок и ошибки, цвета, лимиты).