"use strict";

import './components/modal/modal.js';
import './components/time/time.js';
import './components/localStorage/localStorage.js';
// import './components/button/addToDo.js';
// import './components/button/editTodo.js';
import './components/button/deleteTodo.js'




// import {date} from "./components/time/time.js"
// закоменчено, т.к. ошибка CORS, если type="module" перед </body> в index.html, а без этого не работает import в main.js, выдавая ошибку Uncaught SyntaxError: Cannot use import statement outside a module
// подключено отдельным скриптом временно
// todo: сделать, чтобы время тикало без обновления страницы

// import {ACTIONS, BUTTON_TITLES, CARD_FIELDS, CARDS_LIMIT_INPROGRESS, CARD_COLORS, ERROR_TITLE}  from "./constants/constants.js"
// это все константы (тексты кнопок и ошибки, цвета, лимиты) тоже пока закоменчено из-за type="module"