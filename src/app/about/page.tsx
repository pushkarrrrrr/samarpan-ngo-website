'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { motion } from 'framer-motion';
import { FaEye, FaBullseye, FaHistory } from 'react-icons/fa';

export default function AboutPage() {
  const values = [
    {
      icon: FaBullseye,
      title: 'Our Mission',
      description: 'To empower underprivileged communities through accessible education, quality healthcare, and sustainable livelihood initiatives.',
      gradient: 'from-primary-500 to-primary-700',
    },
    {
      icon: FaEye,
      title: 'Our Vision',
      description: 'A society where every individual has the opportunity to thrive, regardless of their background, and lives a life of dignity and self-reliance.',
      gradient: 'from-secondary-500 to-secondary-700',
    },
    {
      icon: FaHistory,
      title: 'Our History',
      description: 'Founded with a small group of volunteers, Samarpan has grown into a community-led movement dedicated to grassroots social transformation.',
      gradient: 'from-accent-500 to-accent-700',
    },
  ];

  const team = [
    {
      name: 'Sneha Sharma',
      role: 'Founder & Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Operations Head',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
    {
      name: 'Anita Desai',
      role: 'Education Lead',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    },
  ];

  return (
    <main className="pt-20 bg-slate-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 flex items-center justify-center">
        <div className="absolute inset-0 bg-night-gradient"></div>
        <div className="blob bg-primary-500 top-0 left-0 w-96 h-96 opacity-40"></div>
        <div className="blob bg-secondary-500 bottom-0 right-0 w-96 h-96 opacity-30"></div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <h1 className="text-6xl md:text-8xl font-display font-black text-white leading-tight tracking-tighter">
              Our <span className="text-gradient-primary-500">Journey</span> <br /> of Compassion
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto">
              Dedicated to creating a world of equality, opportunity, and hope for every single life we touch.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Mission/Vision Section */}
      <section className="py-32 relative">
        <Container>
          <div className="grid md:grid-cols-3 gap-10">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group p-10 glass rounded-[3rem] shadow-2xl relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl transform group-hover:-rotate-12 transition-transform duration-300`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-gray-900 relative overflow-hidden">
        <div className="blob bg-primary-600 top-1/2 left-0 -translate-y-1/2 opacity-20"></div>
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <h2 className="text-5xl md:text-6xl font-display font-black text-white tracking-tight">
                How It All <span className="text-primary-500">Started</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
                <p>
                  Samarpan began with a simple belief: that every individual deserves a chance to build a better future. What started as a small weekend clinic in a rented space has evolved into a multi-faceted organization reaching thousands of families across the region.
                </p>
                <p>
                  We work directly with local communities, ensuring that our programs are designed by those they serve. This grassroots approach ensures sustainability and creates a deep sense of ownership within the people.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <div className="text-4xl font-display font-black text-primary-500 mb-2">12+</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Years of Service</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-black text-secondary-500 mb-2">50k+</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Lives Touched</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white/5 group">
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=1000&fit=crop"
                  alt="Community meeting"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-500 rounded-full blur-3xl opacity-30"></div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
            <h2 className="text-5xl font-display font-black text-gray-900 tracking-tight">
              Meet Our <span className="text-gradient-primary-500">Visionaries</span>
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              The heart and soul of Samarpan—dedicated individuals driving real change on the ground.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative mb-8 rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl border-4 border-white group-hover:border-primary-500 transition-colors duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <div className="flex space-x-4">
                      {/* Social icons could go here */}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-black text-sm uppercase tracking-widest">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
