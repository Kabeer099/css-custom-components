let menu = document.getElementById('menu-icon');
let navitem= document.querySelector('.nav-item');

menu.onclick=()=>{
    console.log('clicked')
    menu.classList.toggle("bx-x");
    navitem.classList.toggle("open");
} 