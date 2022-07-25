const hamburguer = document.querySelector(".burguer");
const menu = document.querySelector(".nav-bar");

hamburguer.addEventListener("click", () => {
  menu.classList.toggle("desplayar");
});

window.addEventListener("click", (e) => {
  if (
    menu.classList.contains("desplayar") &&
    e.target != menu &&
    e.target != hamburguer
  ) {
    menu.classList.toggle("desplayar");
  }
});
