<template>
  <!-- TODO: refactor into shared navigation component -->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <router-link class="navbar-brand js-scroll-trigger text-wrap" to="/"
        >Write, Because It Forces You To
        <span class="text-underline">Think</span></router-link
      >
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Back To Blog</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
