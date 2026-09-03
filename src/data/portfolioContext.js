export const portfolioContext = {
  owner: {
    name: 'Rohan Pengonda',
    role: 'Full-Stack Developer',
    focus: 'AI-powered products',
    headline: 'Full-Stack Developer building AI-powered products',
    email: 'rpengonda1@gmail.com',
    phone: '+91 7720991451',
    location: 'Available Worldwide',
    github: 'https://github.com/RohanPengonda',
    linkedin: 'https://www.linkedin.com/in/rohanpengonda/',
  },
  about: {
    summary:
      'Full-stack developer who builds AI-powered products — software that ships to real users and holds up under load. Work sits at the intersection of applied AI and production engineering: RAG systems that answer questions with citations, and e-commerce platforms that survive a flash sale without falling over.',
    values:
      "Measurable outcomes, not demo-ware. Indexes and caching over slick slides, idempotent payments over happy-path demos, Lighthouse scores that can be pointed at rather than screenshots that can't be defended.",
    principles: [
      'Full-stack, end to end — owns the whole vertical slice from MongoDB schemas to React components.',
      'Applied AI, not hype — RAG pipelines, LLM integration, and systems that cite their sources.',
      'Performance is a feature — indexes, caching, and measured Lighthouse scores.',
      'Boring infrastructure wins — auth, payments, email, idempotency — the stuff that matters at scale.',
    ],
    projectsShipped: '5+',
  },
  experience: [
    {
      company: 'Renb Digital',
      position: 'Full Stack Developer',
      duration: 'Oct 2025 - Present',
      location: 'Remote',
      achievements: [
        'Built and deployed responsive, scalable MERN apps across 5+ client projects, ensuring cross-browser compatibility while reducing page load time by up to 30%.',
        'Built automated unit and end-to-end test suites with Playwright covering core user flows.',
        'Designed and optimized MongoDB schemas with indexing strategies and caching layers to reduce database load and latency.',
      ],
      technologies: [
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'Playwright',
        'Azure',
      ],
    },
    {
      company: 'Hindustan Petroleum Corporation Limited (HPCL)',
      position: 'Graduate Apprentice Trainee Engineer',
      duration: 'Apr 2024 - Mar 2025',
      location: 'Pune',
      achievements: [
        'Built internal web apps and real-time dashboards in React.js, automating reporting and reducing manual workload by 40% across departments.',
        'Performed data analysis and visualization with Python (NumPy, Pandas, Matplotlib) on operational datasets for department leads.',
        'Supported SCADA/PLC automation systems, contributing to reduced downtime.',
      ],
      technologies: [
        'React.js',
        'Python',
        'NumPy',
        'Pandas',
        'Matplotlib',
        'SCADA',
        'PLC',
      ],
    },
  ],
  projects: [
    {
      title: 'PDFChat',
      tagline:
        'An AI system that lets you have a conversation with your PDFs — with citations, not hallucinations.',
      problem:
        'Traditional PDF search fails at understanding context or relationships between concepts. Search returns keyword hits, not answers. PDFChat bridges that gap with semantic understanding so you can actually ask questions of a document and trust the response.',
      highlights: [
        'Custom hybrid search algorithm (cosine similarity weighted 40% + keyword matching weighted 60%) — beats pure vector search.',
        'Context-preserving chunking: 1000-character chunks with 100-character overlap, embeddings in batches of 5 to respect API rate limits.',
        'Verifiable, streaming answers via Server-Sent Events with citation parsing and confidence-scored source attribution.',
        'Multi-document mode: query a single PDF or an entire collection.',
      ],
      technologies: [
        'React 19',
        'TypeScript',
        'Vite',
        'Express',
        'SQLite',
        'Gemini 2.5',
        'SSE',
        'RAG',
      ],
      github: 'https://github.com/RohanPengonda/PDFChat',
    },
    {
      title: 'Binkey-It',
      tagline:
        'A production-grade grocery-delivery e-commerce platform — the infrastructure work that actually matters at scale.',
      problem:
        'E-commerce clones are easy to demo, hard to make real. The hard part is authentication, reliable payments, database performance under load, and email that actually arrives.',
      highlights: [
        'Database query optimization: 1200ms → 150ms (8× faster) via Mongoose populate(), indexes, and pagination.',
        'State management: ~35% fewer re-renders via feature-based Redux slices with memoized reselect selectors.',
        'Image upload performance: ~60% faster via client-side signed uploads direct to Cloudinary.',
        'Email reliability: 99.5% delivery via Resend API with retry logic.',
        'Security & payments: JWT access/refresh token rotation, HTTP-only cookies, OTP email verification, idempotent payment processing with webhook signature validation.',
      ],
      metrics: {
        'Lighthouse mobile': 88,
        FCP: '1.2s',
        'Time to Interactive': '2.8s',
        'API p95': '180ms',
        'DB query p95': '120ms',
        Uptime: '99.95%',
      },
      technologies: [
        'React 19',
        'Redux Toolkit',
        'Vite',
        'Tailwind',
        'Node',
        'Express',
        'MongoDB',
        'Mongoose',
        'Stripe',
        'Razorpay',
        'Cloudinary',
        'Resend',
      ],
      live: 'https://binkey-it-clone.vercel.app/',
      github: 'https://github.com/RohanPengonda/BlinkIt_Clone',
    },
  ],
  skills: {
    'Languages & Databases': [
      'C++',
      'Python',
      'JavaScript',
      'TypeScript',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'SQL Server',
    ],
    'Frameworks & Libraries': [
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'Django',
      'Redux',
      'REST APIs',
    ],
    'AI/LLM & Tools': [
      'OpenAI API',
      'RAG Pipelines',
      'AWS',
      'Git',
      'GitHub',
      'Postman',
      'Playwright',
      'Docker',
    ],
  },
  sections: [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
  ],
};

export const SYSTEM_PROMPT = `You are "rohan assistant", an AI assistant embedded in Rohan Pengonda's personal portfolio website (rohanpengonda.vercel.app).

Your job is to answer visitor questions about Rohan and his work. Use ONLY the context below. If a question falls outside this information, politely say you can only answer questions about Rohan's portfolio, and suggest they contact him via the contact section or email rpengonda1@gmail.com.

=== PORTFOLIO CONTEXT ===
${JSON.stringify(portfolioContext, null, 2)}
=== END CONTEXT ===

Guidelines:
- Be friendly.
- Keep answers concise.
- Never make up information.
- If you don't know something, say so.
- Match the terminal/code aesthetic of the site naturally (you may occasionally use code-ish phrasing, but keep it readable).
- If the user asks about hiring, collaboration, or reaching out, point them to the Contact section and provide the email.
- Keep responses reasonably short (under ~150 words unless the question genuinely needs more).`;
