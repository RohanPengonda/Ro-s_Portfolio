import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Rohan Pengonda — Full-Stack Developer building AI-powered products',
  description:
    'Full-Stack Developer building AI-powered products. I design, build, and ship production-grade web apps — from RAG systems that cite their sources to e-commerce platforms that scale. React, Node, and applied AI.',
  keywords:
    'Full-Stack Developer, AI Engineer, AI Products, React Developer, Node.js Developer, MongoDB, RAG, TypeScript, Web Development, JavaScript',
  author: 'Rohan Pengonda',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  metadataBase: new URL('https://rohanpengonda.vercel.app'),
  openGraph: {
    type: 'website',
    url: 'https://rohanpengonda.vercel.app/',
    title: 'Rohan Pengonda — Full-Stack Developer building AI-powered products',
    description:
      'Full-Stack Developer building AI-powered products. From RAG systems that cite their sources to e-commerce platforms that scale.',
    siteName: 'Rohan Pengonda — Full-Stack Developer',
    images: [{ url: '/Logo.png', width: 1200, height: 630, alt: 'Rohan Pengonda' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohan Pengonda — Full-Stack Developer building AI-powered products',
    description:
      'Full-Stack Developer building AI-powered products. React, Node, and applied AI.',
    images: ['/Logo.png'],
  },
  alternates: { canonical: 'https://rohanpengonda.vercel.app/' },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
  },
  other: {
    'theme-color': '#F5F5F7',
    'msapplication-TileColor': '#F5F5F7',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rohan Pengonda',
  jobTitle: 'Full-Stack Developer',
  description:
    'Full-Stack Developer building AI-powered products. Experienced in React, Node.js, and applied AI systems including large-language-model applications and RAG pipelines.',
  url: 'https://rohanpengonda.vercel.app/',
  image: 'https://rohanpengonda.vercel.app/Logo.png',
  sameAs: [
    'https://github.com/RohanPengonda',
    'https://www.linkedin.com/in/rohanpengonda/',
    'mailto:rpengonda1@gmail.com',
  ],
  knowsAbout: [
    'React.js',
    'TypeScript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Tailwind CSS',
    'AI',
    'Large Language Models',
    'RAG',
    'Retrieval Augmented Generation',
  ],
  worksFor: { '@type': 'Organization', name: 'Renb Digital' },
  address: { '@type': 'PostalAddress', addressCountry: 'India' },
  email: 'rpengonda1@gmail.com',
  telephone: '+91-7720991451',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Rohan Pengonda',
  url: 'https://rohanpengonda.vercel.app/',
  description:
    'Portfolio of Full-Stack Developer Rohan Pengonda, building AI-powered products.',
  author: { '@type': 'Person', name: 'Rohan Pengonda' },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t))document.documentElement.classList.add('dark');}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-mac-bg text-mac-text dark:bg-od-bg dark:text-od-fg">
        {children}
      </body>
    </html>
  );
}
