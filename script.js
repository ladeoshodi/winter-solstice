const navLinks = document.querySelectorAll("#main-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.hash);
  });
});
