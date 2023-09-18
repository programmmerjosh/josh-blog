<template>
  <div id="contact">
    <!-- these attributes (action and method) were removed from form and placed in a Vue method -->
    <!-- action="https://formspree.io/f/mgerwpnw"
      method="POST" -->
    <form class="contact1-form validate-form mx-auto">
      <div class="title-wrapper">
        <h1 class="title text-center mb-4">
          Any questions, comments or suggestions?
        </h1>
      </div>

      <div class="form-wrapper">
        <!-- Name -->
        <div
          class="form-group position-relative"
          :class="!validName ? 'invalid-field' : ''"
        >
          <label for="formName" class="d-block">
            <i class="icon" data-feather="user"></i>
          </label>
          <input
            type="text"
            @blur="validateForm"
            id="formName"
            class="form-control form-control-lg thick"
            placeholder="Name"
            name="name"
            v-model="name"
            required
          />
        </div>

        <!-- E-mail -->
        <div
          class="form-group position-relative"
          :class="!validEmail ? 'invalid-field' : ''"
        >
          <label for="formEmail" class="d-block">
            <i class="icon" data-feather="mail"></i>
          </label>
          <input
            type="email"
            @blur="validateForm"
            id="formEmail"
            class="form-control form-control-lg thick"
            placeholder="E-mail"
            name="EMAIL"
            v-model="email"
            required
          />
        </div>

        <!-- Message -->
        <div
          class="form-group message"
          :class="!validMessage ? 'invalid-field' : ''"
        >
          <textarea
            id="formMessage"
            @blur="validateForm"
            class="form-control form-control-lg"
            rows="7"
            placeholder="Type your message here"
            name="message"
            v-model="message"
            required
          ></textarea>
        </div>

        <!-- Submit btn -->
        <div class="text-center">
          <button
            type="submit"
            @click="submitForm($event)"
            class="btn btn-primary"
            tabIndex="-1"
          >
            Send message
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import routes from "../../routes";

  export default {
    data() {
      return {
        name: "",
        email: "",
        message: "",
        validName: { type: Boolean, default: true },
        validEmail: { type: Boolean, default: true },
        validMessage: { type: Boolean, default: true },
      };
    },
    methods: {
      submitForm(event) {
        event.preventDefault();
        const validationPassed = this.validateForm();

        if (!validationPassed) return;

        this.sendFormData();
        this.clearForm();

        // reroute
        routes.router.push({ path: "/message-sent-successfully" });
      },
      validateForm() {
        if (this.name === "") {
          this.validName = false;
          return false;
        }
        this.validName = true;

        if (
          this.email === "" ||
          this.email.length < 4 ||
          !this.email.includes("@") ||
          !this.email.includes(".")
        ) {
          this.validEmail = false;
          return false;
        }
        this.validEmail = true;

        if (this.message === "") {
          this.validMessage = false;
          return false;
        }
        this.validMessage = true;

        // validation success
        return true;
      },
      sendFormData() {
        // hard-coded url-string, but doesn't need to be dynamic at this point
        fetch("https://formspree.io/f/mgerwpnw", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: this.name,
            EMAIL: this.email,
            message: this.message,
          }),
        });
      },
      clearForm() {
        this.name = "";
        this.email = "";
        this.message = "";
      },
    },
  };
</script>

<style scoped>
  /* Apparently this is how you center a div: code for future reference */
  /* div {
    display: grid;
    place-items: center;
    align-content: center;
  } */

  svg {
    height: 23rem;
    /* margin-right: 4rem; */
  }

  #envelope {
    animation: float 2s ease-in-out infinite;
  }

  #star1,
  #star2,
  #star3,
  #star4,
  #star5,
  #star6 {
    animation: blink 1s ease-in-out infinite;
  }

  #star2 {
    animation-delay: 100ms;
  }

  #star3 {
    animation-delay: 500ms;
  }

  #star4 {
    animation-delay: 700ms;
  }

  #star5 {
    animation-delay: 300ms;
  }

  #star6 {
    animation-delay: 200ms;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  .container {
    height: 100vh;
  }

  .title-wrapper {
    padding: 2rem 3rem 0.5rem 3rem;
  }
  .form-wrapper {
    padding: 0 3rem 5rem 3rem;
  }

  form {
    min-width: 25rem;
    max-width: 1000px;
  }
  form .title {
    font-family: "Pacifico", cursive;
    color: #212529;
    font-size: 1.5rem;
  }
  form .form-control {
    background-color: #f2f6f8;
    border-radius: 2rem;
    border: none;
    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);
  }
  form .form-control.thick {
    height: 3.3rem;
    padding: 0.5rem 3.5rem;
  }
  form .form-control:focus {
    background-color: #f2f6f8;
    border: none;
    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);
  }
  form .message .form-control {
    padding: 0.5rem 1.8rem;
  }
  form ::placeholder {
    font-family: "Quicksand", sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
    color: #838788;
    position: relative;
    left: 0;
  }
  form input,
  form textarea {
    font-family: "Quicksand", sans-serif;
    color: #212529;
    font-size: 1.1rem;
  }
  form .icon {
    color: #57565c;
    height: 1.3rem;
    position: absolute;
    left: 1.5rem;
    top: 1.1rem;
  }

  .btn.btn-primary {
    font-family: "Quicksand", sans-serif;
    font-weight: bold;
    height: 2.5rem;
    line-height: 2.5rem;
    padding: 0 3rem;
    border: 0;
    border-radius: 3rem;
    background-image: linear-gradient(
      131deg,
      #ffd340,
      #ff923c,
      #ff923c,
      #ff923c
    );
    background-size: 300% 100%;
    transition: all 0.3s ease-in-out;
  }

  .btn.btn-primary:hover:enabled {
    box-shadow: 0 0.5em 0.5em -0.4em #ff923cba;
    background-size: 100% 100%;
    transform: translateY(-0.15em);
  }

  /* bigger than small laptop width */
  @media (min-width: 992px) {
    form .title {
      font-size: 2.5rem;
    }
  }
  /* bigger than small tablet width */
  @media (min-width: 768px) {
    .form-wrapper {
      padding: 0 10rem 5rem 10rem;
    }
  }
  /* bigger than mobile width */
  @media (min-width: 576px) {
    form .title {
      font-size: 2rem;
    }
    .title-wrapper {
      padding: 2rem 1.5rem 0.5rem 1.5rem;
    }
  }

  .invalid-field {
    border-bottom: 2px solid red;
    border-radius: 25px;
  }
</style>
