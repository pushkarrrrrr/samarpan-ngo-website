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
        },
        {
            icon: FaEnvelope,
            title: 'Email Us',
            details: 'contact@samarpan.org',
            subText: 'We reply within 24 hours',
        },
        {
            icon: FaMapMarkerAlt,
            title: 'Visit Office',
            details: '123 Hope Plaza, South Extension',
            subText: 'New Delhi, India - 110049',
        },
        {
            icon: FaClock,
            title: 'Working Hours',
            details: 'Monday - Saturday',
            subText: '9:00 AM - 6:00 PM',
        },
    ];

    return (
        <div className="pb-20">
            {/* Hero Section */}
            <section className="bg-primary-600 py-20 text-white">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Contact Us</h1>
                        <p className="text-xl opacity-90">
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Contact Content */}
            <section className="py-20">
                <Container>
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Info Cards */}
                        <div className="lg:col-span-1 space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0">
                                        <info.icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{info.title}</h3>
                                        <p className="text-primary-600 font-medium mb-1">{info.details}</p>
                                        <p className="text-gray-500 text-sm">{info.subText}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
                        >
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Send a Message</h2>
                            <form action="https://formspree.io/f/maykeqre" method="POST" className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                        <input
                                            name="name"
                                            type="text"
                                            placeholder="John Doe"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                                    <select
                                        name="subject"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                    >
                                        <option>General Inquiry</option>
                                        <option>Donation Help</option>
                                        <option>Volunteer Opportunities</option>
                                        <option>Partnership Proposal</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        rows={6}
                                        placeholder="How can we help you?"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full md:w-auto bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2"
                                >
                                    <FaPaperPlane /> Send Message
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Map Section Placeholder */}
            <section className="h-96 w-full grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112115.93902319018!2d77.10821614335938!3d28.581898599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce258d4a572a1%3A0x6b4904b3b2462e0!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1705942485507!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </div>
    );
}
