// ── Site settings: fill these in once and every page picks them up. ──────────
const SITE = {
  storeUrl: '',   // Chrome Web Store link, e.g. 'https://chromewebstore.google.com/detail/…'
  email: 'pageereel@gmail.com',   // support address
};
// ─────────────────────────────────────────────────────────────────────────────

for (const a of document.querySelectorAll('[data-store]')) {
  if (SITE.storeUrl) {
    a.href = SITE.storeUrl;
  } else {
    // Not published yet: say so instead of leaving a button that goes nowhere.
    a.removeAttribute('href');
    a.setAttribute('aria-disabled', 'true');
    a.textContent = a.classList.contains('small') ? 'Coming soon' : 'Coming soon to the Chrome Web Store';
  }
}
for (const el of document.querySelectorAll('[data-email]')) {
  if (SITE.email) {
    const a = document.createElement('a');
    a.href = `mailto:${SITE.email}`;
    a.textContent = SITE.email;
    el.replaceChildren(a);
  }
}
