document.addEventListener('DOMContentLoaded', () => {

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
                const video = modal.querySelector('lite-youtube');
                if (video) {
                    const newVideo = video.cloneNode(true);
                    video.parentNode.replaceChild(newVideo, video);
                }
            } else {
                console.error(`Elemento con ID "${modalId}" no encontrado`);
            }
        });
    });

    window.onclick = (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
            const video = event.target.querySelector('lite-youtube');
            if (video) {
                const newVideo = video.cloneNode(true);
                video.parentNode.replaceChild(newVideo, video);
            }
        }
    };
});