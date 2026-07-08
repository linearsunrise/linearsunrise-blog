This project is built with [Vite](https://vitejs.dev/) and React, and is statically pre-rendered (SSG) for deployment to GitHub Pages.

Requires Node.js 18+.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with Vite's dev server.<br />
Open the printed local URL to view it in the browser.

### `npm run build`

Builds the app for production into the `dist` folder, then pre-renders `index.html`
into static markup so the deployed page works without client-side JavaScript.

### `npm run preview`

Serves the production build from `dist` locally for a final check before deploying.

### `npm run format`

Formats the codebase with Prettier. Use `npm run format:check` to check formatting without writing changes.

## Deployment

Pushing to `master` triggers the `.github/workflows/deploy.yml` GitHub Actions workflow, which builds
the static site and publishes it to GitHub Pages.
