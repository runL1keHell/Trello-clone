import { MOCK_API1, MOCK_API2 } from '../../constants/constants.js'

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
       body: JSON.stringify(newTask)
       }
     )
     if (response.status !== 200) return "Bad response";
     let result = await response.json()
     return result    
   };
 
 
 
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
 
 
 export async function delete_ALL_MOCK_API(MOCK_API, param) {
   const response = await fetch(`${MOCK_API}/${param}`);
   const doneTodos = await response.json();
   for (const todo of doneTodos) {
     let res = await fetch(`${MOCK_API}/${param}/${todo.mocapi_id}`, {
       method: 'DELETE',
    })
   }
   
 }
   
 
 export async function edit_MOCK_API(MOCK_API, param, targetId, title, desc, user, edited) {
   const url = new URL(`${MOCK_API}/${param}`);
   url.searchParams.append('id', targetId);
   
   let res = await fetch(url, {
     method: 'GET',
     headers: {'content-type':'application/json'},
   })
   if (res.status !== 200) return "Bad response"; 
   let jsonResponse = await res.json();
   
   let tasks = await fetch(`${MOCK_API}/${param}/${jsonResponse[0].mocapi_id}`, {
         method: 'PUT', // or PATCH
         headers: {'content-type':'application/json'},
         // body: JSON.stringify({title}, {desc}, {user}, {edited: true})
         body: JSON.stringify({title: title, desc: desc, user: user, edited: edited})        
       })
       if (tasks.ok) return tasks.json();
   };