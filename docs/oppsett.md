# Astro + Tailwind + Styleguide i Cursor

> **Mål:** Kom i gang raskt i Cursor med en ryddig struktur, /styleguide-side, booking-modal og GitHub Pages deploy.

---

## 1. Start prosjektet i Cursor

1. Åpne Cursor → `Cmd/Ctrl+Shift+P` → **"Create New Project"** (eller bare åpne en tom mappe).
2. Kjør i terminalen:

```bash
npm create astro@latest nails-site -- --template minimal
cd nails-site
npm i -D tailwindcss postcss autoprefixer micromodal
npx tailwindcss init -p
```

3. Installer Google Fonts via `<head>` senere.

---

## 2. Mappestruktur

```
src/
  pages/
    index.astro
    booking.astro
    tjenester.astro
    galleri.astro
    kontakt.astro
    styleguide.astro
  components/
    Button.astro
    Card.astro
    Modal.astro
    Header.astro
    Footer.astro
  layouts/
    Base.astro
  styles/
    tokens.css
    globals.css
    styleguide.css
public/
  images/
.github/workflows/
  deploy.yml
```

---

## 3. Tailwind-konfig

`tailwind.config.cjs`

```js
/**** tailwind.config.cjs ****/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: '#F3C7D7',
        ivory: '#F8F4F1',
        nude: '#F2C2AE',
        gold: '#C8A96A',
        coal: '#111111',
        taupe: '#B9B0A8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        xl2: '1rem',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,.08)'
      }
    },
  },
  plugins: [],
};
```

`src/styles/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Global tweaks */
html { scroll-behavior: smooth; }
body { @apply bg-ivory text-coal font-sans leading-relaxed; }

h1,h2,h3,h4 { @apply font-serif tracking-tight text-coal; }
.btn {
  @apply inline-block px-5 py-3 rounded-xl2 font-sans transition;
}
.btn-primary { @apply bg-pink text-coal hover:brightness-95; }
.btn-outline { @apply border border-coal text-coal hover:bg-coal hover:text-ivory; }
```

---

## 4. Tokens (hvis du vil ha CSS-variabler også)

`src/styles/tokens.css`

```css
:root {
  --c-pink: #F3C7D7;
  --c-ivory: #F8F4F1;
  --c-black: #111111;
  --c-nude: #F2C2AE;
  --c-gold: #C8A96A;
  --c-taupe: #B9B0A8;
  --radius: 1rem;
  --shadow: 0 8px 24px rgba(0,0,0,.08);
}
```

*(Valgfritt om du bruker Tailwind utilties)*

---

## 5. Layout og komponenter

`src/layouts/Base.astro`

```astro
---
const { title = 'Nails by Sara Sofie' } = Astro.props;
---
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content="Neglsalong i Son / Vestby / Follo – bestill time enkelt hos Nails by Sara Sofie." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/src/styles/globals.css" />
  </head>
  <body>
    <slot />
    <!-- Event tracking er inline i Base.astro -->
  </body>
</html>
```

`src/components/Modal.astro`

```astro
---
interface Props { id: string; title: string; }
const { id, title } = Astro.props;
---
<div class="modal micromodal-slide" id={id} aria-hidden="true">
  <div class="modal__overlay" tabindex="-1" data-micromodal-close>
    <div class="modal__container bg-ivory p-6 rounded-xl2 shadow-soft max-w-4xl w-full mx-auto" role="dialog" aria-modal="true" aria-labelledby={`${id}-title`}>
      <header class="flex justify-between items-center mb-4">
        <h2 id={`${id}-title`} class="text-2xl font-serif">{title}</h2>
        <button class="text-2xl" aria-label="Lukk" data-micromodal-close>×</button>
      </header>
      <main class="modal__content">
        <slot />
      </main>
    </div>
  </div>
</div>
```

`src/layouts/Base.astro` (inline event tracking)

```js
import MicroModal from 'micromodal';
MicroModal.init({ openTrigger: 'data-modal-open', closeTrigger: 'data-modal-close' });
```

CTA-knapp som åpner modal:

```html
<button class="btn btn-primary" data-modal-open="booking-modal">Book time</button>
```

I siden der modalen står:

```astro
<Modal id="booking-modal" title="Book time">
  <iframe src="https://www.fresha.com/a/din-salong-id" class="w-full h-[80vh] border-0" loading="lazy"></iframe>
</Modal>
```

---

## 6. Styleguide-side

`src/pages/styleguide.astro`

```astro
---
import Layout from "../layouts/Base.astro";
const colors = [
  { name: 'Pink', hex: '#F3C7D7' },
  { name: 'Ivory', hex: '#F8F4F1' },
  { name: 'Black', hex: '#111111' },
  { name: 'Nude', hex: '#F2C2AE' },
  { name: 'Gold', hex: '#C8A96A' },
  { name: 'Taupe', hex: '#B9B0A8' },
];
---
<Layout title="Styleguide">
  <h1 class="mb-6">Styleguide</h1>
  <section class="mb-12">
    <h2 class="mb-4">Farger</h2>
    <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
      {colors.map(c => (
        <div class="rounded-xl2 shadow-soft p-4 text-sm" style={`background:${c.hex}`}>
          <div class="font-semibold">{c.name}</div>
          <div>{c.hex}</div>
        </div>
      ))}
    </div>
  </section>

  <section class="mb-12">
    <h2 class="mb-4">Typografi</h2>
    <h1>H1 – Playfair Display</h1>
    <h2>H2 – Playfair Display</h2>
    <h3 class="font-sans">H3 – Inter</h3>
    <p>Brødtekst – Inter. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <small>Små tekster</small>
  </section>

  <section>
    <h2 class="mb-4">Komponenter</h2>
    <button class="btn btn-primary mr-4">Book time</button>
    <button class="btn btn-outline">Se priser</button>

    <div class="card bg-ivory shadow-soft rounded-xl2 p-6 mt-6 max-w-sm">
      <h4 class="font-serif text-xl mb-2">Klassisk manikyr</h4>
      <p class="mb-4">45 min – 590 kr</p>
      <button class="btn btn-primary btn-sm">Book</button>
    </div>
  </section>
</Layout>
```

---

## 7. GitHub Pages deploy

`.github/workflows/deploy.yml`

```yaml
name: Deploy Astro to GitHub Pages
on:
  push:
    branches: [ main ]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
```

Aktiver Pages i repo settings → Source: "GitHub Actions".

Astro trenger `output: 'static'` (default i minimal template) og `adapter: static`.

---

## 8. SEO-basics

* Title/description per side (Astro props).
* `sitemap.xml` plugin: `@astrojs/sitemap` i `astro.config.mjs`.
* Legg inn lokale søkeord i headings og brødtekst (Son, Vestby, Follo).

`astro.config.mjs`

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dittdomene.no',
  integrations: [tailwind(), sitemap()],
});
```

---

## 9. Tips for Cursor-flyt

* Bruk **Composer** (⌘K) til å generere komponenter raskt: “Create an Astro component for a modal using Micromodal”.
* Legg alt som tokens/design i egne filer – lett å referere til i prompts.
* Lag `README.md` i rot som beskriver struktur + kommandoer.

`README.md` (kort)

````md
# Nails by Sara Sofie

## Kom i gang
```bash
npm i
npm run dev
````

## Deploy

Push til `main` → GitHub Pages bygger.

```

---
## 10. Neste steg
- Fylle inn reelle tekster og bilder.
- Lage booking-modal og /booking-side.
- Lage galleri-side med grid/lightbox.
- Kjøre Lighthouse-test og justere.

```

