// bring images from catalogue
window.onload = function () {
  const data = JSON.parse(localStorage.getItem("displayed_product"));

  if (data) {
    document.querySelector(".product-image").src = data.img;
    document.querySelector(".product_title").innerText = data.name;
  } else {
    window.alert("No product data in localStorage!");
  }
};

// cart functionality
const imported_image_source = document.querySelector(".product_image");
const add_cart_button = document.querySelector("#add_to_cart");
let all_items = JSON.parse(localStorage.getItem("picked")) || [];

add_cart_button.addEventListener("click", add_cart_function);

function add_cart_function() {
  const img_element = document.querySelector("img");
  const image_src = img_element.getAttribute("src");
  const product_name = img_element.getAttribute("alt");
  const item = {
    img: image_src,
    name: product_name,
  };
  all_items.push(item);
  localStorage.setItem("picked", JSON.stringify(all_items));
}
