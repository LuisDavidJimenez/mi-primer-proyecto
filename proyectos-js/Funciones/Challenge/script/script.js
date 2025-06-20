// AHORRO CON EL DESCUENTO
function Descuento() {
  // SACAMOS LOS VALORES DE LOS INPUTS
  const precio = parseFloat(document.getElementById("precio").value);
  const porcentaje = parseFloat(document.getElementById("descuento").value);

  // LLAMAMOS A LA FUNCION QUE NOS DEVUELVE EL TOTAL DEL DESCUETO Y LO
  // RESTAMOS AL TOTAL DEL PRECIO PARA SABER LO QUE TE VAS A AHORRAR
  let precionial = calcularDescuento(precio, porcentaje);
  let ahorro = precio - precionial;

  // LO SACAMOS POR PANTALLA
  document.getElementById(
    "SalidaDescuento"
  ).innerHTML = `Te ahorras en total ${ahorro.toFixed(2)}€ en tu pedido.`;
}

// FUNCION QUE CALCULA EL DESCUENTO CON LA FORMULA
function calcularDescuento(precio, porcentaje) {
  return precio * (1 - porcentaje / 100);
}

// CAMBIO DE DIVISA
function Divisa() {
  // SACAMOS LOS VALORES DE LOS INPUTS
  const cantidad = parseFloat(document.getElementById("cantidad").value);
  const tasa = parseFloat(document.getElementById("cambio").value);

  // LLAMAMOS A LA FUNCION QUE CALCULA LA TASA
  let conversion = Convertir(cantidad, tasa);

  // LO SACAMOS POR PANTALLA
  document.getElementById(
    "SalidaDescuento"
  ).innerHTML = `Equivalen a ${conversion}€ en total.`;
}

// FUNCION QUE CALCULA LA CONVERSION DE LA TASA
function Convertir(cantidad, tasa) {
  return cantidad * tasa;
}

// IMC MASA CORPORAL
function IndiceMasa() {
  // SACAMOS LOS VALORES DE LOS INPUTS
  const peso = parseFloat(document.getElementById("peso").value);
  const alturacompleta = parseFloat(
    document.getElementById("alturaMasa").value
  );

  // HACEMOS LA COMPROBACION Y LLAMAMOS A LA FUNCION QUE CALCULA EL IMC
  if (!isNaN(alturacompleta) && !isNaN(peso)) {
    let calculo = CalculadoraIMC(alturacompleta, peso);

    // SEGUN EL RESULTADO SACAMOS UN MENSAJE U OTRO POR PANTALLA
    if (calculo < 18.5) {
      document.getElementById("salidaIMC").innerHTML =
        "IMC: " + calculo.toFixed(2) + "<br>El peso es inferior a lo normal.";
    } else if (calculo > 18.5 && calculo < 24.9) {
      document.getElementById("salidaIMC").innerHTML =
        "IMC: " + calculo.toFixed(2) + "<br>El peso es normal.";
    } else if (calculo > 25 && calculo < 29.9) {
      document.getElementById("salidaIMC").innerHTML =
        "IMC: " + calculo.toFixed(2) + "<br>El peso es superior a lo normal.";
    } else if (calculo > 30) {
      document.getElementById("salidaIMC").innerHTML =
        "IMC: " + calculo.toFixed(2) + "<br>El peso es Obeso.";
    }
  }
}
// FUNCION QUE CALCULA EL IMC CON LOS PARAMETROS RECIBIDOS
function CalculadoraIMC(alturacompleta, peso) {
  let altura = alturacompleta / 100;
  return peso / (altura * altura);
}

// CARRITO DE COMPRA 'LITE'
let contador = 1;

function Entra() {
  // Almacenamos todas las variables
  const productoInput = document.getElementById("productoId");
  const lista = document.getElementById("Lista");
  const producto = productoInput.value.trim();

  // Comprobamos que hay algo escrito y, si lo hay, lo metemos en la lista
  if (producto) {
    lista.innerHTML += `
      <li id="elemento${contador}">
        ${producto}
        <button class="eliminar" onclick="BorrarElemento(${contador})">
           Eliminar 
        </button>
      </li>`;
    // Sumamos uno al contador y limpiamos el input del producto
    contador++;
    productoInput.value = "";
  }
}

function BorrarTodo() {
  // Obtenemos la lista y reseteamos el contador a '1'
  const lista = document.getElementById("Lista");
  lista.innerHTML = "";
  contador = 1;
}

function BorrarElemento(posicion) {
  // Obtenemos el li con el id que le hemos dado con el contador y lo eliminamos
  const elemento = document.getElementById(`elemento${posicion}`);
  if (elemento) {
    elemento.parentNode.removeChild(elemento);
  }
}

// TEMPORIZADOR
function Temporizador() {
  // SACAMOS LOS VALORES DE LOS INPUTS
  const segs = parseFloat(document.getElementById("segundos").value);
  iniciarTemporizador(segs);
}

// FUNCION QUE EJECUTA EL TEMPORIZADOR
function iniciarTemporizador(segundos) {
  // CREAMOS EL INTERVALO Y LE PONEMOS 1s COMO TIEMPO (1000)
  let interval = setInterval(() => {
    // REALIZAMOS LA CUENTA ATRAS CON EL MENSAJE Y RESTAMOS UN SEGUNDO
    document.getElementById("contador").innerText = `${segundos}...`;
    segundos--;
    if (segundos < 0) {
      // UNA VEZ LLEGUE A 0, CERRAMOS EL INTERVALO Y SACAMOS UN MENSAJE
      document.getElementById("contador").innerText = "¡Tiempo!";
      clearInterval(interval);
    }
  }, 1000);
}

const colores = document.getElementById('selectorColor');
const fondo = document.getElementById('fondocolor');

colores.addEventListener('input', function () {
  fondo.style.backgroundColor = colores.value;
})