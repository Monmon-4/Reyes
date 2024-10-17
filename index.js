document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll("section");
  const hireMeButton = document.querySelector(".action__btns a"); 
  const contactsSection = document.getElementById("contacts");
  const logoButton = document.querySelector(".logo a");
  const homeSection = document.getElementById("home")

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); 
  
      sections.forEach(section => section.classList.remove("active"));
      navLinks.forEach(item => item.classList.remove("active"));
  
      const targetId = link.getAttribute("href").substring(1);
      document.getElementById(targetId).classList.add("active");
      link.classList.add("active");
    });
  });

  sections.forEach((section, index) => {
    if (index !== 0) section.classList.remove("active");
  });
  sections[0].classList.add("active");

  hireMeButton.addEventListener("click", (e) => {
    e.preventDefault();

    sections.forEach(section => section.classList.remove("active"));
    navLinks.forEach(link => link.classList.remove("active"));

    contactsSection.classList.add("active");
    document.querySelector('nav ul li a[href="#contacts"]').classList.add("active");
  });

  logoButton.addEventListener("click", (e) => {
    e.preventDefault();

    sections.forEach(section => section.classList.remove('active'));
    navLinks.forEach(link => link.classList.remove("active"));

    homeSection.classList.add("active");
    document.querySelector('nav ul li a[href= "#home"]').classList.add("active");
  });
});
