# Personal Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features include dark mode, lazy loading, form validation, an AI chat widget, and performance optimizations.

## Features

- **Modern Design**: Clean, professional design with dark/light mode support
- **Responsive**: Fully responsive across all devices (mobile, tablet, desktop)
- **Performance Optimized**: Lazy loading, code splitting, and standalone build output
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards, and structured data
- **Form Validation**: Real-time form validation with error handling via EmailJS
- **Error Handling**: Error boundaries for graceful error management
- **AI Chat Widget**: Gemini-powered chat assistant
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## Tech Stack

- **Framework**: Next.js 14 (App Router, standalone output)
- **Frontend**: React 18
- **Styling**: Tailwind CSS, CSS3
- **Icons**: Lucide React, React Icons
- **Email**: EmailJS
- **AI**: Google Gemini API
- **Animation**: Framer Motion

## Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd Ro-s_Portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy `.env.example` to `.env` and fill in your values (see [Environment Variables](#environment-variables) below).

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Build for production**

   ```bash
   npm run build
   ```

## Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# Gemini AI assistant — https://aistudio.google.com/apikey (free tier)
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key

# EmailJS — https://www.emailjs.com (free tier)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Contact / social
NEXT_PUBLIC_EMAIL=your.email@example.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/yourprofile/

# Resume — absolute URL or path to a static asset (e.g. /resume.pdf)
NEXT_PUBLIC_RESUME_URL=/resume.pdf
```

All environment variables must be prefixed with `NEXT_PUBLIC_` to be accessible in client-side React components.

## Personal Information

Update your personal information in the data files:

- `src/data/contactData.js` — Contact information and social links
- `src/data/projectsData.js` — Project details and images
- `src/data/experienceData.js` — Work experience
- `src/data/skillsData.js` — Skills and technologies
- `src/data/navLinksData.js` — Navigation links
- `src/data/portfolioContext.js` — Portfolio context data

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.jsx          # Root layout
│   ├── page.jsx            # Home page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── About.jsx           # About section
│   ├── Contact.jsx         # Contact form and info
│   ├── Experience.jsx      # Work experience
│   ├── Footer.jsx          # Footer with links
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx            # Hero section
│   ├── Projects.jsx        # Projects showcase
│   ├── Skills.jsx          # Skills section
│   ├── ChatWidget.jsx      # AI chat widget
│   ├── ErrorBoundary.jsx   # Error boundary
│   └── ui/                 # Reusable UI components
├── data/                   # Data files
├── hooks/                  # Custom React hooks
│   ├── useFormValidation.js
│   └── useTypewriter.js
├── lib/                    # Utility functions
└── assets/                 # Static assets
```

## Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Deployment (Vercel)

This project is configured for Vercel deployment with standalone output.

1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — ensure **Framework Preset** is set to **Next.js** in Project Settings
4. Add your environment variables in the Vercel dashboard
5. Deploy

## License

This project is open source and available under the [MIT License](LICENSE).
