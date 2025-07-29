# Pretty Neat Maids, LLC

This repository contains the source code for the Pretty Neat Maids website, originally built for a house cleaning service based in Chicago, Illinois.

## About Pretty Neat Maids, LLC

This site was originally built for [Pretty Neat Maids, LLC](https://www.chamberofcommerce.com/united-states/illinois/chicago/house-cleaning-service/2013006046-pretty-neat-maids-llc), a house cleaning service based in Chicago, Illinois.  
**Please note:** The business is now closed, but this repository and site remain available for historical and portfolio reference.

## Deployment

This is a static site. To deploy it, you can use [GitHub Pages](https://pages.github.com/):

### Deploy to GitHub Pages

1. **Build the site** (if using React or similar):
    ```bash
    npm install
    npm run build
    ```
    This will generate a `build/` directory with your static files.

2. **Push the build to GitHub Pages**:
    - You can use the [`gh-pages`](https://www.npmjs.com/package/gh-pages) npm package:
      ```bash
      npm install --save-dev gh-pages
      ```
      Add these scripts to your `package.json`:
      ```json
      "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
      }
      ```
      Then deploy with:
      ```bash
      npm run deploy
      ```

    - Alternatively, you can set the repository’s GitHub Pages setting to serve from the `/docs` folder, and move your `build` output to `/docs`.

### Other Hosting Options

You can also deploy to services like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/) by connecting your repository and following their static site deployment instructions.

---

If you have questions or need further help, feel free to open an issue!
