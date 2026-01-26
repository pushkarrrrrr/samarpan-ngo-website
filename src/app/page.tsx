'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { FaGraduationCap, FaHeart, FaHandsHelping, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HomePage() {
  const stats = [
    { icon: FaUsers, value: '10,000+', label: 'Lives Impacted', color: 'bg-primary-500' },
    { icon: FaGraduationCap, value: '500+', label: 'Children Educated', color: 'bg-secondary-500' },
    { icon: FaHeart, value: '50+', label: 'Healthcare Camps', color: 'bg-red-500' },
    { icon: FaHandsHelping, value: '200+', label: 'Volunteers', color: 'bg-accent-500' },
  ];

  const programs = [
    {
      title: 'EduReach',
      description: 'Providing quality education and learning resources to underprivileged children.',
      icon: FaGraduationCap,
      gradient: 'from-blue-600 to-indigo-700',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop'
    },
    {
      title: 'HealFirst',
      description: 'Organizing free medical camps and health awareness programs in rural areas.',
      icon: FaHeart,
      gradient: 'from-rose-600 to-red-700',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop'
    },
    {
      title: 'SkillNext',
      description: 'Empowering communities through skill development and sustainable livelihoods.',
      icon: FaHandsHelping,
      gradient: 'from-emerald-600 to-teal-700',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop'
    },
  ];

  return (
    <main className="overflow-hidden bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="blob bg-primary-300 top-20 -left-20 w-96 h-96 opacity-30"></div>
        <div className="blob bg-secondary-300 bottom-20 right-0 w-[500px] h-[500px] opacity-20"></div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full border border-primary-100 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
                </span>
                <span className="text-sm font-bold text-primary-700 uppercase tracking-widest">Join the movement</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-display font-black leading-tight text-gray-900 tracking-tighter">
                Making a <br />
                <span className="text-gradient-primary-500">Difference</span> <br />
                Together
              </h1>

              <p className="text-xl text-gray-600 max-w-lg leading-relaxed font-medium">
                Join us in our mission to empower underprivileged communities through integrated education, healthcare, and sustainable development.
              </p>

              <div className="flex flex-wrap gap-6">
                <Link href="/donate">
                  <Button variant="primary" size="lg">Support Our Cause</Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg">Our Story</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=1000&fit=crop"
                  alt="Children smiling"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Floating Glass Card */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 z-20 glass p-8 rounded-3xl shadow-2xl max-w-[280px]"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <FaHeart size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900">Get Involved</h4>
                    <p className="text-xs text-gray-500">Join 200+ Volunteers</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 w-[75%] rounded-full"></div>
                  </div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Goal: 5,000 Lives Impacted</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 -skew-y-3 origin-right"></div>
        <Container className="relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 glass-dark rounded-[2.5rem] border border-gray-800"
              >
                <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform -rotate-6 transition-transform`}>
                  <stat.icon className="text-white text-2xl" />
                </div>
                <div className="text-4xl font-display font-black text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-bold text-sm uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Programs Section */}
      <section className="pt-48 pb-32 md:pt-64 md:pb-48 relative z-20">
        <div className="blob bg-accent-200 top-1/2 left-0 -translate-y-1/2 opacity-20"></div>
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 tracking-tight">
              Our Core <span className="text-primary-600">Focus</span>
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              We operate where it's needed most, focused on three sustainable pillars of development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-80 mix-blend-multiply`}></div>
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white space-y-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/30">
                    <program.icon size={28} />
                  </div>
                  <h3 className="text-3xl font-display font-bold leading-none">{program.title}</h3>
                  <p className="text-sm text-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="pt-4 overflow-hidden">
                    <div className="h-1 w-full bg-white/20 rounded-full">
                      <div className="h-full bg-white w-0 group-hover:w-full transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <Container>
          <div className="relative bg-night-gradient rounded-[4rem] p-12 md:p-24 overflow-hidden shadow-[0_30px_60px_-15px_rgba(15,23,42,0.5)]">
            <div className="blob bg-primary-500 -top-20 -right-20 w-80 h-80 opacity-40"></div>
            <div className="blob bg-secondary-500 -bottom-20 -left-20 w-80 h-80 opacity-40"></div>

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-12">
              <h2 className="text-5xl md:text-7xl font-display font-black text-white leading-tight">
                Ready to Change <br /> a Life Today?
              </h2>
              <p className="text-xl text-gray-300 font-medium">
                Your support is the catalyst for change. Small steps leading to giant leaps for the communities we serve.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/donate">
                  <Button variant="primary" size="lg" className="px-12 py-6 text-xl">Donate Now</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm">Become a Volunteer</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
