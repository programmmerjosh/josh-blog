<template>
  <!-- Masthead-->
  <header
    id="covid-19"
    class="masthead d-flex align-items-center justify-content-center"
  >
    <!-- this image is hidden but added here to show on facebook posts when link is shared -->
    <img
      src="src/assets/img/Screenshot 2022-01-22 at 13.58.08-min.png"
      class="invisible collapsing"
      alt=""
    />

    <div class="col-10">
      <h1
        id="grand-title"
        class="p-0 p-sm-5 text-center text-uppercase text-white mt-5 mt-sm-0"
      >
        This particular page consists of videos and articles created and/or
        composed by others. These videos and articles are related to the
        <strong class="text-underline">Covid-19</strong> virus.
      </h1>

      <h2 id="grand-title" class="text-white text-center mb-3">
        It is important that we
        <strong class="text-uppercase">do not</strong> dismiss potentially
        important information and/or label it as misinformation on the basis of
        it being contrary to our own beliefs/understandings or the general
        consensus.
      </h2>
      <h2 id="grand-title" class="text-white text-center mb-3">
        We have a <strong class="text-uppercase">responsibility</strong> to
        question, test and scrutinize our closely held understanding of things,
        particularly serious and non-trivial things.
      </h2>

      <small id="covid-page-disclaimer" class="text-white text-center">
        <strong class="text-uppercase">disclaimer:</strong> While much of this
        information contained in these videos and articles are evidence based
        and even scientifically demonstrated (and documented);
        <em class="text-bold">some</em> of the information presented here might
        be theories and/or opinions and should be read/viewed with that
        understanding.
      </small>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="contact-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="get-in-touch-modalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="contact1-form-title">
              Any questions, comments or suggestions?
            </h6>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form
              class="contact1-form validate-form"
              action="https://formspree.io/f/mgerwpnw"
              method="POST"
            >
              <div
                class="wrap-input1 validate-input"
                data-validate="Name is required"
              >
                <input
                  class="input1"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <span class="shadow-input1"></span>
              </div>

              <div
                class="wrap-input1 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  class="input1"
                  type="email"
                  value=""
                  name="EMAIL"
                  placeholder="Email"
                />
                <span class="shadow-input1"></span>
              </div>

              <div class="wrap-input1 validate-input">
                <input
                  class="input1"
                  type="text"
                  name="message"
                  placeholder="Subject"
                />
                <span class="shadow-input1"></span>
              </div>
              <div
                class="wrap-input1 validate-input"
                data-validate="Message is required"
              >
                <textarea
                  class="input1"
                  name="message"
                  placeholder="Message"
                ></textarea>
                <span class="shadow-input1"></span>
              </div>

              <div class="container-contact1-form-btn">
                <button class="contact1-form-btn">
                  <span>
                    Send
                    <i class="far fa-paper-plane" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
