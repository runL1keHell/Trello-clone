import { renderTodo } from "../button/addToDo";

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.length) {
        localStorage.setItem('trelloKey', JSON.stringify([[], [], []]));
    };  
    renderTodo();      
});
