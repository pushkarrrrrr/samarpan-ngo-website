'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function GalleryPage() {
    const images = [
        {
            url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop',
            title: 'Education for All',
            category: 'Education',
        },
        {
            url: 'https://images.unsplash.com/photo-1489602642804-05244957599c?w=600&h=400&fit=crop',
            title: 'Health Checkup Camp',
            category: 'Healthcare',
        },
        {
            url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=400&fit=crop',
            title: 'Skills Training',
            category: 'Livelihood',
        },
        {
            url: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600&h=400&fit=crop',
            title: 'Community Building',
            category: 'Community',
        },
        {
            url: 'https://images.unsplash.com/photo-1509062522246-37fa55ee2b71?w=600&h=400&fit=crop',
            title: 'Learning Together',
            category: 'Education',
        },
        {
            url: 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?w=600&h=400&fit=crop',
            title: 'Maternal Care',
            category: 'Healthcare',
        },
        {
            url: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&h=400&fit=crop',
            title: 'Sewing Class',
            category: 'Livelihood',
        },
        {
            url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop',
            title: 'Youth Workshop',
            category: 'Community',
        },
        {
            url: 'https://images.unsplash.com/photo-1459183885447-fe8c43318294?w=600&h=400&fit=crop',
            title: 'Smiles in School',
            category: 'Education',
        },
    ];

    return (
        <main className="pt-20 bg-slate-50 overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-premium-gradient"></div>
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
                            Moments of <span className="text-gray-900">Hope</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white font-medium leading-relaxed max-w-2xl mx-auto opacity-90">
                            A visual journey through our programs and the beautiful lives we touch every day.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Gallery Grid */}
            <section className="py-32 relative">
                <div className="blob bg-secondary-100 top-1/2 left-0 opacity-40"></div>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {images.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white hover:border-primary-500 transition-all duration-500"
                            >
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                                    <span className="text-primary-500 text-xs font-black uppercase tracking-widest mb-2">{image.category}</span>
                                    <h3 className="text-white text-3xl font-display font-bold">{image.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Volunteer CTA */}
            <section className="py-32 bg-slate-100">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative glass rounded-[4rem] p-12 md:p-24 overflow-hidden shadow-2xl border border-white"
                    >
                        <div className="blob bg-primary-200 -top-20 -right-20 opacity-40"></div>
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="max-w-2xl text-center lg:text-left space-y-6">
                                <h2 className="text-5xl md:text-6xl font-display font-black text-gray-900 tracking-tight">
                                    Be Part of the <span className="text-gradient-primary-500">Story</span>
                                </h2>
                                <p className="text-xl text-gray-600 font-medium leading-relaxed">
                                    We are always looking for passionate people to join us and help capture more smiles and create lasting impact.
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <Button variant="primary" size="lg" className="px-12 py-6 text-xl shadow-2xl">
                                    Join as Volunteer
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>
        </main>
    );
}
