<template>
  <div class="accordion-item bg-transparent">
    <h1 class="accordion-header" id="headingOne">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        {{ title }}
      </button>
    </h1>

    <div
      id="collapseOne"
      class="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <div class="row">
          <div class="text-center">
            <h1 class="mb-0">{{ title }}</h1>
            <span class="post-date"
              >Added {{ dateAdded }}, Updated {{ dateUpdated ?? "" }}</span
            >
          </div>

          <div class="col-10 offset-1">
            <!-- blog post content - subheadings, paragraphs of text, images etc -->
            <slot name="base" />
          </div>

          <div class="col-12 offset-0 col-md-10 offset-md-1">
            <div id="resources-textbox" class="rounded-white-text-box">
              <h4>{{ attachmentHeading }}</h4>
            </div>
            <div class="accordion accordion-flush" id="accordionFlushHome">
              <slot name="attachments" />

              <div class="rounded-white-text-box mt-2 text-center">
                <slot name="conclusion" />
              </div>

              <slot name="anythingExtra" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: { type: String, required: true },
      dateAdded: { type: String, required: true },
      dateUpdated: { type: String, required: false },
      attachmentHeading: {
        type: String,
        required: false,
        default: "Appendixes/Attachment-resources:",
      },
    },
  };
</script>

<style scoped></style>
