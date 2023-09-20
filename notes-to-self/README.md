### Files that don't get added to the `dist` directory with the `npm run build` command:

1. `motivation.min.css`
2. The images referenced in `motivation.min.css`:
   - `chess-3894243-min.jpg`
   - `mental-health-3337026_1920.jpg`
   - `skateboard-5326930_1920.jpg`
   - `sky-1373167_1920.jpg`
   - `virus-4999857.png`
3. `manifest.appcache`
4. `robots.txt`
5. `sitemap.xml`

### Steps to follow the `npm run build`

1. Copy the above mentioned files (9) into `/dist/assets`
2. Open `dist` directory in vs-code
3. Search and replace the following:
   - Search (5): url("../img/
   - Replace: url("/assets/
   ***
   - Search (1): href:"./src/assets/motivation.min.css
   - Replace: href:"/assets/motivation.min.css
4. Add an .htaccess file to the `dist` directory
   - This is important for any/all routes. Otherwise any routes will be redirected to http(s)://localhost:PORT_NUMBER/ROUTE_NAME. We obviously don't want this in production
   - The file should contain the following:

```
<ifModule mod_rewrite.c>
    RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</ifModule>
```

### Now we send the `dist` directory and its contents to File Manager on our web host's cPanel so that our site can be LIVE

1. Zip the entire `dist` directory
2. Login to the web host and navigate to the File Manager
3. Open up the `public_html` directory
4. Upload the zipped `dist` directory
5. Extract all the files directly into `public_html`
6. DONE!
7. Test the website's live address
