import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutLFT from '@/components/AboutLFT';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

function HomePage() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <>
      <Helmet>
        <title>LFT Gestão de Risco e Planejamento Financeiro | Seguros e Proteção Familiar</title>
        <meta name="description" content="Corretora franqueada Prudential do Brasil. Mais de 1300 clientes protegidos. Seguros de vida, planejamento sucessório e gestão de risco em Visconde do Rio Branco - MG." />
        <meta name="keywords" content="LFT Gestão de Risco, planejamento financeiro, seguros, Prudential, seguro de vida, sucessão empresarial, Visconde do Rio Branco" />
        
        {/* Open Graph */}
        <meta property="og:title" content="LFT Gestão de Risco e Planejamento Financeiro" />
        <meta property="og:description" content="Proteção que vai além do papel. Mais de 1300 clientes confiam na LFT para proteger o presente e planejar o futuro." />
        <meta property="og:image" content="https://i.imgur.com/6t8HiFI.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.grupolft.com" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LFT Gestão de Risco e Planejamento Financeiro" />
        <meta name="twitter:description" content="Proteção que vai além do papel. Mais de 1300 clientes confiam na LFT." />
        <meta name="twitter:image" content="https://i.imgur.com/6t8HiFI.png" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "LFT Gestão de Risco e Planejamento Financeiro",
            "image": "https://i.imgur.com/6t8HiFI.png",
            "description": "Corretora franqueada da Prudential do Brasil especializada em seguros de vida e planejamento financeiro",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "R. Vig. Varela, 1012 - Nova Rio Branco",
              "addressLocality": "Visconde do Rio Branco",
              "addressRegion": "MG",
              "postalCode": "36520-000",
              "addressCountry": "BR"
            },
            "telephone": "+55-32-9821-1234",
            "email": "Diretoria@grupolft.com",
            "url": "https://www.grupolft.com",
            "sameAs": [
              "https://www.instagram.com/lftgestaoderisco"
            ],
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1300"
            }
          })}
        </script>
      </Helmet>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <AboutLFT />
        <ServicesSection />
        <TeamSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;