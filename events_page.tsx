import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, ClockIcon, MapPinIcon, FilterIcon, BellIcon, HeartIcon } from "lucide-react"

// Mock data for events with sponsors
const events = [
  {
    id: 1,
    title: "Advanced AI Coding Challenge",
    date: "2023-06-15",
    time: "14:00",
    description: "Push your AI coding skills to the limit in this advanced challenge. Great prizes await!",
    image: "/placeholder.svg?height=200&width=400",
    type: "challenge",
    sponsor: { name: "TechCorp", logo: "/placeholder.svg?height=50&width=100" }
  },
  {
    id: 2,
    title: "Web Development Trends 2023",
    date: "2023-06-20",
    time: "10:00",
    description: "Join our expert panel as they discuss the latest trends in web development for 2023.",
    image: "/placeholder.svg?height=200&width=400",
    type: "webinar",
    sponsor: { name: "InnovateSoft", logo: "/placeholder.svg?height=50&width=100" }
  },
  {
    id: 3,
    title: "Mobile App Design Workshop",
    date: "2023-06-25",
    time: "09:00",
    description: "Learn the principles of effective mobile app design in this hands-on workshop.",
    image: "/placeholder.svg?height=200&width=400",
    type: "workshop",
    sponsor: { name: "CodeMasters", logo: "/placeholder.svg?height=50&width=100" }
  },
  {
    id: 4,
    title: "Blockchain Basics",
    date: "2023-07-01",
    time: "15:00",
    description: "Get started with blockchain technology in this beginner-friendly webinar.",
    image: "/placeholder.svg?height=200&width=400",
    type: "webinar",
    sponsor: { name: "DevTools Inc.", logo: "/placeholder.svg?height=50&width=100" }
  },
  {
    id: 5,
    title: "Code for Good Hackathon",
    date: "2023-07-10",
    time: "09:00",
    description: "Use your coding skills to make a difference in this charity hackathon event.",
    image: "/placeholder.svg?height=200&width=400",
    type: "challenge",
    sponsor: { name: "GoodTech Foundation", logo: "/placeholder.svg?height=50&width=100" }
  },
]

// Mock data for all sponsors (current and previous)
const allSponsors = [
  { name: "TechCorp", logo: "/placeholder.svg?height=50&width=100" },
  { name: "InnovateSoft", logo: "/placeholder.svg?height=50&width=100" },
  { name: "CodeMasters", logo: "/placeholder.svg?height=50&width=100" },
  { name: "DevTools Inc.", logo: "/placeholder.svg?height=50&width=100" },
  { name: "GoodTech Foundation", logo: "/placeholder.svg?height=50&width=100" },
  { name: "CloudSystems", logo: "/placeholder.svg?height=50&width=100" },
  { name: "DataDynamics", logo: "/placeholder.svg?height=50&width=100" },
  { name: "AIInnovate", logo: "/placeholder.svg?height=50&width=100" },
  { name: "CyberShield", logo: "/placeholder.svg?height=50&width=100" },
  { name: "RoboTech", logo: "/placeholder.svg?height=50&width=100" },
]

const SponsorSlider = () => {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 1) % allSponsors.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="py-8 overflow-hidden bg-gradient-to-r from-blue-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Our Valued Sponsors</h2>
        <div 
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${position * (100 / 5)}%)` }}
        >
          {[...allSponsors, ...allSponsors].map((sponsor, index) => (
            <div key={index} className="flex-shrink-0 w-1/5 px-4">
              <img src={sponsor.logo} alt={sponsor.name} className="h-16 object-contain mx-auto filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function EventsPage() {
  const [filter, setFilter] = useState("all")

  const filteredEvents = filter === "all" ? events : events.filter(event => event.type === filter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <header className="bg-gradient-to-r from-yellow-300 to-blue-300 py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">DEV DINE</h1>
          <p className="text-xl md:text-2xl text-blue-700">
            Upcoming Events
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Featured Event */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Featured Event</h2>
          <Card className="bg-white shadow-lg overflow-hidden border-l-4 border-pink-300">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:w-48" src="/placeholder.svg?height=300&width=300" alt="Featured event" />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-400 font-semibold">Coding Challenge</div>
                <h3 className="mt-1 text-2xl font-semibold text-blue-700">Global Coding Olympics 2023</h3>
                <p className="mt-2 text-gray-600">Join the world's largest coding competition and showcase your skills on a global stage. Amazing prizes and job opportunities await!</p>
                <div className="mt-4">
                  <span className="inline-flex items-center mr-4 text-sm text-gray-500">
                    <CalendarIcon className="mr-1 h-4 w-4" /> July 15-17, 2023
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-500">
                    <MapPinIcon className="mr-1 h-4 w-4" /> Online & In-person
                  </span>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">Register Now</Button>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Sponsored by:</span>
                    <img src="/placeholder.svg?height=30&width=60" alt="Sponsor logo" className="h-6" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Event Listings */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-blue-700">Upcoming Events</h2>
            <Tabs value={filter} onValueChange={setFilter}>
              <TabsList className="bg-blue-100">
                <TabsTrigger value="all" className="data-[state=active]:bg-blue-300">All</TabsTrigger>
                <TabsTrigger value="challenge" className="data-[state=active]:bg-blue-300">Challenges</TabsTrigger>
                <TabsTrigger value="webinar" className="data-[state=active]:bg-blue-300">Webinars</TabsTrigger>
                <TabsTrigger value="workshop" className="data-[state=active]:bg-blue-300">Workshops</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-700">{event.title}</CardTitle>
                  <CardDescription className="flex items-center text-gray-500">
                    <CalendarIcon className="mr-2 h-4 w-4" /> {event.date}
                    <ClockIcon className="ml-4 mr-2 h-4 w-4" /> {event.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Sponsored by:</span>
                    <img src={event.sponsor.logo} alt={`${event.sponsor.name} logo`} className="h-6" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Register Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Marketing Space */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 border-t-4 border-purple-300">
            <h2 className="text-3xl font-bold mb-4 text-purple-700">Stay Connected</h2>
            <p className="mb-6 text-purple-600">Subscribe to our newsletter for the latest updates on events, coding challenges, and exclusive offers.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input type="email" placeholder="Enter your email" className="bg-white text-gray-800" />
              <Button className="bg-purple-500 hover:bg-purple-600 text-white">Subscribe</Button>
            </div>
          </Card>
        </section>
      </main>

      <SponsorSlider />

      <div className="bg-gradient-to-r from-white to-yellow-100 py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-white shadow-xl overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-blue-700 mb-4">Become Our Sponsor</h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Join our community of innovative companies and support the next generation of developers. Your brand will reach thousands of passionate coders and tech enthusiasts.</p>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-semibold px-8 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <HeartIcon className="w-5 h-5 mr-2" />
                  Become a Sponsor
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="bg-blue-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Developers Dine. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Button variant="ghost" size="sm" className="text-blue-100 hover:text-white hover:bg-blue-700">Terms of Service</Button>
            <Button variant="ghost" size="sm" className="text-blue-100 hover:text-white hover:bg-blue-700">Privacy Policy</Button>
            <Button variant="ghost" size="sm" className="text-blue-100 hover:text-white hover:bg-blue-700">Contact Us</Button>
          </div>
        </div>
      </footer>
    </div>
  )
}