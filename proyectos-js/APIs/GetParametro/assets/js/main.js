import { callAPI } from "./api.js";

const btnVer = document.getElementById("btn-ver");
const output = document.getElementById("output");

btnVer.addEventListener("click", () => {
  const postID = document.getElementById("postId").value.trim();

  if (!postID) {
    output.textContent = 'Introduce un ID valido';
    return;
  }

  callAPI(`/posts/${postID}`)
    .then((data) => {
      output.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      output.textContent = "Error:" + error.message;
    });
});
