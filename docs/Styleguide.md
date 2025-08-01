# STYLEGUIDE.md

> **Prosjekt:** Nails by Sara Sofie
> **Stack:** Astro + Tailwind CSS
> **Formål:** Samle farger, typografi og grunnleggende UI-regler i ett markdown-dokument som kan ligge i repoet.

---

## 1. Farger (Design Tokens)

| Token       | Hex       | Bruk                                                 |
| ----------- | --------- | ---------------------------------------------------- |
| `--c-pink`  | `#F3C7D7` | Primær aksent/CTA, highlights, lenker (lys bakgrunn) |
| `--c-ivory` | `#F8F4F1` | Sidebakgrunn, kortbakgrunn, modalbakgrunn            |
| `--c-black` | `#111111` | Primær tekst, ikonfarge, mørk CTA-bakgrunn           |
| `--c-nude`  | `#F2C2AE` | Sekundær aksent, hover-tilstand, gradientmix         |
| `--c-gold`  | `#C8A96A` | Diskrete detaljer (divider, små ikoner, border)      |
| `--c-taupe` | `#B9B0A8` | Sekundær tekst, linjer, placeholders                 |

**Kontrastregler:**

* Bruk `#111111` på alle lyse bakgrunner for WCAG AA.
* Unngå lys grå tekst på rosa/nude uten å verifisere kontrast.

---

## 2. Typografi

**Headings (Display):** `Playfair Display`, serif
**Brødtekst & UI:** `Inter`, sans-serif

```html
<!-- Head import (Base.astro) -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet" />
```

**Fontstørrelser (forslag):**

* `--fs-h1`: clamp(2.2rem, 4vw, 3rem)
* `--fs-h2`: clamp(1.6rem, 3vw, 2.2rem)
* `--fs-h3`: 1.25rem
* `--fs-base`: 1rem (16px)
* Linjehøyde base: 1.6

**Bruk:**

* H1/H2 i serif, H3 kan være sans for variasjon.
* Unngå for mange fontvekter (400/500/600 holder).

---

## 3. CSS-variabler (tokens.css)

```css
:root {
  /* Colors */
  --c-pink: #F3C7D7;
  --c-ivory: #F8F4F1;
  --c-black: #111111;
  --c-nude: #F2C2AE;
  --c-gold: #C8A96A;
  --c-taupe: #B9B0A8;

  /* Typography */
  --ff-serif: 'Playfair Display', serif;
  --ff-sans: 'Inter', system-ui, sans-serif;
  --fs-base: 16px;
  --fs-h1: clamp(2.2rem, 4vw, 3rem);
  --fs-h2: clamp(1.6rem, 3vw, 2.2rem);
  --fs-h3: 1.25rem;
  --lh-base: 1.6;

  /* UI */
  --radius: 1rem; /* 16px */
  --shadow: 0 8px 24px rgba(0,0,0,.08);
}
```

---

## 4. Tailwind-konfig (tailwind.config.cjs)

```js
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
      },
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

html { scroll-behavior: smooth; }
body { @apply bg-ivory text-coal font-sans leading-relaxed; }

h1,h2,h3,h4 { @apply font-serif tracking-tight text-coal; }

/* Buttons */
.btn { @apply inline-block px-5 py-3 rounded-xl2 font-sans transition; }
.btn-primary { @apply bg-pink text-coal hover:brightness-95; }
.btn-outline { @apply border border-coal text-coal hover:bg-coal hover:text-ivory; }
.btn-sm { @apply px-3 py-2 text-sm; }

/* Cards */
.card { @apply bg-ivory shadow-soft rounded-xl2 p-6; }
```

---

## 5. Komponent-regler

### Knapper

* **Primær CTA (Book time):** rosa bakgrunn (`bg-pink`) + svart tekst.
* **Sekundær CTA:** outline svart (`border-coal`).

### Modal

* Bakgrunn: `bg-ivory`, skygge `shadow-soft`, radius `xl2`.
* Lukkeknapp tydelig (×), tabbable.

### Kort (Tjenester)

* Bruk card-komponent med tittel (serif), pris og knapp.
* Maks bredde \~320px for å holde grid pent.

### Galleri

* Grid med 2–3 kolonner på mobil/desktop.
* Lightbox (senere) – bruk aria-labels for tilgjengelighet.

---

## 6. Styleguide-side (/styleguide) - DEVELOPMENT ONLY

* Viser fargeprøver, typografi-eksempler og basis-komponenter.
* **Tilgjengelig kun i development mode** - redirecter til forsiden i produksjon.
* Bruk for å teste design-systemet under utvikling.

Eksempel-seksjoner:

1. **Farger** – grid med navn + hex.
2. **Typografi** – H1/H2/H3/P/Small.
3. **Komponenter** – knapper, kort, modal-skjermdump/lenke.

---

## 7. SEO-stikkord

* "neglsalong Son", "neglsalong Vestby", "neglsalong Follo".
* Bruk i `<title>`, `<meta name="description">`, H1/H2 på relevante sider.

---

## 8. Vedlikehold

* Oppdater dokumentet hvis nye farger/komponenter introduseres.
* Kjør Lighthouse etter større endringer for å sikre ytelse/tilgjengelighet.

---

**Neste:** Implementer tokens og styleguide, deretter fyll inn reelt innhold. Trenger du React- eller schema-snippets – si fra! ✨
