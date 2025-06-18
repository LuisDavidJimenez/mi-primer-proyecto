function Entrada() {
  const edad = parseFloat(document.getElementById("edad").value);

  if (!isNaN(edad)) {
    if (edad <= 3) {
      document.getElementById("salidaCine").innerHTML =
        "Tu entrada es Gratuita!";
    } else if (edad > 3 && edad < 65) {
      document.getElementById("salidaCine").innerHTML =
        "El precio de tu entrada son 8.90€";
    } else if (edad >= 65) {
      document.getElementById("salidaCine").innerHTML =
        "El precio de tu entrada son 5€";
    }
  }
}

function Hora() {
  const hora = parseFloat(document.getElementById("hora").value);

  if (!isNaN(hora)) {
    if (hora > 6 && hora < 13) {
      document.getElementById("salidaHora").innerHTML = "¡Buenos Dias!";
    } else if (hora >= 13 && hora < 20) {
      document.getElementById("salidaHora").innerHTML = "¡Buenas Tardes!";
    } else if ((hora >= 20 && hora < 24) || (hora >= 0 && hora < 6)) {
      document.getElementById("salidaHora").innerHTML = "¡Buenas Noches!";
    }
  }
}

function MayorMenor() {
  const num1 = document.getElementById("numero1").value;
  const num2 = document.getElementById("numero2").value;

  if (num1 < num2) {
    document.getElementById(
      "salidaMayor"
    ).innerHTML = `El numero ${num2} es mayor que el numero ${num1}`;
  } else if (num2 < num1) {
    document.getElementById(
      "salidaMayor"
    ).innerHTML = `El numero ${num1} es mayor que el numero ${num2}`;
  } else {
    document.getElementById(
      "salidaMayor"
    ).innerHTML = `El numero ${num1} y el numero ${num2} son iguales`;
  }
}

function Palabras() {
  do {
    let salida = prompt("Escribe palabras hasta que desees!");
  } while (salida === null);
}

async function Conversor() {
  const euro = parseFloat(document.getElementById("euro").value);
  const moneda = document.getElementsByName("moneda");
  let monedaSeleccionada = "";

  for (let i = 0; i < moneda.length; i++) {
    if (moneda[i].checked) {
      monedaSeleccionada = moneda[i].value;
    }
  }

  if (!isNaN(euro)) {
    try {
      const respuesta = await fetch(
        "https://api.fxratesapi.com/latest?base=EUR"
      );
      const datos = await respuesta.json();
      const tasaUSD = datos.rates.USD;
      const tasaGBP = datos.rates.GBP;
      const tasaJPY = datos.rates.JPY;

      let resultado;

      switch (monedaSeleccionada) {
        case "Dolares":
          resultado = euro * tasaUSD;
          document.getElementById("salidaDinero").textContent =
            "Dolares: " + resultado.toFixed(2) + "$";
          break;

        case "Libras":
          resultado = euro * tasaGBP;
          document.getElementById("salidaDinero").textContent =
            "Libras: " + resultado.toFixed(2) + "£";
          break;
        case "Yenes":
          resultado = euro * tasaJPY;
          document.getElementById("salidaDinero").textContent =
            "Yenes: " + resultado.toFixed(2) + "¥";
          break;
      }
    } catch (error) {
      console.error("Error al obtener la tasa de cambio:", error);
    }
  }
}
