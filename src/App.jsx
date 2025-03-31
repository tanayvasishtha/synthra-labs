import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Careers from './pages/careers/Careers';
import Internships from './pages/careers/Internships';
import Jobs from './pages/careers/Jobs';
import CampusAmbassador from './pages/careers/CampusAmbassador';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import './assets/styles/variables.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/internships" element={<Internships />} />
          <Route path="/careers/jobs" element={<Jobs />} />
          <Route path="/careers/campus-ambassador" element={<CampusAmbassador />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
