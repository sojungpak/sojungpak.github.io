import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  useLocation,
} from 'react-router-dom';

import Navbar from './navbar';
import Socials from './socials';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = (props) => {
  const MIN_WIDTH = 800;
  const [isMobile, setIsMobile] = useState(window.innerWidth < MIN_WIDTH);

  useEffect(() => {
    const resizeListener = (e) => setIsMobile(e.target.innerWidth < MIN_WIDTH);
    window.addEventListener('resize', resizeListener);
    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar mobile={isMobile} />
      <Socials />
    </Router>

  );
};

export default App;
