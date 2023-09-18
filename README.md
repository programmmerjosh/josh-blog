# josh-blog

My own blog website

This project started as a free Bootstrap theme that looked good. I customized it to my liking plus added content.

I then adapted the website into a React App (for fun and for a decent page-load speed).

Latest news: I've recreated the website as a VueJS app, implementing some of the latest skills I've learned. Exciting! The Vue app is published here: https://think-write-grow.com.

Well, this is my blog site. It's far from finished, but hope you like it.

---

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

---

The rest: Not implemented yet. So ignore for now.

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit:dev # or `npm run test:unit` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```
