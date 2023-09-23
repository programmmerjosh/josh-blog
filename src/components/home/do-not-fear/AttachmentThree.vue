<script setup>
  import AttachmentItem from "../AttachmentItem.vue";
  import TheTooltip from "../../shared/TheTooltip.vue";
</script>

<template>
  <AttachmentItem
    :item-number="3"
    heading="Worry - A Disease Of Attitude"
    dateAdded="25 March 2021"
    resourceType="Videos"
  >
    <p>
      Jim Rohn shares a good perspective on diseases of attitude and just a
      great overall message. I encourage you to listen to this entire message,
      but the disease of attitude most<TheTooltip
        text="Pertain: be appropriate, related, or applicable to."
        >&nbsp;pertaining&nbsp;</TheTooltip
      >to the topic of discussion here, is worry.
    </p>

    <div class="d-flex justify-content-center">
      <iframe
        id="youtube-link"
        src="https://www.youtube.com/embed/0sG31mTbHJU"
      ></iframe>
    </div>

    <p class="text-center small-text">
      YouTube video upload credit:
      <a target="_blank" href="https://www.youtube.com/user/penscorner"
        >Karaan Karani</a
      >
    </p>

    <p class="pt-2">Here Jim Rohn shares his in depth analysis of worry.</p>

    <div class="d-flex justify-content-center">
      <iframe
        id="youtube-link"
        src="https://www.youtube.com/embed/e8eBYxm-axQ?si=tE1YV1wJSq9IA6S8"
      ></iframe>
    </div>

    <p class="text-center small-text">
      YouTube video upload credit:
      <a target="_blank" href="https://www.youtube.com/@sherleneteal2302"
        >Sherlene Teal</a
      >
    </p>

    <p class="pt-2 small-text">
      You can find more of Jim Rohn's material and life lessons on the official
      Jim Rohn website:
      <a target="_blank" href="https://www.jimrohn.com/">www.jimrohn.com</a>
    </p>
  </AttachmentItem>
</template>
