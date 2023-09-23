<script setup>
  import AttachmentItem from "../AttachmentItem.vue";
  import TheTooltip from "../../shared/TheTooltip.vue";
</script>

<template>
  <AttachmentItem
    :item-number="6"
    heading="Knowing Your Adversary's Plans Can Give You A Huge Advantage"
    dateAdded="18 April 2021"
    resourceType="Video"
  >
    <p>
      When you are aware of the dangers and know what the enemy will<TheTooltip
        text="Inevitably: as is certain to happen; unavoidably."
        >&nbsp;inevitably&nbsp;</TheTooltip
      >try to accomplish (discourage, lie and break you down), you will most
      likely be able to recognise within the events of your life when you're
      particularly under attack.
    </p>

    <div class="d-flex justify-content-center">
      <iframe
        id="youtube-link"
        src="https://www.youtube.com/embed/CEhXNkZ9Bqg"
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
