(() => {
    const todoColumn = document.getElementById('todoColumn');
    todoColumn.addEventListener('click', (e) => {
       console.log(e.target);
       const targetId = e.target.id.split('-')[1];
       if (e.target.id.includes("delete")) {
          const todoToRemove = document.getElementById(targetId);
          todoToRemove.remove();
       };
    });
    })();