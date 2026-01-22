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
      color: 'bg-primary-100 text-primary-600',
    },
    {
      icon: FaEye,
      title: 'Our Vision',
      description: 'A society where every individual has the opportunity to thrive, regardless of their background, and lives a life of dignity and self-reliance.',
      color: 'bg-secondary-100 text-secondary-600',
    },
    {
      icon: FaHistory,
      title: 'Our History',
      description: 'Founded with a small group of volunteers, Samarpan has grown into a community-led movement dedicated to grassroots social transformation.',
      color: 'bg-accent-100 text-accent-600',
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
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Samarpan NGO</h1>
            <p className="text-xl opacity-90">
              Dedicated to creating a world of equality, opportunity, and hope for everyone.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Mission/Vision/History */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${item.color}`}>
                  <item.icon size={30} />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">Our Journey</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Samarpan began with a simple belief: that every individual deserves a chance to build a better future. What started as a small weekend clinic has evolved into a multi-faceted organization reaching thousands.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We work directly with local communities, ensuring that our programs are designed by those they serve. This grassroots approach ensures sustainability and creates a sense of ownership.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop"
                alt="Community meeting"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Heart-led individuals dedicated to social change.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-primary-500 rounded-full scale-0 group-hover:scale-105 transition-transform duration-300 opacity-20"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg relative z-10"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary-600 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
