# Tanzeela Portfolio — Static HTML / CSS / JavaScript

This is a standalone conversion of the Version 5 Next.js portfolio. It contains all 18 original project images and the same four category filters. No Node.js, npm, Next.js, or build step is required.

## Preview
Open `index.html` in a browser, or use VS Code Live Server. Files are referenced relatively, so the site works under a GitHub Pages repository URL.

## Publish with GitHub Pages
1. Create a **public** repository on GitHub called `tanzeela-portfolio`.
2. Upload **the contents of this folder**, not the folder or ZIP itself. `index.html` must be at the repository root. Include `style.css`, `script.js`, `projects-data.js`, and the entire `projects/` directory.
3. Commit the files to the `main` branch.
4. Go to **Settings → Pages → Build and deployment**.
5. Choose **Deploy from a branch**, `main`, `/ (root)` and click Save.
6. Wait for deployment, then visit `https://YOUR_USERNAME.github.io/tanzeela-portfolio/`.

## Edit content
- `projects-data.js`: project titles, categories, descriptions, image filenames.
- `projects/`: all 18 posters. Keep filename spelling and case consistent.
- `index.html`: biography, education, experience, hero text, services section headings.
- `style.css`: design, typography, colors and responsive layout.
- `script.js`: filters, modal, navigation, animations, form, and `CONFIG` contact links.

## Contact form
Set `CONFIG.contactEmail` in `script.js` to the actual email address. This form uses `mailto:` to prepare a draft in the visitor's email app; it does **not** deliver a message to a server. For real submissions, integrate a form service.

## Notes
- No invented client testimonials or metrics were added.
- The About graphic is a letter T, not a portrait; replace it when a verified photo is available.
- The education dates reflect the supplied portfolio and should be confirmed before publishing.
- Google Fonts are loaded externally. The rest of the website can be served as plain static files.
