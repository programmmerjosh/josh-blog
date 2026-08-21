<template>
  <section
    id="buy-me-a-coffee"
    class="bg-black text-white text-center custom-font"
  >
    <h1>A supporter is worth a thousand followers</h1>
    <h2>
      It takes time and effort to put all this research together and to frame it
      in an easily digestible way. If you'd like to support me, you can
      <BuyLink>Buy Me A Coffee</BuyLink>. Much appreciated.
    </h2>
    <div class="icon-wrapper">
      <BuyLink
        ><div class="bg-white icon"><CoffeeIcon /></div
      ></BuyLink>
    </div>
  </section>
</template>

<script>
  import BuyLink from "./BuyLink.vue";
  import CoffeeIcon from "../../assets/img/Buy-Me-a-Coffee.svg";

  export default {
    components: { BuyLink, CoffeeIcon },
  };
</script>

<style scoped>
  @font-face {
    font-family: "CMSansSerif";
    font-weight: 400;
    font-style: normal;
    font-display: auto;
    unicode-range: U+000-5FF;
    src: local("CMSansSerif"),
      url("../../assets/Fonts/cm sans serif 2012.ttf") format("ttf");
  }
  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 180px;
  }
  .icon {
    border-radius: 20%;
    min-width: 100px;
    max-width: 180px;
  }
  .custom-font {
    font-family: "CMSansSerif";
  }

  section {
    padding: 4rem 2rem;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 4rem;
  }
  h2 {
    font-size: 1.2rem;
  }

  /* bigger than mobile width */
  @media (min-width: 576px) {
    section {
      padding: 5rem 3rem;
    }
    h1 {
      font-size: 3.2rem;
    }
    h2 {
      font-size: 1.6rem;
    }
  }

  /* bigger than small tablet width */
  @media (min-width: 768px) {
    section {
      padding: 5.5rem 4rem;
    }
    h1 {
      font-size: 5rem;
    }
    h2 {
      font-size: 2rem;
    }
  }

  /* bigger than small laptop width */
  @media (min-width: 992px) {
    section {
      padding: 6rem 4.5rem;
    }
    h1 {
      font-size: 6rem;
    }
    h2 {
      font-size: 2.2rem;
    }
  }
</style>
