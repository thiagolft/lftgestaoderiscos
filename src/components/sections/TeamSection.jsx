import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
    { name: "Lucas Teixeira", role: "Área Comercial", image: "https://i.imgur.com/PyQ4HJV.png"},
    { name: "Eduardo Venâncio", role: "Área Comercial", image: "https://i.imgur.com/cmKafzo.png"},
    { name: "Vanessa Fernandes", role: "Área Comercial", image: "https://i.imgur.com/vlrRYUF.png"},
    { name: "Juliana Urgal", role: "Área Comercial", image: "https://i.imgur.com/18mtOCZ.jpeg"},
    { name: "Maria Rangel", role: "Área Comercial", image: "https://i.imgur.com/v9LFAOy.jpeg"},
    { name: "Adriana Ferraz", role: "Administrativo", image: "https://i.imgur.com/CaY2uMI.jpeg"},
    { name: "Karina Ignacio", role: "Administrativo", image: "https://i.imgur.com/ySM0ZkS.png"},
    { name: "Natália Dutra", role: "Administrativo", image: "https://i.imgur.com/gaBO2PX.png"},
    { name: "Thiago Marques", role: "Marketing", image: "https://i.imgur.com/eGw4piu.png"}
];

const TeamSection = () => {
    return (
        <section className="py-16 sm:py-20 relative">
            <div className="section-divider mb-16 sm:mb-20" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Nossa Equipe</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Profissionais especializados e comprometidos com o seu sucesso financeiro.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="team-card glass-card rounded-2xl p-8 text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative mb-6">
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-cyan-400/30 shadow-lg"
                                />
                                <div className="absolute inset-0 w-28 h-28 mx-auto rounded-full ring-4 ring-cyan-500/50 animate-pulse" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                            <p className="text-cyan-400 font-medium mb-4">{member.role}</p>
                            <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
