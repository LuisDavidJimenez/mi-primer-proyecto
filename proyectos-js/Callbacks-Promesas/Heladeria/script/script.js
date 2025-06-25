function iniciar() {
  // setTimeout(() => {
  document.getElementById("cargando").classList.add("oculto");
  document.getElementById("despuesCargando").classList.remove("oculto");
  startCarousel();
  // }, 4000);
}

// Presentacion Heladeria
console.log("Bienvenido a la Heladería!");
console.log("Aquí puedes pedir tu helado favorito");
console.log("🍧🍨🍦 ¿Que Helado deseas? 🍧🍨🍦");

// Heladeria SetTimeout
function pedirHelado() {
  console.log("Pedido de Helado recibido!");
  setTimeout(() => {
    console.log("🍧 Aquí tienes tu helado! 🍧");
  }, 3000);
}

// Heladeria callback
function pedirHelado2(callback) {
  console.log("Pedido de Helado recibido!");
  console.log("Preparando tu Helado...");
  setTimeout(() => {
    callback();
  }, 3000);
}

function entregarHelado() {
  console.log("🍨 Tu Helado esta listo, aquí lo tienes 🍨");
}

// Heladeria Promesa
function pedirHelado3() {
  let promesaHelado = new Promise((resolve, reject) => {
    console.log("Pedido de Helado recibido!");
    console.log("Preparando tu Helado... Te avisaremos cuando esté listo!");

    let numeroRandom = Math.floor(Math.random() * 11);
    if (numeroRandom % 2 === 0) {
      var heladoListo = true;
    }

    setTimeout(() => {
      if (heladoListo) {
        resolve("🍦 Tu Helado está listo! 🍦");
      } else {
        reject("😢 Lo sentimos, tu helado se ha derretido 😢");
      }
    }, 3000);
  });

  promesaHelado
    // Resolve
    .then((mensaje) => {
      console.log("Exito: " + mensaje);
    })
    // Reject
    .catch((error) => {
      console.log("Error: " + error);
    });
}

const testimonios = [
  {
    text: "Vinimos con los niños un domingo por la tarde y fue la mejor decisión. La variedad de sabores es increíble (¡el de cheesecake con frambuesa es una locura!) y la atención del personal fue muy amable. El lugar es limpio, acogedor y perfecto para pasar un rato en familia. ¡Volveremos seguro!",
    author: "Laura G.",
    review: 5,
  },
  {
    text: "Fui con muchas expectativas por los buenos comentarios, pero la experiencia no fue la mejor. El helado tenía buena presentación, pero el sabor me pareció bastante artificial, especialmente el de vainilla. Además, el personal no fue muy atento y tuvimos que esperar bastante para ser atendidos, a pesar de que el local no estaba lleno. Ojalá mejoren, porque el lugar tiene potencial.",
    author: "Martín L.",
    review: 2,
  },
  {
    text: "Se nota que los helados son artesanales: tienen una textura cremosa y un sabor natural que no encuentras en otros lugares. Probé el de pistacho y el de mango maracuyá, y ambos estaban espectaculares. Además, tienen opciones veganas que también están buenísimas. Muy recomendable.",
    author: "Carlos M.",
    review: 5,
  },
  {
    text: "Soy clienta habitual y cada vez que vengo me sorprenden con un sabor nuevo. El servicio siempre es excelente y el ambiente, muy agradable. Recomiendo especialmente el helado de dulce de leche con nuez… ¡es adictivo!",
    author: "Sofía R.",
    review: 4,
  },
  {
    text: "Sinceramente, fue una decepción. Los helados estaban derretidos al servirlos, como si llevaran rato fuera del congelador, y el sabor no justificaba el precio: demasiado dulces y artificiales. Además, el local estaba desordenado y las mesas sucias, lo cual da muy mala impresión. El personal parecía desinteresado y respondía con desgano. No creo que vuelva; hay opciones mucho mejores cerca.",
    author: "Andrea R.",
    review: 1,
  },
];

const block = document.getElementById("testimonios");
const author = document.getElementById("autor");
const clasificacion = document.getElementById("clasif");
const btnResume = document.getElementById("resume");

let idx = 0;
let intervalId = null;

function showTestimonio() {
  const t = testimonios[idx];
  block.textContent = `"${t.text}"`;
  author.textContent = `${t.author}`;

  let estrellas = "";
  for (let i = 1; i <= 5; i++) {
    estrellas += i <= t.review ? "★" : "☆";
  }
  clasificacion.textContent = `${estrellas}`;

  // Incrementamos el indice actual
  idx = (idx + 1) % testimonios.length;
}

function startCarousel() {
  showTestimonio();
  intervalId = setInterval(showTestimonio, 5000);
}

function stopCarousel(params) {
  clearInterval(intervalId);
}

btnResume.addEventListener("click", startCarousel);
