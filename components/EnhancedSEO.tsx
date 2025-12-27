
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS_INFO } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  type?: 'website' | 'article';
  image?: string;
  jsonLd?: object;
}

export const EnhancedSEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical, 
  type = 'website', 
  image, 
  jsonLd 
}) => {
  const baseUrl = BUSINESS_INFO.domain.endsWith('/') ? BUSINESS_INFO.domain.slice(0, -1) : BUSINESS_INFO.domain;
  const path = canonical.startsWith('/') ? canonical : `/${canonical}`;
  const fullCanonical = `${baseUrl}${path}`;
  
  // Imagem de preview social (OG Image) - Força absoluto para compatibilidade total
  const socialImage = image?.startsWith('http') ? image : `${baseUrl}/logo192.png`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      <meta name="author" content="Decorart Divisórias" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:secure_url" content={socialImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={BUSINESS_INFO.name} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* SEO Local / Geo Tags (Crítico para Curitiba/RMC) */}
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba" />
      <meta name="geo.position" content="-25.5000;-49.2700" />
      <meta name="ICBM" content="-25.5000, -49.2700" />
      
      {/* Mobile / PWA */}
      <meta name="theme-color" content="#1e3a8a" />
      
      {/* Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="dns-prefetch" href="https://wa.me" />
      
      {/* Structured Data (JSON-LD) */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};
