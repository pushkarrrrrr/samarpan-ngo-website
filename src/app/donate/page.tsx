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
            color: 'bg-blue-50 text-blue-600',
        },
        {
            icon: FaHeart,
            title: 'Sponsor Healthcare',
            amount: '₹5,000',
            description: 'Funds a complete health check-up camp for an entire rural village.',
            color: 'bg-red-50 text-red-600',
        },
        {
            icon: FaHome,
            title: 'Community Shelter',
            amount: '₹10,000',
            description: 'Supports the maintenance and improvement of our community learning centers.',
            color: 'bg-green-50 text-green-600',
        },
    ];

    return (
        <div className="pb-20">
            {/* Hero Section */}
            <section className="bg-primary-500 py-20 text-white">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white text-center">Your Gift, Their Future</h1>
                        <p className="text-xl opacity-90">
                            Every donation, no matter how small, brings us a step closer to a world of equal opportunity.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Donation Options */}
            <section className="py-20">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Choose a Cause to Support</h2>
                        <p className="text-gray-600">Your contribution goes directly to our grassroots programs.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {causes.map((cause, index) => (
                            <motion.div
                                key={cause.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col items-center text-center"
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${cause.color}`}>
                                    <cause.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{cause.title}</h3>
                                <p className="text-primary-600 font-bold text-xl mb-4">{cause.amount}</p>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {cause.description}
                                </p>
                                <Button variant="primary" className="w-full mt-auto">Donate Now</Button>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Payment Information */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl overflow-hidden relative border border-gray-100">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-bl-full opacity-50"></div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Payment Options</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">Direct Bank Transfer</h4>
                                            <p className="text-sm text-gray-600">Bank Name: HDFC Bank<br />Account: 50100XXXXXXXXX<br />IFSC: HDFC000XXXX</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">UPI ID</h4>
                                            <p className="text-sm text-primary-600 font-bold">samarpanngo@upi</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">Tax Benefits (80G)</h4>
                                            <p className="text-sm text-gray-600">All donations are tax-exempt under Section 80G of the Income Tax Act.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-primary-50 p-10 rounded-[2rem] text-center border-2 border-dashed border-primary-200">
                                <FaQrcode size={150} className="mx-auto text-primary-500 mb-6" />
                                <h4 className="font-bold text-gray-900">Scan to Donate</h4>
                                <p className="text-sm text-gray-500 mt-2">Use any UPI app (GPay, PhonePe, Paytm)</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Transparent Transparency */}
            <section className="py-20 text-center">
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Transparency Matters</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We ensure 100% of your donation reaches the community. Monthly impact reports and audited financials are available for our donors to track the difference their support is making.
                        </p>
                    </div>
                </Container>
            </section>
        </div>
    );
}
