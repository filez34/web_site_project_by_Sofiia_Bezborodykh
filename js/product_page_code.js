const add_cart_button = document.querySelector("#add_to_cart");

add_cart_button.addEventListener("click", add_cart_function);

//add new object everytime

function add_cart_button() {
  localStorage.picked = "shop_item";
}
