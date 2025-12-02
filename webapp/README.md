# Webapp (React + Vite)

This webapp is built with React and Vite. Due to third-party package peer dependency constraints, we pin npm's behavior to use legacy peer dependency resolution in this folder.

Important: An `.npmrc` file exists in this `webapp/` directory with the following content:

```
legacy-peer-deps=true
```

That means any `npm install` (including on Elastic Beanstalk and most CI/CD systems) executed from this directory will automatically behave as if `--legacy-peer-deps` was passed.

## Local development

1) Install dependencies

- Recommended: `npm ci` (respects the `.npmrc` setting automatically)
- Alternative: `npm install` (also respects the `.npmrc` setting automatically)
- If you need to run the command manually with a flag for any reason: `npm install --legacy-peer-deps`

2) Run the app
When running from a package created from dist, then use ```npm start```.

3) Build/preview

```
npm run build
npm run preview
```

## Build number badge (red banner at the top)

This app displays a small red "Build <ID>" banner at the very top of every page. The value comes from `import.meta.env.VITE_BUILD_ID`.

Important:
- The build number is baked into the production bundle at build time. You will only see it when serving the built files from the `dist/` directory (for example, via `npm run preview`).
- Running the dev server (`npm start`) does not read `.env.production*` files and will show `Build dev` unless you explicitly set `VITE_BUILD_ID` for the dev process. If
you deploy the contents of `dist/` to production, the build number will be visible.

### Set the build number for production builds

Option A — one-off via environment variable (macOS/Linux shells like zsh/bash):
```
VITE_BUILD_ID=abc123 npm run build
npm run preview
```

Option B — via an env file for production:
1. Create `webapp/.env.production.local` with:
```
VITE_BUILD_ID=abc123
```
2. Then build and preview:
```
npm run build
npm run preview
```

Notes:
- The build number won’t be visible if you run `npm start` after building; `npm start` launches the dev server, not the built assets. Use `npm run preview` to serve from `dist/` and see the baked value.
- You can set any identifier you like (CI run number, git short hash, timestamp, etc.) as long as it is assigned to `VITE_BUILD_ID` before `npm run build`.

## Notes

- The `.npmrc` file only exists in `webapp/` so it will not affect other parts of the repo.
- CI/CD: Our repository's GitHub Actions workflow currently does not run installs for the webapp, but in environments that do (e.g., Elastic Beanstalk), this `.npmrc` ensures the correct behavior.

---

Original Vite template notes

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
