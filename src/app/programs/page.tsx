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
            description: 'Supporting primary and secondary education for children through scholarships and bridge schools.',
            icon: FaGraduationCap,
            stats: '500+ Students',
            gradient: 'from-blue-500 to-indigo-600',
        },
        {
            title: 'HealFirst: Mobile Clinics',
            description: 'Bringing healthcare to doorsteps with mobile medical units providing diagnosis and medication.',
            icon: FaHeart,
            stats: '50+ Camps Held',
            gradient: 'from-rose-500 to-red-600',
        },
        {
            title: 'SkillNext: Livelihood Training',
            description: 'Vocational training in tailoring, computer literacy, and hospitality to empower marginalized youth.',
            icon: FaHandsHelping,
            stats: '200+ Trainees',
            gradient: 'from-emerald-500 to-teal-600',
        },
        {
            title: 'GirlPower: Mentorship',
            description: 'Empowering young girls through leadership workshops, health awareness, and educational guidance.',
            icon: FaUserFriends,
            stats: '300+ Girls Mentored',
            gradient: 'from-pink-500 to-purple-600',
        },
        {
            title: 'EcoShakti: Sustainability',
            description: 'Promoting organic farming and waste management practices in rural communities.',
            icon: FaGlobe,
            stats: '10+ Villages Adopted',
            gradient: 'from-emerald-400 to-green-600',
        },
        {
            title: 'LitNow: Adult Literacy',
            description: 'Evening classes for adults to help them master reading, writing, and basic finance.',
            icon: FaBookOpen,
            stats: '150+ Adults Enrolled',
            gradient: 'from-indigo-400 to-blue-600',
        },
    ];

    return (
        <main className="pt-20 bg-slate-50 overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-sky-gradient"></div>
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
                            Our <span className="text-gray-900">Work</span> & <br /> Real Impact
                        </h1>
                        <p className="text-xl md:text-2xl text-white font-medium leading-relaxed max-w-2xl mx-auto opacity-90">
                            Transforming lives through integrated programs designed for sustainable community growth.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Program Grid */}
            <section className="py-32 relative">
                <div className="blob bg-primary-100 top-1/4 right-0 opacity-40"></div>
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {allPrograms.map((program, index) => (
                            <motion.div
                                key={program.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative glass rounded-[2.5rem] p-10 shadow-2xl overflow-hidden hover:shadow-primary-500/20 transition-all duration-500"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.gradient} opacity-5 rounded-bl-[5rem] group-hover:scale-150 transition-transform duration-700`}></div>

                                <div className={`w-16 h-16 bg-gradient-to-br ${program.gradient} rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl group-hover:rotate-12 transition-transform duration-300`}>
                                    <program.icon size={28} />
                                </div>

                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">{program.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium mb-8">
                                    {program.description}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Lives Impacted</span>
                                    <span className={`text-lg font-black bg-clip-text text-transparent bg-gradient-to-r ${program.gradient}`}>
                                        {program.stats}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Quote CTA Section */}
            <section className="py-32 bg-gray-900 relative overflow-hidden">
                <div className="blob bg-secondary-600 top-0 left-0 opacity-20"></div>
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <span className="text-primary-500 text-6xl font-serif">“</span>
                            <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-tight italic">
                                We cannot always build the future for our youth, but we can build our youth for the future.
                            </h2>
                            <p className="text-xl text-gray-400 font-medium">
                                Every program we run is a step toward a more equitable world. Your support is the fuel that keeps us going.
                            </p>
                        </motion.div>

                        <div className="flex flex-wrap justify-center gap-6">
                            <Button variant="primary" size="lg" className="shadow-2xl">Support Our Work</Button>
                            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">View Success Stories</Button>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
