function EuroDolares() {
  const euro = parseFloat(document.getElementById("euro").value);

  if (!isNaN(euro)) {
    const resultado = euro * 1.16;

    document.getElementById("salidaDolar").textContent =
      "Dolares: " + resultado.toFixed(2);
  }
}

function Velocidad() {
  const km = parseFloat(document.getElementById("km").value);
  const hora = parseFloat(document.getElementById("hora").value);

  if (!isNaN(km) && !isNaN(hora)) {
    const resultado = km / hora;

    document.getElementById("salidaVelocidad").innerHTML =
      "Velocidad: " + resultado.toFixed(2);
  }
}

function AreaTrapecio() {
  const base1 = parseFloat(document.getElementById("base1").value);
  const base2 = parseFloat(document.getElementById("base2").value);
  const altura = parseFloat(document.getElementById("alturatrap").value);

  if (!isNaN(base1) && !isNaN(base2) && !isNaN(altura)) {
    const resultado = ((base1 + base2) / 2) * altura;

    document.getElementById("salidaTrapecio").innerHTML =
      "Area: " + resultado.toFixed(2);
  }
}

function TablaMultiplicar() {
  const num = parseFloat(document.getElementById("numTabla").value);

  if (!isNaN(num)) {
    alert(`Tabla de multiplicar de ${num} \n
      ${num}x1 = ${num * 1}
      ${num}x2 = ${num * 2}
      ${num}x3 = ${num * 3}
      ${num}x4 = ${num * 4}
      ${num}x5 = ${num * 5}
      ${num}x6 = ${num * 6}
      ${num}x7 = ${num * 7}
      ${num}x8 = ${num * 8}
      ${num}x9 = ${num * 9}
      ${num}x10 = ${num * 10}`);
  }
}

function Divisibilidad() {
  const num1 = parseFloat(document.getElementById("div1").value);
  const num2 = parseFloat(document.getElementById("div2").value);

  if (!isNaN(num1) && !isNaN(num2)) {
    if (num1 % num2 === 0) {
      document.getElementById(
        "salidaDivis"
      ).innerHTML = `El número ${num1} SI es divisible por el numero ${num2}.`;
    } else {
      document.getElementById(
        "salidaDivis"
      ).innerHTML = `El número ${num1} NO es divisible por el numero ${num2}.`;
    }
  }
}
