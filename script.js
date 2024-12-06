const navLinks = document.querySelectorAll("#main-nav a");
const bodyEl = document.querySelector("body");

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

function setActiveLink(e) {
  navLinks.forEach((link) => {
    link.parentElement.classList.remove("active");
  });
  e.target.parentElement.classList.add("active");
}

function switchBGImage() {
  const bgImages = {
    introduction: "url('/assets/white-tree-fabrice-villard.jpg')",
    science: "url('assets/winter-eskimo.jpg')",
    hemispheres: "url('assets/virtual-reality.jpg')",
    celebrations: "url('assets/snow-ball.jpg')",
    traditions: "url('assets/winter-people.jpg')",
    conclusion: "url('assets/woman-eskimo.jpg')",
  };

  bodyEl.style.backgroundImage = bgImages[nextSection.id];
}

// Add active class to the first nav link
navLinks[0].parentElement.classList.add("active");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    hideCurrentSection();
    displayNextSection(e);
    setActiveLink(e);
    switchBGImage();
  });
});
