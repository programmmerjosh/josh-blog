<template>
  <nav :class="['site-nav', { 'site-nav--scrolled': isScrolled }]" id="mainNav">
    <div class="site-nav__inner">
      <router-link
        v-if="navigateOut"
        class="site-brand"
        to="/#page-top"
        ><span class="site-brand__mark" aria-hidden="true">🧠</span><span class="site-brand__copy">Write, Because It Forces You To <em>Think</em></span></router-link
      >
      <a
        v-else
        class="site-brand"
        href="#page-top"
        ><span class="site-brand__mark" aria-hidden="true">🧠</span><span class="site-brand__copy">Write, Because It Forces You To <em>Think</em></span></a
      >
      <button
        class="site-nav__toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="site-navigation-links"
        aria-label="Toggle navigation"
        @click="menuOpen = !menuOpen"
      >
        <span>{{ menuOpen ? "Close" : "Menu" }}</span>
        <span class="site-nav__toggle-lines" aria-hidden="true"></span>
      </button>
      <div :class="['site-nav__links', { 'is-open': menuOpen }]" id="site-navigation-links">
        <ul>
          <li class="nav-item">
            <router-link
              v-if="navigateOut"
              class="nav-link"
              to="/"
              @click="menuOpen = false"
              >Home</router-link
            >
            <a v-else class="nav-link" href="#blog-section" @click="menuOpen = false"
              >Home</a
            >
          </li>
          <li v-if="showAbout" class="nav-item">
            <router-link class="nav-link" to="/about" @click="menuOpen = false"
              >About</router-link
            >
          </li>
          <li v-if="showSubscribe" class="nav-item">
            <a class="nav-link" href="#signup" @click="menuOpen = false">Subscribe</a>
          </li>
          <li v-if="showCovid19" class="nav-item">
            <router-link class="nav-link" to="/covid19" @click="menuOpen = false"
              >Covid-19</router-link
            >
          </li>
          <li v-if="showBuyMeACoffee" class="nav-item">
            <a class="nav-link nav-link--accent" href="#buy-me-a-coffee" @click="menuOpen = false"
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
        menuOpen: false,
        isScrolled: false,
      };
    },
    methods: {
      // toggle classes on scroll
      updateScroll() {
        this.isScrolled = window.scrollY > 28;
      },
    },
    mounted() {
      window.addEventListener("scroll", this.updateScroll);
      this.updateScroll();
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.updateScroll);
    },
  };
</script>
