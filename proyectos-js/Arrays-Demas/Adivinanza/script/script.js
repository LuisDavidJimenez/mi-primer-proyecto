function Adivinar(opcion) {
  let respuesta = prompt(
    "¿Sabes que personaje es? \n Escribe aquí tu respuesta:"
  );

  if (opcion === 1) {
    if (respuesta === "Buzz") {
      const buzz = document.getElementById("buzz");
      buzz.style.display = "block";

      const respuesta = document.getElementById("respuestaBuzz");
      respuesta.innerHTML = "¡CORRECTO!";
      respuesta.style.color = "green";

    } else {
      const respuesta = document.getElementById("respuestaBuzz");
      respuesta.innerHTML = "¡INCORRECTO! Prueba de nuevo";
      respuesta.style.color = "red";

      console.log(document.getElementById("Buzz-pista2").classList[0]);

      if (document.getElementById("Buzz-pista2").classList[0] === "oculto") {
        document.getElementById("Buzz-pista2").style.display = "block";
        document.getElementById("Buzz-pista2").classList.toggle("oculto");
      } else {
        document.getElementById("Buzz-pista3").style.display = "block";
      }
    }
  } else if (opcion === 2) {
    if (respuesta === "Capitan America") {
      const capi = document.getElementById("capi");
      capi.style.display = "block";

      const respuesta = document.getElementById("respuestaCapi");
      respuesta.innerHTML = "¡CORRECTO!";
      respuesta.style.color = "green";

    } else {
      const respuesta = document.getElementById("respuestaCapi");
      respuesta.innerHTML = "¡INCORRECTO! Prueba de nuevo";
      respuesta.style.color = "red";

      console.log(document.getElementById("Capi-pista2").classList[0]);

      if (document.getElementById("Capi-pista2").classList[0] === "oculto") {
        document.getElementById("Capi-pista2").style.display = "block";
        document.getElementById("Capi-pista2").classList.toggle("oculto");
      } else {
        document.getElementById("Capi-pista3").style.display = "block";
      }
    }
  } else if (opcion === 3) {
    
    if (respuesta === "Cristiano Ronaldo") {
      const bicho = document.getElementById("CR7");
      bicho.style.display = "block";

      const respuesta = document.getElementById("respuestaCR7");
      respuesta.innerHTML = "¡CORRECTO!";
      respuesta.style.color = "green";

    } else {
      const respuesta = document.getElementById("respuestaCR7");
      respuesta.innerHTML = "¡INCORRECTO! Prueba de nuevo";
      respuesta.style.color = "red";

      console.log(document.getElementById("CR7-pista2").classList[0]);

      if (document.getElementById("CR7-pista2").classList[0] === "oculto") {
        document.getElementById("CR7-pista2").style.display = "block";
        document.getElementById("CR7-pista2").classList.toggle("oculto");
      } else {
        document.getElementById("CR7-pista3").style.display = "block";
      }
    }
  }
}
