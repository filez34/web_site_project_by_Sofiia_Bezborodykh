// let product = localStorage.item;
//need to have item ids. datatype?

let product_container = document.querySelector(".product_list");
const item_list = document.querySelector(".item_list");

let list_array;

if (localStorage.picked) {
  list_array = JSON.parse.localStorage.picked;
} else {
  list_array = [];
}

let items = JSON.parse[localStorage.picked];

for (let i = 0; i < list_array.length; i++) {
  let picked_item = document.createElement("img");
  picked_item.style.width = "100%";
  picked_item.classList.add("product");
  product_container.appendChild(picked_item);
}

const remove_button = document.querySelector(".remove_button");

remove_button.addEventListener("click", removeSelectedElement);

function removeSelectedElement() {
  list_array.shift();
}
