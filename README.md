# Nonta Engineering Services Enterprise — Website

A production-ready Vite + React website for Nonta Engineering Services Enterprise, a Lagos-based solar, inverter, and electrical solutions company.

---

## 🗂 Project Structure

```
nonta-engineering/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── src/
    ├── main.jsx              # Entry point
    ├── App.jsx               # Root component — composes all sections
    ├── index.css             # All global styles + CSS tokens
    ├── data/
    │   └── siteData.js       # ✅ Central data file — edit content here
    ├── hooks/
    │   ├── useNavScroll.js   # Navbar scroll effect
    │   ├── useScrollReveal.js# IntersectionObserver reveal animations
    │   └── useFaq.js         # FAQ accordion state
    └── components/
        ├── WaIcon.jsx        # Reusable WhatsApp SVG icon
        ├── Navbar.jsx        # Fixed top navigation + mobile menu
        ├── Hero.jsx          # Hero section
        ├── TrustBar.jsx      # Yellow trust strip below hero
        ├── Services.jsx      # Services grid
        ├── Process.jsx       # 5-step process
        ├── Projects.jsx      # Project photo grid
        ├── WhyUs.jsx         # Why choose us
        ├── TrustSection.jsx  # Credentials cards
        ├── CtaStrip.jsx      # Mid-page CTA banner
        ├── Testimonials.jsx  # Client testimonials
        ├── Faq.jsx           # FAQ accordion
        ├── EnergyTips.jsx    # Energy knowledge hub
        ├── Coverage.jsx      # Coverage strip
        ├── About.jsx         # About us
        ├── Contact.jsx       # Contact info
        ├── Footer.jsx        # Footer
        └── FloatingWa.jsx    # Floating WhatsApp button
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Add your logo

Place your `logo.png` file in the **`public/`** folder:

```
public/
└── logo.png
```

### 3. Start development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

---

## ✏️ Editing Content

All site content (text, links, images, services, testimonials, FAQs, etc.) is centralised in:

```
src/data/siteData.js
```

Update the `SITE` object for contact info, WhatsApp link, social handles, RC number, etc.
Each section's data (SERVICES, PROJECTS, TESTIMONIALS, FAQS, etc.) is a separate exported array — just edit the entries directly.

---

## 🌐 Deploying to Vercel

1. Push the project to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

The included `vercel.json` handles SPA routing and static asset caching automatically.

---

## 📞 Contact Info (Current)

| Field       | Value                                      |
|-------------|--------------------------------------------|
| Phone       | +234-810-753-6266                          |
| Email       | nontaengineeringservices@gmail.com         |
| Address     | 136, Ishagamu Road, Ikorodu, Lagos, Nigeria|
| RC Number   | RC-3571621                                 |
| Social      | @nontaenergy (all platforms)               |
