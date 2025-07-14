import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TeamSection from '@/components/sections/TeamSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const { toast } = useToast();

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'sobre', 'blog', 'contato'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=553298211234&text&type=phone_number&app_absent=0', '_blank');
  };

  const handleScheduleClick = () => {
    window.open('https://agenda-com-cliente.vercel.app/', '_blank');
  };

  const handleInstagramClick = () => {
    toast({
      title: "🚧 Instagram em breve!",
      description: "Nossa página do Instagram estará disponível em breve. Entre em contato pelo WhatsApp! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>LFT Gestão de Risco e Planejamento Financeiro - Proteja seu Futuro</title>
        <meta name="description" content="Especialistas em gestão de risco e planejamento financeiro familiar. Mais de 1200 clientes protegem o presente e planejam o futuro conosco." />
      </Helmet>

      <div className="min-h-screen text-white relative bg-navy">
        <motion.div 
          className="scroll-indicator"
          style={{ scaleX }}
        />
        
        <Header 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          handleScheduleClick={handleScheduleClick}
        />

        <main>
          <HeroSection 
            scrollToSection={scrollToSection}
            handleWhatsAppClick={handleWhatsAppClick}
          />
          <AboutSection />
          <ServicesSection />
          <TeamSection />
          <ContactSection 
            handleWhatsAppClick={handleWhatsAppClick}
            handleInstagramClick={handleInstagramClick}
            handleScheduleClick={handleScheduleClick}
          />
        </main>
        
        <Footer 
          handleWhatsAppClick={handleWhatsAppClick}
          handleInstagramClick={handleInstagramClick}
        />

        <Toaster />
      </div>
    </>
  );
}

export default App;