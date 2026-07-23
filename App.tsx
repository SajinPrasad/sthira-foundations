// Testing hooks
import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MotionConfig } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './src/pages/Home';
import Configurator from './src/pages/Configurator';
import Contact from './src/pages/Contact';
import NotFound from './src/pages/NotFound';
import ScrollToTop from './src/components/ScrollToTop';
import { ConfiguratorProvider } from './src/context/ConfiguratorContext';

const App: React.FC = () => {
  return (
    <Theme appearance="light" accentColor="brown" radius="large" scaling="100%">
      <MotionConfig reducedMotion="user">
      <ConfiguratorProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/configurator" element={<Configurator />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            pauseOnHover
            theme="light"
            toastStyle={{ background: '#FCFAF6', border: '1px solid #E4D9C9', color: '#2A2320' }}
          />
        </Router>
      </ConfiguratorProvider>
      </MotionConfig>
    </Theme>
  );
};

export default App;