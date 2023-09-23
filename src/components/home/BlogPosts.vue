<script setup>
  import FirstPost from "./do-not-fear/FirstPost.vue";
</script>

<template>
  <!-- blog section -->
  <section id="blog-section" class="">
    <div class="d-flex p-3">
      <h4 class="">Topics:</h4>
    </div>
    <!-- ACCORDIAN BLOGPOST SECTION -->
    <div class="accordion bg-transparent" id="accordionExample">
      <FirstPost />
      <!-- BLOG POST ITEM 2 -->
      <div class="accordion-item bg-transparent">
        <h2 class="accordion-header bg-transparent" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Next Topic
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse bg-transparent"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="col-10 offset-1 bg-transparent">
              <!-- edit tab placement of post overview -->

              <p id="section-description">
                The next topic of discussion will go here. The topic is still to
                be determined as well as the collection of quality references is
                to be collected.
              </p>

              <p>
                There are a number of controversial topics I'd love to address
                and discuss such as:
              </p>
              <ul>
                <li>· Capitalism vs Marxism - Which Is The Lesser Evil?</li>
                <li>· The Utopia Idea - Why This Will Never Work</li>
                <li>
                  · Healthy Eating vs What Mainstream Media Tells Us Is Healthy
                </li>
                <li>· The Appealing Response To Hate vs The Solution</li>
                <li>
                  · Why Don't We Learn About Money In School? If We Did, Would
                  We Eliminate Poverty?
                </li>
              </ul>

              <div class="rounded-white-text-box">
                <p class="mb-0">
                  Feel free to
                  <a href="#contact">let me know</a>
                  what you think of these topics and whether there's one you'd
                  particularly prefer to be discussed first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .accordion-body .row {
    margin: 0;
  }
</style>
