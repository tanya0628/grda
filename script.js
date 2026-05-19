const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("nav-links");

/* TOGGLE MENU */
menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

  /* CHANGE ICON */
  if(navLinks.classList.contains("active")){
    menuBtn.innerHTML = "✕";
  }
  else{
    menuBtn.innerHTML = "☰";
  }

});
/* FAQ TOGGLE */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    item.classList.toggle("active");

  });

});
