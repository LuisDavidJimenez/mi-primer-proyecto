function Invitados() {
  const cantidad = parseFloat(document.getElementById("cantidad").value);

  if (!isNaN(cantidad)) {
    for (let i = 1; i < cantidad + 1; i++) {
      document.getElementById(
        "salidaInvitados"
      ).innerHTML += `Invitado numero ${i}.<br>`;
    }
  }
}

function Tabla() {
  const num = parseFloat(document.getElementById("tabla").value);

  if (!isNaN(num)) {
    document.getElementById(
      "salidaTabla"
    ).innerHTML = `Tabla de multiplicar del ${num} <br>
      ${num}x1 = ${num * 1}<br>
      ${num}x2 = ${num * 2}<br>
      ${num}x3 = ${num * 3}<br>
      ${num}x4 = ${num * 4}<br>
      ${num}x5 = ${num * 5}<br>
      ${num}x6 = ${num * 6}<br>
      ${num}x7 = ${num * 7}<br>
      ${num}x8 = ${num * 8}<br>
      ${num}x9 = ${num * 9}<br>
      ${num}x10 = ${num * 10}`;
  }
}

function Votar() {
  const edad = document.getElementById("edad").value;

  if (edad >= 18) {
    document.getElementById(
      "salidaVotar"
    ).innerHTML = `Con ${edad} puedes/podrias votar.`;
  } else {
    document.getElementById(
      "salidaVotar"
    ).innerHTML = `Con ${edad} no puedes votar.`;
  }
}

function Mayor() {
  do {
    let num1 = prompt("Escribe un numero:");
  } while (num1 > 0);
}

function Contra() {
  let longitud = 0;
  let respuesta;

  while (longitud < 6) {
    respuesta = prompt("Escribe tu contraseña, Debe tener mas de 6 caracteres");
    longitud = respuesta.length();
  }
}
