import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

function TeamSection() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Lucas Teixeira',
      role: 'Diretor/Área Comercial',
      image: 'https://i.imgur.com/PyQ4HJV.png',
      bio: 'Fundador da LFT Gestão de Risco e Planejamento Financeiro, Lucas lidera a área comercial com visão estratégica e foco em resultados, sempre buscando as melhores soluções para os clientes.',
      contact: {
        email: 'lucas@grupolft.com',
        phone: '+55 32 9821-1234'
      }
    },
    {
      id: 2,
      name: 'Juliana Urgal',
      role: 'Área Comercial',
      image: 'https://i.imgur.com/18mtOCZ.jpeg',
      bio: 'Especialista em atendimento ao cliente e soluções personalizadas, Juliana traz experiência e dedicação para garantir a satisfação de cada cliente da LFT.',
      contact: {
        email: 'juliana@grupolft.com',
        phone: '+55 32 9821-1234'
      }
    },
    {
      id: 3,
      name: 'Karina Ignacio',
      role: 'Financeiro',
      image: 'https://i.imgur.com/ySM0ZkS.png',
      bio: 'Responsável pela gestão financeira da empresa, Karina garante precisão e eficiência nos processos, mantendo a saúde financeira da organização.',
      contact: {
        email: 'karina@grupolft.com',
        phone: '+55 32 9821-1234'
      }
    },
    {
      id: 4,
      name: 'Natália Dutra',
      role: 'Suporte',
      image: 'https://i.imgur.com/gaBO2PX.png',
      bio: 'Com dedicação e atenção aos detalhes, Natália oferece suporte essencial para garantir que todos os processos funcionem com excelência.',
      contact: {
        email: 'natalia@grupolft.com',
        phone: '+55 32 9821-1234'
      }
    },
    {
      id: 5,
      name: 'Thiago Marques',
      role: 'Marketing',
      image: 'https://i.imgur.com/eGw4piu.png',
      bio: 'Responsável pela estratégia de marketing e comunicação da LFT, Thiago trabalha para fortalecer a marca e expandir o alcance da empresa.',
      contact: {
        email: 'thiago@grupolft.com',
        phone: '+55 32 9821-1234'
      }
    },
    {
      id: 6,
      name: 'Adriana Ferraz',
      role: 'Atendimento',
      image: 'https://i.imgur.com/CaY2uMI.jpeg',
      bio: 'Primeira linha de contato com os clientes, Adriana oferece atendimento cordial e eficiente, garantindo uma experiência positiva desde o primeiro contato.',
      contact: {
        email: 'adriana@grupolft.com',
        phone: '+55 32 9821-1234'
      }
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-metallic-shine pb-2">
            Nossa Equipe
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            A LFT Gestão de Risco e Planejamento Financeiro é uma corretora franqueada da Prudential do Brasil, localizada na Rua Vig. Varela 1012, Visconde do Rio Branco - MG, com +1300 clientes ativos. Fundada por Lucas de Freitas Teixeira.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative mb-4">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-accent transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-accent">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedMember.name}
                      </h3>
                      <p className="text-accent font-medium">{selectedMember.role}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-200"
                    aria-label="Fechar modal"
                  >
                    <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {selectedMember.bio}
                </p>

                <div className="space-y-3">
                  <a
                    href={`mailto:${selectedMember.contact.email}`}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-accent transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{selectedMember.contact.email}</span>
                  </a>
                  <a
                    href={`tel:${selectedMember.contact.phone}`}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-accent transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{selectedMember.contact.phone}</span>
                  </a>
                </div>

                <div className="mt-6">
                  <a
                    href="https://api.whatsapp.com/send/?phone=553298211234&text=Ol%C3%A1%2C%20vim%20pela%20Bio%20do%20Instagram%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20Seguros%20e%20Servi%C3%A7os%20da%20LFT"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      Entrar em contato
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default TeamSection;