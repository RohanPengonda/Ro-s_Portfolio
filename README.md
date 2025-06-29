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

### Personal Information
Update your personal information in the data files:

- `src/data/contactData.js` - Contact information and social links
- `src/data/projectsData.js` - Project details and images
- `src/data/experienceData.js` - Work experience
- `src/data/skillCategories.js` - Skills and technologies
- `src/data/navLinksData.js` - Navigation links

### Analytics Setup
To enable analytics tracking:

1. Add your Google Analytics ID to the Analytics component
2. Or integrate with your preferred analytics service
3. Update tracking events as needed

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

## 🎨 Customization

### Colors and Theme
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... customize your color palette
  }
}
```

### Animations
Add custom animations in `tailwind.config.js`:

```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  // ... add your custom animations
}
```

### Fonts
Update fonts in `tailwind.config.js` and import in `index.css`:

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Code Formatting
The project uses Prettier for code formatting:

```bash
npm run format
```

### Linting
ESLint is configured for code quality:

```bash
npm run lint
```

### Performance Monitoring
The app includes performance monitoring for:
- Core Web Vitals (LCP, FID, CLS)
- Page load times
- User interactions

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### GitHub Pages
1. Add `gh-pages` dependency: `npm install --save-dev gh-pages`
2. Add deploy script to `package.json`
3. Run: `npm run deploy`

## 📈 Performance

The portfolio is optimized for performance with:
- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Vendor and icon chunks are separated
- **Image Optimization**: WebP format support and responsive images
- **Minification**: Production builds are minified and optimized

## 🔒 Security

- Form validation prevents malicious input
- External links use `rel="noopener noreferrer"`
- No sensitive data in client-side code

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide React](https://lucide.dev/) - Icons
- [React Icons](https://react-icons.github.io/react-icons/) - Additional icons

---

Built with ❤️ using modern web technologies
