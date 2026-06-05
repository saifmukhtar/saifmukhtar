# saifmukhtar.dev

This repository contains the source code for my personal portfolio, built with a modern, lightweight, privacy-first technical architecture. It serves as a central hub for my research in emergent physics, network topologies, and sovereign software engineering.

## Architecture

*   **Framework**: React (v19) + Vite (v8)
*   **Routing**: React Router (v7)
*   **Animations**: Framer Motion (v12)
*   **Styling**: Pure CSS Modules + Global CSS Variables (No Tailwind).
*   **Type Safety**: Strict TypeScript.

## Theming System (Dynamic CSS Variables)

The entire design system is built using CSS variables, allowing for instantaneous, site-wide theme changes without touching a single component. 

To change the theme:
1. Open `src/styles/tokens.css`
2. Scroll to the `THEME` block you wish to activate.
3. Uncomment the block to apply the colors (e.g., *Absolute Clarity*, *Enclave Cream*, *Vibrant Azure*).
4. The site will immediately reflect the new background, text contrast, glassmorphism borders, and primary accent colors.

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Deployment Options

This is a fully static Single Page Application (SPA). Because it uses `react-router-dom` for client-side routing, you must configure your hosting provider to route all traffic to `index.html`.

### 1. Vercel (Recommended)
Vercel is the easiest option for Vite/React apps.
*   **Steps**:
    1. Push this code to a GitHub repository.
    2. Go to [Vercel](https://vercel.com/) and click "Add New Project".
    3. Import your GitHub repository.
    4. Vercel will automatically detect Vite and set the Build Command to `npm run build` and Output Directory to `dist`.
    5. *Routing Fix*: Create a `vercel.json` file in the root of your project with the following:
       ```json
       {
         "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
       }
       ```
    6. Click Deploy.

### 2. Cloudflare Pages (Excellent for Privacy/Speed)
Cloudflare Pages offers a blazing fast global CDN for free.
*   **Steps**:
    1. Log in to the Cloudflare dashboard > Pages > Connect to Git.
    2. Select your repository.
    3. Framework preset: **None** (or Vite if available).
    4. Build command: `npm run build`
    5. Build output directory: `dist`
    6. *Routing Fix*: Cloudflare Pages handles SPA routing automatically if you use the framework preset. If you experience 404s on refresh, create a `_redirects` file in your `public` folder with the content: `/* /index.html 200`

### 3. Netlify
*   **Steps**:
    1. Go to [Netlify](https://www.netlify.com/) and "Add new site" -> "Import an existing project".
    2. Select your GitHub repository.
    3. Build command: `npm run build`
    4. Publish directory: `dist`
    5. *Routing Fix*: Create a file named `_redirects` in your `public` directory (so it ends up in `dist`) with the exact content:
       ```
       /* /index.html 200
       ```

### 4. GitHub Pages
GitHub Pages requires slightly different routing configurations.
*   **Steps**:
    1. In `vite.config.ts`, add the `base` property if your repo is a project site (e.g., `base: '/your-repo-name/'`). If it is a user site (`saifmukhtar.github.io`), leave the base as `/`.
    2. *Routing Fix*: GitHub Pages doesn't natively support SPA routing. You can use a hack by copying `index.html` to `404.html` during the build process.
    3. Add a GitHub Actions workflow `.github/workflows/deploy.yml` using the official `actions/deploy-pages` setup for static sites.

## License

This project is licensed under the MIT License - see the `src/pages/License.tsx` file for details. Open source libraries used herein belong to their respective copyright holders.
