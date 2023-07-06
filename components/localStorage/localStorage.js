import { renderTodo } from "../button/addToDo.js";
import { getMockAPI } from '../API/mockAPI.js'
import { MOCK_API1, MOCK_API2 } from "../../constants/constants.js";

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.length) {
        localStorage.setItem('trelloKey', JSON.stringify([[], [], []]));
    };  
    getMockAPI(MOCK_API1, 'todo');
    getMockAPI(MOCK_API1, 'progress');
    getMockAPI(MOCK_API2, 'done');
    renderTodo();      
});
