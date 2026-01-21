'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { FaBars, FaTimes, FaHeart } from 'react-icons/fa';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/programs', label: 'Our Work' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <Container>
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                            <FaHeart className="text-white text-xl" />
                        </div>
                        <span className="text-2xl font-display font-bold text-gray-900">
                            Samarpan
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button variant="primary" size="sm">
                            Donate Now
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 hover:text-primary-500 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 animate-slide-down">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block py-3 text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Button variant="primary" size="md" className="w-full">
                                Donate Now
                            </Button>
                        </div>
                    </nav>
                )}
            </Container>
        </header>
    );
};
