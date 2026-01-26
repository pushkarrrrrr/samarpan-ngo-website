import Link from 'next/link';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 pt-24 pb-12 relative overflow-hidden">
            <div className="blob bg-primary-600 -top-24 -left-24"></div>
            <div className="blob bg-secondary-600 -bottom-24 -right-24"></div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* About Section */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-premium-gradient rounded-xl flex items-center justify-center shadow-lg">
                                <FaHeart className="text-white" />
                            </div>
                            <span className="text-2xl font-display font-black text-white">
                                Samarpan
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Dedicated to empowering communities through education, healthcare, and sustainable development. Join us in our journey of hope.
                        </p>
                        <div className="flex space-x-4">
                            {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 glass-dark rounded-xl flex items-center justify-center text-white hover:bg-primary-500 transition-all duration-300 transform hover:-translate-y-1">
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-8 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary-500 rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            {['About Us', 'Our Work', 'Gallery', 'Contact', 'Donate'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(' ', '')}`}
                                        className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center group font-medium"
                                    >
                                        <span className="w-0 group-hover:w-4 h-[1px] bg-primary-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-8 relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary-500 rounded-full"></span>
                        </h3>
                        <ul className="space-y-6">
                            {[
                                { icon: FaMapMarkerAlt, text: '123 Hope Plaza, South Extension, New Delhi' },
                                { icon: FaPhone, text: '+91 1800-SAMARPAN' },
                                { icon: FaEnvelope, text: 'contact@samarpan.org' }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start space-x-4 text-gray-400">
                                    <div className="w-10 h-10 glass-dark rounded-xl flex items-center justify-center text-primary-400 flex-shrink-0">
                                        <item.icon size={16} />
                                    </div>
                                    <span className="text-sm leading-relaxed">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-8 relative inline-block">
                            Newsletter
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary-500 rounded-full"></span>
                        </h3>
                        <p className="text-gray-400 text-sm mb-6">Stay updated with our latest impact stories and events.</p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-5 py-3 glass-dark rounded-xl text-white outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                            />
                            <Button variant="primary" size="sm" className="w-full">Subscribe</Button>
                        </form>
                    </div>
                </div>

                <div className="pt-12 border-t border-gray-800 text-center text-gray-500 text-sm">
                    <p>© {currentYear} Samarpan NGO. Made with ❤️ for social impact.</p>
                </div>
            </Container>
        </footer>
    );
};
