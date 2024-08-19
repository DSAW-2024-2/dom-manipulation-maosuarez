//image_3.jpg

const lista = [
  "assets\\image_1.jpg",
  "assets\\image_2.jpeg",
  "assets\\image_3.jpeg",
];
let image = 0;

const carousel = document.querySelector(".carousel");
const btnIzq = document.querySelector(".btn-izq");
const btnDer = document.querySelector(".btn-der");

function crearItems() {
  for (let i = 0; i < lista.length; i++) {
    let items = document.createElement("div");
    items.setAttribute("class", "carousel-item");
    if (i == 0) {
      items.classList.add("show");
    }

    let img = document.createElement("img");
    img.src = lista[i];
    img.alt = "Imagen de Carrusel" + (i + 1);

    items.appendChild(img);

    carousel.appendChild(items);
  }
}

btnDer.addEventListener("click", function () {
  if (image + 1 < lista.length) {
    btnIzq.style.display = "block";
    image++;
    if (image + 1 == lista.length) {
      btnDer.style.display = "none";
    }
    updateCarousel(image);
  }
});

btnIzq.addEventListener("click", function () {
  if (image > 0) {
    btnDer.style.display = "block";
    image -= 1;
    if (image == 0) {
      btnIzq.style.display = "none";
    }
    updateCarousel(image);
  }
});

function updateCarousel(index) {
  const carouselItems = document.querySelectorAll(".carousel-item");
  carouselItems.forEach((item, i) => {
    item.classList.remove("show");
    if (i === index) {
      item.classList.add("show");
    }
  });
  const offset = -index * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

//Codigo Ejecutable
crearItems();
updateCarousel(image);
