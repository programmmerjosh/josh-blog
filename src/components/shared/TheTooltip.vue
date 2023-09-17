<template>
  <div class="tooltip-wrapper">
    <span class="tooltip__text">{{ text }}</span>

    <div class="imported-element">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .tooltip__text {
    visibility: hidden;
    opacity: 0;
    transition: opacity 1s;

    position: absolute;
    z-index: 1;

    /* alternative to top placement */
    /* left: 25px;
    top: 1.5rem; */

    /* tooltip position: top */
    inset-block-end: 120%;
    inset-inline-start: 50%;
    margin-inline-start: -60px;

    color: white;
    font-size: 0.85rem;
    text-align: center;
    padding: 5px 3px;
    border-radius: 8px;
    min-width: 120px;
    background: #0c0909;
  }

  .tooltip-wrapper {
    position: relative;
    display: inline-block;
  }

  .tooltip-wrapper:hover .tooltip__text {
    visibility: visible;
    opacity: 1;
  }

  .imported-element {
    color: #138496;
    font-style: italic;
  }
</style>
