let product = localStorage.item;

const remove_button = document.querySelector(".remove_button");

remove_button.addEventListener("click", removeSelectedElement);

function removeSelectedElement() {
  localStorage.removeItem(item);
}
//need to have item ids. datatype?
