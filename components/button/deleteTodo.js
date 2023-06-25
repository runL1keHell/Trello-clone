import { countCards } from "../card/countCards";

(() => {
    const todoColumn = document.getElementById('todoColumn');
    todoColumn.addEventListener('click', (e) => {
      
      const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
      const storageIndexOfElement = localStorageArr[0].findIndex((element) => element.id.toString() === targetId);
      const targetId = e.target.id.split('-')[1];
      
      if (e.target.id.includes("delete")) {
         const todoToRemove = document.getElementById(targetId);
         todoToRemove.remove();
         localStorageArr[0].splice(storageIndexOfElement, 1);
         localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));
         countCards();
      };
   });
})();