const cart_button_popup = document.querySelector(".shopping_popup");

cart_button_popup.addEventListener("click", cartPopupFunction);

function cartPopupFunction() {
  let popup = document.querySelector("#shopping_menu");
  popup.classList.toggle("show");
}

const product_links = document.querySelectorAll(".product_link");

product_links.forEach((link) => {
  link.addEventListener("click", saving);
});

function saving(event) {
  const clicked_link = event.currentTarget;
  const img_element = clicked_link.querySelector("img");
  const image_src = img_element.getAttribute("src");
  const product_name = img_element.getAttribute("alt");
  const displayed_product = {
    img: image_src,
    name: product_name,
  };
  localStorage.setItem("displayed_product", JSON.stringify(displayed_product));
}
