export const Header = () => {
  const Burger = document.querySelector(".burger");
  const HeaderMenu = document.querySelector(".header__nav");
  Burger.addEventListener("click", () => {
    if (!HeaderMenu.classList.contains("header__nav--open")) {
      HeaderMenu.classList.add("header__nav--open");
      Burger.classList.add("burger--active");
    } else {
      HeaderMenu.classList.remove("header__nav--open");
      Burger.classList.remove("burger--active");
    }
  });
};
