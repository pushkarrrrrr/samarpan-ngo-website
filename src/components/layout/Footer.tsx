import React from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <Container>
                <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                                <FaHeart className="text-white" />
                            </div>
                            <span className="text-xl font-display font-bold text-white">
                                Samarpan
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Making a difference in communities through education, healthcare, and sustainable development.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
                            <li><Link href="/programs" className="hover:text-primary-400 transition-colors">Our Work</Link></li>
                            <li><Link href="/gallery" className="hover:text-primary-400 transition-colors">Gallery</Link></li>
                            <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start space-x-2">
                                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                                <span>123 NGO Street, City, State 12345</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaPhone className="text-primary-400 flex-shrink-0" />
                                <span>+91 1234567890</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaEnvelope className="text-primary-400 flex-shrink-0" />
                                <span>info@samarpanngo.org</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                                <FaFacebook />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 py-6 text-center text-sm">
                    <p>&copy; {currentYear} Samarpan NGO. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};
