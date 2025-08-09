"use client";
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Brain, Database, Mail, Zap, Code, TrendingUp, Briefcase, Star, GraduationCap, Building, Rocket, ArrowRight } from 'lucide-react'
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
                <a href="mailto:gokul.email@example.com">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Get in touch
                  </Button>
                </a>
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
                  src="/image.png"
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
                <h3 className="text-3xl font-light text-black">Education</h3>
              </div>

              <div className="space-y-8">
                {/* B.S. in Data Science and Applications */}
                <div className="relative pl-8 border-l-2 border-gray-900">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-900 rounded-full"></div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">B.S. in Data Science and Applications</h4>
                        <p className="text-gray-600 font-medium">Indian Institute of Technology, Madras</p>
                        <span className="text-xs text-gray-500">Jan 2021 - Present</span>
                      </div>
                      <Badge variant="outline" className="text-xs">CGPA: 8.5/10</Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Coursework in Data Science, Machine Learning, and Application Development.
                    </p>
                  </div>
                </div>
                {/* B.E. in Mechanical Engineering */}
                <div className="relative pl-8 border-l-2 border-gray-400">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">B.E. in Mechanical Engineering</h4>
                        <p className="text-gray-600 font-medium">Anna University, Chennai</p>
                        <span className="text-xs text-gray-500">Aug 2016 - June 2021</span>
                      </div>
                      <Badge variant="outline" className="text-xs">CGPA: 7.9/10</Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Studied core engineering, mathematics, and computational methods.
                    </p>
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
                <h3 className="text-3xl font-light text-black">Experience</h3>
              </div>

              <div className="space-y-8">
                {/* Senior Software Engineer - Articence Inc */}
                <div className="relative pl-8 border-l-2 border-gray-900">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-900 rounded-full"></div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">Senior Software Engineer</h4>
                        <p className="text-gray-600 font-medium flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          Articence Inc
                        </p>
                        <span className="text-xs text-gray-500">California (Remote)</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800 text-xs">Sept 2024 - Present</Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      Handling end to end integrations and stabilizing the development life cycle for the team. Working on CI/CD, optimizing the code, bug fixing and deployment to Production.
                    </p>
                  </div>
                </div>
                {/* Full Stack Developer - IIT Madras */}
                <div className="relative pl-8 border-l-2 border-gray-400">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">Full Stack Developer</h4>
                        <p className="text-gray-600 font-medium flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          IIT Madras
                        </p>
                        <span className="text-xs text-gray-500">Chennai</span>
                      </div>
                      <Badge variant="outline" className="text-xs">Jan 2024 - April 2024</Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      Entrusted with the development of a website for students and mentors on scale. Developed and deployed the application from scratch.
                    </p>
                  </div>
                </div>
                {/* Assistant Backend Engineer - Ascendeum Pvt Ltd */}
                <div className="relative pl-8 border-l-2 border-gray-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full"></div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">Assistant Backend Engineer</h4>
                        <p className="text-gray-600 font-medium flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          Ascendeum Pvt Ltd
                        </p>
                        <span className="text-xs text-gray-500">Delhi</span>
                      </div>
                      <Badge variant="outline" className="text-xs">May 2023 - Jan 2024</Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      Took responsibility to fix various bugs and optimizing the api performance for scale improving the overall efficiency by 15%
                    </p>
                  </div>
                </div>
                {/* Python Developer - NSPlus Technologies Pvt Ltd */}
                <div className="relative pl-8 border-l-2 border-gray-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-200 rounded-full"></div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">Python Developer</h4>
                        <p className="text-gray-600 font-medium flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          NSPlus Technologies Pvt Ltd
                        </p>
                        <span className="text-xs text-gray-500">Bangalore</span>
                      </div>
                      <Badge variant="outline" className="text-xs">Oct 2021 - April 2023</Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      Tasked with full-stack development of a resume matching algorithm for a specified JD in one project and integration of a backend API in another.
                    </p>
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
            <Card className="p-4 sm:p-6 lg:p-8 border-0 bg-white shadow-[6px_6px_0_0_rgba(0,0,0,0.18)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">AI Infrastructure & Backend</CardTitle>
              </div>
              <CardContent className="p-0 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
  <ArrowRight className="w-4 h-4 mr-2 text-gray-400" />
  <span className="text-sm text-gray-700">API Development (REST/gRPC)</span>
</div>
                  <div className="flex items-center">
  <ArrowRight className="w-4 h-4 mr-2 text-gray-400" />
  <span className="text-sm text-gray-700">Distributed Systems</span>
</div>
                  <div className="flex items-center">
  <ArrowRight className="w-4 h-4 mr-2 text-gray-400" />
  <span className="text-sm text-gray-700">Cloud Infrastructure (AWS/GCP)</span>
</div>
                  <div className="flex items-center">
  <ArrowRight className="w-4 h-4 mr-2 text-gray-400" />
  <span className="text-sm text-gray-700">MLOps & Automation</span>
</div>
                </div>
              </CardContent>
            </Card>

            {/* Data Science */}
            <Card className="p-4 sm:p-6 lg:p-8 border-0 bg-white shadow-[6px_6px_0_0_rgba(0,0,0,0.18)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Data Engineering</CardTitle>
              </div>
              <CardContent className="p-0 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
  <ArrowRight className="w-4 h-4 mr-2 text-gray-400" />
  <span className="text-sm text-gray-700">Database Design</span>
</div>
                  <div className="flex items-center">
  <ArrowRight className="w-4 h-4 mr-2 text-gray-400" />
  <span className="text-sm text-gray-700">Streaming Data Pipelines</span>
</div>
                  <div className="flex items-center">
  <ArrowRight className="w-4 h-4 mr-2 text-gray-400" />
  <span className="text-sm text-gray-700">Big Data (Spark, Kafka)</span>
</div>
                  <div className="flex items-center">
  <ArrowRight className="w-4 h-4 mr-2 text-gray-400" />
  <span className="text-sm text-gray-700">Monitoring & Observability</span>
</div>
                </div>
              </CardContent>
            </Card>

            {/* Engineering */}
            <Card className="p-4 sm:p-6 lg:p-8 border-0 bg-white shadow-[6px_6px_0_0_rgba(0,0,0,0.18)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Engineering</CardTitle>
              </div>
              <CardContent className="p-0 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
  <ArrowRight className="w-4 h-4 mr-2 text-gray-400" />
  <span className="text-sm text-gray-700">Python</span>
</div>
                  <div className="flex items-center">
  <ArrowRight className="w-4 h-4 mr-2 text-gray-400" />
  <span className="text-sm text-gray-700">Kubernetes & Docker</span>
</div>
                  <div className="flex items-center">
  <ArrowRight className="w-4 h-4 mr-2 text-gray-400" />
  <span className="text-sm text-gray-700">CI/CD & DevOps</span>
</div>
                  <div className="flex items-center">
  <ArrowRight className="w-4 h-4 mr-2 text-gray-400" />
  <span className="text-sm text-gray-700">System Design</span>
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
