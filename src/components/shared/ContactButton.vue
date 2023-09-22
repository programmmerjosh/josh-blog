<template>
  <div class="fixed-floating-buttons ffb-one">
    <a className="rectangle-link-box" href="#contact">
      <div className="row">
        <div className="text-center">
          <i className="far fa-paper-plane rectangle-link-box-img mb-2"></i>
          <p className="text-uppercase">contact</p>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
  .rectangle-link-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 400px) {
    .fa-paper-plane {
      font-size: 0.8rem;
    }
  }
</style>
