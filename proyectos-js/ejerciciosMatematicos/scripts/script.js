// const comprobarNumeros = /^[0-9]+$/;

function PerimetroRectangulo() {
  const base = parseFloat(document.getElementById("baseRec").value);
  const altura = parseFloat(document.getElementById("alturaRec").value);

  if (!isNaN(base) && !isNaN(altura)) {
    const resultado = altura + altura + (base + base);

    document.getElementById("salidaPerim").textContent =
      "Perimetro: " + resultado.toFixed(2);
  }
}

function Temperatura() {
  const celsius = parseFloat(document.getElementById("temp").value);
  if (!isNaN(celsius)) {
    const resultado = (celsius * 9) / 5 + 32;

    document.getElementById("salidaCel").innerHTML =
      "Fahrenheit: " + resultado.toFixed(2);
  }
}

function AreaTriangulo() {
  const base = parseFloat(document.getElementById("baseTria").value);
  const altura = parseFloat(document.getElementById("alturaTria").value);
  if (!isNaN(base) && !isNaN(altura)) {
    const resultado = (base * altura) / 2;

    document.getElementById("salidaArea").innerHTML =
      "Area: " + resultado.toFixed(2);
  }
}

function CircunferenciaCirculo() {
  const radio = parseFloat(document.getElementById("radio").value);
  if (!isNaN(radio)) {
    const resultado = 2 * Math.PI * radio;

    document.getElementById("salidaCircular").innerHTML =
      "Circunferencia: " + resultado.toFixed(2);
  }
}

function Descuento() {
  const precio = parseFloat(document.getElementById("precio").value);
  const descuento = parseFloat(document.getElementById("porcentaje").value);
  if (!isNaN(precio) && !isNaN(descuento)) {
    const descuentototal = precio * (descuento / 100);
    const resultado = precio - descuentototal;

    document.getElementById("salidaPrecio").innerHTML =
      "Precio: " + resultado.toFixed(2);
  }
}
