### Files that don't get added to the `dist` directory with the `npm run build` command:

1. `motivation.min.css`
2. `Buy-Me-a-Coffee.svg`
3. The images referenced in `motivation.min.css`:
   - `chess-3894243-min.jpg`
   - `mental-health-3337026_1920.jpg`
   - `skateboard-5326930_1920.jpg`
   - `sky-1373167_1920.jpg`
   - `virus-4999857.png`
4. `manifest.appcache`
5. `robots.txt`
6. `sitemap.xml`

### Steps to follow the `npm run build`

1. Copy the above mentioned files in points 1-3 (there are 7 files) into `/dist/assets`
2. `manifest.appcache`, `robots.txt`, `sitemap.xml` don't need to be copied over unless they are removed/replaced in your file manager c-panel `public_html`. If they are replaced, these files can be added to the `public_html` directory afterwards.
3. Open `dist` directory in vs-code
4. Search and replace the following:
   - Search (5): url(./img/
   - Replace: url(/assets/
   ***
   - Search (1): href:"./src/assets/motivation.min.css
   - Replace: href:"/assets/motivation.min.css
5. You won't need to add this file if you don't remove it from the `public_html` directory. Otherwise, if you have accidentally removed it, you can create a .htaccess file from the c-panel file manager. 
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
      - Currently Hostinger.
      - Once logged in, navigate to Pro Panel
      - Then you should see a card widget labeled think-write-grow.com
      - On the far right, click on the 3 dots button
      - Click on File Manager
3. Open up the `public_html` directory
4. Upload the zipped `dist` directory
5. Extract all the files directly into `public_html`
6. DONE!
7. Test the website's live address
