//image_3.jpg

const lista = [
  "assets\\image_1.jpg",
  "assets\\image_2.jpeg",
  "assets\\image_3.jpeg",
];
let image = 0;

const btnDer = document.getElementById("btnDer");
const btnIzq = document.getElementById("btnIzq");
const Idimage = document.getElementById("image");
const container = document.querySelector(".contenedor");

btnDer.addEventListener("click", function () {
  if (image + 1 < lista.length) {
    btnIzq.style.display = "block";
    image++;
    Idimage.src = lista[image];
    if (image + 1 == lista.length) {
      btnDer.style.display = "none";
    }
    updateCarousel();
  }
});

btnIzq.addEventListener("click", function () {
  if (image > 0) {
    btnDer.style.display = "block";
    image -= 1;
    Idimage.src = lista[image];
    if (image == 0) {
      btnIzq.style.display = "none";
    }
    updateCarousel();
  }
});

function updateCarousel() {
  container.style.transform = `translateX(${Idimage * -100}%)`;
  Idimage.style.opacity = index === image ? 1 : 0;
}
