# Nails by Sara Sofie

En elegant nettside for neglesalongen "Nails by Sara Sofie" bygget med Astro og Tailwind CSS.

## Funksjoner

- **Responsivt design** - Fungerer perfekt på alle enheter
- **Moderne UI** - Elegant design med rosa og nude farger
- **Booking-integrasjon** - Direkte kobling til Fresha booking-system
- **Galleri** - Visning av arbeid med bilder
- **Styleguide** - Development-only side for design-system testing
- **SEO-optimalisert** - Optimalisert for søkemotorer

## Utvikling

```bash
# Installer avhengigheter
npm install

# Start utviklingsserver
npm run dev

# Bygg for produksjon
npm run build

# Forhåndsvis produksjonsbygget
npm run preview
```

## Struktur

```
src/
├── components/     # Gjenbrukbare komponenter
├── layouts/        # Side-layouts
├── pages/          # Astro-sider
├── scripts/        # JavaScript-funksjonalitet
└── styles/         # CSS og Tailwind-konfigurasjon
```

## Styleguide

For å se design-systemet under utvikling, besøk `/styleguide` i development mode. Denne siden er ikke tilgjengelig i produksjon.

## Deployment

Nettsiden er konfigurert for GitHub Pages deployment.

## Teknisk Stack

- **Astro** - Static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Fresha** - Booking-system integrasjon