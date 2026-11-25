# Nexa Manufacturing Unit India

## React Single-Page Landing Page --- Project Documentation

### 1. Project overview

This project is a responsive, single-page marketing and enquiry website
for Nexa Manufacturing Unit India. It is built with React 18 and Vite,
using semantic HTML5 elements and modular CSS.

### 2. Project links

-   **Live website:**
    https://nexa-manufacturing-landing-page-xphzo71r2.vercel.app
-   **GitHub repository:**
    https://github.com/priyapendyala647-droid/nexa-manufacturing-landing-page

### 3. Technology stack

-   React 18 and React DOM
-   Vite 5
-   JavaScript ES modules
-   Semantic HTML5
-   CSS3 with Flexbox, Grid and responsive media queries
-   Node.js endpoint fixture for registration acknowledgement
-   Vercel deployment configuration

### 4. Component structure

The application is assembled in `src/App.jsx` from these functional
React components:

  -----------------------------------------------------------------------
  Component                           Responsibility
  ----------------------------------- -----------------------------------
  `Header.jsx`                        Site branding and section
                                      navigation, including the mobile
                                      navigation toggle

  `Hero.jsx`                          Main landing-page introduction and
                                      consultation call to action

  `Capabilities.jsx`                  Manufacturing capabilities content
                                      section

  `Approach.jsx`                      Describes the company's approach

  `RegistrationForm.jsx`              Controlled registration form,
                                      validation and submission feedback

  `Footer.jsx`                        Footer content
  -----------------------------------------------------------------------

`src/main.jsx` mounts the React application. Shared page styling and
responsive rules are in `src/styles/global.css`.

### 5. Registration form behavior

The registration form uses React `useState` to manage field values,
validation errors and submission status. It includes labelled inputs,
required-field checks, inline validation feedback, and loading, success
and error states. On submission, it sends a `POST` request to
`/api/register`.

**Data-handling limitation:** The supplied registration endpoint
validates the enquiry and returns an acknowledgement only. It does not
permanently store submissions, send email, or connect to a CRM. The
success message must not be described as confirmation that an enquiry
has been saved.

### 6. Responsive design and accessibility

The stylesheet uses a mobile-first approach with CSS media queries,
including breakpoints at 1023px and 600px. Layouts use Flexbox and CSS
Grid. The implementation also includes semantic page landmarks, labelled
form controls, visible keyboard focus, an accessible mobile navigation
toggle and reduced-motion support.

### 7. Assets

Brand assets are stored in `public/assets/`: - `nexa_logo.svg` and
`nexa_logo.png` - `manufacturing_illustration.svg` and
`manufacturing_illustration.png`

### 8. Run the project locally

**Prerequisites:** Node.js 20 or newer and npm 10 or newer.

From the project root:

``` bash
npm install
```

Start the local registration API in a first terminal:

``` bash
npm run api
```

Start the Vite development server in a second terminal:

``` bash
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

### 9. Available scripts

  Command              Purpose
  -------------------- -------------------------------------------
  `npm run dev`        Starts the Vite development server
  `npm run build`      Creates the production build in `dist/`
  `npm run preview`    Previews the production build
  `npm run api`        Starts the local registration API fixture
  `npm run test:api`   Runs the registration API tests

### 10. Deployment

The project includes `vercel.json` and an API handler at
`api/register.js`. The Vercel project is configured to serve the
Vite-built frontend and the `/api/register` endpoint. The deployed site
is available at the live URL listed above.

### 11. Testing and performance

The live site was tested with Lighthouse in mobile mode. The screenshot
supplied during project testing showed: - Performance: **93** -
Accessibility: **96** - Best Practices: **96** - SEO: **63**

The client requirement is a Lighthouse Performance score above 85; the
recorded score of 93 exceeds that threshold. The SEO score is separate
from the Performance score and may be improved independently.

### 12. Final verification before handover

-   Confirm the GitHub repository is accessible to the reviewer.
-   Open the live website and check navigation links and page sections.
-   Test the registration form with non-sensitive test data.
-   Confirm the deployed endpoint returns an acknowledgement.
-   Check the page at mobile and desktop widths.
-   Keep the registration data-handling limitation clear in any handover
    notes.

------------------------------------------------------------------------

**Project:** Nexa Manufacturing Unit India --- Responsive React Landing
Page\
**Assignment:** Single-page React web application layout
