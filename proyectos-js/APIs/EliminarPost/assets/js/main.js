import { callAPI } from "./api.js";

const btn = document.getElementById("btn-eliminar");
const delId = document.getElementById("delId");
const output = document.getElementById("output");

btn.addEventListener("click", async () => {
  const id = delId.value.trim();

  if (!id) {
    output.textContent = "Introduce un ID valido para borrar.";
    return;
  }

  try {
    await callAPI(`/posts/${id}`, { method: "DELETE" });

    output.textContent = `Post ${id} borrado (Simulacion, no se borra completamente)`;
  } catch (error) {
    output.textContent = "Error:" + error.message;
  }
});

// Async en el CallBack
// Al declarar la funcion de modo async esto
// Indica que esta funcion trabaje de forma que no bloquea
// El resto del programa mientras se ejecuta, es decir
// se ejecuta de forma paralela a las demas.

// El await suspende la ejecucion del bloque hasta
// que se cumpla la promesa y asigna el resultado
