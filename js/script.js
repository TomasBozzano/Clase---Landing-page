document.addEventListener('DOMContentLoaded', () => {
    // const nav = document.getElementById('nav');
    // const menu = document.getElementsByClassName('abrir-menu');
    // const menuCerrar = document.getElementsByClassName('cerrar-menu');
    // menu.addEventListener('click', () => {
    //     nav.classList.add('visible')
    // });
    // menuCerrar.addEventListener('click', () => {
    //     document.getElementById('menu').style.display = 'none';
    // });

    const botones = document.querySelectorAll('.boton');
    botones.forEach(element => {
        element.addEventListener('click', () => {
            console.log('Botón clickeado');
            const modalId = element.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "block";
            } else {
                console.error(`Elemento con ID "${modalId}" no encontrado`);
            }
        });
    });

    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            const modalId = closeButton.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "none";
            } else {
                console.error(`Elemento con ID "${modalId}" no encontrado`);
            }
        });
    });
});