"use strict";

// https://ru.hexlet.io/qna/javascript/questions/kak-sdelat-validatsiyu-formy-js

export const formInput = document.getElementById('inputTitle');

formInput.addEventListener('input', ({target}) => {
  target.setCustomValidity(''); // сброс ошибки
  target.checkValidity(); // проверка
});

formInput.addEventListener('invalid', ({target}) => {
    if (target.value === '') {
      target.setCustomValidity('Please fill in task title');
      return;
    }
  });
