"use strict";

import { renderTodo } from './components/button/addToDo.js'

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.length) {
        localStorage.setItem('trelloKey', JSON.stringify([[], [], []]));
    };  
    renderTodo();      
});

export function countCards() {
    const countColumns = document.querySelectorAll('.cards-wrapper');
    const countHTMLFirstColumn = countColumns[0].querySelectorAll('.card');
    const countHTMLSecondColumn = countColumns[1].querySelectorAll('.card');
    const countHTMLThirdColumn = countColumns[2].querySelectorAll('.card');
    const countFirstColumn = Array.from(countHTMLFirstColumn).length;
    const countSecondColumn = Array.from(countHTMLSecondColumn).length;
    const countThirdtColumn = Array.from(countHTMLThirdColumn).length;
    document.getElementById('todocounter').textContent = `${countFirstColumn}`;
    document.getElementById('in-progress-counter').textContent = `${countSecondColumn}`;
    document.getElementById('done-counter').textContent = `${countThirdtColumn}`;
};
countCards();





// import {date} from "./components/time/time.js"
// закоменчено, т.к. ошибка CORS, если type="module" перед </body> в index.html, а без этого не работает import в main.js, выдавая ошибку Uncaught SyntaxError: Cannot use import statement outside a module
// подключено отдельным скриптом временно
// todo: сделать, чтобы время тикало без обновления страницы

// import {ACTIONS, BUTTON_TITLES, CARD_FIELDS, CARDS_LIMIT_INPROGRESS, CARD_COLORS, ERROR_TITLE}  from "./constants/constants.js"
// это все константы (тексты кнопок и ошибки, цвета, лимиты) тоже пока закоменчено из-за type="module"