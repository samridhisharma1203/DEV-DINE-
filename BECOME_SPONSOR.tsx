import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Building2, Download, Mail, Phone, Globe, Users, Calendar, Award, MessageSquare, Star, Zap, Trophy } from 'lucide-react'

export default function BecomeOurSponsor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <header className="bg-gradient-to-r from-yellow-300 via-blue-300 to-purple-300 py-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-0 right-0 w-60 h-60 bg-blue-400 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-purple-400 rounded-full"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-2 relative z-10">Become Our Sponsor</h1>
        <p className="text-xl md:text-2xl text-blue-700 relative z-10">
          Partner with Developers Dine to showcase your brand and support the tech community.
        </p>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <Card className="flex-grow lg:w-2/3 shadow-lg border-t-4 border-blue-500">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-700">Sponsorship Application</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-8">
                <section>
                  <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
                    <Building2 className="mr-2 text-yellow-500" />
                    Company Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input id="company-name" placeholder="Enter company name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-person">Contact Person</Label>
                      <Input id="contact-person" placeholder="Enter contact person's name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter email address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter phone number" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="website">Company Website</Label>
                      <Input id="website" type="url" placeholder="Enter company website" />
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
                    <Users className="mr-2 text-green-500" />
                    Company Overview
                  </h2>
                  <div className="space-y-2">
                    <Label htmlFor="company-description">Briefly describe your company and what it does</Label>
                    <Textarea id="company-description" placeholder="Enter company description" className="h-24" />
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
                    <Star className="mr-2 text-purple-500" />
                    Sponsorship Interest
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <Label className="mb-2 block">Which type of sponsorship are you interested in? (Select all that apply)</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {['Event Sponsorship', 'Webinar Sponsorship', 'Coding Competition Sponsorship', 'General Partnership', 'Custom Sponsorship'].map((type) => (
                          <div key={type} className="flex items-center space-x-2">
                            <Checkbox id={`sponsorship-${type}`} />
                            <Label htmlFor={`sponsorship-${type}`}>{type}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label className="mb-2 block">Which event type are you interested in? (If applicable)</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {['Coding Competition', 'Webinar', 'Workshop', 'Hackathon'].map((type) => (
                          <div key={type} className="flex items-center space-x-2">
                            <Checkbox id={`event-${type}`} />
                            <Label htmlFor={`event-${type}`}>{type}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
                    <Trophy className="mr-2 text-yellow-500" />
                    Sponsorship Packages
                  </h2>
                  <div className="space-y-4">
                    <RadioGroup defaultValue="custom">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="platinum" id="platinum" />
                        <Label htmlFor="platinum">Platinum - ₹5,00,000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="gold" id="gold" />
                        <Label htmlFor="gold">Gold - ₹3,00,000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="silver" id="silver" />
                        <Label htmlFor="silver">Silver - ₹1,00,000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="custom" id="custom" />
                        <Label htmlFor="custom">Custom Package</Label>
                      </div>
                    </RadioGroup>
                    <div className="space-y-2">
                      <Label htmlFor="custom-package">Custom Package Details (if applicable)</Label>
                      <Textarea id="custom-package" placeholder="Describe your custom package requirements" className="h-24" />
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
                    <Zap className="mr-2 text-orange-500" />
                    Benefits and Involvement
                  </h2>
                  <div className="space-y-2">
                    <Label className="mb-2 block">What specific benefits or exposure are you looking for? (Select all that apply)</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        'Logo Placement on Event Materials',
                        'Speaking Opportunities',
                        'Social Media Mentions',
                        'Website Banner Ads',
                        'Newsletter Features',
                        'Exclusive Access to Attendees',
                        'Custom Marketing Activities'
                      ].map((benefit) => (
                        <div key={benefit} className="flex items-center space-x-2">
                          <Checkbox id={`benefit-${benefit}`} />
                          <Label htmlFor={`benefit-${benefit}`}>{benefit}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
                    <MessageSquare className="mr-2 text-pink-500" />
                    Additional Information
                  </h2>
                  <div className="space-y-2">
                    <Label htmlFor="additional-info">Do you have any specific requests or ideas for how you would like to be involved?</Label>
                    <Textarea id="additional-info" placeholder="Enter any additional information or requests" className="h-24" />
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
                    <Calendar className="mr-2 text-indigo-500" />
                    Contact and Next Steps
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <Label className="mb-2 block">How would you prefer to be contacted for follow-up?</Label>
                      <RadioGroup defaultValue="email">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="contact-email" />
                          <Label htmlFor="contact-email">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="contact-phone" />
                          <Label htmlFor="contact-phone">Phone</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="virtual" id="contact-virtual" />
                          <Label htmlFor="contact-virtual">Virtual Meeting</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="in-person" id="contact-in-person" />
                          <Label htmlFor="contact-in-person">In-Person Meeting</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div>
                      <Label className="mb-2 block">Preferred Contact Time</Label>
                      <RadioGroup defaultValue="morning">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="morning" id="time-morning" />
                          <Label htmlFor="time-morning">Morning</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="afternoon" id="time-afternoon" />
                          <Label htmlFor="time-afternoon">Afternoon</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="evening" id="time-evening" />
                          <Label htmlFor="time-evening">Evening</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="consent" />
                    <Label htmlFor="consent">I agree to be contacted by Developers Dine regarding sponsorship opportunities.</Label>
                  </div>
                </section>

                <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white transition-all duration-300 transform hover:scale-105">Submit Application</Button>
              </form>
            </CardContent>
          </Card>

          <aside className="lg:w-1/3 space-y-8">
            <Card className="shadow-lg border-t-4 border-yellow-500">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-700">Sponsorship Packages</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      <span className="flex items-center">
                        <Trophy className="mr-2 text-yellow-500" />
                        Platinum Package
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Prime logo placement on all event materials and website</li>
                        <li>Exclusive speaking slot during major events or webinars</li>
                        <li>Dedicated social media posts and mentions on all platforms</li>
                        <li>Prominent banner ads on the website's main pages</li>
                        <li>Highlighted features in event newsletters</li>
                        <li>Custom marketing activities and interactions</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      <span className="flex items-center">
                        <Award className="mr-2 text-yellow-400" />
                        Gold Package
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Visible logo placement on event materials and website</li>
                        <li>Social media mentions and posts about the sponsor</li>
                        <li>Website banner ads on specific event pages</li>
                        <li>Inclusion in event newsletters</li>
                        <li>Opportunities to interact with attendees during events</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">
                      <span className="flex items-center">
                        <Star className="mr-2 text-gray-400" />
                        Silver Package
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Featured logo placement on event materials and website</li>
                        <li>Recognition in social media posts</li>
                        <li>Basic inclusion in newsletters</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">
                      <span className="flex items-center">
                        <Zap className="mr-2 text-purple-500" />
                        Custom Package
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm">
                        Work with Developers Dine to create a unique sponsorship experience that aligns with your specific goals and needs. We'll tailor a package just for you!
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-green-500">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-700">Sponsor Testimonials</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative">
                    <img src="/placeholder.svg?height=150&width=300" alt="TechCorp event" className="w-full h-40 object-cover rounded-lg mb-2" />
                    <blockquote className="italic border-l-4 border-yellow-400 pl-4 py-2 bg-yellow-50 rounded-r-lg">
                      "Partnering with Developers Dine has been a game-changer for our brand visibility in the tech community."
                      <footer className="text-right text-sm text-gray-500">- TechCorp CEO</footer>
                    </blockquote>
                  </div>
                  <div className="relative">
                    <img src="/placeholder.svg?height=150&width=300" alt="InnovateSoft workshop" className="w-full h-40 object-cover rounded-lg mb-2" />
                    <blockquote className="italic border-l-4 border-blue-400 pl-4 py-2 bg-blue-50 rounded-r-lg">
                      "The quality of developers we've connected with through Developers Dine events is unparalleled."
                      <footer className="text-right text-sm text-gray-500">- InnovateSoft CTO</footer>
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-purple-500">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-700">FAQs</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What are the benefits of sponsorship?</AccordionTrigger>
                    <AccordionContent>
                      Sponsorship benefits include brand visibility, access to top tech talent, speaking opportunities, and more. Each package offers unique advantages tailored to your goals.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How long does sponsorship last?</AccordionTrigger>
                    <AccordionContent>
                      Sponsorship duration varies based on the package and event type. Typically, it ranges from single events to year-long partnerships. We can customize the duration to fit your needs.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can we customize our sponsorship package?</AccordionTrigger>
                    <AccordionContent>
                      We offer custom sponsorship packages tailored to your specific goals and budget. Please indicate your preferences in the application form, and we'll work with you to create the perfect package.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-red-500">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-700">Media Kit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Download our comprehensive media kit for detailed information about our audience, reach, and sponsorship opportunities.</p>
                <Button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white transition-all duration-300 transform hover:scale-105">
                  <Download className="mr-2 h-4 w-4" /> Download Media Kit
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="mailto:sponsors@developersdine.com" className="flex items-center hover:text-yellow-300 transition-colors">
              <Mail className="mr-2 h-4 w-4" />
              sponsors@developersdine.com
            </a>
            <a href="tel:+911234567890" className="flex items-center hover:text-yellow-300 transition-colors">
              <Phone className="mr-2 h-4 w-4" />
              +91 123 456 7890
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-yellow-300 transition-colors transform hover:scale-110">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors transform hover:scale-110">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors transform hover:scale-110">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors transform hover:scale-110">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}