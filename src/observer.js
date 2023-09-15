const welcomeSection = document.querySelector(".info-section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("bg-light", entry.isIntersecting);
      welcomeSection.classList.toggle(
        "hellloooooooooooo",
        entry.isIntersecting
      );
      // this line cancels the observer after running once
      // if (entry.isIntersecting) observer.unobserve(entry.target);
    });

    console.log(entries);
  },
  {
    threshold: 0,
    rootMargin: "-200px",
  }
);

const navs = document.querySelectorAll(".contact1-form");

navs.forEach((nav) => {
  console.log(nav.innerHTML);
  observer.observe(nav);
});
