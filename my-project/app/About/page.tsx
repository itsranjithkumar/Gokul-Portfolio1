"use client";

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Brain, Database, Heart, Mail, MapPin, Users, Zap, Code, Lightbulb, Target, TrendingUp, BookOpen, Briefcase, Calendar, Star } from 'lucide-react'
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { PointerAlex } from "./PointerAlex"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Available for new opportunities
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-gray-900">
                  Hello, I'm{" "}
                  <PointerAlex>Alex</PointerAlex>
                </h1>
                <TextGenerateEffect
                  words={`Transforming complex data into actionable insights and building intelligent systems that learn, adapt, and evolve. I bridge the gap between cutting-edge AI research and real-world applications that drive business value.`}
                  className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="border-gray-300 text-gray-700">
                  <Brain className="w-3 h-3 mr-1" />
                  AI/ML Engineer
                </Badge>
                <Badge variant="outline" className="border-gray-300 text-gray-700">
                  <Database className="w-3 h-3 mr-1" />
                  Data Scientist
                </Badge>
                <Badge variant="outline" className="border-gray-300 text-gray-700">
                  <Zap className="w-3 h-3 mr-1" />
                  Innovation Catalyst
                </Badge>
              </div>
              <div className="flex gap-4">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in touch
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full">
                  View my work
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl transform rotate-3" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-400 rounded-3xl transform -rotate-2" />
                <Image
                  src="/gokul.png"
                  alt="Profile"
                  width={500}
                  height={600}
                  className="relative rounded-3xl shadow-2xl object-cover w-full aspect-[4/5]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Minimal & Elegant */}
      <section className="py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-gray-100 rounded-full px-6 py-2 mb-8">
              <span className="text-sm font-medium text-gray-600">About Me</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-light text-black mb-8">
              Who I <span className="font-medium text-gray-700">Am</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-16 mb-20">
            {/* Left Column - Main Story */}
            <div className="lg:col-span-3 space-y-12">
              {/* Introduction */}
              <div className="space-y-6">
                <h3 className="text-3xl font-light text-black">Hello, I'm Alex</h3>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p className="text-gray-700">
                    I'm a passionate AI researcher and data scientist with over 5 years of experience 
                    transforming complex data into actionable insights. My journey began with a curiosity 
                    about how machines could learn and adapt, leading me to pursue advanced degrees in 
                    computer science and machine learning.
                  </p>
                  <p className="text-gray-600">
                    Today, I specialize in building intelligent systems that bridge the gap between 
                    cutting-edge research and real-world applications. I believe in creating AI solutions 
                    that are not just technically sophisticated, but also ethical, accessible, and 
                    genuinely useful for businesses and society.
                  </p>
                </div>
              </div>

              {/* Philosophy */}
              <div className="border-l-4 border-gray-300 pl-8 space-y-4">
                <h4 className="text-xl font-medium text-black">My Approach</h4>
                <p className="text-gray-700 italic text-lg leading-relaxed">
                  "The best algorithms are those that learn not just from data, but from human insight 
                  and domain expertise. I combine cutting-edge machine learning with deep business 
                  understanding to create solutions that truly matter."
                </p>
              </div>

              {/* Current Focus */}
              <div className="space-y-6">
                <h4 className="text-xl font-medium text-black">What I'm Working On</h4>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Currently, I'm leading recommendation systems at Google AI, where I develop algorithms 
                    that serve millions of users daily. My work focuses on creating personalized experiences 
                    while maintaining user privacy and algorithmic fairness.
                  </p>
                  <p className="text-gray-600">
                    I'm also passionate about democratizing AI education and regularly contribute to 
                    open-source projects that make machine learning more accessible to developers 
                    and researchers worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Background */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-medium text-black mb-6">Education</h4>
                  <div className="space-y-4">
                    <div className="border-l-2 border-black pl-4">
                      <p className="font-medium text-gray-900">PhD Computer Science</p>
                      <p className="text-sm text-gray-600">Stanford University, 2018</p>
                      <p className="text-xs text-gray-500 mt-1">Dissertation: Deep Learning for Recommendation Systems</p>
                    </div>
                    <div className="border-l-2 border-gray-400 pl-4">
                      <p className="font-medium text-gray-800">MS Machine Learning</p>
                      <p className="text-sm text-gray-600">MIT, 2014</p>
                      <p className="text-xs text-gray-500 mt-1">Focus: Neural Networks and Optimization</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-black mb-6">Experience</h4>
                  <div className="space-y-4">
                    <div className="border-l-2 border-black pl-4">
                      <p className="font-medium text-gray-900">Senior ML Engineer</p>
                      <p className="text-sm text-gray-600">Google AI, 2020-Present</p>
                      <p className="text-xs text-gray-500 mt-1">Leading recommendation algorithms for 50M+ users</p>
                    </div>
                    <div className="border-l-2 border-gray-400 pl-4">
                      <p className="font-medium text-gray-800">Data Scientist</p>
                      <p className="text-sm text-gray-600">Meta Reality Labs, 2018-2020</p>
                      <p className="text-xs text-gray-500 mt-1">AR/VR machine learning and computer vision</p>
                    </div>
                    <div className="border-l-2 border-gray-300 pl-4">
                      <p className="font-medium text-gray-700">Research Intern</p>
                      <p className="text-sm text-gray-600">DeepMind, Summer 2017</p>
                      <p className="text-xs text-gray-500 mt-1">Reinforcement learning research</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-lg font-medium text-black mb-6">Expertise</h4>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-gray-800 mb-3">Technical Skills</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">Machine Learning & AI</span>
                        <span className="text-xs text-gray-500">Expert</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">Deep Learning</span>
                        <span className="text-xs text-gray-500">Advanced</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">Data Engineering</span>
                        <span className="text-xs text-gray-500">Advanced</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">Research & Development</span>
                        <span className="text-xs text-gray-500">Expert</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-800 mb-3">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Python</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">TensorFlow</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">PyTorch</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">AWS</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Docker</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Kubernetes</span>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>


        </div>
      </section>
    </div>
  )
}
