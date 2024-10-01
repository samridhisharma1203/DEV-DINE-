'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChefHat, Code, Trophy, Gift, User, HelpCircle, Search, Send, MessageCircle, Download, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const SupportAboutLegal = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value })
  }

  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', contactForm)
    // Reset form after submission
    setContactForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-yellow-100">
      <header className="bg-gradient-to-r from-blue-400 to-yellow-300 p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-gray-800" />
            <span className="text-2xl font-bold text-gray-800">DEV DINE</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              {[
                { icon: <Code className="h-4 w-4" />, label: 'Home' },
                { icon: <Trophy className="h-4 w-4" />, label: 'Subscriptions' },
                { icon: <Gift className="h-4 w-4" />, label: 'Dashboard' },
                { icon: <User className="h-4 w-4" />, label: 'Profile' },
                { icon: <HelpCircle className="h-4 w-4" />, label: 'Support' },
              ].map(({ icon, label }) => (
                <li key={label}>
                  <Button variant="ghost" className="text-gray-800 hover:text-blue-600">
                    {icon}
                    <span className="ml-2 hidden md:inline">{label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Support, About Us, and Legal Information</h1>

        <Tabs defaultValue="support" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="support">Support & FAQ</TabsTrigger>
            <TabsTrigger value="about">About Us</TabsTrigger>
            <TabsTrigger value="legal">Legal Information</TabsTrigger>
          </TabsList>

          <TabsContent value="support">
            <Card>
              <CardHeader>
                <CardTitle>Support and FAQ</CardTitle>
                <CardDescription>Find answers to common questions or contact our support team.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full"
                  />
                </div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I redeem my rewards?</AccordionTrigger>
                    <AccordionContent>
                      You can redeem your rewards in the Rewards section of your account. Each reward will have specific instructions for use.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                    <AccordionContent>
                      We accept all major credit cards, PayPal, and bank transfers for subscription payments.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How can I cancel my subscription?</AccordionTrigger>
                    <AccordionContent>
                      You can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <form onSubmit={handleContactFormSubmit} className="mt-8 space-y-4">
                  <h3 className="text-xl font-semibold">Contact Support</h3>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={handleContactFormChange}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={handleContactFormChange}
                    required
                  />
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={contactForm.subject}
                    onChange={handleContactFormChange}
                    required
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={contactForm.message}
                    onChange={handleContactFormChange}
                    required
                  />
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>

                <div className="mt-8">
                  <Button className="w-full">
                    <MessageCircle className="mr-2 h-4 w-4" /> Start Live Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>About DEV DINE</CardTitle>
                <CardDescription>Learn about our team, mission, and vision.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <section>
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p>
                      At DEV DINE, our mission is to blend the worlds of coding and culinary arts, creating a unique platform where developers can enhance their skills while earning delicious rewards. We believe in fostering a community that celebrates both technical prowess and gastronomic passion.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-2">Our Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { name: 'Jane Doe', role: 'CEO & Founder', image: '/placeholder.svg' },
                        { name: 'John Smith', role: 'CTO', image: '/placeholder.svg' },
                        { name: 'Alice Johnson', role: 'Head Chef', image: '/placeholder.svg' },
                      ].map((member) => (
                        <div key={member.name} className="text-center">
                          <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-2" />
                          <h4 className="font-semibold">{member.name}</h4>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                    <p>Email: contact@devdine.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <div className="flex space-x-4 mt-2">
                      <Facebook className="h-6 w-6 text-blue-600 cursor-pointer" />
                      <Twitter className="h-6 w-6 text-blue-400 cursor-pointer" />
                      <Linkedin className="h-6 w-6 text-blue-800 cursor-pointer" />
                      <Instagram className="h-6 w-6 text-pink-600 cursor-pointer" />
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-2">Newsletter Signup</h3>
                    <form className="flex gap-2">
                      <Input type="email" placeholder="Enter your email" className="flex-grow" />
                      <Button type="submit">Subscribe</Button>
                    </form>
                  </section>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="legal">
            <Card>
              <CardHeader>
                <CardTitle>Legal Information</CardTitle>
                <CardDescription>Review our terms of service and privacy policy.</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Terms of Service</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">
                        By using DEV DINE, you agree to abide by our terms of service. These terms outline user responsibilities, payment terms, and dispute resolution procedures.
                      </p>
                      <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" /> Download Full Terms
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Privacy Policy</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">
                        Our privacy policy details how we collect, use, and protect your personal information. We are committed to maintaining the confidentiality and security of your data.
                      </p>
                      <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" /> Download Privacy Policy
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Cookie Policy</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        We use cookies to enhance your browsing experience and analyze site traffic. You can manage your cookie preferences in your browser settings.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 DEV DINE. All rights reserved.</p>
            <nav className="mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-blue-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-300">Contact Us</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SupportAboutLegal