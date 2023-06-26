import { appendModal, modalStyling, closeModal } from "../modal/modal";

const todoColumn = document.getElementById('todoColumn');

todoColumn.addEventListener('click', (e) => {
   // console.log(e.target);
   if (e.target.id.includes("edit")) {
      const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
      const targetId = e.target.id.split('-')[1];
      const storageIndexOfElement = localStorageArr[0].findIndex((element) => element.id.toString() === targetId);
      const elementToEdit = localStorageArr[0][storageIndexOfElement];
      appendModal();
      modalStyling('Add');

      document.getElementById('inputTitle').value = elementToEdit.title;
      document.getElementById('inputTextarea').value = elementToEdit.desc;
      document.getElementById('inputSelect').value = elementToEdit.user;

      const confirmButton = document.getElementById('confirmButton');
      
      confirmButton.addEventListener('click', () => {
         elementToEdit.title = document.getElementById('inputTitle').value;
         elementToEdit.desc = document.getElementById('inputTextarea').value;
         elementToEdit.user = document.getElementById('inputSelect').value;   
         
         document.getElementById('inputTitle').value = `${elementToEdit.title}`;
         document.getElementById('inputTextarea').value = `${elementToEdit.desc}`;
         document.getElementById('inputSelect').value = `${elementToEdit.user}`; 

         localStorage.setItem('trelloKey', JSON.stringify(localStorageArr));
         closeModal();
         location.reload();
      })
   };
});