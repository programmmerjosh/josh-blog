export default {
  appendScriptsToBody() {
    // list of script tag src links
    let links = [
      "https://code.jquery.com/jquery-3.3.1.slim.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
      "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
      "https://unpkg.com/feather-icons",
      "../assets/contact-form-with-svg-animation/dist/script.js",
    ];

    links.forEach((link) => {
      let script = document.body.querySelector(`[src="${link}"`);

      // check if script already exists in document
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("src", link);
        script.setAttribute("type", "text/javascript");

        // append script to document
        document.body.appendChild(script);
      }
    });
  },
};
