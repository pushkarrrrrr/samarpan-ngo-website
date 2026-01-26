'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
    const contactInfo = [
        {
            icon: FaPhone,
            title: 'Call Us',
            details: '+91 1800-SAMARPAN',
            subText: 'Mon-Sat, 9AM to 6PM',
            gradient: 'from-blue-500 to-indigo-600',
        },
        {
            icon: FaEnvelope,
            title: 'Email Us',
            details: 'contact@samarpan.org',
            subText: 'We reply within 24 hours',
            gradient: 'from-rose-500 to-red-600',
        },
        {
            icon: FaMapMarkerAlt,
            title: 'Visit Office',
            details: '123 Hope Plaza, South Extension',
            subText: 'New Delhi, India - 110049',
            gradient: 'from-emerald-500 to-teal-600',
        },
        {
            icon: FaClock,
            title: 'Working Hours',
            details: 'Monday - Saturday',
            subText: '9:00 AM - 6:00 PM',
            gradient: 'from-primary-500 to-primary-700',
        },
    ];

    return (
        <main className="pt-20 bg-slate-50 overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-sky-gradient"></div>
                <div className="blob bg-white top-0 left-0 w-96 h-96 opacity-20"></div>
                <div className="blob bg-primary-300 bottom-0 right-0 w-96 h-96 opacity-30"></div>

                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto space-y-8"
                    >
                        <h1 className="text-6xl md:text-8xl font-display font-black text-white leading-tight tracking-tighter">
                            Let's <span className="text-gray-900">Connect</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white font-medium leading-relaxed max-w-2xl mx-auto opacity-90">
                            Have questions or want to collaborate? We'd love to hear from you.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Contact Content */}
            <section className="py-32 relative">
                <div className="blob bg-primary-100 top-1/4 left-0 opacity-40"></div>
                <Container>
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Info Cards */}
                        <div className="lg:col-span-1 space-y-8">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.title}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="glass p-8 rounded-[2.5rem] shadow-xl flex items-start gap-6 group hover:translate-x-2 transition-all duration-300"
                                >
                                    <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:rotate-12 transition-transform`}>
                                        <info.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">{info.title}</h3>
                                        <p className="text-lg font-bold text-gray-900 mb-1">{info.details}</p>
                                        <p className="text-gray-500 font-medium text-sm">{info.subText}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-2 glass rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <h2 className="text-4xl font-display font-black text-gray-900 mb-10">Send a <span className="text-gradient-primary-500">Message</span></h2>
                                <form action="https://formspree.io/f/maykeqre" method="POST" className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="block text-sm font-black text-gray-700 uppercase tracking-widest">Full Name</label>
                                        <input
                                            name="name"
                                            type="text"
                                            placeholder="John Doe"
                                            required
                                            className="w-full bg-white/50 border border-gray-100 px-6 py-4 rounded-2xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all font-medium text-gray-900"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="block text-sm font-black text-gray-700 uppercase tracking-widest">Email Address</label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            required
                                            className="w-full bg-white/50 border border-gray-100 px-6 py-4 rounded-2xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all font-medium text-gray-900"
                                        />
                                    </div>
                                    <div className="md:col-span-2 space-y-4">
                                        <label className="block text-sm font-black text-gray-700 uppercase tracking-widest">Subject</label>
                                        <select
                                            name="subject"
                                            className="w-full bg-white/50 border border-gray-100 px-6 py-4 rounded-2xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all font-medium text-gray-900 appearance-none"
                                        >
                                            <option>General Inquiry</option>
                                            <option>Donation Help</option>
                                            <option>Volunteer Opportunities</option>
                                            <option>Partnership Proposal</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2 space-y-4">
                                        <label className="block text-sm font-black text-gray-700 uppercase tracking-widest">How can we help?</label>
                                        <textarea
                                            name="message"
                                            rows={5}
                                            placeholder="Write your message here..."
                                            required
                                            className="w-full bg-white/50 border border-gray-100 px-6 py-4 rounded-2xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all font-medium text-gray-900 resize-none"
                                        ></textarea>
                                    </div>
                                    <div className="md:col-span-2">
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            size="lg"
                                            className="w-full md:w-auto shadow-2xl"
                                        >
                                            <FaPaperPlane className="mr-3" /> Send Message
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Map Section */}
            <section className="relative px-6 pb-32">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-[500px] w-full rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white group"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112115.93902319018!2d77.10821614335938!3d28.581898599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce258d4a572a1%3A0x6b4904b3b2462e0!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1705942485507!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000"
                        ></iframe>
                    </motion.div>
                </Container>
            </section>
        </main>
    );
}
