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

//service-nav-open
let serviceNav = document.querySelector(".service-nav");
serviceNav.addEventListener("mouseover", (e) => {
  let serviceNavOpen = document.querySelector(".service-nav-open");
  serviceNavOpen.classList.add("service-nav-mouseover");
  serviceNavOpen.style.animation = "slidedown 0.3s forwards";

  let serviceNavMouseover = () => {
    serviceNavOpen.classList.remove("service-nav-mouseover");
  };

  serviceNavOpen.addEventListener("mouseout", (e) => {
    serviceNavMouseover();
  });

  document.querySelectorAll(".service-open-li").forEach((serviceOpenLi) => {
    serviceOpenLi.addEventListener("click", (e) => {
      document.querySelector(".service-nav-open");
      serviceNavMouseover();
    });
  });

  serviceNav.addEventListener("click", (e) => {
    document.querySelector(".service-nav-open");
    serviceNavMouseover();
  });
});
