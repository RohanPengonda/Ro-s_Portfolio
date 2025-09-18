import blinkitBanner from '../assets/blinkit-banner.png';
import netflixBanner from '../assets/netflix-banner.png';
import shopnowBanner from '../assets/shopnow-banner.png';
import chatBanner from '../assets/chat-banner.png';
import stockanalysis from '../assets/stockanalysis.png'
// import chatAppBanner from '../assets/chat-app-banner.jpg';

export const projects = [
  {
    title: "Stock Analysis and Prediction",
    description:
      "Built a comprehensive stock market analysis platform using React, Node.js, and Python with AI-powered price predictions. Features automated technical analysis with moving averages, machine learning forecasting, and dual chart visualization. Integrated file upload processing, real-time chart generation, and responsive UI for seamless stock data analysis.",
    image: stockanalysis,
    technologies: ["React.js", "Node.js", "Express.js", "Python", "Pandas", "Scikit-learn", "Matplotlib", "Tailwind CSS"],
    features: [
      "CSV/Excel File Upload & Processing",
      "AI-Powered 7-Day Price Predictions",
      "Moving Averages (50, 100, 200-day) Calculation",
      "Dual Chart Visualization (Historical + Predictions)",
      "Linear Regression Machine Learning Model",
      "Flexible Date Format & Column Support",
      "Real-time Chart Generation with Matplotlib",
      "Responsive UI with Prediction Cards Display"
    ],
    liveLink: "https://stock-analysis-kohl.vercel.app/",
    githubLink: "https://github.com/RohanPengonda/Stock_Analysis"
  },  
  {
    title: "BlinkIt Clone - (E-commerce)",
    description:
      "Built a BlinkIt-inspired e-commerce platform using the MERN stack with secure authentication, real-time order tracking, and an admin dashboard. Integrated OTP-based email verification, product catalog with search and filters, shopping cart, multi-payment gateway, and a responsive UI. Enhanced performance using caching and ensured mobile compatibility.",
    image: blinkitBanner,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Stripe"],
    features: [
      "JWT-based Authentication with Refresh Tokens",
      "OTP Email Verification & Password Recovery",
      "Product Catalog with Categories & Search",
      "Admin Panel for Inventory & Role Management",
      "Shopping Cart & Secure Checkout",
      "Order Tracking & Order History",
      "Multi-Payment Gateway Integration",
      "Responsive UI Design"
    ],
    liveLink: "https://binkey-it-clone.vercel.app/",
    githubLink: "https://github.com/RohanPengonda/BlinkIt_Clone"
  },
  {
    title: "Netflix Clone",
    description:
      "Built a full-stack streaming platform replica using the MERN stack with secure JWT-based authentication, dynamic movie/TV library from TMDB API, personalized watchlists, and responsive UI. Implemented Redux for state management and integrated CI/CD with Firebase & GitHub Actions for streamlined deployment.",
    image: netflixBanner,
    technologies: ["React", "Redux", "Node.js", "MongoDB", "Express.js", "Firebase", "TMDB API"],
    features: [
      "User Authentication (JWT)",
      "Movie & TV Library Integration (TMDB)",
      "Dynamic Search & Genre Filtering",
      "Personalized Watchlist",
      "Responsive Design",
      "CI/CD with Firebase & GitHub Actions"
    ],
    liveLink: "",
    githubLink: "https://github.com/RohanPengonda/Netflix_Clone"
  },
 
  {
    title: "SHOPNOW",
    description:
      "Developed a full-stack e-commerce application using the MERN stack with secure JWT-based authentication, dynamic product catalog with filters, shopping cart, order management, and responsive design. Integrated RESTful APIs for user, product, and order operations, ensuring a smooth and secure shopping experience. Optimized performance using lazy loading and error handling for robust UX.",
    image: shopnowBanner,
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    features: [
      "User Authentication (JWT, Hashed Passwords)",
      "Shopping Cart with Real-time Updates",
      "Product Filtering",
      "Order Processing System",
      "Responsive Design",
      "RESTful API Integration"
    ],
    liveLink: "",
    githubLink: "https://github.com/RohanPengonda/ShopNow"
  },
  {
    title: "Real-time Chat App",
    description:
      "Developed a real-time chat application using Next.js and MongoDB, enabling users to sign in and exchange messages with others. Implemented a responsive UI with Tailwind CSS and real-time updates via efficient database queries. Focused on user-centric design, authentication, and smooth chat experience.",
    image: chatBanner,
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "JavaScript"],
    features: [
      "User Authentication",
      "One-to-One Messaging",
      "Real-time Message Updates",
      "Responsive UI Design",
      "User List & Conversation View"
    ],
    liveLink: "https://ro-chat-new.vercel.app/login",
    githubLink: "https://github.com/RohanPengonda/Ro_Chat"
  },
]; 