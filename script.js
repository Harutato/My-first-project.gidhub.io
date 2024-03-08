"use strict";

const headerBurger = document.querySelector(".header__burger");
const headerBurgerMenu = document.querySelector(".header__burger-menu");
const headerBurgerMenuUl = document.querySelector(".header__burger-menu ul");
const headerBurgerMenuClos = document.querySelector(
	".header__burger-menu-clos"
);
const headerBurgerMenuFoot = document.querySelector(
	".header__burger_menu-foot"
);

headerBurger.addEventListener("click", () => {
	headerBurgerMenu.classList.add("active");
});

headerBurgerMenuClos.addEventListener("click", () => {
	headerBurgerMenu.classList.remove("active");
});
document.body.addEventListener("click", e => {
	if (!headerBurgerMenu.contains(e.target) && !headerBurger.contains(e.target)) {
		headerBurgerMenu.classList.remove("active");
}
});
