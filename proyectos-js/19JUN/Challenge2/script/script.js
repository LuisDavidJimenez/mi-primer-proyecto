// IMAGENES ALEATORIAS
const arrayimgs = [
  "https://es.web.img2.acsta.net/pictures/20/01/07/02/04/3952839.jpg",
  "https://es.web.img3.acsta.net/pictures/19/11/12/22/54/0812791.jpg",
  "https://es.web.img3.acsta.net/pictures/15/07/27/13/14/152942.jpg",
  "https://es.web.img3.acsta.net/pictures/19/09/24/02/05/4781692.jpg",
  "https://es.web.img3.acsta.net/c_310_420/pictures/15/12/24/11/47/487503.jpg",
  "https://es.web.img3.acsta.net/c_310_420/pictures/16/04/26/10/00/472541.jpg",
  "https://es.web.img3.acsta.net/c_310_420/pictures/17/05/19/11/37/294423.jpg",
  "https://es.web.img3.acsta.net/pictures/16/02/17/13/55/281234.jpg",
  "https://es.web.img3.acsta.net/pictures/15/07/24/09/46/099529.jpg",
  "https://es.web.img3.acsta.net/pictures/17/02/06/17/01/343859.jpg",
];

// NOS GUARDAMOS EL CONTENEDOR DE LAS IMAGENES
var imagen = document.getElementById("imagen");

// LE AÑADIMOS LA FUNCION A LA IMAGEN
imagen.addEventListener("click", function ImagenAleatoria() {
  // GENERAMOS UN NUMERO ALEATORIO ENTR ELOS LIMITES DEL ARRAY
  let numerorandom = Math.floor(Math.random() * arrayimgs.length);
  imagen.src = arrayimgs[numerorandom];
});

// CRONOMETRO
var segundos = 1;
var interval;

function Cronometro() {
  // CREAMOS EL INTERVALO Y LE PONEMOS 1s COMO TIEMPO (1000)
  interval = setInterval(() => {
    // REALIZAMOS LA CUENTA ADELANTE CON EL MENSAJE Y SUMAMOS UN SEGUNDO
    document.getElementById("contador").innerText = `${segundos}...`;
    segundos++;
  }, 1000);
}
// REINICIAMOS EL CONTADOR A 1 SEGUNDO
function ReiniciarCronometro() {
  segundos = 1;
  document.getElementById("contador").innerText = "";
}
// CANCELAMOS EL CONTADOR
function CancelarCronometro() {
  clearInterval(interval);
}

// OCULTAR Y MOSTRAR CONTRASEÑA
let password = document.getElementById("password");
let ver = document.getElementById("VerPassword");

// AÑADIMOS AL BOTON LA FUNCION PARA OCULTARLA O MOSTRARLA
ver.addEventListener("click", (e) => {
  if (password.type !== "text") {
    password.type = "text";
    ver.innerHTML = "Ocultar Contraseña";
  } else {
    password.type = "password";
    ver.innerHTML = "Ver Contraseña";
  }
});

// SEGUN EL PAIS SELECCIONADO SE EXTRAEN SUS INICIALES
function Iniciales() {
  const pais = document.getElementById("paises").value;
  document.getElementById("inicial").innerHTML = `Iniciales del Pais: ${pais
    .substr(0, 3)
    .toUpperCase()}`;
}

// SE ESCRIBE LO MISMO QUE EN EL INPUT
let texttiemporeal = document.getElementById("tiemporeal");
texttiemporeal.addEventListener("input", function () {
  if (document.getElementById("tiemporeal").value.length !== 0) {
    document.getElementById("salidatiemporeal").innerHTML =
      document.getElementById("tiemporeal").value;
  } else {
    document.getElementById("salidatiemporeal").innerHTML =
      "Escribe algo en el Input de Arriba para ver la Informacion";
  }
});
