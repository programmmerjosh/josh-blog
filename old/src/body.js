export default {
  appendScriptsToBody() {
    // list of script tag src links
    let links = ["https://unpkg.com/feather-icons"];

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
