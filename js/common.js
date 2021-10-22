let menuBtn = document.querySelector('#menu-btn')
let menu = document.querySelector('.menu');
let container = document.querySelector('.container-1');

let aro  = document.querySelector('.aro');
aro.style.display="none";
window.onscroll = () =>{
    menuBtn.classList.remove('fa-times');
    menu.classList.remove('show');
    aro.style.display="block";
}
container.addEventListener('click',()=>{
    menu.classList.remove('show');
    menuBtn.classList.remove('fa-times');
});
menuBtn.addEventListener('click', () =>{
  menuBtn.classList.toggle('fa-times');
   menu.classList.toggle('show');
});

