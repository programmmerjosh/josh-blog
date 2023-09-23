<script setup>
  import AttachmentItem from "../AttachmentItem.vue";
</script>

<template>
  <AttachmentItem
    :item-number="5"
    heading="Let Go And Trust - Overcoming Worry"
    dateAdded="18 April 2021"
    resourceType="Video"
  >
    <p>
      This is a well expressed perspective on the Christian way to deal with
      worry appropriately. It may be rarely practiced today and definitely not
      something easy to do. However, most of us will agree that this rings true
      and reassures one why we shouldn't be spending any time worrying about
      things we largely cannot control.
    </p>

    <div class="d-flex justify-content-center">
      <iframe
        id="youtube-link"
        src="https://www.youtube.com/embed/jou5ANZX1BQ"
      ></iframe>
    </div>

    <p class="text-center small-text">
      YouTube video upload credit:
      <a target="_blank" href="https://www.youtube.com/c/ABOVEInspiration"
        >ABOVE INSPIRATION</a
      >
    </p>
  </AttachmentItem>
</template>
