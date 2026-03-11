// access var
let product_container = document.querySelector(".product_container");
let clear_bttn = document.getElementById("clear");
const remove_button = document.querySelector(".remove_button");
let cart = JSON.parse(localStorage.getItem("picked")) || [];

// render each object inside cart array
cart.forEach((item, index) => {
  let cart_item_container = product_container.appendChild(
    document.createElement("section"),
  );
  cart_item_container.className = "cart_item_container";
  let picked_product_thumbnail_wrapper = cart_item_container.appendChild(
    document.createElement("article"), //adding img
  );
  let picked_product_thumbnail = picked_product_thumbnail_wrapper.appendChild(
    document.createElement("img"), //adding img
  );
  picked_product_thumbnail.src = item.img;
  let picked_product_name = cart_item_container.appendChild(
    document.createElement("p"), //adding name
  );
  picked_product_name.innerText = item.name;
  let picked_product_remove_button = cart_item_container.appendChild(
    document.createElement("button"), //adding button
  );
  picked_product_remove_button.className = "cart_item_remove_button";
  picked_product_remove_button.innerHTML = "Remove";
  picked_product_remove_button.addEventListener("click", () => {
    remove_element(index);
  });
});

function remove_element(index) {
  let current_cart = JSON.parse(localStorage.getItem("picked")) || [];
  current_cart.splice(index, 1);
  localStorage.setItem("picked", JSON.stringify(current_cart));
  location.reload();
}

clear_bttn.addEventListener("click", removeAll);
function removeAll() {
  localStorage.clear();
  product_container.innerHTML = "";
}
