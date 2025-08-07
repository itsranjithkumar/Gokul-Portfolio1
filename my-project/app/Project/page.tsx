"use client"

import { ArrowRight, ExternalLink, Github, Star, Award, Zap, Eye } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { PointerHighlight } from "@/components/ui/pointer-highlight"
import { Card, CardContent } from "@/components/ui/card"
import { PinContainer } from "@/components/ui/3d-pin"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { useState, useEffect } from 'react'

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    subtitle: "Next.js • TypeScript • Stripe",
    description: "A modern e-commerce platform with seamless checkout experience and inventory management.",
    longDescription: "Revolutionary e-commerce solution featuring AI-powered recommendations, real-time inventory tracking, and seamless payment processing. Built with cutting-edge technology stack for optimal performance.",
    image: "/modern-ecommerce-interface.png",
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
    image: "/task-management-dashboard.png",
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
    image: "/weather-analytics-dashboard.png",
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
    image: "/placeholder-414pi.png",
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
    image: "/ai-content-generator-interface.png",
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
    image: "/fitness-tracking-app.png",
    tags: ["Flutter", "Dart", "SQLite", "Charts"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    stats: { views: "9.8K", stars: "1.9K", forks: "345" }
  }
]

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
    <div className="min-h-screen bg-white overflow-hidden">
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
      <section className="relative pt-32 pb-20 px-6">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 tracking-tight leading-none">
  <PointerHighlight>
    Digital Creations Showcase
  </PointerHighlight>
</h1>
<p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
  Explore my portfolio of digital products, web apps, and creative solutions—built with a passion for design, technology, and innovation.
</p>
          
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Featured Work
            </h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full" />
          </div>
          
          <div className="space-y-40">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-20`}>
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
                    <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 mb-4 text-xs font-medium text-gray-600">
                      #{index + 1} Featured Project
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xl text-gray-500 mb-6 font-medium">
                      {project.subtitle}
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {project.longDescription}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <HoverBorderGradient
  as="a"
  className="rounded-full bg-white text-black flex items-center gap-2 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
  className="rounded-full bg-white text-black flex items-center gap-2 px-8 py-3 text-lg font-semibold border-2 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
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
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              More Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore additional projects showcasing diverse technologies and creative solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <CardContainer key={project.id} className="inter-var">
                <CardBody className="bg-white relative group/card border-gray-200 w-auto sm:w-[24rem] h-auto rounded-2xl p-8 border-2 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="absolute top-4 right-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2 text-xs text-gray-500">
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
                  
                  <CardItem
                    translateZ="50"
                    className="text-2xl font-bold text-gray-900 mb-3"
                  >
                    {project.title}
                  </CardItem>
                  
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-500 text-sm mb-3 font-medium"
                  >
                    {project.subtitle}
                  </CardItem>
                  
                  <CardItem translateZ="100" className="w-full mt-2 mb-6">
                    <div className="relative overflow-hidden rounded-xl group">
                      <Image
                        src="/project.png"
                        height="200"
                        width="400"
                        className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        alt={project.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </CardItem>
                  
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-700 mb-6 text-sm leading-relaxed"
                  >
                    {project.description}
                  </CardItem>
                  
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
                  
                  <div className="flex gap-3">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.live}
                      target="_blank"
                      className="flex-1 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:scale-105 text-center"
                    >
                      View Live <ExternalLink className="w-3 h-3 inline ml-1" />
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.github}
                      target="_blank"
                      className="px-4 py-3 rounded-xl text-sm font-semibold text-gray-900 bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50" />
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-8 text-sm font-medium text-gray-700">
            <Zap className="w-4 h-4" />
            Ready to Collaborate
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Let's Create
            <span className="block">Something Amazing</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Have a groundbreaking idea? Let's collaborate to bring your vision to life with cutting-edge technology and award-winning design.
          </p>
          <HoverBorderGradient
  as="a"
  className="rounded-full bg-white text-black flex items-center gap-3 px-12 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
  {...{
    href: "/contact"
  }}
>
  Start a Project <ArrowRight className="w-5 h-5" />
</HoverBorderGradient>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 mb-6 md:mb-0 text-center md:text-left">
  <div className="text-2xl font-bold text-gray-900 mb-2">Portfolio</div>
  <div>© 2025 All rights reserved. Crafted with passion.</div>
</div>
            <div className="flex space-x-6">
              <Link href="https://github.com" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="mailto:hello@example.com" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
