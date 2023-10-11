<template>
  <nav :class="navbarClasses" id="mainNav">
    <div class="container">
      <router-link
        v-if="navigateOut"
        class="navbar-brand js-scroll-trigger text-wrap"
        to="/#page-top"
        >Write, Because It Forces You To
        <span class="text-underline">Think</span></router-link
      >
      <a
        v-else
        class="navbar-brand js-scroll-trigger text-wrap"
        href="#page-top"
        >Write, Because It Forces You To
        <span class="text-underline">Think</span></a
      >
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDarkDropdown"
        aria-controls="navbarNavDarkDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link
              v-if="navigateOut"
              class="nav-link js-scroll-trigger"
              to="/"
              >Home</router-link
            >
            <a v-else class="nav-link js-scroll-trigger" href="#blog-section"
              >Home</a
            >
          </li>
          <li v-if="showAbout" class="nav-item">
            <router-link class="nav-link js-scroll-trigger" to="/about"
              >About</router-link
            >
          </li>
          <li v-if="showSubscribe" class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#signup">Subscribe</a>
          </li>
          <li v-if="showCovid19" class="nav-item">
            <router-link class="nav-link js-scroll-trigger" to="/covid19"
              >Covid-19</router-link
            >
          </li>
          <li v-if="showBuyMeACoffee" class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#buy-me-a-coffee"
              >Support</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    props: {
      navigateOut: { type: Boolean, default: false },
      showSubscribe: { type: Boolean, default: true },
      showAbout: { type: Boolean, default: true },
      showCovid19: { type: Boolean, default: true },
      showBuyMeACoffee: { type: Boolean, default: false },
    },
    data() {
      return {
        navbarClasses: "navbar navbar-expand-lg fixed-top",
      };
    },
    methods: {
      // toggle classes on scroll
      updateScroll() {
        let scrollPosition = window.scrollY;
        const changeValue = 150;

        const navbar = document.querySelector("#mainNav");
        const navLinks = document.querySelectorAll(".nav-link");
        const navBrand = document.querySelector(".navbar-brand");

        navbar.classList.toggle("bg-light", scrollPosition > changeValue);
        navbar.classList.toggle(
          "reduced-height-navbar",
          scrollPosition > changeValue
        );
        navBrand.classList.toggle("text-dark", scrollPosition > changeValue);

        navLinks.forEach((tag) => {
          tag.classList.toggle("text-primary", scrollPosition > changeValue);
        });
      },
    },
    mounted() {
      window.addEventListener("scroll", this.updateScroll);
    },
  };
</script>

<style scoped>
  .text-primary {
    color: #343a40 !important;
  }
  @media (min-width: 992px) {
    .reduced-height-navbar {
      height: 78px;
    }
  }
  @media (max-width: 992px) {
    .nav-link {
      color: #64a19d;
    }
    .text-primary {
      color: #64a19d !important;
    }
  }
</style>
