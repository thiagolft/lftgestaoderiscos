import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-metallic-shine pb-2">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Estamos prontos para ajudar você a proteger seu futuro
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <a
                  href="tel:+553298211234"
                  className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-accent transition-colors duration-200 group p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Telefone</p>
                    <p className="text-lg">+55 32 9821-1234</p>
                  </div>
                </a>

                <a
                  href="mailto:Diretoria@grupolft.com"
                  className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-accent transition-colors duration-200 group p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">E-mail</p>
                    <p className="text-lg">Diretoria@grupolft.com</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/lftgestaoderisco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-accent transition-colors duration-200 group p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                    <Instagram className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Instagram</p>
                    <p className="text-lg">@lftgestaoderisco</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-gray-700 dark:text-gray-300 p-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Endereço</p>
                    <p className="text-lg">R. Vig. Varela, 1012 - Nova Rio Branco</p>
                    <p className="text-lg">Visc. do Rio Branco - MG, 36520-000</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[500px] w-full"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl h-full w-full border border-gray-200 dark:border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.5!2d-42.8333!3d-21.0167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAxJzAwLjEiUyA0MsKwNTAnMDAuMCJX!5e0!3m2!1sen!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização LFT Gestão de Risco"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;