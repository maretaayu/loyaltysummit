function toggleMenu() {
  const responsiveMenu = document.querySelector(".responsive-menu");
  responsiveMenu.classList.toggle("active");
}

window.addEventListener("scroll", function () {
  const mainHeader = document.querySelector("#main-header");
  const mainLinks = document.querySelectorAll("#menu a, .responsive-menu a");
  const logoImg = document.querySelector("#logo img");

  if (window.scrollY > 0) {
    mainHeader.classList.add("scrolled");
    mainLinks.forEach((link) => {
      link.classList.add("scrolled");
    });
    logoImg.src = "/assets/2025/Logo.svg";
  } else {
    mainHeader.classList.remove("scrolled");
    mainLinks.forEach((link) => {
      link.classList.remove("scrolled");
    });
    logoImg.src = "/assets/2025/Logo.svg";
  }
});
