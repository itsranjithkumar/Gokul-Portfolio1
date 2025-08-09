"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Navbar from "@/components/ui/Navbar";
import { LoaderOne } from "@/components/ui/loader";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-neutral-700">
      <section className="relative py-20 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-32"
          >
            <h1 className="text-[60px] md:text-[120px] lg:text-[180px] font-bold leading-none tracking-tight mb-8 flex items-center gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-neutral-800"
              >
                Let&apos;s
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-neutral-800 flex items-center gap-4"
              >
                work
                <span className="inline-block align-middle">
                  <LoaderOne />
                </span>
              </motion.div>
            </h1>


            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-neutral-700 max-w-2xl font-light"
            >
              Have a project in mind? Let&apos;s create something extraordinary together.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-neutral-200 border border-neutral-400 rounded-xl px-6 py-4 text-lg text-neutral-700 placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-all"
                />
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-neutral-200 border border-neutral-400 rounded-xl px-6 py-4 text-lg text-neutral-700 placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-all"
                />
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  rows={6}
                  placeholder="Tell me about your project"
                  className="w-full bg-neutral-200 border border-neutral-400 rounded-xl px-6 py-4 text-lg text-neutral-700 placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-lg font-medium"
              >
                Send Message
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </motion.button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
                  { icon: Phone, label: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890" },
                  { icon: MapPin, label: "Location", value: "San Francisco, CA" }
                ].map((item) => (
                  <motion.div 
                    key={item.label}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-6 bg-neutral-200 border border-neutral-400 rounded-xl p-6 hover:border-neutral-500 transition-all"
                  >
                    <div className="p-3 bg-neutral-300 rounded-lg">
                      <item.icon className="w-6 h-6 text-neutral-400" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-lg text-neutral-700 hover:text-neutral-900 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg text-neutral-700">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links - Animated FloatingDock Style */}
              <div>
                <h3 className="text-sm text-neutral-500 mb-4">Follow Me</h3>
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href="https://github.com/gokul-1998"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-neutral-200 border border-neutral-400 rounded-xl hover:border-neutral-500 transition-all flex items-center justify-center"
                  >
                    <Github className="w-6 h-6 text-neutral-500" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/gokulakrishnan-muthusamy-141a78201"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: -8 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-neutral-200 border border-neutral-400 rounded-xl hover:border-neutral-500 transition-all flex items-center justify-center"
                  >
                    <Linkedin className="w-6 h-6 text-neutral-500" />
                  </motion.a>
                  <motion.a
                    href="mailto:gokulakrishnanm1998@gmail.com"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-neutral-200 border border-neutral-400 rounded-xl hover:border-neutral-500 transition-all flex items-center justify-center"
                  >
                    <Mail className="w-6 h-6 text-neutral-500" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
