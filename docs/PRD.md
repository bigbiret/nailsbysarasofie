# Produktkravdokument (PRD) – Nettside for Neglsalong

> **Versjon:** 1.0
> **Dato:** 23.07.2025
> **Forfatter:**
> **Repo/Editor:** Cursor + GitHub

---

## 1. Bakgrunn & formål

En enkel, rask og mobiltilpasset nettside for en neglsalong med én behandler. Nettsiden skal primært konvertere besøkende til bookinger via en ekstern bookingplattform (Fresha). Den skal informere om tjenester, priser, galleri (manuelt vedlikeholdt) og kontaktinformasjon.

### Mål

* Øke antall bookinger ved å gjøre booking lett tilgjengelig (1–2 klikk fra forside; både modal og egen bookingside/underside brukes som CTAs).
* Redusere no-shows ved å bruke SMS-påminnelser (håndteres av Fresha).
* Etablere et profesjonelt, tillitsbyggende digitalt uttrykk.

### Ikke-mål

* Nettbetaling/kassesystem.
* Inspirasjonsbilde-opplasting i første versjon.
* Automatisering via Make/Zapier i første versjon.
* Flerspråklig løsning (kun norsk ved første versjon).

---

## 2. Målgruppe & personas

**Primærpersona:**

* *Navn:* «Maria, 27»
* *Behov:* Booke time raskt fra mobil, finne pris, se bilder for inspirasjon.
* *Atferd:* Kommer via Instagram/Google, forventer enkel navigasjon og rask booking.

**Sekundærpersona:**

* *Navn:* «Lise, 35»
* *Behov:* Forstå hvilke behandlinger som finnes, varighet og pris, sjekke tilgjengelige tider, ønsker å laste opp eget referansebilde.
* *Atferd:* Googler «neglsalong + bynavn», ønsker trygghet og tydelig informasjon.

---

## 3. Brukerhistorier (User Stories)

* Som kunde vil jeg **se tjenester og priser** slik at jeg kan velge riktig behandling.
* Som kunde vil jeg **booke time raskt** (enten via modal eller egen side).
* Som kunde vil jeg **finne kontaktinformasjon og åpningstider** enkelt.
* Som kunde vil jeg **se et galleri** med tidligere arbeid for inspirasjon.
* Som behandler vil jeg **administrere bookinger og SMS-varsler** fra ett panel (Fresha).

---

## 4. Løsningsoversikt

* **Frontend:** Statisk side (HTML/CSS/JS eller Astro) hostet på GitHub Pages.
* **Booking:** Fresha embed – både som egen underside (/booking) og som modal som åpnes fra CTA-knapper.
* **Galleri:** Manuelt vedlikeholdt bildegalleri (lokale filer i repo eller koblet til Instagram embed uten automatisering).
* **Ingen inspo-skjema eller automatiseringsverktøy (Make/Zapier) i V1.**

---

## 5. Informasjonsarkitektur & sider

```
Forside (/)
├── Tjenester & Priser (/tjenester)
├── Booking (/booking) + modal trigger fra flere CTAer
├── Galleri (/galleri) – manuelt lastede bilder
├── Om / Kontakt (/kontakt)
└── Personvern & Vilkår (/personvern)
```

---

## 6. Funksjonelle krav

### 6.1 Booking

* Integrere Fresha via iframe eller script.
* «Book time»-CTA synlig i header/hero + sticky knapp på mobil.
* Modal-visning for rask booking uten sideskift **og** dedikert /booking-side for SEO og deling.

### 6.2 (Utgår) Inspo-bilde-opplasting

* Ikke inkludert i denne versjonen.

### 6.3 Innhold

* Tjenesteoversikt med navn, varighet og pris (manuelt synkronisert fra Fresha).
* Om-seksjon med kort bio, salongens adresse, parkering, åpningstider.
* Kontakt (telefon, e-post, sosiale medier, Google Maps-embed).
* Galleri (manuelt lastede bilder eller enkel Instagram-embed).

### 6.4 SEO/Deling

* Meta-tagger (title/description) for hver side.
* Open Graph / Twitter Cards.
* Fokusnøkkelord: «neglsalong Son», «neglsalong Vestby», «neglsalong Follo», «gele negler Son», etc.
* sitemap.xml og robots.txt.

### 6.5 Analyse

* Google Analytics 4 eller Umami.
* Event tracking: klikk på «Book time»-knapper.

### 6.6 Tilgjengelighet

* WCAG 2.1 AA: fargekontrast, ARIA, tastaturnavigasjon.

### 6.7 Ytelse

* Lastetid < 2 sek på 4G.
* Lighthouse-performance > 90 på mobil.

---

## 7. Ikke-funksjonelle krav

* **Hosting:** GitHub Pages, HTTPS aktivert, custom domene via CNAME.
* **Bygg/Deploy:** GitHub Actions (CI) med automatisk build av Astro/React/Vanilla.
* **Branch-strategi:** `main` = prod, `dev` = staging (valgfritt).
* **Sikkerhet:** CSP-header for å tillate Fresha/Tally domener. Ingen sensitive data lagres lokalt.
* **Personvern/GDPR:** Klart definert databehandler (Fresha, Tally). Personvernerklæring beskriver hva som samles inn og hvorfor.

---

## 8. Avhengigheter

* **Fresha-konto** (booking, SMS-påminnelse).
* **Domene** (Domeneshop/Cloudflare).
* **GitHub-repo** (privat/offentlig etter behov).
* (Evt.) Instagram-konto for galleri.

---

## 9. Suksessmåling (KPIs)

* **Konverteringsrate:** Besøk → booking (mål: >15%).
* **Bounce rate:** < 40% på forside.
* **Tid til booking:** < 90 sek fra landing til bekreftet booking-klikk.
* **Organisk trafikk på lokale søk (Son/Vestby/Follo):** Økning måned over måned.
* **No-show rate:** < 5% (måles i Fresha).

---

## 10. Tidslinje (tentativ)

* **Uke 1:** Wireframes, copy, farger/brand, SEO-keyword mapping.
* **Uke 2:** Implementere statisk side + booking-embed (modal + /booking-side).
* **Uke 3:** SEO-tagging, ytelse- og tilgjengelighetstesting, manuelt galleri.
* **Uke 4:** Domenepeking, QA, go-live.

---

## 11. Åpne spørsmål

* Trenger vi senere et inspo-skjema? Hvis ja, hvor i flowen?
* Skal galleri på sikt hentes automatisk fra Instagram?
* Skal vi legge til engelsk versjon senere?

---

## 12. Vedlegg / Referanser

* Fresha embed-dokumentasjon (lenkes senere).
* GitHub Actions workflow-fil.
* Designskisser (Figma/Excalidraw lenker).

---

**Neste steg:**

* Sign-off på oppdatert PRD.
* Opprette repo og initial struktur.
* Implementere booking-modal + /booking-side, deretter SEO-optimalisering og launch.
