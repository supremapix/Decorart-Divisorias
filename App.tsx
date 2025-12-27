
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { Home } from './pages/Home';
import { LocationDetail } from './pages/LocationDetail';
import { LocationsList } from './pages/LocationsList';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetail } from './pages/ServiceDetail';
import { BAIRROS, CIDADES } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/servicos/:slug" element={<ServiceDetail />} />
            <Route path="/local/:slug" element={<LocationDetail />} />
            <Route 
              path="/bairros" 
              element={<LocationsList title="Bairros Atendidos em Curitiba" items={BAIRROS} type="bairros" />} 
            />
            <Route 
              path="/cidades" 
              element={<LocationsList title="Cidades Atendidas na RMC" items={CIDADES} type="cidades" />} 
            />
            <Route path="/contato" element={<Home />} />
          </Routes>
        </main>

        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
};

export default App;
