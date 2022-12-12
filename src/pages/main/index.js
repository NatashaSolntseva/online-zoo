import "./style.scss";

console.log("Hello, World!!!!");

const burgerBtn = document.querySelector(".burger");
const bugrerMenu = document.querySelector(".burger__menu");

const openBurgerMenu = () => {
  console.log("burger btn open");
};
const closeBurgerMenu = () => {
  console.log("burger btn close");
};

function toggleMenu() {
  if (bugrerMenu.classList.contains("")) {
    closeBurgerMenu();
  } else {
    openBurgerMenu();
  }
}

burgerBtn.addEventListener("click", toggleMenu);
