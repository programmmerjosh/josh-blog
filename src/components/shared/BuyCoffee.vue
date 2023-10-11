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
  section {
    padding: 6rem 2rem;
  }
  h1 {
    font-size: 5rem;
    margin-bottom: 4rem;
  }
  h2 {
    font-size: 2rem;
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

  @font-face {
    font-family: "CMSansSerif";
    font-weight: 400;
    font-style: normal;
    font-display: auto;
    unicode-range: U+000-5FF;
    src: local("CMSansSerif"),
      url("../../assets/Fonts/cm sans serif 2012.ttf") format("ttf");
  }
</style>
