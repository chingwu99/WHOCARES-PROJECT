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
      removeServiceNavMouseover();
    });
  });

  serviceNav.addEventListener("click", (e) => {
    removeServiceNavMouseover();
  });
});

//lighting page
//my equipment list

//商品資料
const data = [
  {
    img: "./pngpicture/lighting png/aputure amaran 100d.png",
    name: "Aputure 100d",
    quantity: 1,
    price: 600,
  },
  {
    img: "./pngpicture/lighting png/aputure 120d II.png",
    name: "Aputure 120d II",
    quantity: 1,
    price: 800,
  },
  {
    img: "./pngpicture/lighting png/aputure mc 4kit.png",
    name: "Aputure mc 4kit",
    quantity: 1,
    price: 1800,
  },
  {
    img: "./pngpicture/lighting png/aputure 300d II.png",
    name: "Aputure 300d II",
    quantity: 1,
    price: 1000,
  },
  {
    img: "./pngpicture/lighting png/aputure 300x.png",
    name: "Aputure 300x",
    quantity: 1,
    price: 1300,
  },
  {
    img: "./pngpicture/lighting png/aputure Lantern 90.png",
    name: "Aputure Lantern90",
    quantity: 1,
    price: 500,
  },
  {
    img: "./pngpicture/lighting png/FILMGEAR 1.2k.png",
    name: "FILMGEAR 1.2k",
    quantity: 1,
    price: 1600,
  },
  {
    img: "./pngpicture/lighting png/Delica 2.4.png",
    name: "Delica 2.4",
    quantity: 1,
    price: 2500,
  },
  {
    img: "./pngpicture/lighting png/FUSO CANTER 3.5.png",
    name: "FUSO CANTER 3.5",
    quantity: 1,
    price: 3500,
  },
];

let productList = [];

//1.加入清單
const add = document.querySelector(".commodity");
add.addEventListener("click", (e) => {
  if (e.target.getAttribute("class") == "commodity-button") {
    let name = e.target.dataset.name;
    let object = data.filter((i) => i.name == name)[0];

    let sameProduct = productList.filter((i) => i.name === name)[0];

    // console.log(sameProduct);

    if (sameProduct !== undefined && sameProduct.name === name) {
      productList.forEach((i) => {
        if (i.name == name) {
          i.quantity += 1;
        }
      });
    } else {
      productList.push(object);
    }

    // console.log(productList);
    renderData();

    //商品加入成功
    let addSuccess = document.querySelector(".add-list-success");
    addSuccess.classList.add("add-list-success-alert");

    let successOkButton = document.querySelector(".list-success-ok-button");
    successOkButton.addEventListener("click", (e) => {
      addSuccess.classList.remove("add-list-success-alert");
    });
  }
});

//2.渲染

let total = document.querySelector(".total");

function renderData() {
  let str = "";

  productList.forEach((i) => {
    str += `
      <div class="my-list">
        <div class="list-equipment">
          <div class="list-product">
          <img src='${i.img}'>
          </div>
          <div>
          ${i.name}
          </div>
          <div>
           <button type="button" class="quantity-button" data-qchange="reduce" data-id="${i.name}">-</button>
            ${i.quantity}
           <button type="button" class="quantity-button" data-qchange="add" data-id="${i.name}">+</button>
          </div>
          <div>
          ＄<span class="price">${i.price}</span>/day
          </div>
          <div>
          <i class="fa-solid fa-xmark remove-equipment" data-id="${i.name}"></i>
          </div>
        </div>
      </div>
      `;
  });

  list.innerHTML = str;

  //計算總價

  function totalPrice() {
    let sum = 0;
    productList.forEach((i) => {
      sum += i.quantity * i.price;
    });
    total.innerHTML = `Total:$${sum}`;
  }
  totalPrice();

  // console.log(productList);
}

//3.移除商品 改變數量
const list = document.querySelector(".list");
list.addEventListener("click", (e) => {
  let id = e.target.dataset.id;
  if (e.target.getAttribute("class") == "fa-solid fa-xmark remove-equipment") {
    productList = productList.filter((i) => i.name !== id);
  } else if (e.target.getAttribute("class") == "quantity-button") {
    let quantityChange = e.target.dataset.qchange;
    // console.log(quantityChange, id);
    productList.forEach((i) => {
      if (i.name == id) {
        if (quantityChange == "reduce" && i.quantity > 1) {
          i.quantity--;
        } else if (quantityChange == "add") {
          i.quantity++;
        }
      }
    });
  }
  renderData();
});

//4.刪除清單全部
let clearAll = document.querySelector(".clear-all-list-button");
clearAll.addEventListener("click", (e) => {
  productList = [];
  renderData();
});
