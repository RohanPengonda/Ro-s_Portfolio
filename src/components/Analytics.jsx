import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Track page view
    const trackPageView = () => {
      // You can integrate with Google Analytics, Plausible, or any analytics service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
      
      // Custom analytics tracking
      console.log('Page viewed:', window.location.pathname);
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > 25 && scrollPercent <= 50) {
        console.log('User scrolled 25% of the page');
      } else if (scrollPercent > 50 && scrollPercent <= 75) {
        console.log('User scrolled 50% of the page');
      } else if (scrollPercent > 75) {
        console.log('User scrolled 75% of the page');
      }
    };

    // Track form interactions
    const trackFormInteraction = (event) => {
      if (event.target.tagName === 'FORM') {
        console.log('Form interaction:', event.target.id || 'contact-form');
      }
    };

    // Track link clicks
    const trackLinkClick = (event) => {
      if (event.target.tagName === 'A') {
        const linkText = event.target.textContent.trim();
        const linkHref = event.target.href;
        console.log('Link clicked:', { text: linkText, href: linkHref });
      }
    };

    // Initialize tracking
    trackPageView();

    // Add event listeners
    window.addEventListener('scroll', trackScrollDepth);
    document.addEventListener('submit', trackFormInteraction);
    document.addEventListener('click', trackLinkClick);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
      document.removeEventListener('submit', trackFormInteraction);
      document.removeEventListener('click', trackLinkClick);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default Analytics; 