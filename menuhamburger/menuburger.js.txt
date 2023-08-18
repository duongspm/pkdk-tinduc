const navMenu = document.getElementById('nav'),
navCloseItem = document.getElementById('nav-item'),

btnMenu = document.getElementById('btnmenu')
if(btnMenu){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
    navCloseItem.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
if(navCloseItem){
    navCloseItem.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}