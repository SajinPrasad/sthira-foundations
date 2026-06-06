import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './src/pages/Home';
import Configurator from './src/pages/Configurator';
import Contact from './src/pages/Contact';
import NotFound from './src/pages/NotFound';
import { ConfiguratorProvider } from './src/context/ConfiguratorContext';

const App: React.FC = () => {
  return (
    <Theme appearance="dark" radius="large" scaling="100%">
      <ConfiguratorProvider>
        <Router>
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
            theme="dark"
            toastStyle={{ background: '#1c1917', border: '1px solid #292524', color: '#e7e5e4' }}
          />
        </Router>
      </ConfiguratorProvider>
    </Theme>
  );
};

export default App;