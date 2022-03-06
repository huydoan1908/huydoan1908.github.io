const menuBtn = document.querySelector("#header #mobile-menu");
const header = document.querySelector("#header");
menuBtn.addEventListener("click", () => {
  header.style.height = header.style.height == "auto" ? "46px" : "auto";
});

const navLink = document.querySelectorAll("#nav li");
navLink.forEach((item) => {
  item.addEventListener("click", () => {
    header.style.height = "46px";
  });
});
