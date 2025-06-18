function TaxiSaldo() {
  const km = parseFloat(document.getElementById("kmRecorrer").value);

  let preciototal = 2.55; // Se añade 2.55 por la Tarifa Base de los Taxis

  if (!isNaN(km)) {
    preciototal += km * 1.35; // 1.35 es la Tarifa por Km

    document.getElementById("salidaCuenta").innerHTML =
      "El precio del viaje en TaxiMadrid es de " + preciototal.toFixed(2) + "€";
  }
}

function IndiceMasa() {
  const peso = parseFloat(document.getElementById("peso").value);
  const alturatotal = parseFloat(document.getElementById("alturaMasa").value);

  let altura = alturatotal / 100;

  if (!isNaN(altura) && !isNaN(peso)) {
    const calculo = peso / (altura * altura);

    if (calculo < 18.5) {
      document.getElementById("salidaMasa").innerHTML =
        "IMC: " + calculo.toFixed(2) + "<br>El peso es inferior a lo normal.";
    } else if (calculo > 18.5 && calculo < 24.9) {
      document.getElementById("salidaMasa").innerHTML =
        "IMC: " + calculo.toFixed(2) + "<br>El peso es normal.";
    } else if (calculo > 25 && calculo < 29.9) {
      document.getElementById("salidaMasa").innerHTML =
        "IMC: " + calculo.toFixed(2) + "<br>El peso es superior a lo normal.";
    } else if (calculo > 30) {
      document.getElementById("salidaMasa").innerHTML =
        "IMC: " + calculo.toFixed(2) + "<br>El peso es Obeso.";
    }
  }
}

function Registrar() {
  const correo = document.getElementById("mail").value;

  if (correo.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]{2,}$/)) {
    document.getElementById("Salidamail").innerHTML =
      "Email Registrado:" + correo;
  } else {
    document.getElementById("Salidamail").innerHTML = "Email no valido";
  }
}

function Fibonacci() {
  const num = parseFloat(document.getElementById("fibonacci").value);
  let resultado = 0;
  let num1 = 0;
  let num2 = 1;

  document.getElementById("salidaFibo").innerHTML = "";

  if (!isNaN(num)) {
    document.getElementById("salidaFibo").innerHTML += "Sucesion: ";
    for (let i = 1; i <= num; i++) {
      if (i == 1) {
        document.getElementById("salidaFibo").innerHTML += `${num1}, `;
      } else if (i == 2) {
        document.getElementById("salidaFibo").innerHTML += `${num2}, `;
      } else {
        resultado = num1 + num2;
        document.getElementById("salidaFibo").innerHTML += `${resultado}, `;
        num1 = num2;
        num2 = resultado;
      }
    }

    document.getElementById("salidaFibo").innerHTML =
      document.getElementById("salidaFibo").innerHTML.slice(0, -2) + ".";
    document.getElementById("salidaFibo").innerHTML +=
      "<br>El resultado total es " + num2;
  }
}

function RepetirMensaje() {
  const mensaje = document.getElementById("textomensaje").value;
  const repeticiones = parseFloat(
    document.getElementById("numeromensaje").value
  );

  document.getElementById("salidaMen").innerHTML ="";

  for (let i = 0; i < repeticiones; i++) {
    document.getElementById("salidaMen").innerHTML += mensaje + "<br>";
  }
}
