import { renderTodo } from '../button/addTodo.js'

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.length) {
        localStorage.setItem('trelloKey', JSON.stringify([[], [], []]));
    };  
    renderTodo();      
});