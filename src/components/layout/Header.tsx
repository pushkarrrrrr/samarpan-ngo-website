'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { FaBars, FaTimes, FaHeart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/programs', label: 'Our Work' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/contact', label: 'Contact' },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, x: -10 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <header className="fixed top-4 left-0 right-0 z-50 transition-all duration-300">
            <Container>
                <div className="glass rounded-[2rem] px-6 md:px-10 h-20 flex items-center justify-between shadow-2xl border border-white border-opacity-40">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <motion.div
                            whileHover={{ rotate: 12, scale: 1.1 }}
                            className="w-12 h-12 bg-premium-gradient rounded-2xl flex items-center justify-center shadow-lg"
                        >
                            <FaHeart className="text-white text-xl" />
                        </motion.div>
                        <span className="text-2xl font-display font-black tracking-tight text-gray-900">
                            Samarpan
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-x-12 lg:gap-x-16">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative text-gray-600 hover:text-primary-600 font-bold text-sm uppercase tracking-widest transition-all duration-300 group/nav"
                            >
                                <motion.span
                                    whileHover={{ y: -2 }}
                                    className="relative z-10 block"
                                >
                                    {link.label}
                                </motion.span>
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover/nav:w-full shadow-[0_0_8px_rgba(249,115,22,0.4)]"></span>
                            </Link>
                        ))}
                        <Link href="/donate" className="ml-4">
                            <Button variant="primary" size="sm" className="hidden lg:flex px-8 py-5 text-sm uppercase font-bold tracking-widest shadow-lg shadow-primary-500/20 hover:scale-105 hover:-translate-y-1.5 active:scale-95 transition-all duration-300">
                                Donate Now
                            </Button>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden w-12 h-12 flex items-center justify-center text-gray-900 hover:bg-gray-100 rounded-2xl transition-colors border border-gray-100"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.nav
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="md:hidden mt-4 glass rounded-3xl p-6 shadow-2xl border border-white border-opacity-40 overflow-hidden"
                        >
                            <div className="flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <motion.div key={link.href} variants={itemVariants}>
                                        <Link
                                            href={link.href}
                                            className="block px-4 py-3 text-gray-700 hover:text-primary-600 font-bold text-lg transition-colors border-b border-gray-100 last:border-0"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div variants={itemVariants} className="pt-2">
                                    <Link href="/donate" className="w-full" onClick={() => setIsMenuOpen(false)}>
                                        <Button variant="primary" size="md" className="w-full">
                                            Donate Now
                                        </Button>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </Container>
        </header>
    );
};
