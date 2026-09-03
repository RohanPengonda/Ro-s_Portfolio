import chatBanner from "../assets/chat-banner.webp";
import blinkitBanner from "../assets/blinkit-banner.webp";

export const projects = [
  {
    title: "PDFChat",
    tagline:
      "An AI system that lets you have a conversation with your PDFs — with citations, not hallucinations.",
    filename: "~/projects/pdfchat.ts",
    image: chatBanner,
    problem:
      "Traditional PDF search fails at understanding context or relationships between concepts. Search returns keyword hits, not answers — and definitely not verifiable ones. PDFChat bridges that gap with semantic understanding so you can actually ask questions of a document and trust the response.",
    architecture: [
      "Frontend: React 19 + TypeScript + Vite",
      "Backend: Express + TypeScript",
      "Metadata: SQLite",
      "Generation: Google Gemini API (2.5 Flash/Pro, switchable)",
    ],
    highlights: [
      {
        title: "Custom hybrid search algorithm",
        note: "the differentiator — beats pure vector search",
        detail:
          "Combines cosine similarity (weighted 40%) with keyword matching (weighted 60%) for more relevant retrieval than pure vector search.",
        accent: "purple",
      },
      {
        title: "Context-preserving chunking",
        note: "keeps meaning across page boundaries",
        detail:
          "1000-character chunks with 100-character overlap to preserve context across page/section boundaries; embeddings generated in batches of 5 to respect API rate limits.",
        accent: "cyan",
      },
      {
        title: "Verifiable, streaming answers",
        note: "answers you can defend",
        detail:
          "Streaming responses via Server-Sent Events, with citation parsing and confidence-scored source attribution so answers are verifiable, not just plausible.",
        accent: "green",
      },
      {
        title: "Multi-document mode",
        note: "one PDF or the whole library",
        detail:
          "Query a single PDF or an entire collection of documents.",
        accent: "orange",
      },
    ],
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Express",
      "SQLite",
      "Gemini 2.5",
      "SSE",
      "RAG",
    ],
    liveLink: "",
    githubLink: "https://github.com/RohanPengonda/PDFChat",
    position: "ai",
  },
  {
    title: "Binkey-It",
    tagline:
      "A production-grade grocery-delivery e-commerce platform — the boring infrastructure work that actually matters at scale.",
    filename: "~/projects/blinkit.ts",
    image: blinkitBanner,
    problem:
      "E-commerce clones are easy to demo, hard to make real. The hard part isn't the storefront — it's authentication, reliable payments, database performance under load, and email that actually arrives. Binkey-It is built around the infrastructure decisions that separate a prototype from a production system.",
    architecture: [
      "Frontend: React 19, Redux Toolkit, Vite, Tailwind",
      "Backend: Node/Express, MongoDB + Mongoose",
      "Payments: Stripe + Razorpay",
      "Media: Cloudinary",
      "Email: Resend",
    ],
    highlights: [
      {
        title: "Database query optimization",
        metric: "1200ms → 150ms",
        note: "8× faster queries, no sacrifice",
        detail:
          "Fixed N+1 queries with Mongoose populate(), added indexes on frequently queried fields, added pagination. Query time dropped from 1200ms to 150ms.",
        accent: "purple",
      },
      {
        title: "State management",
        metric: "~35% fewer re-renders",
        note: "memoized, not magic",
        detail:
          "Restructured Redux into feature-based slices with memoized reselect selectors → ~35% reduction in unnecessary re-renders.",
        accent: "cyan",
      },
      {
        title: "Image upload performance",
        metric: "~60% faster",
        note: "client-side signed uploads",
        detail:
          "Moved to client-side signed uploads direct to Cloudinary instead of routing through the backend → ~60% faster uploads, less backend load.",
        accent: "green",
      },
      {
        title: "Email reliability",
        metric: "99.5% delivery",
        note: "no more ghost emails",
        detail:
          "Replaced Nodemailer/Gmail with the Resend API and retry logic → 99.5% delivery rate.",
        accent: "orange",
      },
      {
        title: "Security & payments",
        note: "idempotent, signed, verified",
        detail:
          "JWT access/refresh token rotation, HTTP-only cookies (not localStorage), OTP email verification, idempotent payment processing with webhook signature validation to prevent duplicate orders on retry.",
        accent: "red",
      },
    ],
    metrics: [
      { label: "Lighthouse mobile", value: "88" },
      { label: "FCP", value: "1.2s" },
      { label: "Time to Interactive", value: "2.8s" },
      { label: "API p95", value: "180ms" },
      { label: "DB query p95", value: "120ms" },
      { label: "Uptime", value: "99.95%" },
    ],
    technologies: [
      "React 19",
      "Redux Toolkit",
      "Vite",
      "Tailwind",
      "Node",
      "Express",
      "MongoDB",
      "Mongoose",
      "Stripe",
      "Razorpay",
      "Cloudinary",
      "Resend",
    ],
    liveLink: "https://binkey-it-clone.vercel.app/",
    githubLink: "https://github.com/RohanPengonda/BlinkIt_Clone",
    position: "ecommerce",
  },
];
