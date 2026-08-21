# Josh Blog - Cloudflare Pages Deployment Notes

## Current Deployment Workflow

The website is now deployed automatically through Cloudflare Pages.

Workflow:

    GitHub repository
    (programmerjosh/josh-blog)
            |
            | push to master branch
            ↓
    Cloudflare Pages
            |
            | npm install
            | npm run build
            ↓
    dist/
            |
            ↓
    Live website
    https://think-write-grow.com

## Production Branch

Cloudflare Pages watches:

    master

A normal update:

``` bash
git add .
git commit -m "update website"
git push origin master
```

will automatically trigger a deployment.

------------------------------------------------------------------------

# Cloudflare Pages Configuration

Framework preset:

    React (Vite)

(Note: this is just Cloudflare's preset label. The project itself is
Vue + Vite.)

Build command:

    npm run build

Output directory:

    dist

Production branch:

    master

------------------------------------------------------------------------

# Important Asset Handling

Previously, files had to be manually copied into `dist`.

This is no longer required.

Vite handles assets during the build process.

Local files inside:

    src/assets

should be imported through JavaScript.

Example:

``` js
import "./assets/motivation.min.css";
```

Do not reference:

``` js
href: "./src/assets/motivation.min.css"
```

from `head.js`.

------------------------------------------------------------------------

# File Responsibilities

## src/main.js

Handles:

-   Vue application startup
-   global imports
-   global CSS imports

------------------------------------------------------------------------

## src/head.js

Handles:

-   page titles
-   meta tags
-   external stylesheets/scripts

Do not use it for local Vite assets.

------------------------------------------------------------------------

## public/

Static files that should be copied unchanged belong here.

Example:

    public/
     ├── robots.txt
     ├── sitemap.xml
     └── manifest.appcache

Vite automatically copies these into `dist/`.

------------------------------------------------------------------------

# Troubleshooting

## Missing styling after deployment

Check:

1.  CSS is imported correctly in `main.js`
2.  Cloudflare deployment completed successfully
3.  Browser cache is cleared

------------------------------------------------------------------------

## MIME type errors

Example:

    Expected a JavaScript-or-Wasm module script
    but the server responded with MIME type text/css

Usually means a CSS file has been referenced incorrectly as JavaScript.

------------------------------------------------------------------------

# Local Commands

Install:

``` bash
npm install
```

Development:

``` bash
npm run dev
```

Production build test:

``` bash
npm run build
```

Preview build:

``` bash
npm run preview
```

------------------------------------------------------------------------

# Previous Deployment Method (Historical)

Before Cloudflare Pages:

    npm run build
    ↓
    manually edit dist
    ↓
    zip dist
    ↓
    upload through Hostinger File Manager

This workflow is retired.

Cloudflare Pages now handles deployment automatically.
