const form = document.getElementById("formularioVariasPaginas");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function nextPage(pagina) {
  // Hide all pages
  const paginas = document.querySelectorAll(".page");
  paginas.forEach((pag) => {
    pag.style.display = "none";
  });

  // Show the specified page
  document.getElementById(`page${pagina}`).style.display = "block";

  if (pagina === 4) {
    salidaDatos();
  }
}

function mostrarContra(id) {
  document.getElementById(id).type = "text";
}

function ocultarContra(id) {
  document.getElementById(id).type = "password";
}

function comprobarContrasena() {
  var password = document.getElementById("password").value;
  var passwordConfi = document.getElementById("passwordConfi").value;
  var mensaje = document.getElementById("mensajeContrasena");

  if (password.length < 8) {
    mensaje.innerHTML = "La contraseña debe tener al menos 8 caracteres";
    mensaje.style.color = "red";
  } else if (password !== passwordConfi) {
    mensaje.innerHTML = "Las contraseñas no coinciden";
    mensaje.style.color = "red";
  } else {
    mensaje.innerHTML = "Las contraseñas son válidas";
    mensaje.style.color = "green";
  }
}

function comprobarDatos() {
  const correo = document.getElementById("email");
  var checkbox = document.getElementById("aceptardatos");
  if (!checkbox.checked) {
    document.getElementById("mensajeDatos").innerHTML =
      "Debes aceptar el tratamiento de datos";
    document.getElementById("mensajeDatos").style.color = "red";
  } else {
    if (!correo.checkValidity()) {
      document.getElementById("mensajeDatos").style.color = "red";
      document.getElementById("mensajeDatos").innerHTML =
        "El correo no es válido. Por favor, introduce un correo electrónico válido.";
    } else {
      document.getElementById("mensajeDatos").innerHTML =
        "Registro completado con éxito";
      document.getElementById("mensajeDatos").style.color = "green";
    }
  }
}

function salidaDatos() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const direccion = document.getElementById("direccion").value;

  if (!nombre || !apellido || !email || !telefono || !direccion) {
    document.getElementById("mensajeDatos").style.color = "red";
    document.getElementById("mensajeDatos").innerHTML =
      "Por favor, completa todos los campos.";
  } else {
    document.getElementById("mensajeDatos").style.color = "black";
    document.getElementById("mensajeDatos").innerHTML = `
    <p>Nombre Completo: ${nombre}, ${apellido} <br>
    Correo: ${email} <br>
    Teléfono: ${telefono} <br>
    Dirección: ${direccion}</p>
    </p>`;
  }
}

const mascaraTel = document.getElementById("telefono");

mascaraTel.addEventListener("input", () => {
  // Eliminar todo lo no numérico
  let nums = mascaraTel.value.replace(/\D/g, "");
  // Formatear
  const part1 = nums.substring(0, 3);
  const part2 = nums.substring(3, 6);
  const part3 = nums.substring(6, 9);
  let formatted = "";
  if (part1) formatted = `(${part1}`;
  if (part1 && part1.length === 3) formatted += `) `;
  if (part2) formatted += part2;
  if (part2 && part2.length === 3) formatted += "-";
  if (part3) formatted += part3;
  mascaraTel.value = formatted;
});

const ciudad = [
  "Madrid",
  "Barcelona",
  "Valencia",
  "Sevilla",
  "Zaragoza",
  "Málaga",
  "Murcia",
  "Palma",
  "Las Palmas de Gran Canaria",
  "Bilbao",
  "Alicante",
  "Córdoba",
  "Valladolid",
  "Vigo",
  "Gijón",
  "Hospitalet de Llobregat",
  "A Coruña",
  "Vitoria-Gasteiz",
  "Granada",
  "Elche",
  "Oviedo",
  "Badalona",
  "Cartagena",
  "Terrassa",
  "Jerez de la Frontera",
  "Sabadell",
  "Santa Cruz de Tenerife",
  "Móstoles",
  "Alcalá de Henares",
  "Pamplona",
  "Fuenlabrada",
  "Almería",
  "Leganés",
  "San Sebastián",
  "Santander",
  "Castellón de la Plana",
  "Burgos",
  "Albacete",
  "Getafe",
  "Salamanca",
  "Logroño",
  "Huelva",
  "Badajoz",
  "Tarragona",
  "Lleida",
  "León",
  "Cádiz",
  "Marbella",
  "Santa Coloma de Gramenet",
  "Dos Hermanas",
];
const busqueda = document.querySelector("#direccion");
const recomendaciones = document.querySelector("#ciudades");

busqueda.addEventListener("input", () => {
  const iniciales = busqueda.value.toLowerCase();
  recomendaciones.innerHTML = "";
  if (!iniciales) return;
  ciudad
    .filter((ciu) => ciu.toLowerCase().startsWith(iniciales))
    .slice(0, 5)
    .forEach((ciu) => {
      const li = document.createElement("li");
      li.textContent = ciu;

      li.addEventListener("click", () => {
        busqueda.value = ciu;
        recomendaciones.innerHTML = "";
      });

      recomendaciones.appendChild(li);
    });
});

const imagen = document.getElementById("fotoPerfil");
const prever = document.getElementById("vista");

imagen.addEventListener("change", () => {
  const file = imagen.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      prever.src = e.target.result;
      prever.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    prever.src = "";
  }
});
