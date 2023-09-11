<template>
  <header class="masthead d-flex align-items-center justify-content-center">
    <!-- this image is hidden but added here to show on facebook posts when link is shared -->
    <img
      src="../assets/img/Screenshot 2021-04-18 at 21.36.57.png"
      class="invisible collapsing"
      alt=""
    />

    <div class="col-10">
      <h1
        id="grand-title"
        class="p-0 p-sm-5 text-center text-uppercase text-white"
      >
        “What lies behind you and what lies in front of you, pales in comparison
        to what lies inside of you.” Ralph Waldo Emerson
      </h1>
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
