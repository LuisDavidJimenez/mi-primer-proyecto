import { callAPI } from "./api.js";

const btnListar = document.getElementById("btn-listar");
const output = document.getElementById("output");

btnListar.addEventListener("click", () => {
  callAPI("/posts")
    .then(data => {
      output.textContent = JSON.stringify(data,null,2);
    })
    .catch(error => {
      output.textContent = "Error:" + error.message;
    });
});
