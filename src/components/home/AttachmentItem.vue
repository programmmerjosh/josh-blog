<template>
  <!-- item 1 -->
  <div class="accordion-item">
    <h2 class="accordion-header" :id="flushHeadingId">
      <button
        class="accordion-button collapsed text-capitalize js-scroll-trigger"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#' + flushCollapseId"
        aria-expanded="false"
        :aria-controls="flushCollapseId"
      >
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-8">
              {{ itemNumber }}.&nbsp;{{ heading
              }}<span class="d-inline d-md-none">{{
                resourceType === "Reading" ? " 📚" : " 📹"
              }}</span>
            </div>
            <div class="col-12 col-md-2">
              <div class="tab-indent"></div>
              <span class="post-date">(added {{ dateAdded }})</span>
            </div>
            <div class="col-12 col-md-2">
              <div class="tab-indent"></div>
              <em class="post-type text-bold d-none d-md-inline">{{
                resourceType
              }}</em>
            </div>
          </div>
        </div>
      </button>
    </h2>
    <div
      :id="flushCollapseId"
      class="accordion-collapse collapse"
      :aria-labelledby="flushHeadingId"
      :data-bs-parent="'#' + flushCollapseId"
    >
      <div class="accordion-body pl-3 pr-3">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        flushHeadingId: "flush-heading" + this.itemNumber,
        flushCollapseId: "flush-collapse" + this.itemNumber,
      };
    },
    props: {
      itemNumber: { type: Number, required: true },
      heading: { type: String, required: true },
      dateAdded: { type: String, required: true },
      resourceType: { type: String, required: true },
    },
  };
</script>
