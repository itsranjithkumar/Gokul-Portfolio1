"use client"

import { ArrowRight, ExternalLink, Github, Star, Award, Zap, Eye } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { PointerHighlight } from "@/components/ui/pointer-highlight"
import { Card, CardContent } from "@/components/ui/card"
import { PinContainer } from "@/components/ui/3d-pin"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    subtitle: "Next.js • TypeScript • Stripe",
    description: "A modern e-commerce platform with seamless checkout experience and inventory management.",
    longDescription: "Revolutionary e-commerce solution featuring AI-powered recommendations, real-time inventory tracking, and seamless payment processing. Built with cutting-edge technology stack for optimal performance.",
    image: "/apple.png",
    tags: ["React", "Next.js", "TypeScript", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    stats: { views: "12.5K", stars: "2.1K", forks: "456" },

  },
  {
    id: 2,
    title: "Task Management App",
    subtitle: "React • Node.js • MongoDB",
    description: "Collaborative task management with real-time updates and team collaboration features.",
    longDescription: "Enterprise-grade task management platform with advanced collaboration tools, real-time synchronization, and intelligent project analytics.",
    image: "/apple.png",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    stats: { views: "8.2K", stars: "1.8K", forks: "234" }
  },
  {
    id: 3,
    title: "Weather Analytics",
    subtitle: "Vue.js • Python • FastAPI",
    description: "Real-time weather data visualization with predictive analytics and location-based insights.",
    longDescription: "Advanced weather analytics platform with machine learning predictions, interactive visualizations, and comprehensive climate data analysis.",
    image: "/apple.png",
    tags: ["Vue.js", "Python", "FastAPI", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    stats: { views: "6.7K", stars: "1.2K", forks: "189" }
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    subtitle: "React Native • Firebase • Redux",
    description: "Cross-platform social media management tool with analytics and scheduling capabilities.",
    longDescription: "Comprehensive social media management suite with advanced analytics, automated scheduling, and multi-platform integration for maximum reach.",
    image: "/apple.png",
    tags: ["React Native", "Firebase", "Redux", "Analytics"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    stats: { views: "15.3K", stars: "3.2K", forks: "678" },

  },
  {
    id: 5,
    title: "AI Content Generator",
    subtitle: "Next.js • OpenAI • Prisma",
    description: "AI-powered content creation platform with multiple output formats and customization options.",
    longDescription: "Next-generation AI content creation platform leveraging advanced language models for high-quality, customizable content generation across multiple formats.",
    image: "/apple.png",
    tags: ["Next.js", "OpenAI", "Prisma", "TailwindCSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    stats: { views: "22.1K", stars: "4.5K", forks: "892" }
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    subtitle: "Flutter • Dart • SQLite",
    description: "Personal fitness tracker with workout plans, progress monitoring, and health insights.",
    longDescription: "Comprehensive fitness ecosystem with personalized workout plans, advanced health metrics tracking, and AI-powered fitness recommendations.",
    image: "/apple.png",
    tags: ["Flutter", "Dart", "SQLite", "Charts"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    stats: { views: "9.8K", stars: "1.9K", forks: "345" }
  }
]

import Navbar from "@/components/ui/Navbar";

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <Navbar />
        <div className="min-h-screen bg-white overflow-hidden pt-28">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full blur-3xl opacity-30 transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-r from-pink-50 to-orange-50 rounded-full blur-3xl opacity-20 transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
          }}
        />
      </div>


      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 lg:pt-32 pb-8 sm:pb-16 lg:pb-20 px-2 sm:px-4 lg:px-6">
        <div className={`max-w-5xl mx-auto flex flex-col items-center text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <h1 className="text-3xl sm:text-5xl md:text-8xl font-black text-gray-900 mb-4 sm:mb-8 tracking-tight leading-none">
  <PointerHighlight>
    Project Gallery
  </PointerHighlight>
</h1>
<p className="text-base sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-12">
  Explore my portfolio of digital products, web apps, and creative solutions—built with a passion for design, technology, and innovation.
</p>
          
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-8 sm:py-16 lg:py-20 px-2 sm:px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Featured Work
            </h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full" />
          </div>
          
          <div className="space-y-12 lg:space-y-40">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-20`}>
                <div className="flex-1 relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-gray-100 to-gray-50 rounded-3xl blur-xl opacity-50" />
                  <PinContainer
                    title={project.title}
                    href={project.live}
                    className="relative"
                  >
                    <div className="flex basis-full flex-col p-6 tracking-tight text-slate-100/50 w-[28rem] h-[24rem]">
                      <div className="relative overflow-hidden rounded-2xl mb-4 group">
                        <Image
                          src="/project.png"
                          height="200"
                          width="450"
                          className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          alt={project.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        
                      </div>
                      <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <div className="flex gap-4">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {project.stats.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {project.stats.stars}
                          </span>
                        </div>
                      </div>
                    </div>
                  </PinContainer>
                </div>
                
                <div className="flex-1 space-y-8">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-2 sm:px-3 py-1 mb-2 sm:mb-4 text-xs font-medium text-gray-600">
                      #{index + 1} Featured Project
                    </div>
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-4 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-xl text-gray-500 mb-4 sm:mb-6 font-medium">
                      {project.subtitle}
                    </p>
                    <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                      {project.longDescription}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <HoverBorderGradient
  as="a"
  className="rounded-full bg-white text-black flex items-center gap-2 px-4 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
  {...{
    href: project.live,
    target: "_blank",
    rel: "noopener noreferrer"
  }}
>
  View Live <ExternalLink className="w-4 h-4" />
</HoverBorderGradient>
                    <HoverBorderGradient
  as="a"
  className="rounded-full bg-white text-black flex items-center gap-2 px-4 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold border-2 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
  {...{
    href: project.github,
    target: "_blank",
    rel: "noopener noreferrer"
  }}
>
  <Github className="w-4 h-4" /> Source Code
</HoverBorderGradient>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Grid */}
      <section className="py-8 sm:py-16 lg:py-20 px-2 sm:px-4 lg:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              More Projects
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Explore additional projects showcasing diverse technologies and creative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {otherProjects.map((project, index) => (
  <Card key={project.id} className="w-auto sm:w-[24rem] h-auto flex flex-col justify-between">
    <CardContent className="bg-white relative border-gray-200 rounded-2xl p-6 flex flex-col h-full">
      <div>
        <div className="text-2xl font-bold text-gray-900 mb-1">
          {project.title}
        </div>
        <div className="text-gray-400 text-xs font-semibold mb-4 tracking-wide">
          {project.subtitle}
        </div>
        <div className="w-full flex justify-center items-center mb-6">
          <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center w-full shadow-sm">
            <Image
              src={project.image}
              height={120}
              width={220}
              className="object-contain h-24 w-full"
              alt={project.title}
            />
          </div>
        </div>
        <div className="text-gray-700 mb-6 text-sm leading-relaxed">
          {project.description}
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-full text-sm font-semibold text-gray-900 bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-sm"
        >
          <Github className="w-4 h-4" />
        </a>
      </div>
    </CardContent>
  </Card>
))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-24 lg:py-32 px-2 sm:px-4 lg:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50" />
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-2 sm:px-4 py-1 sm:py-2 mb-4 sm:mb-8 text-xs sm:text-sm font-medium text-gray-700">
            <Zap className="w-4 h-4" />
            Ready to Collaborate
          </div>
          <h2 className="text-2xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-4 sm:mb-8 leading-tight">
            Let&apos;s Create
            <span className="block">Something Amazing</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Have a groundbreaking idea? Let&apos;s collaborate to bring your vision to life with cutting-edge technology and award-winning design.
          </p>

        </div>
      </section>


    </div>
      </motion.div>
    </>
  )
}
