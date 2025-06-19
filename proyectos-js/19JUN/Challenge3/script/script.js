const colores = document.getElementById('selectorColor');
const fondo = document.getElementById('fondocolor');

colores.addEventListener('input', function () {
  fondo.style.backgroundColor = colores.value;
})