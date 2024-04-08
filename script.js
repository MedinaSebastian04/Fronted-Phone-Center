// script.js

// Obtener el encabezado
const header = document.querySelector('header');

// Agregar un evento de clic al encabezado
header.addEventListener('click', function() {
    // Cambiar el color de fondo del encabezado a un color aleatorio
    const randomColor = getRandomColor();
    header.style.backgroundColor = randomColor;
});

// Función para generar un color aleatorio en formato hexadecimal
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}