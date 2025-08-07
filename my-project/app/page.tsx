'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import { ArrowUpRight, Mail, Github, Linkedin, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 text-black font-mono">
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 50 ? 'bg-gray-50/95 backdrop-blur-sm border-b border-gray-200' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div 
              className="text-lg font-bold tracking-wider"
              whileHover={{ scale: 1.05 }}
            >
              MSR.
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide">
              {[
                { name: '[ABOUT ME]', id: 'about' },
                { name: '[PORTFOLIO]', id: 'portfolio' },
                { name: '[CONTACT ME]', id: 'contact' },
                { name: '[LET\'S CONNECT]', id: 'connect' }
              ].map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-gray-600 transition-colors duration-300 relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-gray-50 border-t border-gray-200 py-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {[
                { name: '[ABOUT ME]', id: 'about' },
                { name: '[PORTFOLIO]', id: 'portfolio' },
                { name: '[CONTACT ME]', id: 'contact' },
                { name: '[LET\'S CONNECT]', id: 'connect' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-sm font-medium hover:text-gray-600 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-20 lg:pt-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto h-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
            
            {/* Left Column - Main Title */}
            <div className="flex flex-col justify-center">
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none mb-8"
                style={{ fontFamily: 'Arial Black, sans-serif' }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                FULL<br />
                STACK<br />
                <span className="text-gray-400">DEVELOPER</span>
              </motion.h1>

              {/* Description */}
              <motion.div 
                className="max-w-md text-sm leading-relaxed space-y-4 mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="font-medium text-lg">
                  I DESIGN & DEVELOP SCALABLE WEB APPLICATIONS
                </p>
                <p className="text-gray-600">
                  Clean code and intuitive design for exceptional user experiences
                </p>
              </motion.div>


              {/* Social Links */}
              <motion.div 
                className="flex gap-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {[
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:msranjithkumar@gmail.com', label: 'Email' }
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="p-3 hover:bg-gray-200 rounded-full transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex flex-col items-center lg:items-end justify-center">
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {/* Profile Image Container */}
                <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/gokul.png"
                    alt="GokulKrishan"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Name */}
                <motion.div 
                  className="mt-6 text-center lg:text-right"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <h2 className="text-2xl lg:text-3xl font-black tracking-tight">
                    GokulKrishan
                  </h2>
                  <p className="text-sm text-gray-600 mt-2 font-medium tracking-wide">
                    FULL STACK DEVELOPER
                  </p>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-black rounded-full flex items-center justify-center"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                >
                  <ArrowUpRight className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-200 rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                className="mt-8 text-center lg:text-right"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="text-xs text-gray-600 mb-2 font-medium tracking-wide">
                  AVAILABLE FOR FREELANCE
                </div>
                <a 
                  href="mailto:msranjithkumar@gmail.com" 
                  className="text-sm font-medium hover:text-gray-600 transition-colors underline decoration-2 underline-offset-4"
                >
                  MSRANJITHKUMAR@GMAIL.COM
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
