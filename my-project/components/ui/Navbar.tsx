"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
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
          <Link href="/" passHref legacyBehavior>
            <motion.a 
              className="text-lg font-bold tracking-wider cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              GK.
            </motion.a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ y: -2 }}
            >
              <a href="/About" className="hover:text-gray-600 transition-colors duration-300 relative group">[ABOUT ME]</a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2 }}
            >
              <a href="/Project" className="hover:text-gray-600 transition-colors duration-300 relative group">[PROJECTS]</a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -2 }}
            >
              <a href="/Contact" className="hover:text-gray-600 transition-colors duration-300 relative group">[CONTACT ME]</a>
            </motion.div>
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
            <a
              href="/About"
              className="block w-full text-left py-2 text-sm font-medium hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              [ABOUT ME]
            </a>
            <a
              href="/Project"
              className="block w-full text-left py-2 text-sm font-medium hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              [PROJECTS]
            </a>
            <a
              href="/Contact"
              className="block w-full text-left py-2 text-sm font-medium hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              [CONTACT ME]
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
