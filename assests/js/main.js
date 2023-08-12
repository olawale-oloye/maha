// typed effect

const nav = document.querySelector("nav .ul-links");
const tog = document.querySelector(".toggler");

tog.addEventListener("click", function () {
  nav.classList.toggle("show-nav");
  console.log("hello");
});

document.querySelectorAll("nav .ul-links ul li").forEach((links) => {
  links.addEventListener("click", function () {
    nav.classList.remove("show-nav");
  });
});
