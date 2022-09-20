//hambuger-nav
let hambuger = document.querySelector(".hambuger");
hambuger.addEventListener("click", (e) => {
  let hambugerNav = document.querySelector(".hambuger-nav");
  hambugerNav.classList.toggle("click-hambuger");
  hambugerNav.style.animation = "slidein 0.3s forwards";

  document.querySelectorAll(".hambuger-li").forEach((hambugerLi) => {
    hambugerLi.addEventListener("click", (e) => {
      let hambugerNav = document.querySelector(".hambuger-nav");
      hambugerNav.classList.remove("click-hambuger");
    });
  });
});
