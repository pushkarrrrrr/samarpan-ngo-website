'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
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
        <div className="pb-20">
            {/* Hero Section */}
            <section className="bg-accent-500 py-20 text-white">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Moments of Impact</h1>
                        <p className="text-xl opacity-90">
                            A visual journey through our programs and the lives we touch.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Gallery Grid */}
            <section className="py-20">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {images.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="relative aspect-[3/2] rounded-2xl overflow-hidden group shadow-lg"
                            >
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-accent-400 text-xs font-bold uppercase tracking-widest mb-1">{image.category}</span>
                                    <h3 className="text-white text-xl font-bold">{image.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Volunteer CTA */}
            <section className="py-20 bg-primary-50">
                <Container>
                    <div className="bg-white rounded-[2rem] p-12 shadow-xl border border-primary-100 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4 text-center md:text-left">Be Part of the Story</h2>
                            <p className="text-gray-600 text-lg leading-relaxed text-center md:text-left">
                                We are always looking for passionate people to join us. Help us capture more smiles and create more impact.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg transform transition-all active:scale-95">
                                Join as Volunteer
                            </button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
