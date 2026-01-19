import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Building2, TrendingUp, X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: Shield,
      title: 'Seguro de Vida Individual',
      description: 'Proteção financeira para sua família em caso de imprevistos',
      fullDescription: 'Proteção financeira completa para sua família em caso de imprevistos. Oferecemos diversas modalidades como Vida Inteira, Vida & Saúde, Seguros Temporários e Renda Familiar para dar suporte contínuo aos seus dependentes, garantindo tranquilidade e segurança em todos os momentos da vida.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      icon: Building2,
      title: 'Seguro de Vida Empresarial',
      description: 'Soluções para proteger sócios e colaboradores',
      fullDescription: 'Soluções especializadas para proteger sócios e colaboradores da sua empresa. Oferecemos opções de Capital Global e planos de Vida em Grupo para empresas, garantindo proteção financeira e continuidade dos negócios. Ideal para empresas que valorizam o bem-estar de sua equipe.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      icon: TrendingUp,
      title: 'Sucessão Empresarial',
      description: 'Planejamento para garantir a continuidade do negócio',
      fullDescription: 'Planejamento estratégico para garantir a continuidade do seu negócio através das gerações. Desenvolvemos estratégias personalizadas para transferência de patrimônio e proteção dos interesses da família e da empresa, assegurando a perpetuidade do legado empresarial com segurança jurídica e fiscal.',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-metallic-shine pb-2">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Soluções completas para proteger e fazer crescer o patrimônio da sua família.
          </p>
          <p className="text-sm text-accent font-medium mt-4">
            Corretora franqueada da Prudential do Brasil
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div 
                className="relative bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer h-full flex flex-col"
                onClick={() => setSelectedService(service)}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">
                    {service.description}
                  </p>

                  <Button 
                    variant="outline"
                    className="w-full group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300"
                  >
                    Saiba mais
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-2 bg-gradient-to-r ${selectedService.color}`} />
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${selectedService.color} flex items-center justify-center`}>
                    <selectedService.icon className="w-8 h-8 text-white" />
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-200"
                    aria-label="Fechar modal"
                  >
                    <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedService.title}
                </h3>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  {selectedService.fullDescription}
                </p>

                <div className="flex gap-4">
                  <a
                    href="https://api.whatsapp.com/send/?phone=553298211234&text=Ol%C3%A1%2C%20vim%20pela%20Bio%20do%20Instagram%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20Seguros%20e%20Servi%C3%A7os%20da%20LFT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Entre em contato
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

export default ServicesSection;