'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { FaGraduationCap, FaHeart, FaHandsHelping, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HomePage() {
  const stats = [
    { icon: FaUsers, value: '10,000+', label: 'Lives Impacted' },
    { icon: FaGraduationCap, value: '500+', label: 'Children Educated' },
    { icon: FaHeart, value: '50+', label: 'Healthcare Camps' },
    { icon: FaHandsHelping, value: '200+', label: 'Volunteers' },
  ];

  const programs = [
    {
      title: 'Education',
      description: 'Providing quality education and learning resources to underprivileged children.',
      icon: FaGraduationCap,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Healthcare',
      description: 'Organizing free medical camps and health awareness programs in rural areas.',
      icon: FaHeart,
      color: 'from-red-500 to-red-600',
    },
    {
      title: 'Community Development',
      description: 'Empowering communities through skill development and sustainable livelihood programs.',
      icon: FaHandsHelping,
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 md:py-32 overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
                Making a Difference,{' '}
                <span className="text-primary-500">Together</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Join us in our mission to empower communities through education, healthcare, and sustainable development initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg">
                  Donate Now
                </Button>
                <Button variant="outline" size="lg">
                  Become a Volunteer
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-secondary-500 shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=800&fit=crop"
                  alt="Children learning"
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-500 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-500 rounded-full blur-3xl opacity-30"></div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
                  <stat.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We focus on three key areas to create lasting impact in communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl mb-6`}>
                  <program.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-600">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Your support can change lives. Join us in our mission to create a better tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Donate Now
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                Learn More
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
