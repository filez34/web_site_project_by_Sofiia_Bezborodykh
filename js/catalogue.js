//  headingElement.style.display = "none";
// const headerElement = document.querySelector("header");
// const navElement = document.createElement("nav");
// headerElementElement.appendChild(navElement);

const A_class_elements = document.getElementsByClassName("A");
const B_class_elements = document.getElementsByClassName("B");
const filter_button = document.querySelector("#filter");

filter_button.addEventListener("click", filterFunction);

function filterFunction() {
  A_class_elements.style.display = "none";
}

// A_class_elements.style.display = "none";
// B_class_elements.style.display = "none";
