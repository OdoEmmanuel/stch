import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import NotFound from './pages/NotFound';
import logoWebp from './assets/logo.webp';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import GeneralPrimaryCare from './pages/Services/GeneralPrimaryCare';
import MaternalChildHealth from './pages/Services/MaternalChildHealth';
import SpecialistClinics from './pages/Services/SpecialistClinics';
import DiagnosticServices from './pages/Services/DiagnosticServices';
import SurgicalServices from './pages/Services/SurgicalServices';
import TherapyRehab from './pages/Services/TherapyRehabilitation';
import PharmacyServices from './pages/Services/PharmacyServices';
import OutreachPage from './pages/Outreach';
import CustomerSupport from './pages/CustomerSupport';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      
      <Navbar logo={logoWebp} />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/general-primary-care" element={<GeneralPrimaryCare />} />
          <Route path="/services/maternal-child" element={<MaternalChildHealth />} />
          <Route path="/services/specialist-clinics" element={<SpecialistClinics />} />
          <Route path="/services/diagnostics" element={<DiagnosticServices />} />
          <Route path="/services/surgical" element={<SurgicalServices />} />
          <Route path="/services/therapy-rehabilitation" element={<TherapyRehab />} />
          <Route path="/services/pharmacy" element={<PharmacyServices />} />
          <Route path="/outreach" element={<OutreachPage />} />
          <Route path="/support" element={<CustomerSupport />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;