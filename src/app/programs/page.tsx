'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaHeart, FaHandsHelping, FaUserFriends, FaGlobe, FaBookOpen } from 'react-icons/fa';

export default function ProgramsPage() {
    const allPrograms = [
        {
            title: 'EduReach: Quality Schooling',
            description: 'Supporting primary and secondary education for children in marginalized urban clusters through scholarships and bridge schools.',
            icon: FaGraduationCap,
            stats: '500+ Students',
            color: 'bg-blue-100 text-blue-600',
        },
        {
            title: 'HealFirst: Mobile Clinics',
            description: 'Bringing healthcare to doorsteps with mobile medical units providing diagnosis, basic medication, and maternal care.',
            icon: FaHeart,
            stats: '50+ Camps Held',
            color: 'bg-red-100 text-red-600',
        },
        {
            title: 'SkillNext: Livelihood Training',
            description: 'Vocational training in tailoring, computer literacy, and hospitality to empower youth and women for employment.',
            icon: FaHandsHelping,
            stats: '200+ Trainees',
            color: 'bg-green-100 text-green-600',
        },
        {
            title: 'GirlPower: Mentorship',
            description: 'Empowering young girls through leadership workshops, health awareness, and educational guidance.',
            icon: FaUserFriends,
            stats: '300+ Girls Mentored',
            color: 'bg-pink-100 text-pink-600',
        },
        {
            title: 'EcoShakti: Sustainability',
            description: 'Promoting organic farming and waste management practices in rural communities for a cleaner environment.',
            icon: FaGlobe,
            stats: '10+ Villages Adopted',
            color: 'bg-emerald-100 text-emerald-600',
        },
        {
            title: 'LitNow: Adult Literacy',
            description: 'Evening classes for adults to help them master reading, writing, and basic financial mathematics.',
            icon: FaBookOpen,
            stats: '150+ Adults Enrolled',
            color: 'bg-indigo-100 text-indigo-600',
        },
    ];

    return (
        <div className="pb-20">
            {/* Hero Section */}
            <section className="bg-secondary-500 py-20 text-white">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Work</h1>
                        <p className="text-xl opacity-90">
                            Transforming lives through integrated programs across India.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Program Grid */}
            <section className="py-20">
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allPrograms.map((program, index) => (
                            <motion.div
                                key={program.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${program.color}`}>
                                    <program.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">{program.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {program.description}
                                </p>
                                <div className="flex items-center justify-between border-t pt-6 mt-auto">
                                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Impact</span>
                                    <span className="text-primary-600 font-bold">{program.stats}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Impact CTA */}
            <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-[120px] opacity-20 -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500 rounded-full blur-[120px] opacity-20 -ml-32 -mb-32"></div>

                <Container className="relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 italic">
                            "We cannot always build the future for our youth, but we can build our youth for the future."
                        </h2>
                        <p className="text-lg opacity-80 mb-10">
                            Every program we run is a step toward a more equitable world. Your support fuels these initiatives.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button variant="primary" size="lg">Support Our Work</Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
