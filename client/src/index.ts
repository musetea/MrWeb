const $closeButton = document.querySelector("#menu-bar")! as HTMLElement;
const $navBar = document.querySelector("nav.navbar")! as HTMLElement;

$closeButton?.addEventListener("click", () => {
   $closeButton.classList.toggle("fa-times");
   $navBar.classList.toggle("active");
});
