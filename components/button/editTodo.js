// import { modalOpenClose } from '../modal/modal.js';
// // import { id } from '..//button/addToDo';

// (() => {
//     const todoColumn = document.getElementById('todoColumn');
//     todoColumn.addEventListener('click', (e) => {
//         const targetId = e.target.closest('.editBtn').id.split('-')[1];
//         console.log(targetId);
//         modalOpenClose('Edit');   
//         const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
//         localStorageArr[0].forEach(element => {      
//             if (element.id == targetId) {
//                     document.getElementById('inputTitle').value = `${element.title}`;
//                     document.getElementById('inputTextarea').value = `${element.desc}`;
//                     document.getElementById('inputSelect').value = `${element.user}`; 
//                     // id = element.id;
                                          
//                     // const ifEditTitle = document.getElementById('inputTitle');
//                     // ifEditTitle.addEventListener('input', () => {
//                     //     el.title = document.getElementById('inputTitle').value;                                                      
//                     // });      
                    
//                     // const ifEditText = document.getElementById('inputTextarea');
//                     // ifEditText.addEventListener('input', () => {
//                     //     el.desc = document.getElementById('inputTextarea').value;                             
//                     // });  

//                     // const ifEditUser = document.getElementById('inputSelect');
//                     // ifEditUser.addEventListener('input', () => {
//                     //     el.user = document.getElementById('inputSelect').value;                              
//                     // });                     
                        
//                 };
//             });
         
//            });
//         // localStorage.setItem('trelloKey', JSON.stringify(localStorageArr)); 
    
// })();

// function editTodo() {

// }