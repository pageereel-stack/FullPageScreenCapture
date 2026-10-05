# PageReel website

A static site for GitHub Pages: no build step, no dependencies.

## Before publishing

Open `assets/site.js` and fill in the two settings at the top:

- `storeUrl`: the extension's Chrome Web Store link. Until it is set, the "Add to Chrome" buttons read "Coming soon to the Chrome Web Store".
- `email`: a support address. Until it is set, the contact lines point to the store listing instead.

## Publish on GitHub Pages

1. Create a public repository and upload everything in this folder (keep the folder structure; `index.html` must be at the top level).
2. In the repository, open Settings → Pages.
3. Under "Build and deployment", choose "Deploy from a branch", pick `main` and `/ (root)`, and save.
4. After a minute the site is live at `https://<username>.github.io/<repository>/`.

## Pages

- `index.html`: home
- `support.html`: how-to, shortcuts and troubleshooting
- `privacy.html`: privacy policy (use this URL in the Chrome Web Store dashboard)
- `terms.html`: terms of use
- `404.html`: shown for unknown addresses

Fonts are Bricolage Grotesque and Inter, self-hosted under the SIL Open Font License (see `assets/fonts/`).
