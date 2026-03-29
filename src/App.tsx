/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Toaster, toast } from 'sonner';
import { 
  Dumbbell, 
  Sword, 
  Shield, 
  Zap, 
  Users, 
  Calendar, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter, 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle2,
  Trophy,
  Flame,
  Clock,
  Award,
  Target
} from 'lucide-react';

// --- Components ---

const JoinModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success("Welcome to the Core! We'll contact you shortly.");
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-titan-black/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md glass-card rounded-3xl p-8 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 titan-gradient opacity-10 blur-3xl -mr-16 -mt-16" />
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <h3 className="text-3xl mb-2 uppercase">Join <span className="text-titan-orange">TitanCore</span></h3>
              <p className="text-white/50 text-sm">Start your journey to elite performance today.</p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 titan-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-white w-8 h-8" />
                </div>
                <h4 className="text-xl mb-2 uppercase">Success!</h4>
                <p className="text-white/50 text-sm">Your application has been received.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-white/40 mb-2 tracking-widest">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-titan-orange transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase text-white/40 mb-2 tracking-widest">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-titan-orange transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase text-white/40 mb-2 tracking-widest">Interested In</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-titan-orange transition-colors appearance-none">
                    <option className="bg-titan-black">MMA</option>
                    <option className="bg-titan-black">Muay Thai</option>
                    <option className="bg-titan-black">BJJ</option>
                    <option className="bg-titan-black">Fitness</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full titan-gradient py-4 rounded-xl font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform mt-4"
                >
                  Submit Application
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Navbar = ({ onJoinClick }: { onJoinClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Classes', href: '#classes' },
    { name: 'About', href: '#about' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-titan-black/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 titan-gradient rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <Shield className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-display tracking-tighter">TITAN<span className="text-titan-orange">CORE</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium uppercase tracking-widest hover:text-titan-orange transition-colors">
              {link.name}
            </a>
          ))}
          <button 
            onClick={onJoinClick}
            className="titan-gradient px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Join Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-titan-black border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-display uppercase tracking-widest hover:text-titan-orange"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  onJoinClick();
                  setIsMobileMenuOpen(false);
                }}
                className="titan-gradient w-full py-3 rounded-lg text-lg font-bold uppercase tracking-widest"
              >
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onJoinClick }: { onJoinClick: () => void }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden titan-grid">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-titan-black via-transparent to-titan-black/50" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-titan-orange/20 text-titan-orange border border-titan-orange/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Elite Martial Arts & Strength
          </span>
          <h1 className="text-6xl md:text-9xl leading-none mb-6">
            FORGED IN <br />
            <span className="text-titan-orange">DISCIPLINE</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            TitanCore is more than a gym. It's a high-performance facility where champions are built through MMA, Muay Thai, and elite strength conditioning.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onJoinClick}
              className="titan-gradient px-10 py-4 rounded-full text-lg font-bold uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-transform group"
            >
              Start Free Trial <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#classes"
              className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-white/20 transition-colors inline-block"
            >
              View Schedule
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-10 left-0 w-full hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white/40 font-mono text-xs tracking-widest uppercase">
          <div className="flex items-center gap-4">
            <span className="text-titan-orange">01</span>
            <span>24/7 Access</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-titan-orange">02</span>
            <span>Expert Coaches</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-titan-orange">03</span>
            <span>Pro Gear</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-titan-orange">04</span>
            <span>Community Driven</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Disciplines = ({ onJoinClick }: { onJoinClick: () => void }) => {
  const classes = [
    { 
      name: 'Muay Thai', 
      icon: Flame, 
      desc: 'Traditional Thai boxing focusing on striking and clinching.', 
      color: 'from-red-500/20 to-red-600/20',
      image: 'https://images.unsplash.com/photo-1599058917233-3583a7be2399?auto=format&fit=crop&q=80'
    },
    { 
      name: 'Fitness', 
      icon: Zap, 
      desc: 'High-intensity functional training to boost your athletic performance.', 
      color: 'from-yellow-500/20 to-yellow-600/20',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80'
    },
    { 
      name: 'MMA', 
      icon: Shield, 
      desc: 'Mixed Martial Arts combining striking, wrestling, and grappling.', 
      color: 'from-blue-500/20 to-blue-600/20',
      image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80'
    },
    { 
      name: 'BJJ', 
      icon: Users, 
      desc: 'Brazilian Jiu-Jitsu at the Gracie Academy Berlin branch.', 
      color: 'from-purple-500/20 to-purple-600/20',
      image: 'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?auto=format&fit=crop&q=80'
    },
    { 
      name: 'Boxing', 
      icon: Dumbbell, 
      desc: 'Classic boxing techniques focusing on footwork and speed.', 
      color: 'from-orange-500/20 to-orange-600/20',
      image: 'https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?auto=format&fit=crop&q=80'
    },
    { 
      name: 'Recovery', 
      icon: Clock, 
      desc: 'Yoga and mobility sessions to ensure your body stays at peak performance.', 
      color: 'from-cyan-500/20 to-cyan-600/20',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80'
    },
  ];

  return (
    <section id="classes" className="py-24 bg-titan-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl mb-6 uppercase">Our <span className="text-titan-orange">Courses</span></h2>
          <p className="text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">
            We offer you a broad spectrum of martial arts, fitness, and recovery. You decide for yourself whether it's Mixed Martial Arts, Muay Thai, Brazilian Jiu-Jitsu, boxing, or wrestling – at TitanCore Gym, you'll find everything a martial artist could wish for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl group hover:border-titan-orange/50 transition-all duration-500 relative overflow-hidden flex flex-col"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-titan-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-6">
                  <div className="w-12 h-12 titan-gradient rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow text-center items-center">
                <h3 className="text-3xl mb-4 font-display uppercase tracking-tight">{item.name}</h3>
                <p className="text-white/60 mb-8 leading-relaxed flex-grow">{item.desc}</p>
                <button 
                  onClick={() => toast.info(`More details about ${item.name} coming soon!`)}
                  className="border border-white/20 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-titan-orange hover:border-titan-orange transition-all"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 glass-card p-12 rounded-3xl border-titan-orange/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 titan-gradient opacity-10 blur-3xl -mr-32 -mt-32" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl mb-6 uppercase">Trial <span className="text-titan-orange">Training</span></h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                You want to try out a free training session with us? No problem! Just come by during our regular opening hours and talk to our team at the desk. There, we'll advise you, find a suitable date together, and give you a tour of the gym.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <MapPin className="text-titan-orange w-5 h-5" />
                  <span className="text-sm font-mono uppercase">Lobeckstraße 36, 10969 Berlin</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-titan-orange w-5 h-5" />
                  <span className="text-sm font-mono uppercase">Mon-Sun: 08:00 - 22:00</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <button 
                onClick={onJoinClick}
                className="titan-gradient px-12 py-5 rounded-full text-xl font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-titan-orange/20"
              >
                Book Your Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-titan-gray relative titan-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl mb-6 uppercase">About <span className="text-titan-orange">Us</span></h2>
          <div className="w-24 h-1 titan-gradient mx-auto mb-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80" 
                alt="The Gym" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 titan-gradient opacity-20 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 titan-gradient opacity-20 blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl mb-8 uppercase tracking-tight">THE <span className="text-titan-orange">GYM</span></h3>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              TitanCore Gym is Berlin's premier destination for martial arts. Our facility is designed to provide the ultimate training experience, featuring professional-grade mats, a full-size boxing ring, and a dedicated strength conditioning area.
            </p>
            <p className="text-lg text-white/50 leading-relaxed">
              We pride ourselves on our community. Whether you're here for your first trial training or you're an ambitious competitor, our team and community ensure a huge selection of activities across over 140 courses every week.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: '140+ Courses', desc: 'A massive selection of activities across 7 days a week.' },
            { title: 'Elite Community', desc: 'Train with professional athletes and dedicated enthusiasts.' },
            { title: 'Pro Equipment', desc: 'Top-tier gear for MMA, Muay Thai, BJJ, and Fitness.' },
          ].map((item, idx) => (
            <div key={idx} className="text-center p-8 glass-card rounded-3xl border-white/5">
              <div className="text-titan-orange text-4xl font-display mb-4">0{idx + 1}</div>
              <h4 className="text-xl mb-4 uppercase tracking-widest">{item.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trainers = () => {
  const trainers = [
    {
      name: 'Jesse-Björn',
      role: 'Head Coach & MMA',
      photo: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80',
      bio: 'Visionary behind TitanCore. Jesse-Björn leads our MMA program with a focus on technical precision and mental toughness.',
      expertise: ['MMA', 'Strategy', 'Wrestling'],
      certs: ['Pro MMA Coach', 'Black Belt BJJ']
    },
    {
      name: 'Amine',
      role: 'Muay Thai & MMA',
      photo: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80',
      bio: 'Elite striker and MMA competitor. Amine brings authentic Muay Thai techniques and high-level striking to the mats.',
      expertise: ['Muay Thai', 'Striking', 'MMA'],
      certs: ['IFMA Certified', 'Pro Fighter']
    },
    {
      name: 'Felipe',
      role: 'BJJ Professor',
      photo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
      bio: 'Leading the Gracie Academy Berlin branch at TitanCore. Felipe is a master of the ground game and technical BJJ.',
      expertise: ['BJJ', 'Grappling', 'Self Defense'],
      certs: ['Gracie Academy Black Belt']
    },
    {
      name: 'Charlize',
      role: 'Yoga & Fitness',
      photo: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80',
      bio: 'Expert in mobility and functional fitness. Charlize ensures our athletes stay supple and strong for long-term health.',
      expertise: ['Yoga', 'Mobility', 'Functional Training'],
      certs: ['RYT-500', 'NASM CPT']
    },
    {
      name: 'James',
      role: 'Boxing Coach',
      photo: 'https://images.unsplash.com/photo-1549476464-37392f717551?auto=format&fit=crop&q=80',
      bio: 'Master of the sweet science. James focuses on footwork, speed, and the technical nuances of professional boxing.',
      expertise: ['Boxing', 'Footwork', 'Speed'],
      certs: ['USA Boxing Certified']
    },
    {
      name: 'Mursal',
      role: 'Muay Thai Coach',
      photo: 'https://images.unsplash.com/photo-1552196564-97c84b138723?auto=format&fit=crop&q=80',
      bio: 'Passionate Muay Thai instructor with a focus on power and clinching techniques.',
      expertise: ['Muay Thai', 'Clinching', 'Endurance'],
      certs: ['Muay Thai Kru']
    }
  ];

  return (
    <section id="trainers" className="py-24 bg-titan-black relative overflow-hidden titan-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-titan-orange font-mono text-sm tracking-[0.3em] uppercase mb-4 block">OUR TEAM</span>
          <h2 className="text-5xl md:text-7xl mb-4 uppercase tracking-tight">Meet Our <span className="text-titan-orange">Experts</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">Our team holt immer das Beste aus dir heraus. Experience elite coaching from active competitors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl overflow-hidden group hover:border-titan-orange/30 transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={trainer.photo} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-titan-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl mb-1 uppercase font-display tracking-tight">{trainer.name}</h3>
                  <p className="text-titan-orange text-sm font-bold uppercase tracking-widest">{trainer.role}</p>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-white/60 text-sm mb-8 leading-relaxed italic">"{trainer.bio}"</p>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] font-mono uppercase text-white/40 mb-3 flex items-center gap-2 tracking-widest">
                      <Target className="w-3 h-3 text-titan-orange" /> Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {trainer.expertise.map(exp => (
                        <span key={exp} className="bg-white/5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/80 border border-white/10">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-[10px] font-mono uppercase text-white/40 mb-3 flex items-center gap-2 tracking-widest">
                      <Award className="w-3 h-3 text-titan-orange" /> Certifications
                    </p>
                    <ul className="text-[10px] text-white/60 space-y-2">
                      {trainer.certs.map(cert => (
                        <li key={cert} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-titan-orange" /> {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = ({ onJoinClick }: { onJoinClick: () => void }) => {
  const plans = [
    { name: 'Basic', price: '49', features: ['3 Classes per week', 'Gym Access', 'Locker Room', 'Basic Support'], popular: false },
    { name: 'Pro', price: '89', features: ['Unlimited Classes', '24/7 Gym Access', 'Personal Training Session', 'Nutrition Guide', 'Priority Support'], popular: true },
    { name: 'Elite', price: '149', features: ['All Pro Features', 'Weekly 1-on-1 Coaching', 'Custom Fight Gear', 'Competition Prep', 'VIP Lounge'], popular: false },
  ];

  return (
    <section id="pricing" className="py-24 bg-titan-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl mb-4 uppercase">Choose Your <span className="text-titan-orange">Path</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">Flexible membership options designed to fit your goals and lifestyle.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative p-1 rounded-3xl ${plan.popular ? 'titan-gradient' : 'bg-white/10'}`}
            >
              <div className="bg-titan-black h-full w-full rounded-[22px] p-8 flex flex-col">
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 titan-gradient px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl mb-2 uppercase">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-display text-titan-orange">${plan.price}</span>
                  <span className="text-white/40 text-sm">/month</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-titan-orange" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={onJoinClick}
                  className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all ${plan.popular ? 'titan-gradient hover:scale-105' : 'bg-white/5 hover:bg-white/10'}`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-titan-gray pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 titan-gradient rounded-lg flex items-center justify-center">
                <Shield className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-display tracking-tighter">TITAN<span className="text-titan-orange">CORE</span></span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed">
              The premier destination for martial arts and high-performance training in the city. Forged in discipline, built for champions.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-titan-orange transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#classes" className="hover:text-titan-orange transition-colors">Classes</a></li>
              <li><a href="#about" className="hover:text-titan-orange transition-colors">About Us</a></li>
              <li><a href="#trainers" className="hover:text-titan-orange transition-colors">Trainers</a></li>
              <li><a href="#pricing" className="hover:text-titan-orange transition-colors">Membership</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-titan-orange" /> 123 Titan Way, Berlin, DE</li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-titan-orange" /> +49 30 12345678</li>
              <li className="flex items-center gap-3"><Calendar className="w-4 h-4 text-titan-orange" /> Mon - Sun: 24/7</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-6 uppercase">Newsletter</h4>
            <p className="text-sm text-white/50 mb-4">Get training tips and gym updates.</p>
            <form 
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Subscribed to newsletter!");
                (e.target as HTMLFormElement).reset();
              }}
            >
              <input 
                required
                type="email" 
                placeholder="Email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-titan-orange"
              />
              <button type="submit" className="titan-gradient p-2 rounded-lg">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-mono uppercase tracking-widest">
          <p>© 2024 TITANCORE GYM. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const toggleJoinModal = () => setIsJoinModalOpen(!isJoinModalOpen);

  return (
    <div className="min-h-screen">
      <Toaster position="top-center" theme="dark" />
      <Navbar onJoinClick={toggleJoinModal} />
      <main>
        <Hero onJoinClick={toggleJoinModal} />
        <Disciplines onJoinClick={toggleJoinModal} />
        <About />
        <Trainers />
        <Pricing onJoinClick={toggleJoinModal} />
      </main>
      <Footer />
      <JoinModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
    </div>
  );
}
