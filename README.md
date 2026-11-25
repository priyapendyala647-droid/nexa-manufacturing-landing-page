# Nexa Manufacturing — Responsive React Landing Page

A mobile-first, single-page marketing and enquiry experience built with React 18 and Vite. The layout follows the supplied Nexa brand specification, approved copy, and desktop/mobile design references.

## Included

- Semantic page landmarks: header, navigation, main, sections, form, and footer.
- Functional React components: `Header`, `Hero`, `Capabilities`, `Approach`, `RegistrationForm`, and `Footer`.
- Mobile navigation with an accessible toggle.
- Controlled registration form using React hooks, client-side validation, inline field errors, loading/success/error states, and `POST /api/register`.
- Responsive CSS breakpoints at 1023px and 600px, plus reduced-motion support and visible keyboard focus.
- Supplied logo and manufacturing illustration in `public/assets/`.
- A Node registration endpoint fixture, API tests, and Vercel build configuration.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Run locally

Open a terminal in the project directory and run:

```bash
npm install
```

Start the local registration API in Terminal 1:

```bash
npm run api
```

Start the Vite development server in Terminal 2:

```bash
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

Run the API tests:

```bash
npm run test:api
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project structure

```text
.
├── api/
│   ├── local-server.mjs
│   ├── register-handler.mjs
│   └── register.js
├── public/assets/
│   ├── nexa_logo.svg
│   ├── nexa_logo.png
│   ├── manufacturing_illustration.svg
│   └── manufacturing_illustration.png
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Capabilities.jsx
│   │   ├── Approach.jsx
│   │   ├── RegistrationForm.jsx
│   │   └── Footer.jsx
│   ├── styles/global.css
│   ├── App.jsx
│   └── main.jsx
├── tests/api.test.mjs
├── project-reference/
│   ├── CONTENT/
│   ├── DESIGN_REFERENCES/
│   └── BRAND_ASSETS/
├── index.html
├── package.json
├── vercel.json
└── README.md
```

## Registration endpoint — important limitation

The included API validates the submitted fields and returns an acknowledgement. It **does not persist enquiries, send email, or connect to a CRM**. This behavior is intentional and matches the supplied assignment fixture and approved privacy disclosure. A production lead-capture workflow requires an approved storage/email/CRM service and its credentials, which are not included in the supplied brief.

## Deployment

### Vercel

1. Push the project folder to a GitHub repository.
2. In Vercel, select **Add New → Project** and import that repository.
3. Keep the detected Vite settings, or use:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. The `api/register.js` file is the serverless `/api/register` handler.
5. Test the live page and submit a test enquiry. Confirm that the endpoint returns an acknowledgement; do not represent it as saved lead data.

### GitHub

Create a new repository, then from this project directory run:

```bash
git init
git add .
git commit -m "Build Nexa Manufacturing responsive landing page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the example remote with the actual repository URL.

## QA status

- API unit tests: 4 tests passed in the supplied Node test runner.
- Production build: not verified in this environment because dependency installation could not complete.
- Browser/device checks and Lighthouse: must be run against the locally built or deployed site; no score or cross-browser result is claimed here.
- Before final submission, verify 320px, 390px, 768px, 1200px, and 1440px widths, keyboard navigation, form validation, and the deployed `/api/register` route.
