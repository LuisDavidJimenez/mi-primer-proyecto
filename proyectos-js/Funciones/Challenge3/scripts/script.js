async function PositivoNegativo() {
  const num = parseFloat(document.getElementById("numeroPosNeg").value);

  if (!isNaN(num)) {
    if (num >= 0) {
      document.getElementById("salidaPositivo").textContent =
        "Tu numero " + num + " es Positivo";
    } else {
      document.getElementById("salidaPositivo").textContent =
        "Tu numero " + num + " es Negativo";
    }
  }
}

function Fruta() {
  const num = parseFloat(document.getElementById("numFruta").value);

  if (!isNaN(num)) {
    switch (num) {
      case 1:
        document.getElementById("salidaFruta").innerHTML = "Fruta: Manzana";
        break;

      case 2:
        document.getElementById("salidaFruta").innerHTML = "Fruta: Banana";
        break;
      case 3:
        document.getElementById("salidaFruta").innerHTML = "Fruta: Naranja";
        break;
      default:
        document.getElementById("salidaFruta").innerHTML =
          "Opcion Invalida (1-3)";
        break;
    }
  }
}

function SumaFor() {
  const num = parseFloat(document.getElementById("numFor").value);
  let resultado = 0;

  if (!isNaN(num)) {
    for (let i = 0; i < num + 1; i++) {
      resultado = resultado + i;
    }

    document.getElementById("salidaFor").innerHTML =
      "Suma de 1 a " + num + ": " + resultado;
  }
}

function CuentaRegresiva() {
  const num = parseFloat(document.getElementById("numRegresiva").value);
  let cuentaatras = num;
  
  document.getElementById("salidaCuenta").innerHTML = "";

  if (!isNaN(num) && num > 0) {
    while (cuentaatras > 0) {
      document.getElementById("salidaCuenta").innerHTML += cuentaatras + "...<br>";
      cuentaatras = cuentaatras - 1;
    }
  }
}

var intentos = 0;

function AdivinaPalabra() {
  const palabra = "hola";
  let respuesta = prompt(
    "Bienvenido al juego ADIVINA LA PALABRA \n Prueba a intentar adivinar la palabra!"
  );

  do {
    respuesta = prompt(
      "Buen intento pero no era la palabra correcta\n Sigue intentandolo!"
    );
    intentos++;
    if (intentos === 3) {
      respuesta = prompt(
        "Aqui tienes una pista... La palabra es utilizada para Saludar!"
      );
    }
  } while (respuesta !== palabra);

  document.getElementById("salidaAdiv").innerHTML =
    "CORRECTO! \n La respuesta era 'hola'";
}
