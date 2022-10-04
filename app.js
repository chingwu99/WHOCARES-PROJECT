//globle
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
  serviceNavOpen.style.animation = "slidedown 0.5s forwards";

  let removeServiceNavMouseover = () => {
    serviceNavOpen.classList.remove("service-nav-mouseover");
  };

  serviceNavOpen.addEventListener("mouseout", (e) => {
    removeServiceNavMouseover();
  });

  document.querySelectorAll(".service-open-li").forEach((serviceOpenLi) => {
    serviceOpenLi.addEventListener("click", (e) => {
      document.querySelector(".service-nav-open");
      removeServiceNavMouseover();
    });
  });

  serviceNav.addEventListener("click", (e) => {
    document.querySelector(".service-nav-open");
    removeServiceNavMouseover();
  });
});

//lighting page
//my equipment list
let divList = document.querySelector(".list");
let addList = document
  .querySelectorAll(".commodity-button")
  .forEach((commodityButton) => {
    commodityButton.addEventListener("click", (e) => {
      let commodityCard = e.target.parentElement.parentElement.parentElement;
      let commodityWord = e.target.parentElement.parentElement;
      let product = commodityCard.children[0].querySelector("img").src;
      let description = commodityWord.children[0].children[0].innerText;
      let price = commodityWord.children[0].children[1].children[0].innerText;

      // add list success alert
      let addListSuccess = document.querySelector(".add-list-success");
      addListSuccess.classList.add("add-list-success-alert");

      let listSuccessOkButton = document.querySelector(
        ".list-success-ok-button"
      );
      listSuccessOkButton.addEventListener("click", (e) => {
        addListSuccess.classList.remove("add-list-success-alert");
      });

      let myList = document.createElement("div");
      myList.classList.add("my-list");
      myList.innerHTML = `
      <div class="list-equipment">
        <div class="list-product">
         <img src="${product}">
        </div>
        <div>
         ${description}
        </div>
        <div class="quantity-button">
          <button>+</button>
          1
          <button>-</button>
        </div>
        <div>
         ＄<span class="price">${price}</span>/day
        </div>
        <div>
         <i class="fa-solid fa-xmark remove-equipment"></i>
        </div>
      </div>
      `;

      divList.appendChild(myList);

      let totalFunction = () => {
        let totalPriceArray = [];
        document.querySelectorAll(".price").forEach((item) => {
          totalPriceArray.push(Number(item.innerText));
        });
        console.log(totalPriceArray);

        let totalPrice = totalPriceArray.reduce((a, b) => a + b, 0);
        console.log(totalPrice);

        let total = document.querySelector(".total");
        total.innerHTML = `Total:$${totalPrice}`;
      };

      totalFunction();

      document
        .querySelectorAll(".remove-equipment")
        .forEach((removeEquipment) => {
          removeEquipment.addEventListener("click", (e) => {
            let myList = e.target.parentElement.parentElement;

            myList.remove();

            totalFunction();
          });
        });
    });
  });
