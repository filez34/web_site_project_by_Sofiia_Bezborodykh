// access var
let product_container = document.querySelector(".product_container");
let clear_bttn = document.getElementById("clear");
const remove_button = document.querySelector(".remove_button");
let cart = JSON.parse(localStorage.getItem("picked")) || [];

// render each object inside cart array
cart.forEach((item) => {
  let indiv_item_container = product_container.appendChild(
    document.createElement("section"),
  );
  indiv_item_container.className = "cart_item_container";
  let picked_product_thumbnail = indiv_item_container.appendChild(
    document.createElement("img"),
  );
  picked_product_thumbnail.src = item.img;
  let picked_product_name = indiv_item_container.appendChild(
    document.createElement("p"),
  );
  picked_product_name.innerText = item.name;
});

clear_bttn.addEventListener("click", removeAll);
function removeAll() {
  localStorage.clear();
  product_container.innerHTML = "";
}
