// Validação do form
const validarForm = (event) => {
    event.preventDefault();

    const campoNome = document.querySelector('#nome').value.trim();
    const campoEmail = document.querySelector('#email').value.trim();

    const cxErro = document.querySelector('.error-form');
    const cxSuccess = document.querySelector('.success-form');

    if (campoNome === '' || campoEmail === '') {
        cxErro.classList.add('show-error');

        setTimeout(() => {
            cxErro.classList.remove('show-error');
        }, 2000);
    } else {
        cxSuccess.classList.add('show-success');

        // Limpar os campos
        document.querySelector('#nome').value = '';
        document.querySelector('#email').value = '';

        setTimeout(() => {
            cxSuccess.classList.remove('show-success');
        }, 3000);
    }

    // if (campoNome !== '' || campoEmail !== '') {
    //     cxSuccess.classList.add('show-success');

    //     setTimeout(() => {
    //         cxSuccess.classList.remove('show-success');
    //     }, 2000);
    // }
        
}

// Menu
const showMenu = () => {
    const menuMobile = document.querySelector('.menu-mobile');
    
    if (menuMobile.classList.contains('open-mobile')) {
        menuMobile.classList.remove('open-mobile');
    } else {
        menuMobile.classList.add('open-mobile');
    }
}