const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("bg-light", entry.isIntersecting);

      if (entry.isIntersecting) observer.unobserve(entry.target);
    });

    console.log(entries);
  },
  {
    threshold: 1,
    // rootMargin: "-100px",
  }
);

const navs = document.querySelectorAll(".contact1-form");

navs.forEach((nav) => {
  console.log(nav.innerHTML);
  observer.observe(nav);
});
