# Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features include dark mode, lazy loading, form validation, an AI chat widget, and performance optimizations.

## Features

- **Modern Design**: Clean, professional design with dark/light mode support
- **Responsive**: Fully responsive across all devices (mobile, tablet, desktop)
- **Performance Optimized**: Lazy loading, code splitting, and standalone build output
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards, and structured data
- **Contact Form**: Client-side validation with a server-side API route sending email via Nodemailer (Gmail SMTP)
- **Error Handling**: Error boundaries for graceful error management
- **AI Chat Widget**: Gemini-powered chat assistant
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## Tech Stack

- **Framework**: Next.js 14 (App Router, standalone output)
- **Frontend**: React 18
- **Styling**: Tailwind CSS, CSS3
- **Icons**: Lucide React, React Icons
- **Email**: Nodemailer (Gmail SMTP through server API route)
- **AI**: Google Gemini via the `@google/genai` SDK
- **Animation**: Framer Motion, OGL (WebGL shaders)

## Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd Portfolio
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
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key

# Optional — override the default Gemini model (defaults to gemini-3.6-flash)
NEXT_PUBLIC_GEMINI_MODEL=gemini-3.6-flash

# Email via Gmail SMTP — generate an App Password at https://myaccount.google.com/apppasswords
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_password
EMAIL_TO=your_gmail@gmail.com

# Contact / social
NEXT_PUBLIC_EMAIL=rpengonda1@gmail.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/RohanPengonda
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/rohanpengonda/

# Resume — absolute URL or path to a static asset (e.g. /resume.pdf)
NEXT_PUBLIC_RESUME_URL=/resume.pdf
```

Client-side variables must be prefixed with `NEXT_PUBLIC_` to be exposed to the browser. Variables without the prefix (e.g. `EMAIL_USER`, `EMAIL_PASS`) are server-only and are consumed by the API routes.

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
│   ├── globals.css         # Global styles
│   └── api/                # Server API routes
│       └── send/route.js   # Contact form email handler
├── components/             # React components
│   ├── App.jsx             # Main app composition
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
│   └── ui/                 # Animation & UI primitives
├── data/                   # Data files
├── hooks/                  # Custom React hooks
│   ├── useTypewriter.js
│   └── useFormValidation.js
├── lib/                    # Library code (gemini.js — AI client)
└── assets/                 # Static assets
```

## Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Deployment (Vercel)


## License

This project is open source and available under the [MIT License](LICENSE).
