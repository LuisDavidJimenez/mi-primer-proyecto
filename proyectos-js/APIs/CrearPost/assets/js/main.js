import { callAPI } from "./api.js";

const form = document.getElementById("form-post");
const output = document.getElementById("output");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Creamos el objeto data con los valores del formulario
  const data = {
    title: form.title.valueOf,
    body: form.body.value,
    userId: Number(form.userId.value),
  };

  // Llamamos para enviar un POST
  callAPI(`/posts`, {
    method: "POST", // Metodo HTTP
    body: JSON.stringify(data),
  })
    .then((created) => {
      output.textContent =
        "Creado (id esperado 101):\n" + JSON.stringify(created, null, 2);
    })
    .catch((error) => {
      output.textContent = "Error:" + error.message;
    });
});
