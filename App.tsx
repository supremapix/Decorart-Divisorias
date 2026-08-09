
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { Home } from './pages/Home';
import { LocationDetail } from './pages/LocationDetail';
import { LocationsList } from './pages/LocationsList';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetail } from './pages/ServiceDetail';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticleDetail } from './pages/ArticleDetail';
import { DivisoriaLocalLanding } from './pages/DivisoriaLocalLanding';
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
            
            {/* Landing Pages Prioritárias de Divisórias */}
            <Route path="/divisorias-curitiba" element={<DivisoriaLocalLanding slugKey="curitiba" />} />
            <Route path="/divisorias-eucatex-curitiba" element={<DivisoriaLocalLanding slugKey="eucatex-curitiba" />} />
            <Route path="/divisorias-escritorio-curitiba" element={<DivisoriaLocalLanding slugKey="escritorio-curitiba" />} />
            <Route path="/divisorias-comerciais-curitiba" element={<DivisoriaLocalLanding slugKey="comerciais-curitiba" />} />
            <Route path="/divisorias-sao-jose-dos-pinhais" element={<DivisoriaLocalLanding slugKey="sao-jose-dos-pinhais" />} />

            {/* Rotas de Serviços */}
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/servicos/:slug" element={<ServiceDetail />} />

            {/* Rotas de Conteúdo / Artigos */}
            <Route path="/artigos" element={<ArticlesPage />} />
            <Route path="/artigos/:slug" element={<ArticleDetail />} />

            {/* Rotas Locais (Bairros e Cidades) */}
            <Route path="/local/:slug" element={<LocationDetail />} />
            <Route 
              path="/bairros" 
              element={<LocationsList title="Divisórias em Bairros de Curitiba" items={BAIRROS} type="bairros" />} 
            />
            <Route 
              path="/cidades" 
              element={<LocationsList title="Divisórias em Cidades da RMC" items={CIDADES} type="cidades" />} 
            />
            <Route path="/contato" element={<Home />} />
            
            {/* Fallback para home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
};

export default App;
