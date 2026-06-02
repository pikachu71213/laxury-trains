# Luxury Rail Journeys India

Premium luxury train booking landing page for international travelers. Built with React, Vite, Tailwind CSS, Framer Motion, and React Hook Form.

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Framer Motion
- React Hook Form + Zod
- React Icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Page sections
│   ├── seo/          # Schema markup
│   └── ui/           # Reusable UI components
├── data/             # Content & constants
├── hooks/            # Custom hooks
└── App.tsx
```

## Form Integration

The enquiry form logs submissions to the console and is ready for backend integration. Connect your API in `src/components/sections/EnquiryForm.tsx` inside the `onSubmit` handler.

## SEO

- Meta tags and Open Graph in `index.html`
- JSON-LD schema in `SchemaMarkup.tsx`
- Semantic HTML throughout
