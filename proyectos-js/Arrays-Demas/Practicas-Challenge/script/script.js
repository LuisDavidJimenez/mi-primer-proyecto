// EJERCICIO 1 - CREACION
console.log("EJERCICIO 1");
var arrayColores = ["rojo", "amarillo", "verde", "azul"];
console.log(arrayColores.length);
arrayColores.forEach((color) => {
  console.log(color);
});

// EJERCICIO 2 - MODIFICACION
console.log("EJERCICIO 2");
console.log(arrayColores[1]);
arrayColores[1] = "naranja";
arrayColores.forEach((color) => {
  console.log(color);
});

// EJERCICIO 3 - AÑADIR Y ELIMINAR
console.log("EJERCICIO 3");
arrayColores.push("morado");
arrayColores.unshift("rosa");
arrayColores.forEach((color) => {
  console.log(color);
});
arrayColores.pop();
arrayColores.shift();
arrayColores.forEach((color) => {
  console.log(color);
});

// EJERCICIO 4 - SUBARRAY
console.log("EJERCICIO 4");
var subColores = arrayColores.slice(0, 2);
arrayColores.forEach((color) => {
  console.log(color);
});

// EJERCICIO 5 - RECORRER
console.log("EJERCICIO 5");
arrayColores.forEach((color, posicion) => {
  console.log("El color en la posicion " + posicion + " es " + color);
});

// EJERCICIO 6 - INSERTAR Y ELIMINAR
console.log("EJERCICIO 6");
arrayColores.splice(1, 1, "negro", "blanco");
arrayColores.forEach((color) => {
  console.log(color);
});

// EJERCICIO 7 - INVERTIR ARRAY
console.log("EJERCICIO 7");
var arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrayNumeros.reverse();
for (let i = 0; i < arrayNumeros.length; i++) {
  console.log(arrayNumeros[i]);
}

// EJERCICIO 8 - UNIR ELEMENTOS 'JOIN'
console.log("EJERCICIO 8");
console.log(arrayColores.join(" - "));

// EJERCICIO 9 - RECORRER CON 'FOR OF' CON CONDICION
console.log("EJERCICIO 9");
arrayNumeros.reverse();
for (const numero of arrayNumeros) {
  if (numero % 2 === 0) {
    console.log(numero);
  }
}

// EJERCICIO 10 - UNIR ELEMENTOS 'JOIN'
console.log("EJERCICIO 10");
var arrayFrutas = [
  "manzana",
  "pera",
  "uva",
  "melon",
  "sandia",
  "melocoton",
  "platano",
  "cereza",
  "ciruela",
];
var arrayFrutasMayus = arrayFrutas.map((fruta) => fruta.toUpperCase());
arrayFrutasMayus.forEach((frutaMayus) => {
  console.log(frutaMayus);
});

/////////////////////////// CHALLENGES /////////////////////////////////
// CHALLENGE 1
var arrayLista = [];
function RecargarLista() {
  document.getElementById("listadinamica").innerHTML = "";
  arrayLista.forEach((elementolista, posicion) => {
    document.getElementById(
      "listadinamica"
    ).innerHTML += `<li onclick="borrarElementos(${posicion})"> ${elementolista} </li>`;
  });
}

function borrarElementos(posicionelemento) {
  if (posicionelemento === undefined) {
    arrayLista.splice(0, arrayLista.length);
  } else {
    arrayLista.splice(posicionelemento, 1);
  }
  RecargarLista();
}

function añadirElementos() {
  const elemento = document.getElementById("elementolistadinamica").value;
  if (elemento !== null && elemento !== "") {
    arrayLista.push(elemento);
    RecargarLista();
    elemento.innerHTML = "";
  }
}

// CHALLENGE 2
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const correo = document.getElementById("email").value;
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;

  if (nombre.length !== 0 || (nombre !== "") | (nombre !== null)) {
    if (correo.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]{2,}$/)) {
      if (edad > 17) {
        document.getElementById(
          "salidaForm"
        ).innerHTML = `<h3>Datos ingresados:</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${correo}</p>
        <p><strong>Edad:</strong> ${edad}</p>`;
      } else {
        document.getElementById("salidaForm").innerHTML =
          "La Edad no cumple con los requisitos.";
      }
    } else {
      document.getElementById("salidaForm").innerHTML =
        "El Correo no cumple con los requisitos.";
    }
  } else {
    document.getElementById("salidaForm").innerHTML =
      "El Nombre no cumple con los requisitos.";
  }
});

// CHALLENGE 3
const arrayCalculadora = [];
var gastodinero = 0;
var totalgastos = 0;

function calculadora() {
  gastodinero = parseFloat(document.getElementById("gasto").value).toFixed(2);
  if (!isNaN(gastodinero)) {
    Sumar(gastodinero);
    document.getElementById("dineroTotal").innerHTML =
      totalgastos.toFixed(2) + "€";
  }
}

function Sumar(gasto) {
  arrayCalculadora.push(parseFloat(gasto));
  totalgastos = 0;
  arrayCalculadora.forEach((gastoarray) => {
    totalgastos = totalgastos + gastoarray;
  });
}

function verGastos() {
  document.getElementById("gastosTotales").innerHTML = "";
  for (let i = 0; i < arrayCalculadora.length; i++) {
    document.getElementById("gastosTotales").innerHTML +=
      arrayCalculadora[i] + "€ <br>";
  }
}

// CHALLENGE 4
const arrayImagenes = [
  "https://s1.elespanol.com/2024/06/21/madrid/864674626_244237245_1024x576.jpg",
  "https://images.theconversation.com/files/642287/original/file-20250114-15-odj99b.jpg?ixlib=rb-4.1.0&rect=391%2C208%2C5167%2C3434&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxgG9xR3iElS1Zjr-wGenwVTesOLJB-uzqw&s",
  "https://concepto.de/wp-content/uploads/2018/09/desierto2-e1537800205712.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtyYNXS_rcvoMb7siZvfOXlWwVOHOJ3sWW_g&s",
];
var posicionImagen = 1;

function pasarImagen(direccion) {
  if (direccion === "delante") {
    posicionImagen++;
  } else {
    posicionImagen--;
  }

  document.getElementById("atras").disabled = false;
  document.getElementById("delante").disabled = false;

  if (posicionImagen === 0) {
    document.getElementById("atras").disabled = true;
  }

  if (posicionImagen === arrayImagenes.length - 1) {
    document.getElementById("delante").disabled = true;
  }

  document.getElementById("imagenes").src = arrayImagenes[posicionImagen];
}

// CHALLENGE 5
const APIKey = "44e70fd487ed42279d2101648252006";

async function Temporal() {
  const ciudad = document.getElementById("ciudad").value;
  const API = `http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${ciudad}&aqi=no&lang=es`;
  try {
    const respuesta = await fetch(API);
    if (!respuesta.ok) {
      throw new Error("Error al cargar y obtener los datos de la API");
    }

    const datos = await respuesta.json();

    document.getElementById(
      "salidaTemperatura"
    ).innerHTML = `El clima en ${ciudad} es el siguiente: <br><br>
    Temperatura: ${datos.current.temp_c}º <br><br> 
    Sensacion Termica: ${datos.current.feelslike_c}º <br><br>
    Tiempo: ${datos.current.condition.text} <br><br>
     <img src="${datos.current.condition.icon}">`;
  } catch (error) {
    console.log(error);
  }
}
