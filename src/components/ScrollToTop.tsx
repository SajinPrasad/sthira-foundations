import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets scroll position to the top whenever the route (pathname) changes,
 * so navigating between pages always opens at the top — never mid-page.
 * Skips when a hash is present so in-page anchor links (e.g. /#projects)
 * can still scroll to their target.
 */
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    // behavior: 'auto' overrides the global `scroll-behavior: smooth`
    // so the jump to top is instant and seamless on navigation.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
