function Hipotenusa() {
  const cateto1 = parseFloat(document.getElementById("long1").value);
  const cateto2 = parseFloat(document.getElementById("long2").value);

  if (!isNaN(cateto1) && !isNaN(cateto2)) {
    const resultado = Math.sqrt(cateto1 * cateto1 + cateto2 * cateto2);

    document.getElementById("salidaHipo").textContent =
      "Hipotenusa: " + resultado.toFixed(2);
  }
}

function KmaM() {
  const km = parseFloat(document.getElementById("kmam").value);

  if (!isNaN(km)) {
    const resultado = km * 0.62137;

    document.getElementById("salidaKmam").innerHTML =
      "Millas: " + resultado.toFixed(2);
  }
}

function VolumenCil() {
  const radio = parseFloat(document.getElementById("radio").value);
  const altura = parseFloat(document.getElementById("alturacil").value);

  if (!isNaN(radio) && !isNaN(altura)) {
    const resultado = Math.PI * (radio * radio) * altura;

    document.getElementById("salidaVol").innerHTML =
      "Volumen: " + resultado.toFixed(2);
  }
}

function IndiceMasa() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("alturaMasa").value);

  if (!isNaN(altura) && !isNaN(peso)) {
    const calculo = peso / (altura * altura);

    document.getElementById("salidaMasa").innerHTML =
      "IMC: " + calculo.toFixed(2);
  }
}

function ParImpar() {
  const num = parseFloat(document.getElementById("paroimpar").value);

  if (!isNaN(num)) {
    if (num % 2 === 0) {
      document.getElementById("salidaParImpar").innerHTML =
        "El número " + num + " es par.";
    } else {
      document.getElementById("salidaParImpar").innerHTML =
        "El número " + num + " es impar.";
    }
  }
}
