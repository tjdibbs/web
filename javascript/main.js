const menuToggle = document.getElementsByClassName("menu-toggle")[0];
const menuList = document.getElementsByClassName("menu-list")[0];
const visualControl = document.getElementsByClassName("visual-control")[0];

function ClickEvent() {
  menuList.classList.toggle("visible");
  visualControl.classList.toggle("visible");
}

menuToggle.addEventListener("click", ClickEvent, false);
visualControl.addEventListener("click", ClickEvent, false);
