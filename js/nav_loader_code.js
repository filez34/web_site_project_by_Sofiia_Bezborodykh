function load_nav() {
  const header_place = document.querySelector("header");
  fetch("nav.html")
    .then((response) => {
      if (!response.ok) throw new Error("Nav not found");
      return response.text();
    })
    .then((data) => {
      header_place.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error", error);
    });
}
load_nav();
