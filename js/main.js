// Other Links Event
const menu = document.getElementById("links-menu");

const btn = document.getElementById("menu-btn");

btn.addEventListener("click", function handleClick() {
  if (menu.style.display === "none") {
    menu.style.display = "flex";

  } else {
    menu.style.display = "none";

  }
});
