# 🪑 Aakash Furniture — Premium Furniture Showcase Website

A modern, full-stack furniture showroom website for **Aakash Furniture**, Bhopal's trusted destination for premium sofas, beds, dining sets, wardrobes, and bespoke furniture.

🌐 **Live:** [aakash-furniture-2014.akash-furniture.workers.dev](https://aakash-furniture-2014.akash-furniture.workers.dev)

---

## 📸 Features

- **Premium Hero Section** — Full-screen hero with animated headline and real CTA buttons
- **Product Collections** — Interactive category cards (Sofas, Beds, Dining, Wardrobes, Office, Custom)
- **Gallery** — Masonry-style photo gallery showcasing real furniture pieces
- **Testimonials** — Customer reviews with star ratings
- **Accordion Contact Section** — Showroom address, call, WhatsApp, business hours, Google Reviews
- **EmailJS Callback Form** — "Request a Callback" form that sends enquiries directly to business email
- **Embedded Google Maps** — Live map showing exact shop location
- **Sticky Mobile CTA Bar** — One-tap Call, WhatsApp, and Directions buttons
- **WhatsApp Floating Button** — Always-visible WhatsApp chat button
- **SEO Optimised** — Structured data (JSON-LD), meta tags, Open Graph, semantic HTML
- **Fully Responsive** — Mobile-first design for all screen sizes

---

## 🏪 Business Info

| Detail | Value |
|--------|-------|
| **Shop** | Shop 2, Near SBI Bank, Danish Kunj, Kolar Road, Bhopal, MP 462042 |
| **Phone** | [+91 9111092001](tel:+919111092001) |
| **WhatsApp** | [+91 7869461895](https://wa.me/917869461895) |
| **Email** | [lodhiakash286@gmail.com](mailto:lodhiakash286@gmail.com) |
| **Hours** | Open All Week · 9:00 AM – 10:00 PM |
| **Google Maps** | [View Location](https://www.google.com/maps/place/Aakash+Furniture/) |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [TanStack Start](https://tanstack.com/start) (React 19 + SSR) |
| Routing | [TanStack React Router](https://tanstack.com/router) |
| Bundler | [Vite 7](https://vitejs.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Email | [EmailJS](https://www.emailjs.com/) (`@emailjs/browser`) |
| Icons | [Lucide React](https://lucide.dev/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Deployment | [Cloudflare Workers](https://workers.cloudflare.com/) |
| Language | TypeScript |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/)

### Install & Run

```bash
# Clone the repository
git clone https://github.com/Devcoderakash/aakash-furniture-2014.git
cd aakash-furniture-2014

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗 Build & Deploy

### Build for Production

```bash
npm run build
```

Output is generated in `dist/client/` (static assets) and `dist/server/` (SSR worker).

### Deploy to Cloudflare Workers

```bash
npx wrangler deploy
```

Make sure you're logged in: `npx wrangler login`

---

## 📁 Project Structure

```
aakash-furniture-showcase/
├── src/
│   ├── assets/            # Images and static media
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   ├── routes/
│   │   ├── __root.tsx     # Root layout + SEO meta/schema
│   │   └── index.tsx      # Homepage (all sections)
│   ├── styles.css         # Global styles & design tokens
│   └── router.tsx         # TanStack Router config
├── public/                # Public static files
├── wrangler.jsonc         # Cloudflare Workers config
├── vite.config.ts         # Vite + TanStack Start config
├── tailwind.config.ts     # Tailwind CSS config
└── package.json
```

---

## 📧 EmailJS Setup

The "Request a Callback" contact form uses EmailJS to send enquiries directly to the business email.

**Template Variables used:**

| Variable | Description |
|----------|-------------|
| `{{name}}` | Customer name |
| `{{phone}}` | Customer phone number |
| `{{message}}` | Customer message |
| `{{time}}` | Submission date & time |

To configure, update the EmailJS credentials in `src/routes/index.tsx`:

```ts
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY')
```

---

## 🤝 Contributing

This is a private business showcase website. For issues or feature requests, please contact the developer.

---

## 📄 License

© 2024 Aakash Furniture. All rights reserved.

---

> Built with ❤️ for Aakash Furniture, Bhopal
