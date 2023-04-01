const openMenu = document.querySelector('.fa-bars')
const closeMenu = document.querySelector('.mb_menu i')
const mbMenu = document.querySelector('.menu_mb')
const dongMenu = document.querySelector('.menu_mb ul')


openMenu.onclick = function() {
    mbMenu.classList.toggle('open')
    const isOpen = openMenu.classList.contains('open')
}

dongMenu.onclick = function() {
    const isOpen = mbMenu.classList.remove('open');
    
}