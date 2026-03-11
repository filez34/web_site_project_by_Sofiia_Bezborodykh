function load_footer() {
  const footer_place = document.querySelector(".footer_container");
  fetch("footer.html")
    .then((response) => {
      if (!response.ok) throw new Error("Footer not found");
      return response.text();
    })
    .then((data) => {
      footer_place.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error", error);
    });
}
load_footer();
