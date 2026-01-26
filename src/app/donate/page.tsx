'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { FaHeart, FaChild, FaHospital, FaHome, FaQrcode } from 'react-icons/fa';

export default function DonatePage() {
    const causes = [
        {
            icon: FaChild,
            title: 'Educate a Child',
            amount: '₹1,500/month',
            description: 'Covers schooling, uniform, books, and nutrition for one underprivileged child.',
            gradient: 'from-amber-400 to-orange-600', // Saffron themed
        },
        {
            icon: FaHeart,
            title: 'Sponsor Healthcare',
            amount: '₹5,000',
            description: 'Funds a complete health check-up camp for an entire rural village.',
            gradient: 'from-blue-400 to-indigo-600', // Blue themed
        },
        {
            icon: FaHome,
            title: 'Community Shelter',
            amount: '₹10,000',
            description: 'Supports the maintenance and improvement of our community learning centers.',
            gradient: 'from-emerald-400 to-teal-600', // Emerald themed
        },
    ];

    return (
        <main className="min-h-screen bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-night-gradient"></div>
                <div className="blob bg-primary-500 top-0 left-0 w-[500px] h-[500px] opacity-30"></div>
                <div className="blob bg-secondary-500 bottom-0 right-0 w-[500px] h-[500px] opacity-20"></div>

                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto space-y-8"
                    >
                        <h1 className="text-7xl md:text-9xl font-display font-black text-white leading-tight tracking-tighter">
                            Your <span className="text-gradient-primary-500">Gift</span>, <br /> Their Future
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto opacity-90">
                            Join us in our mission to empower underprivileged communities through your generous contributions.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Donation Options */}
            <section className="py-32 relative">
                <div className="blob bg-primary-100 top-1/4 right-0 opacity-40"></div>
                <div className="blob bg-secondary-50 bottom-1/4 left-0 opacity-30"></div>
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
                        <h2 className="text-5xl md:text-7xl font-display font-black text-gray-900 tracking-tight">
                            Choose a <span className="text-gradient-primary-500">Cause</span>
                        </h2>
                        <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                            Your contribution goes directly to our grassroots programs and transforms lives.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {causes.map((cause, index) => (
                            <motion.div
                                key={cause.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative glass rounded-[3.5rem] p-12 shadow-2xl overflow-hidden hover:shadow-primary-500/20 transition-all duration-500 flex flex-col"
                            >
                                <div className={`absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-br ${cause.gradient} opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700`}></div>

                                <div className={`w-20 h-20 bg-gradient-to-br ${cause.gradient} rounded-2xl flex items-center justify-center text-white mb-10 shadow-xl group-hover:rotate-12 transition-transform duration-300`}>
                                    <cause.icon size={36} />
                                </div>

                                <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">{cause.title}</h3>
                                <p className={`text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r ${cause.gradient} mb-8`}>
                                    {cause.amount}
                                </p>
                                <p className="text-gray-600 leading-relaxed font-medium mb-12 flex-grow text-lg">
                                    {cause.description}
                                </p>

                                <Button variant="primary" size="lg" className="w-full shadow-2xl py-7 rounded-2xl group-hover:scale-[1.02] transition-transform text-xl">
                                    Donate Now
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Payment Information */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-night-gradient"></div>
                <div className="blob bg-primary-600 top-1/2 left-0 -translate-y-1/2 opacity-20"></div>
                <div className="blob bg-secondary-600 bottom-0 right-1/4 opacity-10"></div>

                <Container className="relative">
                    <div className="max-w-6xl mx-auto glass-dark rounded-[4rem] p-12 md:p-24 shadow-2xl relative overflow-hidden border border-white/10">
                        <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
                            <div className="space-y-16">
                                <div className="space-y-6">
                                    <h2 className="text-6xl md:text-8xl font-display font-black text-white leading-none">
                                        Simple <br /> Ways <br /> to <span className="text-gradient-primary-500">Donate</span>
                                    </h2>
                                    <div className="h-3 w-40 bg-primary-500 rounded-full"></div>
                                </div>

                                <div className="space-y-12">
                                    {[
                                        { title: 'Bank Transfer', details: 'HDFC Bank | A/C: 50100XXXXXXXXX | IFSC: HDFC000XXXX' },
                                        { title: 'UPI Payment', details: 'samarpanngo@upi (GPay, PhonePe, Paytm)' },
                                        { title: 'Tax Benefits', details: 'All donations are tax-exempt under Section 80G.' }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex gap-10 items-start group"
                                        >
                                            <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 font-black text-2xl flex-shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h4 className="text-3xl font-bold text-white mb-3">{item.title}</h4>
                                                <p className="text-gray-400 font-medium leading-relaxed text-xl">{item.details}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-white p-20 rounded-[4rem] text-center shadow-[0_35px_60px_-15px_rgba(249,115,22,0.3)] border-[12px] border-primary-50 flex flex-col items-center group relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-primary-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative mb-12">
                                        <FaQrcode size={220} className="text-gray-900 group-hover:scale-90 transition-transform duration-700 ease-out" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-700 ease-out">
                                            <div className="bg-primary-500 p-6 rounded-3xl shadow-2xl rotate-12">
                                                <FaHeart size={50} className="text-white" />
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="text-4xl font-display font-black text-gray-900 mb-4">Scan & Donate</h4>
                                    <p className="text-primary-600 font-bold uppercase tracking-[0.4em] text-base">Secure UPI Payment</p>
                                </motion.div>

                                <div className="absolute -top-16 -right-16 w-48 h-48 bg-secondary-500/20 rounded-full blur-3xl"></div>
                                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-primary-500/20 rounded-full blur-3xl"></div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Transparency Section */}
            <section className="py-48 text-center bg-white relative overflow-hidden">
                <div className="blob bg-primary-50 top-0 right-0 opacity-60 w-[600px] h-[600px]"></div>
                <div className="blob bg-secondary-50 bottom-0 left-0 opacity-40 w-[600px] h-[600px]"></div>
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto space-y-16"
                    >
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-[3rem] mb-8 shadow-2xl border border-white"
                        >
                            <FaHeart className="text-primary-500 text-6xl" />
                        </motion.div>

                        <div className="space-y-8">
                            <h2 className="text-6xl md:text-8xl font-display font-black text-gray-900 tracking-tight leading-tight">
                                Transparency <br /> <span className="text-gradient-primary-500">Matters</span>
                            </h2>
                            <p className="text-2xl md:text-3xl text-gray-600 font-medium leading-relaxed max-w-4xl mx-auto">
                                We ensure 100% of your donation reaches the community. Monthly impact reports and audited financials are available for our donors to track their impact.
                            </p>
                        </div>

                        <div className="pt-12">
                            <Button variant="outline" size="lg" className="px-16 py-8 text-2xl rounded-3xl border-2 hover:bg-primary-50 transition-all font-bold">
                                View Impact Reports
                            </Button>
                        </div>
                    </motion.div>
                </Container>
            </section>
        </main>
    );
}
