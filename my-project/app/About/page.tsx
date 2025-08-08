"use client";
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Brain, Database, Mail, Zap, Code, TrendingUp, Briefcase, Star, GraduationCap, Building, Rocket } from 'lucide-react'
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { PointerAlex } from "./PointerAlex"
import Navbar from "@/components/ui/Navbar";
import { AnimatedAboutImage } from "./AnimatedAboutImage";
import { LoaderOne } from "@/components/ui/loader";
import { motion } from "framer-motion";

export default function Component() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <Navbar />
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
                  Hello, I&apos;m{" "}
                  <PointerAlex>Gokul</PointerAlex>
                </h1>
                <TextGenerateEffect
                  words={`Designing and developing scalable AI backend systems, robust APIs, and production-ready ML infrastructure. I specialize in distributed systems, MLOps, and building the platforms that power intelligent products at scale.`}
                  className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="border-gray-300 text-gray-700">
                  <Code className="w-3 h-3 mr-1" />
                  AI Backend Developer
                </Badge>
                <Badge variant="outline" className="border-gray-300 text-gray-700">
                  <Database className="w-3 h-3 mr-1" />
                  Infra & MLOps Engineer
                </Badge>
                <Badge variant="outline" className="border-gray-300 text-gray-700">
                  <Zap className="w-3 h-3 mr-1" />
                  Distributed Systems
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

      {/* About Section */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-20">
            <div className="inline-block bg-gray-100 rounded-full px-6 py-2 mb-8">
              <span className="text-sm font-medium text-gray-600">About Me</span>
            </div>
            <div className="flex flex-col items-center justify-center md:flex-row md:justify-center gap-4 mb-8">
  <h2 className="text-5xl md:text-7xl font-light text-black text-center md:text-left mb-0">
    Who I <span className="font-medium text-gray-700">Am</span>
  </h2>
  <span className="mt-2 md:mt-0 md:ml-4">
    <LoaderOne />
  </span>
</div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center md:items-start mb-20">
            {/* Left: About Image */}
            <motion.div
              className="flex-1 w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <AnimatedAboutImage
                src="/gokul.png"
                alt="Profile"
              />
            </motion.div>
            {/* Right: About Text */}
            <motion.div
              className="flex-1 w-full md:w-1/2 space-y-8 text-left"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-light text-black">Hello, I&apos;m Gokul</h3>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p className="text-gray-700">
                    I&apos;m an AI Backend Developer passionate about building the robust, scalable, and efficient foundations that power modern AI products. My journey began with a drive to make machine learning not just smart, but reliably available in production at scale.
                  </p>
                  <p className="text-gray-600">
                    Over the last several years, I&apos;ve architected distributed systems, designed high-performance APIs, and automated ML workflows for global tech companies. I love bridging the gap between research and real-world impact by focusing on infrastructure, reliability, and developer experience.
                  </p>
                </div>
              </div>
              <div className="border-l-4 border-gray-300 pl-8 space-y-4">
                <h4 className="text-xl font-medium text-black">My Approach</h4>
                <p className="text-gray-700 italic text-lg leading-relaxed">
                  &quot;Great AI is only as good as the systems it runs on. I believe in building infrastructure that empowers teams to deploy, monitor, and iterate on ML models quickly, safely, and at scale.&quot;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-gray-100 rounded-full px-6 py-2 mb-8">
              <span className="text-sm font-medium text-gray-600">Background</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-light text-black mb-8">
              My <span className="font-medium text-gray-700">Journey</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Education */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-light text-black">Education (AI & Backend)</h3>
              </div>

              <div className="space-y-8">
                {/* PhD */}
                <div className="relative pl-8 border-l-2 border-gray-900">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-900 rounded-full"></div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">PhD in Computer Science</h4>
                        <p className="text-gray-600 font-medium">Stanford University</p>
                        <span className="text-xs text-gray-500">Focus: Distributed Systems, Scalable AI Infrastructure</span>
                      </div>
                      <Badge variant="outline" className="text-xs">2014-2018</Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      <strong>Dissertation:</strong> &quot;Deep Learning for Recommendation Systems: 
                      A Novel Approach to Personalization&quot;
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Machine Learning</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Deep Learning</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Recommendation Systems</span>
                    </div>
                  </div>
                </div>

                {/* Masters */}
                <div className="relative pl-8 border-l-2 border-gray-400">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">MS in Machine Learning</h4>
                        <p className="text-gray-600 font-medium">MIT</p>
                        <span className="text-xs text-gray-500">Focus: MLOps, Model Deployment, Cloud Engineering</span>
                      </div>
                      <Badge variant="outline" className="text-xs">2012-2014</Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Focus on Neural Networks, Optimization, and Statistical Learning Theory
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Neural Networks</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Optimization</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Statistics</span>
                    </div>
                  </div>
                </div>

                {/* Bachelor's */}
                <div className="relative pl-8 border-l-2 border-gray-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full"></div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">BS in Computer Science</h4>
                        <p className="text-gray-600 font-medium">UC Berkeley</p>
                        <span className="text-xs text-gray-500">Focus: Backend Engineering, Algorithms</span>
                      </div>
                      <Badge variant="outline" className="text-xs">2008-2012</Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Summa Cum Laude, Phi Beta Kappa Honor Society
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Algorithms</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Data Structures</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Software Engineering</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-light text-black">Experience (AI Backend)</h3>
              </div>

              <div className="space-y-8">
                {/* Current Role */}
                <div className="relative pl-8 border-l-2 border-gray-900">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-900 rounded-full"></div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">Senior AI Backend Engineer</h4>
                        <p className="text-gray-600 font-medium flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          Google AI
                        </p>
                      </div>
                      <Badge className="bg-green-100 text-green-800 text-xs">2020-Present</Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      Led the design and deployment of large-scale, distributed backend systems for AI-powered recommendations serving 50M+ users daily. Developed robust APIs and automated ML pipelines that improved reliability and reduced operational overhead.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Star className="w-3 h-3" />
                        Led backend/infra team of 8 engineers across 3 time zones
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <TrendingUp className="w-3 h-3" />
                        Improved system throughput by 18% and reduced latency using advanced caching and orchestration
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Award className="w-3 h-3" />
                        Google AI Backend Excellence Award 2022
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">TensorFlow</span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">PyTorch</span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">Kubernetes</span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">GCP</span>
                    </div>
                  </div>
                </div>

                {/* Previous Role */}
                <div className="relative pl-8 border-l-2 border-gray-400">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">Backend Software Engineer, AI</h4>
                        <p className="text-gray-600 font-medium flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          Meta Reality Labs
                        </p>
                      </div>
                      <Badge variant="outline" className="text-xs">2018-2020</Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      Built and maintained backend APIs and real-time data pipelines for AR/VR AI features. Supported scalable model deployment and monitoring in production environments.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Rocket className="w-3 h-3" />
                        Shipped 3 major backend features supporting AR to 100M+ users
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Code className="w-3 h-3" />
                        Reduced backend API latency by 40% through infra optimizations
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">Computer Vision</span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">OpenCV</span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">PyTorch</span>
                    </div>
                  </div>
                </div>

                {/* Internship */}
                <div className="relative pl-8 border-l-2 border-gray-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full"></div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">Backend Engineering Intern (AI)</h4>
                        <p className="text-gray-600 font-medium flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          DeepMind
                        </p>
                      </div>
                      <Badge variant="outline" className="text-xs">Summer 2017</Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      Developed backend tools and infra for reinforcement learning experiments and large-scale data collection. Enabled reproducible research and robust data pipelines.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">Reinforcement Learning</span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">Game Theory</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="py-12 sm:py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-block bg-gray-100 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
              <span className="text-xs sm:text-sm font-medium text-gray-600">Core Backend & AI Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-light text-black mb-6 sm:mb-8">
              Backend, MLOps & <span className="font-medium text-gray-700">AI Infra</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
            {/* Core Expertise */}
            <Card className="p-4 sm:p-6 lg:p-8 border-0 shadow-sm bg-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">AI Infrastructure & Backend</CardTitle>
              </div>
              <CardContent className="p-0 space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">API Development (REST/gRPC)</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Distributed Systems</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Cloud Infrastructure (AWS/GCP)</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      ))}
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">MLOps & Automation</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      ))}
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Science */}
            <Card className="p-4 sm:p-6 lg:p-8 border-0 shadow-sm bg-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Data Engineering</CardTitle>
              </div>
              <CardContent className="p-0 space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Database Design</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Streaming Data Pipelines</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      ))}
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Big Data (Spark, Kafka)</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      ))}
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Monitoring & Observability</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      ))}
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Engineering */}
            <Card className="p-4 sm:p-6 lg:p-8 border-0 shadow-sm bg-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Engineering</CardTitle>
              </div>
              <CardContent className="p-0 space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Python</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Kubernetes & Docker</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      ))}
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">CI/CD & DevOps</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      ))}
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">System Design</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      ))}
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>
    </div>
      </motion.div>
    </>
  )
}
