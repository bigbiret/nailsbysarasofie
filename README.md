# Nails by Sara Sofie

En moderne, responsiv nettside for neglsalong bygget med Astro og Tailwind CSS.

## 🚀 Kom i gang

### Forutsetninger
- Node.js (versjon 18 eller nyere)
- npm

### Installasjon

1. Klon repoet og naviger til mappen:
```bash
cd nailsbysarasofie
```

2. Installer avhengigheter:
```bash
npm install
```

3. Start utviklingsserveren:
```bash
npm run dev
```

Nettsiden vil være tilgjengelig på `http://localhost:4321`

## 📁 Prosjektstruktur

```
/
├── public/                 # Statiske filer (bilder, favicon, etc.)
├── src/
│   ├── components/        # Astro komponenter
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Modal.astro
│   ├── layouts/           # Layout-filer
│   │   └── Base.astro
│   ├── pages/             # Sider (filbasert routing)
│   │   ├── index.astro    # Forside
│   │   ├── booking.astro  # Booking-side
│   │   ├── tjenester.astro
│   │   ├── galleri.astro
│   │   ├── kontakt.astro
│   │   ├── styleguide.astro
│   │   └── personvern.astro
│   ├── scripts/           # JavaScript filer
│   │   └── (ingen filer)  # Event tracking er inline i Base.astro
│   └── styles/            # CSS filer
│       ├── globals.css    # Global styling
│       └── tokens.css     # Design tokens
├── docs/                  # Dokumentasjon
│   ├── PRD.md            # Produktkrav
│   ├── Styleguide.md     # Design system
│   └── oppsett.md        # Teknisk oppsett
└── galleri/              # Bilder for galleri
```

## 🛠️ Kommandoer

| Kommando                | Handling                                      |
| :---------------------- | :-------------------------------------------- |
| `npm install`           | Installer avhengigheter                       |
| `npm run dev`           | Start lokal utviklingsserver på `localhost:4321` |
| `npm run build`         | Bygg produksjonsklar versjon til `./dist/`    |
| `npm run preview`       | Forhåndsvis bygget versjon lokalt             |

## 🎨 Design System

Nettsiden bruker et konsistent design system basert på:

- **Farger**: Pink (#F3C7D7), Ivory (#F8F4F1), Coal (#111111), Nude (#F2C2AE), Gold (#C8A96A), Taupe (#B9B0A8)
- **Typografi**: Playfair Display (headings) + Inter (body text)
- **Komponenter**: Buttons, Cards, Modal med konsistent styling

Se `/styleguide` for komplett oversikt.

## 📱 Features

- ✅ Responsiv design (mobile-first)
- ✅ Booking-modal med Fresha-integrasjon
- ✅ SEO-optimalisert
- ✅ Accessibility (WCAG 2.1 AA)
- ✅ Rask loading (Lighthouse >90)
- ✅ GitHub Pages deployment

## 🚀 Deployment

Nettsiden deployes automatisk til GitHub Pages når du pusher til `main` branch.

### Manuell deployment
```bash
npm run build
```

## 📋 TODO

- [ ] Legg til ekte innhold (priser, bilder, kontaktinfo)
- [ ] Integrer ekte Fresha booking-widget
- [ ] Legg til Google Analytics
- [ ] Optimaliser bilder
- [ ] Test og QA

## 🔧 Konfigurasjon

- **Astro config**: `astro.config.mjs`
- **Tailwind config**: `tailwind.config.cjs`
- **TypeScript config**: `tsconfig.json`

## 📞 Kontakt

For spørsmål om utviklingen, kontakt [utvikler].

---

Built with ❤️ using [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/) 