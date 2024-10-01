import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpenIcon, CalendarIcon, MessageCircleIcon, ShareIcon, MenuIcon, XIcon, UserIcon } from "lucide-react"

export default function BlogPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [visiblePosts, setVisiblePosts] = useState(3)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const loadMorePosts = () => setVisiblePosts(prev => prev + 3)

  const posts = [
    {
      title: "Investors Flock to Invest in Developers Dine",
      summary: "Following our recent feature in major tech publications, Developers Dine has seen an overwhelming response from investors eager to get a stake in our groundbreaking platform...",
      date: "May 15, 2023",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "How Developers Dine is Revolutionizing the Coding Community",
      summary: "Our latest blog post dives into how Developers Dine is making waves in the tech community. From providing valuable coding challenges to offering exclusive culinary rewards...",
      date: "May 10, 2023",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "User Spotlight: How Developers Dine Helped John Achieve His Coding Goals",
      summary: "In our latest user spotlight, we highlight John's journey with Developers Dine. Discover how he leveraged our platform to enhance his coding skills and enjoy exclusive culinary rewards...",
      date: "May 5, 2023",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "The Future of Coding: AI and Machine Learning Integration",
      summary: "Explore how Developers Dine is incorporating AI and machine learning into our platform to provide even more personalized coding challenges and learning experiences...",
      date: "April 30, 2023",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Culinary Rewards: A Deep Dive into Our Partnerships",
      summary: "Learn about the exciting partnerships we've formed with top restaurants and food delivery services to bring you the best culinary rewards for your coding achievements...",
      date: "April 25, 2023",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "From Novice to Pro: A Developer's Journey with Developers Dine",
      summary: "Read the inspiring story of Sarah, who went from a coding novice to a professional developer in just six months using Developers Dine's platform...",
      date: "April 20, 2023",
      image: "/placeholder.svg?height=200&width=400"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-200">
      <header className="bg-blue-800 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-blue-300 text-transparent bg-clip-text">DEV DINE</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-yellow-300 transition-colors">Home</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">About</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Blog</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Contact</a>
          </nav>
          <Button className="md:hidden" variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </Button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-blue-800 text-white py-4 px-4 md:hidden"
          >
            <nav className="flex flex-col space-y-2">
              <a href="#" className="hover:text-yellow-300 transition-colors">Home</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">About</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Blog</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Contact</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">Blog & Updates</h1>
          <p className="text-lg md:text-xl text-blue-600">Stay Updated with the Latest News and Insights from Developers Dine and the Coding World</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Featured Article */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="mb-8 bg-white shadow-lg overflow-hidden">
                <img src="/placeholder.svg?height=300&width=600" alt="Funding celebration" className="w-full h-64 object-cover" />
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-blue-800">Developers Dine Secures $5 Million in Funding</CardTitle>
                  <CardDescription className="text-lg text-blue-600">What This Means for the Future of Coding and Culinary Rewards</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700">Times of India recently featured Developers Dine as one of the most innovative startups of the year. With its unique blend of coding challenges and culinary rewards, the platform has captured the attention of investors and tech enthusiasts alike...</p>
                </CardContent>
                <CardFooter>
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 transition-colors">Read More</Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Recent Posts */}
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Recent Posts</h2>
            {posts.slice(0, visiblePosts).map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="mb-4 bg-white shadow hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl font-semibold text-blue-700 hover:text-blue-900 transition-colors">{post.title}</CardTitle>
                    <CardDescription className="flex items-center text-yellow-600">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {post.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-md mb-4" />
                    <p className="text-blue-600">{post.summary}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="text-blue-600 hover:bg-yellow-100 transition-colors">Read More</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
            {visiblePosts < posts.length && (
              <div className="text-center mt-8">
                <Button onClick={loadMorePosts} className="bg-blue-600 hover:bg-blue-700 text-white transition-colors">Load More Posts</Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-white shadow-lg mb-8">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-bold text-blue-800">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h3 className="font-semibold text-blue-700 mb-2">Webinar: Master Coding Challenges and Culinary Rewards</h3>
                    <p className="text-blue-600 mb-4">Join us for an exclusive webinar where we'll discuss strategies for mastering coding challenges on Developers Dine and how to make the most of your culinary rewards.</p>
                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-800 transition-colors">Register for Webinar</Button>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-700 mb-2">Featured Speaker Session: Coding for the Future</h3>
                    <div className="flex items-center mb-2">
                      <UserIcon className="h-6 w-6 text-blue-600 mr-2" />
                      <span className="text-blue-700 font-medium">Dr. Jane Smith, AI Researcher</span>
                    </div>
                    <p className="text-blue-600 mb-4">Discover the latest trends in AI and machine learning, and how they're shaping the future of coding and software development.</p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors">Reserve Your Spot</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg mb-8">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-bold text-blue-800">Newsletter Signup</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 mb-4">Stay updated with our latest news and insights. Subscribe to our newsletter!</p>
                  <Input placeholder="Enter your email" className="mb-2" />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors">Subscribe</Button>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-bold text-blue-800">Popular Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "10 Coding Challenges That Will Boost Your Skills",
                      "The Future of Tech: AI and Machine Learning",
                      "From Novice to Pro: A Developer's Journey"
                    ].map((title, index) => (
                      <li key={index} className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                        <BookOpenIcon className="mr-2 h-4 w-4" />
                        <a href="#" className="hover:underline">{title}</a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Developers Dine. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Button variant="ghost" size="icon">
              <ShareIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageCircleIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}