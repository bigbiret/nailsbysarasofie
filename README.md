# Nails by Sara Sofie

En moderne nettside for negletekniker Sara Sofie i Son. Bygget med Astro og Tailwind CSS.

## 🚀 Utvikling

```bash
# Installer dependencies
npm install

# Start utviklingsserver
npm run dev

# Bygg for produksjon
npm run build

# Forhåndsvis bygget nettside
npm run preview
```

## 🧪 Testing

```bash
# Kjør accessibility tests lokalt
npm run test:accessibility

# Kjør Lighthouse CI lokalt
npm run test:lighthouse
```

## 📊 CI/CD Pipeline

Prosjektet har en automatisk CI/CD pipeline som inkluderer:

- **Build**: Bygger Astro nettsiden
- **Accessibility Audit**: Tester alle sider med axe-core (WCAG 2.1 AA)
- **Lighthouse CI**: Tester performance, accessibility, best practices og SEO
- **Deploy**: Deployer til GitHub Pages kun hvis alle tester passerer

### Lighthouse Scores (Minimum)
- Performance: ≥90
- Accessibility: ≥95
- Best Practices: ≥90
- SEO: ≥90

## Lighthouse Testing

This project includes Lighthouse CI for automated performance, accessibility, best practices, and SEO testing.

### Running Lighthouse Tests Locally

1. First, build the project:
   ```bash
   npm run build
   ```

2. Run the Lighthouse tests:
   ```bash
   npm run lighthouse
   ```

This will:
- Start the preview server automatically
- Test all pages (home, tjenester, galleri, booking, kontakt, personvern)
- Run 3 tests per page for accuracy
- Check for minimum scores of 0.9 in all categories
- Generate a report with results

### Tested Pages
- Homepage (`/`)
- Services (`/tjenester`)
- Gallery (`/galleri`)
- Booking (`/booking`)
- Contact (`/kontakt`)
- Privacy Policy (`/personvern`)

### Configuration
The Lighthouse configuration is in `lighthouserc.js` and can be customized as needed.

## 🏗️ Teknologier

- **Astro** - Moderne web framework
- **Tailwind CSS** - Utility-first CSS framework
- **Playwright** - Browser automation for testing
- **axe-core** - Accessibility testing
- **Lighthouse CI** - Performance og kvalitet testing

## 📁 Prosjektstruktur

```
src/
├── components/     # Gjenbrukbare komponenter
├── layouts/        # Side layouts
├── pages/          # Astro sider
├── scripts/        # JavaScript utilities
└── styles/         # CSS og styling
```

## 🔧 Konfigurasjon

- `astro.config.mjs` - Astro konfigurasjon
- `.lighthouserc.js` - Lighthouse CI konfigurasjon
- `tests/accessibility.js` - Accessibility test script
- `.github/workflows/ci.yml` - GitHub Actions CI/CD pipeline