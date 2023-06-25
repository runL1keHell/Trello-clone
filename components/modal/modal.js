// document.addEventListener("DOMContentLoaded", function(){   
//   let scrollbar = document.body.clientWidth - window.innerWidth + 'px';
//     document.querySelector('[href="#openModal"]').addEventListener('click',function(){
//       document.body.style.overflow = 'hidden';
//       document.querySelector('#openModal').style.marginLeft = scrollbar;
//       });
    // document.querySelector('[href="#close"]').addEventListener('click',function(){
    //   document.body.style.overflow = 'visible';
    //   document.querySelector('#openModal').style.marginLeft = '0px';
     
    // });
  // });

  export function modalStyling(param) {
    if (param === 'Add') {
    document.querySelector('.modal-title').innerText = 'Add';
    } else if (param === 'Edit') {
        document.querySelector('.modal-title').innerText = 'Edit';
    };

    const modalWindow = document.getElementById('openModal');
    modalWindow.style.opacity = 1;
    modalWindow.style.pointerEvents = 'auto';
    modalWindow.style.overflowY = 'auto';  

    const closeByX = document.getElementById('close1');
    closeByX.addEventListener('click', closeModal);

    const closeByCancel = document.getElementById('close2');
    closeByCancel.addEventListener('click', closeModal);

    // добавить, чтобы окно закрывалось на ESC и клик вне его области
    
}

export function closeModal() {
   const modalWindow = document.getElementById('openModal');
   modalWindow.style.opacity = 0;
   modalWindow.style.pointerEvents = 'none';
   modalWindow.style.overflowY = 'none';   
}
