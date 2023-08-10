// typed effect
let typed = new Typed(".typing-effect", {
  strings: ["Talent", "Hire", "Recruit", "Match", "Job", "Team"],
  backSpeed: "9",
  typeSpeed: "9",
  loop: true,
});

const nav = document.querySelector("nav .ul-links  ul");
const tog = document.querySelector(".toggler");

tog.addEventListener("click", function () {
  if ((nav.style.top = "-50%")) {
    nav.style.top = "8%";
    console.log(nav.style.top);
  } else if ((nav.style.top = "8%")) {
    nav.style.top = "-50%";
    console.log(nav.style.top);
  }
});
