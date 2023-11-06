// Sayfa yüklendiğinde ve sayfa kaydırıldığında çalışacak olan işlev
function updateActiveLink() {
    const menuLinks = document.querySelectorAll(".nav-item .nav-link");
  
    menuLinks.forEach((link) => {
      const sectionId = link.getAttribute("href").substring(1);
      const section = document.getElementById(sectionId);
      const rect = section.getBoundingClientRect();
  
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        menuLinks.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", updateActiveLink);
  window.addEventListener("scroll", updateActiveLink);
  
  // Menü dışına tıklanınca menüyü kapatmak için işlev
  document.addEventListener("click", function (event) {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  });