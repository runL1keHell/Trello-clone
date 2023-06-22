(() => {
    const todoColumn = document.getElementById('todoColumn');
    todoColumn.addEventListener('click', (e) => {
    //    console.log(e.target);
    // const modalWindow = document.getElementById('openModal');
    // modalWindow.style.opacity = 1;
    // modalWindow.style.pointerEvents = auto;
    // modalWindow.style.overflowY = auto;  
    const targetId = e.target.closest('.editBtn').id.split('-')[1];
    console.log(targetId);
    if (e.target.closest('.editBtn').id.includes("edit")) {
        document.querySelector('.modal-title').innerText = 'Edit';
        const localStorageArr = JSON.parse(localStorage.getItem('trelloKey'));
        localStorageArr.forEach(element => {      
            element.forEach(el => {
                if (el.id == targetId) {
                    document.getElementById('inputTitle').value = `${el.title}`;
                    document.getElementById('inputTextarea').value = `${el.desc}`;
                    document.getElementById('inputSelect').value = `${el.user}`; 
                    
                    const ifEditTitle = document.getElementById('inputTitle');
                    ifEditTitle.addEventListener('input', () => {
                        el.title = document.getElementById('inputTitle').value;                                                      
                    });      
                    
                    const ifEditText = document.getElementById('inputTextarea');
                    ifEditText.addEventListener('input', () => {
                        el.desc = document.getElementById('inputTextarea').value;                             
                    });  

                    const ifEditUser = document.getElementById('inputSelect');
                    ifEditUser.addEventListener('input', () => {
                        el.user = document.getElementById('inputSelect').value;                              
                    });                     
                        
                };
            });
         
           });
           localStorage.setItem('trelloKey', JSON.stringify(localStorageArr)); 
    };
});
})();