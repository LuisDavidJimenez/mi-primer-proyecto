console.log("Hey Mundo!");

const salida = document.getElementById("Salida");

function Lluvia() {
  let llueve = true;
  let paraguas = false;

  if (llueve) {
    if (paraguas) {
      salida.innerHTML = "LLueve y tengo paraguas, puedo ir seguro.";
    } else {
      salida.innerHTML = "LLueve pero no tengo paraguas, no voy seguro.";
    }
  } else {
    salida.innerHTML = "No llueve asique estoy seguro.";
  }
}

function Numero() {
  let numero = prompt("Introduce un numero:");

  if (numero > 0) {
    salida.innerHTML = "Tu numero " + numero + " es positivo.";
  } else if (numero < 0) {
    salida.innerHTML = "Tu numero " + numero + " es negativo.";
  } else {
    salida.innerHTML = "Tu numero " + numero + " es 0.";
  }
}

function Suma() {
  const num1 = pedirNumero("Ingrese el Primer Numero");
  const num2 = pedirNumero("Ingrese el Segundo Numero");
  const suma = num1 + num2;

  alert(`La suma de los numero ${num1} y ${num2} es ${suma}.`);
}

function pedirNumero(texto) {
  let numero;
  do {
    numero = parseFloat(prompt(texto));
  } while (isNaN(numero));

  return numero;
}
