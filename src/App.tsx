import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { AzaPartnersPage } from './pages/AzaPartnersPage';
import { MethodologyPage } from './pages/MethodologyPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { LeadershipPage } from './pages/LeadershipPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-8c" element={<AboutPage />} />
        <Route path="/atuacao" element={<ServicesPage />} />
        <Route path="/atuacao/aza-partners" element={<AzaPartnersPage />} />
        <Route path="/metodologia" element={<MethodologyPage />} />
        <Route path="/experiencia" element={<ExperiencePage />} />
        <Route path="/lideranca" element={<LeadershipPage />} />
        <Route path="/contato" element={<ContactPage />} />
        {/* Fallback to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
