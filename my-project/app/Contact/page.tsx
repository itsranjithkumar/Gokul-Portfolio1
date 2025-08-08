"use client"

import { useState } from "react"
import { Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 font-light">
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        {/* Form Card */}
        <Card className="border border-gray-200 shadow-lg">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-sm font-medium text-black uppercase tracking-wide">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="h-12 border-0 border-b-2 border-gray-200 rounded-none bg-transparent focus:border-black focus:ring-0 px-0 text-black placeholder:text-gray-400"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm font-medium text-black uppercase tracking-wide">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="h-12 border-0 border-b-2 border-gray-200 rounded-none bg-transparent focus:border-black focus:ring-0 px-0 text-black placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Company and Subject Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="company" className="text-sm font-medium text-black uppercase tracking-wide">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                    className="h-12 border-0 border-b-2 border-gray-200 rounded-none bg-transparent focus:border-black focus:ring-0 px-0 text-black placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="subject" className="text-sm font-medium text-black uppercase tracking-wide">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this regarding?"
                    className="h-12 border-0 border-b-2 border-gray-200 rounded-none bg-transparent focus:border-black focus:ring-0 px-0 text-black placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-3">
                <Label htmlFor="message" className="text-sm font-medium text-black uppercase tracking-wide">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  className="border-0 border-b-2 border-gray-200 rounded-none bg-transparent focus:border-black focus:ring-0 px-0 py-4 text-black placeholder:text-gray-400 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <Button 
                  type="submit" 
                  className="w-full h-14 bg-black hover:bg-gray-800 text-white font-medium text-lg tracking-wide uppercase transition-colors duration-200"
                >
                  <Send className="h-5 w-5 mr-3" />
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer Text */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 font-light">
            We typically respond within 24 hours
          </p>
        </div>
      </div>
    </div>
  )
}
