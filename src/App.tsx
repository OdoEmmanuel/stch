import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import NotFound from './pages/NotFound';
import logoWebp from './assets/logo.webp';

// Pages
import Home from './pages/Home'; 

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      
      <Navbar logo={logoWebp} />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;