const cart_button_popup = document.querySelector(".shopping_popup");

cart_button_popup.addEventListener("click", cartPopupFunction);

function cartPopupFunction() {
  let popup = document.querySelector("#shopping_menu");
  popup.classList.toggle("show");
}
