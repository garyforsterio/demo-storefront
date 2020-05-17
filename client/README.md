## Storefront Demo - Client Web App

This package contains a web application for viewing a dummy storefront.

### Architecture

Please see the repository main read me file for overview.

---

### Development

All source code is written in Typescript. Test-driven development (TDD) is used, first specifying unit tests for a component before building it.

To install third-party dependencies run:

```bash
npm install
```

To start up the development server run:

```bash
npm run dev
```

---

### Testing

Unit tests are defined across the application using `Jest` and `Testing Library`.

To run tests use:

```bash
npm test
```

---

### Deployment

Static HTML5 files are generated which are hosted using an NGINX docker instance

See deployment information in root of repository for further information

To build the project run:

```bash
npm run build
```

---

### Frameworks

The following frameworks are used:

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Parcel.js](https://parceljs.org/) - Bundler
- [Styled components](https://styled-components.com/)
- [i18next](https://www.i18next.com/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
