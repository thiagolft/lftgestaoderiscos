import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">LFT Gestão de Risco e Planejamento Financeiro</h3>
            <p className="text-gray-300 mb-4">
              Corretora franqueada da Prudential do Brasil, especializada em seguros de vida e planejamento financeiro.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <a href="tel:+553298211234" className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span>+55 32 9821-1234</span>
              </a>
              <a href="mailto:Diretoria@grupolft.com" className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                <span>Diretoria@grupolft.com</span>
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>R. Vig. Varela, 1012 - Nova Rio Branco, Visc. do Rio Branco - MG, 36520-000</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/lftgestaoderisco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © 2026 LFT Gestão de Risco e Planejamento Financeiro. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/politica-de-privacidade" className="text-gray-300 hover:text-accent transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="text-gray-300 hover:text-accent transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;