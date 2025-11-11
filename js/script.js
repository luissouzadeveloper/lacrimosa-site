const showMenu = () => {
    const menuMobile = document.querySelector('.menu-mobile');
    
    if (menuMobile.classList.contains('open-mobile')) {
        menuMobile.classList.remove('open-mobile');
    } else {
        menuMobile.classList.add('open-mobile');
    }
}