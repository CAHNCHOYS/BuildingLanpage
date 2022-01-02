//Основное действия на сайте
window.onload = ()=>{
   const headerBurger = document.querySelector('.bottom-header__burger');
   const burgerMenu =  document.querySelector('.bottom-header__main-menu');
   headerBurger.addEventListener('click',()=>{
        burgerMenu.classList.toggle('active');
        headerBurger.classList.toggle('active');
        document.body.classList.toggle('_isLocked');
   });
}