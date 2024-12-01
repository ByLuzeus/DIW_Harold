let espacio = document.querySelector('.espacio');

let movimientos = {
    zona_1: 'translate(50vw, 50vh)',
    zona_2: 'translate(0, 50vh)',
    zona_3: 'translate(-50vw, 50vh)',
    zona_4: 'translate(50vw, 0)',
    zona_5: 'translate(0, 0)',
    zona_6: 'translate(-50vw, 0)',
    zona_7: 'translate(50vw, -50vh)',
    zona_8: 'translate(0, -50vh)',
    zona_9: 'translate(-50vw, -50vh)',
};

document.querySelectorAll('.zona').forEach(zona => {
    zona.addEventListener('mouseenter', () => {
        let zonaClase = Array.from(zona.classList).find(clase => clase.startsWith('zona_'));

        if (zonaClase && movimientos[zonaClase]) {
            espacio.style.transform = movimientos[zonaClase];
        }
    });
});

let botonAudio = document.querySelector('.sonido');
let audio = document.querySelector('.alien');

botonAudio.addEventListener('click', () => {
    botonAudio.style.display = 'none';
    audio.play(); 
});

let boton = document.querySelector('.boton');
let estrellas = document.querySelector('.estrellas');
let video = document.querySelector('.viaje');
let audio_viaje = document.querySelector('.audio_viaje');
let elementosOcultos = false;

boton.addEventListener('click', () => {
    if (elementosOcultos) {
        let elementosParaMostrar = document.querySelectorAll('body > *:not(.cabina):not(.sonido):not(.boton):not(.grid):not(.espacio)');
        elementosParaMostrar.forEach(elemento => {
            elemento.style.display = '';
        });

        let elementosEspacio = document.querySelectorAll('.espacio > *:not(.estrellas)');
        elementosEspacio.forEach(elemento => {
            elemento.style.display = '';
        });

        estrellas.style.opacity = 1;
        video.style.opacity = 0;  
        video.pause();
        video.style.display = 'none';

        audio_viaje.pause();
        audio_viaje.currentTime = 0;

        estrellas.classList.remove('rotate');
        elementosOcultos = false;
    } else {
        let elementosParaOcultar = document.querySelectorAll('body > *:not(.cabina):not(.sonido):not(.boton):not(.grid):not(.espacio)');
        elementosParaOcultar.forEach(elemento => {
            elemento.style.display = 'none';
        });

        let elementosEspacio = document.querySelectorAll('.espacio > *:not(.estrellas)');
        elementosEspacio.forEach(elemento => {
            elemento.style.display = 'none';
        });

        estrellas.style.opacity = 0;
        video.style.display = 'block';
        video.style.opacity = 1;
        video.play();

        audio_viaje.play();
        audio_viaje.currentTime = 0;

        estrellas.classList.add('rotate');
        elementosOcultos = true;
    }
});



