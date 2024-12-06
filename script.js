const navLinks = document.querySelectorAll("#main-nav a");

let currentSection;
let nextSection;

function hideCurrentSection() {
  currentSection = Array.from(document.querySelectorAll("section")).filter(
    (section) => {
      return window.getComputedStyle(section).display !== "none";
    }
  )[0];
  currentSection.style.display = "none";
}

function displayNextSection(e) {
  e.preventDefault();
  const section = e.target.hash;
  nextSection = document.querySelector(section);
  nextSection.style.display = "block";
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    hideCurrentSection();
    displayNextSection(e);
  });
});
