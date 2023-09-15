// Here, we are setting up an intersection observer
// this observer is looking for the .masterhead element,
// when found, it removes the light background and dark-text of the navbar

// page section(s) we are going to observe
const headerSection = document.querySelector(".masthead");
const avatar = document.querySelector("#info-section-title.about-page");

// elements to change
const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelectorAll(".nav-link");
const navbarBrand = document.querySelector(".navbar-brand");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navbar.classList.remove("bg-light");
        navbarBrand.classList.remove("text-dark");

        navbarLinks.forEach((link) => {
          link.classList.remove("text-dark");
        });
      } else {
        navbar.classList.add("bg-light");
        navbarBrand.classList.add("text-dark");

        navbarLinks.forEach((link) => {
          link.classList.add("text-dark");
        });
      }

      // this line cancels the observer after running once
      // if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.1,
  }
);

if (headerSection) observer.observe(headerSection);
if (avatar) observer.observe(avatar);
