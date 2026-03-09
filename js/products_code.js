// const headerElement = document.querySelector("header");
// const navElement = document.createElement("nav");
// headerElementElement.appendChild(navElement);

const A_class_elements = document.getElementsByClassName("A");
const B_class_elements = document.getElementsByClassName("B");
const filter_button = document.querySelector("#filter");
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

filter_button.addEventListener("click", filterFunction);
function filterFunction() {
  A_class_elements.style.display = "none";
}

// A_class_elements.style.display = "none";
// B_class_elements.style.display = "none";
