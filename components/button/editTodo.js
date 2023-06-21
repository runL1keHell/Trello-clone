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
    };
});
})();