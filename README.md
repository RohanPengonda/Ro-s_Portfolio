# Personal Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features include dark mode, lazy loading, form validation, and performance optimizations.

## ✨ Features

- **Modern Design**: Clean, professional design with dark/light mode support
- **Responsive**: Fully responsive across all devices (mobile, tablet, desktop)
- **Performance Optimized**: Lazy loading, code splitting, and performance monitoring
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards, and structured data
- **Form Validation**: Real-time form validation with error handling
- **Error Handling**: Error boundaries for graceful error management
- **Analytics Ready**: Built-in analytics tracking capabilities
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🚀 Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, CSS3
- **Icons**: Lucide React, React Icons
- **Performance**: Custom hooks for lazy loading and performance monitoring
- **Build Tool**: Vite with optimized configuration

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🛠️ Configuration

### Environment Variables

Create a `.env` file in the root directory to configure your personal information:

```env
# Resume Link
VITE_GEMINI_API_KEY=API_KEY # Gemini AI assistant — https://aistudio.google.com/apikey (free tier)

VITE_RESUME_URL=https://your-resume-link.com

# Contact Information
VITE_EMAIL=your.email@example.com
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://www.linkedin.com/in/yourprofile/
```

**Note**: All environment variables must be prefixed with `VITE_` to be accessible in the React application.

### Personal Information

Update your personal information in the data files:

- `src/data/contactData.js` - Contact information and social links
- `src/data/projectsData.js` - Project details and images
- `src/data/experienceData.js` - Work experience
- `src/data/skillCategories.js` - Skills and technologies
- `src/data/navLinksData.js` - Navigation links

### Form Submission

The contact form currently simulates submission. To enable real form submission:

1. Set up a backend API endpoint
2. Update the `handleSubmit` function in `Contact.jsx`
3. Add proper error handling and success responses

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact form and info
│   ├── Experience.jsx  # Work experience
│   ├── Footer.jsx      # Footer with links
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── Projects.jsx    # Projects showcase
│   ├── Skills.jsx      # Skills section
│   ├── LazyImage.jsx   # Lazy loading image component
│   ├── LoadingSpinner.jsx # Loading spinner
│   ├── ErrorBoundary.jsx  # Error boundary
│   └── Analytics.jsx   # Analytics tracking
├── data/               # Data files
│   ├── contactData.js
│   ├── experienceData.js
│   ├── navLinksData.js
│   ├── projectsData.js
│   └── skillCategories.js
├── hooks/              # Custom React hooks
│   ├── useLazyLoad.js
│   ├── usePageLoad.js
│   ├── useFormValidation.js
│   └── usePerformance.js
├── assets/             # Static assets
└── App.jsx            # Main app component
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px



## 📈 Performance

The portfolio is optimized for performance with:

- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Vendor and icon chunks are separated
- **Image Optimization**: WebP format support and responsive images
- **Minification**: Production builds are minified and optimized


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

