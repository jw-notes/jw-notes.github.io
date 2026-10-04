# jw-notes portfolio

A responsive charcoal-and-teal portfolio for [jw-notes](https://github.com/jw-notes), with project filters, a CasaOS theme download, setup guides and an about section.

Made by jw-notes. Plain HTML, CSS and JavaScript; no build step, API key or backend required. Project content is curated from the public repositories, not fetched live. The theme graphic is a palette preview, not a CasaOS screenshot.

## Publish with GitHub Pages

1. Create a **public** repository on `jw-notes` named **`jw-notes.github.io`**.
2. Extract this ZIP and upload the **contents** of `jw-notes.github.io/` to the repository root. `index.html` must be at the root, not inside another folder. Include the `assets/` folder and `.nojekyll` (hidden on some systems).
3. Commit to `main`.
4. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, then **main** and **/(root)**. Save.
5. After deployment completes, visit **https://jw-notes.github.io**. GitHub will show the published URL in the Pages settings.

Keep your `jw-notes` profile repository separate. This website repository is `jw-notes.github.io`.

## Publish with Vercel instead

Upload the same files to a GitHub repository, then import it as a Vercel project. Choose **Other** for the framework. Leave the build command unset, use the repository root as the root directory, and serve the root directory as the output. This is a static site; it does not need npm dependencies. Vercel assigns a URL once deployment succeeds.

## Preview locally

Double-click `index.html` for a quick preview, or run:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`. Use `python3` if that is the Python command on your system.

## Edit the site

- `index.html`: text, projects and links. Add a project `<article>` inside `.project-grid`; set `data-category` to space-separated filter names such as `homelab tools`.
- `styles.css`: colours, spacing and layout. The shared palette is in `:root`.
- `script.js`: filters and footer year. Change the initial project count in HTML when adding cards.
- `assets/homelab-casaos-dark-v32.zip`: packaged theme; replace this and the download link together when releasing a new version.
- `assets/favicon.svg`: site icon.

Fonts are loaded from Google Fonts, with local sans-serif fallbacks if unavailable. There are no analytics, tracking scripts, contact forms or live API calls.

Public projects represented here: CasaOS HomeServer Theme, HomeServer Connect and the jw-notes profile notebook. Update the cards as more work becomes public.

## References

- [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart)
- [Vercel Git deployments](https://vercel.com/docs/git)
- [Homelab source](https://github.com/jw-notes/Homelab)

The bundled CasaOS theme is credited to jw-notes. This package does not add or select a licence for the new portfolio repository.
