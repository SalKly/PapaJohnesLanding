const menu = document.querySelector(".menu-open");
const dropdown = document.querySelector(".drop-down-list");
menu.addEventListener("click", function () {
  dropdown.style.transform = "translateY(0)";
});
