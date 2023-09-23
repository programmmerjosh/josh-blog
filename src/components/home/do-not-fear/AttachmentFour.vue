<script setup>
  import AttachmentItem from "../AttachmentItem.vue";
  import TheTooltip from "../../shared/TheTooltip.vue";
</script>

<template>
  <AttachmentItem
    :item-number="4"
    heading="Scripture"
    dateAdded="25 March 2021"
    resourceType="Reading"
  >
    <img
      class="col-md-6 offset-md-0 d-none d-md-inline post-accordion-img float-md-left rounded-properly mr-md-2"
      src="../../../assets/img/peace-of-mind-1920.jpg"
      alt=""
    />

    <p class="d-inline">
      If we're looking for wisdom and truth, it's always a good idea to consider
      The Bible. I've decided to not go into too much depth here as I'm not
      a<TheTooltip
        text="Theologian: a person who engages or is an expert in the study of the nature of God and religious belief."
        >&nbsp;theologian&nbsp;</TheTooltip
      >nor a<TheTooltip
        text="Philosopher: a person engaged or learned in philosophy (the study of the fundamental nature of knowledge, reality, and existence, especially when considered as an academic discipline.)"
        >&nbsp;philosopher</TheTooltip
      >. So, let me share a few encouraging verses that align with the message
      here. Please feel free to go to The Bible for the context of these verses.
    </p>
    <br /><br />

    <p>
      <span class="font-weight-bolder">Philippians 4:8</span>
      "And now, dear brothers and sisters, one final thing.
      <strong
        >Fix your thoughts on what is true, and honorable, and right, and pure,
        and lovely, and admirable. Think about things that are excellent and
        worthy of praise.</strong
      >" (NLT)
    </p>

    <img
      class="col-8 offset-2 d-block d-md-none post-accordion-img rounded-properly mb-2"
      src="../../../assets/img/peace-of-mind-1920.jpg"
      alt=""
    />

    <p>
      <span class="font-weight-bolder">John 14:27</span>
      "I am leaving you with a gift—<strong>peace of mind and heart</strong>.
      And the <strong>peace</strong> I give is a <strong>gift</strong> the world
      cannot give. So don’t be troubled or afraid." (NLT)
    </p>

    <p>
      <span class="font-weight-bolder">Jeremiah 29:11</span>
      "'For I know the plans I have for you,' declares the Lord, 'plans to
      prosper you and not to harm you, plans to give you hope and a future.'"
      (NIV)
    </p>

    <p>
      <span class="font-weight-bolder">Romans 8:28–31</span>
      "And we know that in all things God works for the good of those who love
      him, who have been called according to His purpose. For those God foreknew
      he also<TheTooltip
        text="Predestined: (of an outcome or course of events) determined in advance by divine will or fate."
        >&nbsp;predestined&nbsp;</TheTooltip
      >to be conformed to the image of his Son, that he might be the firstborn
      among many brothers and sisters. And those he predestined, he also called;
      those he called, he also justified; those he justified, he also glorified.
      What, then, shall we say in response to these things? If God is for us,
      who can be against us?" (NIV)
    </p>
    <p>
      <span class="font-weight-bolder">Nahum 1:7</span>
      "The Lord is good, a<TheTooltip
        text="Refuge: a place or situation providing safety or shelter."
        >&nbsp;refuge&nbsp;</TheTooltip
      >in times of trouble. He cares for those who trust in him." (NIV)
    </p>
  </AttachmentItem>
</template>
