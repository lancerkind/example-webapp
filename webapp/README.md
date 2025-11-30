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

```
npm start
```

3) Build/preview

```
npm run build
npm run preview
```

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
