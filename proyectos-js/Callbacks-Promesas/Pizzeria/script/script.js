function iniciar() {
  setTimeout(() => {
    document.getElementById("cargando").classList.add("oculto");
    document.getElementById("despuesCargando").classList.remove("oculto");
  }, 4000);
  cargarContador();
}

// Contador para que al final de su tiempo recargue la pagina
function cargarContador() {
  let conta = 100;
  const cuentaAtras = setInterval(() => {
    if (conta <= 0) {
      clearInterval(cuentaAtras);
      document.getElementById("contador").classList.add("oculto");
      document.getElementById("recargaMensaje").classList.remove("oculto");
      setTimeout(() => {
        location.reload();
      }, 2000);
    }

    const minutos = Math.floor(conta / 60000);
    const segundos = Math.floor((conta % 60000) / 1000);
    const segundosFormateados = segundos < 10 ? "0" + segundos : segundos;

    document.getElementById(
      "contador"
    ).innerHTML = `${minutos}:${segundosFormateados}`;
    conta -= 1000;
  }, 1000);
}

// CallBack Pizzeria
function pedirPizza(callback) {
  console.log("//////////////////////////////////////////////////");
  console.log("Pedido de pizza recibido!");
  console.log("Preparando la pizza...");
  setTimeout(() => {
    console.log("Pizza Lista! Preparando para la entrega");
    setTimeout(() => {
      callback();
      console.log("--------------------------------------------------");
    }, 2000);
  }, 1000);
}

function Llegada() {
  console.log("🍕 Tu pizza ha llegado! 🍕");
}

function pedirPromesaPizza() {
  console.log("//////////////////////////////////////////////////");
  console.log("Pedido de pizza recibido!");
  console.log("Preparando la pizza...");
  // Promesa Pizzeria
  let promesaPizza = new Promise((resolve, reject) => {
    let pizzaLista = false;

    let numeroRandom = Math.floor(Math.random() * 11);
    if (numeroRandom % 2 === 0) {
      pizzaLista = true;
    }

    setTimeout(() => {
      if (pizzaLista) {
        resolve("🍕 Tu pizza está lista!🍕");
      } else {
        reject("Lo sentimos, tu pizza se ha quemado 😢");
      }
    }, 3000);
  });

  promesaPizza
    // Resolve
    .then((mensaje) => {
      console.log("Exito: " + mensaje);
      console.log("--------------------------------------------------");
    })
    // Reject
    .catch((error) => {
      console.log("Error: " + error);
      console.log("--------------------------------------------------");
    });
}

// INDICANDO UN "ESCRIBIR..." MIENTRAS SE ESCRIBE EN EL INPUT
const inputMensaje = document.getElementById("mensajeEscribir");
const salidaMensaje = document.getElementById("salidaEscribiendo");
let timeouts;
let mensajEscrito = "";

inputMensaje.oninput = () => {
  salidaMensaje.classList.remove("oculto");
  salidaMensaje.innerHTML = "Escribiendo...";

  clearTimeout(timeouts);
  timeouts = setTimeout(() => {
    mensajEscrito = inputMensaje.value;
    console.log(`Mensaje escrito: ${mensajEscrito}`);
    salidaMensaje.innerHTML = "Borrador Guardado";
    setTimeout(() => {
      salidaMensaje.classList.add("oculto");
      inputMensaje.value = "";
    }, 1500);
  }, 1000);
};

// AÑADIR UN BOTON PARA ENCONTRAR TU PIZZERIA MAS CERCANA
const btn = document.getElementById("localizarPizzeria");
const output = document.getElementById("output");

function obtenerUbicacion() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        resolve({ lat, lon });
      },

      (err) => {
        reject("No se pudo obtener la ubicación: " + err.message);
      }
    );
  });
}

btn.addEventListener("click", () => {
  output.textContent = " obteniendo ubicación...";

  obtenerUbicacion()
    .then(({ lat, lon }) => {
      output.textContent = `Latitud ${lat.toFixed(6)}, Longitud ${lon.toFixed(
        6
      )}`;
    })
    .catch((error) => {
      output.textContent = error;
    });

  setTimeout(() => {
    output.textContent = "";
  }, 5000);
});
