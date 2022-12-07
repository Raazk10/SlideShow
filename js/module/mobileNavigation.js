export default function MobileNavigation() {
  const buttonNavigation = document.querySelector(".button-mobile-navigation");
  const header = document.querySelector(".header");

  buttonNavigation.addEventListener("click", addToggle);

  function addToggle() {
    header.classList.toggle("nav-open");
  }
}
