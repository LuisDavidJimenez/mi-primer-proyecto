import { callAPI } from "./api.js";

const btn = document.getElementById("btn-listar");
const output = document.getElementById("output");

btn.addEventListener("click", async () => {
  try {
    const data = await callAPI("/posts");
    output.textContent = JSON.stringify(data, null, 2);
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