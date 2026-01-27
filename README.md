# VIRTEC Instruments - Company Website

A modern, responsive Next.js website for VIRTEC INSTRUMENTS INC, showcasing flow meters, ultrasonic meters, and related industrial measurement instruments.

## 🚀 Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Carousel**: Embla Carousel React
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js 20+ 
- npm or yarn

## 🛠️ Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

```bash
# Create production build
npm run build
```

### Start Production Server

```bash
# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 📁 Project Structure

```
virtec/
├── public/
│   ├── catalogs/          # Product catalog PDFs
│   ├── manuals/           # User manuals and documentation
│   └── virtec-logo.png    # Company logo
├── src/
│   ├── app/
│   │   ├── page.tsx       # Home page
│   │   ├── services/
│   │   │   └── page.tsx   # Services page
│   │   ├── layout.tsx     # Root layout
│   │   └── globals.css    # Global styles
│   ├── components/
│   │   ├── ui/            # Reusable UI components (shadcn/ui)
│   │   ├── service-components/  # Service-specific components
│   │   ├── Navbar.tsx     # Navigation component
│   │   ├── Hero.tsx       # Hero section
│   │   ├── AboutSection.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── VisionSection.tsx
│   │   ├── SolutionsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── utils.ts       # Utility functions
├── components.json        # shadcn/ui configuration
├── next.config.ts        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with smooth animations
- **Product Showcase**: Display of flow meters and measurement instruments
- **Services Page**: Detailed information about company services
- **Documentation Access**: PDF catalogs and manuals available for download
- **SEO Optimized**: Next.js App Router with optimized performance

## 🔧 Configuration

### Image Domains

The project is configured to allow images from:
- `virtec.us/images/**`
- `uploads-ssl.webflow.com/**`

To add more domains, update `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "your-domain.com",
      pathname: "/path/**",
    },
  ],
}
```

## 📦 Key Dependencies

- `next`: React framework for production
- `react` & `react-dom`: React library
- `tailwindcss`: Utility-first CSS framework
- `framer-motion`: Animation library
- `embla-carousel-react`: Carousel component
- `lucide-react`: Icon library
- `@radix-ui/react-slot`: UI primitives

## 🚢 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

For more deployment options, see the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## 📝 License

This project is private and proprietary to VIRTEC INSTRUMENTS INC.

## 🤝 Contributing

This is a private project. For contributions or issues, please contact the project maintainers.
