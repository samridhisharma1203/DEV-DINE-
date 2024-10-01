import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Search, Code, Trophy, Gift, User, Facebook, Twitter, Instagram, Github, Award, Coffee, Pizza, Sandwich, ChevronDown } from 'lucide-react'

export default function Homepage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [visiblePracticeQuestions, setVisiblePracticeQuestions] = useState(5)

  const challenges = [
    { id: 1, name: "Array Manipulation", description: "Master array operations", difficulty: "Medium", reward: 3, icon: <Code className="h-8 w-8 text-blue-500" /> },
    { id: 2, name: "String Reversal", description: "Reverse strings efficiently", difficulty: "Easy", reward: 1, icon: <Code className="h-8 w-8 text-yellow-500" /> },
    { id: 3, name: "Graph Traversal", description: "Navigate complex graphs", difficulty: "Hard", reward: 5, icon: <Code className="h-8 w-8 text-red-500" /> },
  ]

  const leaderboard = [
    { id: 1, username: "CodeMaster", badges: 50, avatar: "/placeholder.svg?height=40&width=40&text=CM" },
    { id: 2, username: "AlgoQueen", badges: 45, avatar: "/placeholder.svg?height=40&width=40&text=AQ" },
    { id: 3, username: "ByteWizard", badges: 40, avatar: "/placeholder.svg?height=40&width=40&text=BW" },
  ]

  const rewards = [
    { id: 1, name: "Pizza Party", description: "A delicious pizza feast", badges: 10, icon: <Pizza className="h-12 w-12 text-red-500" /> },
    { id: 2, name: "Sushi Platter", description: "Assorted sushi rolls", badges: 15, icon: <Sandwich className="h-12 w-12 text-blue-500" /> },
    { id: 3, name: "Gourmet Coffee", description: "Artisanal coffee experience", badges: 5, icon: <Coffee className="h-12 w-12 text-yellow-700" /> },
  ]

  const practiceQuestions = [
    { id: 1, title: "Two Sum", difficulty: "Easy" },
    { id: 2, title: "Reverse Linked List", difficulty: "Medium" },
    { id: 3, title: "Binary Tree Inorder Traversal", difficulty: "Easy" },
    { id: 4, title: "Merge Two Sorted Lists", difficulty: "Easy" },
    { id: 5, title: "Maximum Subarray", difficulty: "Medium" },
    { id: 6, title: "Valid Parentheses", difficulty: "Easy" },
    { id: 7, title: "Climbing Stairs", difficulty: "Easy" },
    { id: 8, title: "Best Time to Buy and Sell Stock", difficulty: "Easy" },
    { id: 9, title: "3Sum", difficulty: "Medium" },
    { id: 10, title: "Longest Palindromic Substring", difficulty: "Medium" },
  ]

  const loadMoreQuestions = () => {
    setVisiblePracticeQuestions(prevCount => Math.min(prevCount + 5, practiceQuestions.length))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center bg-gradient-to-r from-yellow-400 to-blue-500 text-white p-2 rounded-lg">
                <Code className="h-6 w-6 mr-2" />
                <span className="font-bold text-lg">DevDine</span>
              </div>
              <nav className="hidden md:flex space-x-8 ml-8">
                <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">Home</a>
                <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">Challenges</a>
                <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">Practice</a>
                <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">Leaderboard</a>
                <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">E-Marketplace</a>
                <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">Profile</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search challenges or users"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-blue-300 focus:border-blue-500 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold">Login / Sign Up</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-blue-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl mb-6">
              Code. Solve. <span className="text-red-500">Dine.</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl">
              Join Developers Dine and turn your coding skills into culinary delights. Solve challenges, earn badges, and savor your success!
            </p>
            <p className="mt-3 max-w-md mx-auto text-lg sm:text-xl md:mt-5 md:max-w-3xl">
              Earn badges for each solved challenge and use them to purchase delicious meals from our e-marketplace.
            </p>
            <div className="mt-10">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-3 rounded-full transition-transform transform hover:scale-105">
                Start Coding Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Coding Challenges Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">Featured Challenges</h2>
          <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
            <CarouselContent>
              {challenges.map((challenge) => (
                <CarouselItem key={challenge.id}>
                  <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-yellow-100 to-blue-100">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl font-bold text-blue-800">{challenge.name}</CardTitle>
                        {challenge.icon}
                      </div>
                      <CardDescription className="text-blue-600">{challenge.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-center">
                        <Badge variant={challenge.difficulty === 'Easy' ? 'secondary' : challenge.difficulty === 'Medium' ? 'default' : 'destructive'} className="text-sm font-semibold">
                          {challenge.difficulty}
                        </Badge>
                        <span className="text-sm text-blue-600 font-medium flex items-center">
                          <Award className="mr-1 text-yellow-500" size={16} />
                          {challenge.reward} {challenge.reward === 1 ? 'Badge' : 'Badges'}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold">Solve Challenge</Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Practice Arena Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">Practice Arena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practiceQuestions.slice(0, visiblePracticeQuestions).map((question) => (
              <Card key={question.id} className="border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <CardHeader className="bg-gradient-to-r from-yellow-100 to-blue-100">
                  <CardTitle className="text-lg font-bold text-blue-800">{question.title}</CardTitle>
                  <Badge variant={question.difficulty === 'Easy' ? 'secondary' : question.difficulty === 'Medium' ? 'default' : 'destructive'} className="text-sm font-semibold">
                    {question.difficulty}
                  </Badge>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold">Practice Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          {visiblePracticeQuestions < practiceQuestions.length && (
            <div className="mt-8 text-center">
              <Button onClick={loadMoreQuestions} className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold">
                Load More <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Leaderboard Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">Leaderboard Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leaderboard.map((user, index) => (
              <Card key={user.id} className="border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <CardHeader className="bg-gradient-to-r from-yellow-200 to-blue-200">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 border-2 border-white shadow-md">
                      <AvatarImage src={user.avatar} alt={user.username} />
                      <AvatarFallback>{user.username.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl font-bold text-blue-800">{user.username}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium">Rank #{index + 1}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center text-blue-700 font-semibold">
                      <Award className="mr-2 text-yellow-500" size={24} />
                      {user.badges} Badges
                    </span>
                    <Badge variant="secondary" className="bg-yellow-400 text-blue-900 font-bold">Top Coder</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* E-Marketplace Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">E-Marketplace Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rewards.map((reward) => (
              <Card key={reward.id} className="border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <CardHeader className="bg-gradient-to-r from-yellow-200 to-blue-200">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-bold text-blue-800">{reward.name}</CardTitle>
                    {reward.icon}
                  </div>
                  <CardDescription className="text-blue-600">{reward.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-600 font-medium flex items-center">
                      <Award className="mr-1 text-yellow-500" size={16} />
                      {reward.badges} Badges
                    </span>
                    <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">Purchase</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-yellow-300 transition-colors duration-200">Home</a>
              <a href="#" className="hover:text-yellow-300 transition-colors duration-200">Challenges</a>
              <a href="#" className="hover:text-yellow-300 transition-colors duration-200">Practice</a>
              <a href="#" className="hover:text-yellow-300 transition-colors duration-200">Leaderboard</a>
              <a href="#" className="hover:text-yellow-300 transition-colors duration-200">E-Marketplace</a>
              <a href="#" className="hover:text-yellow-300 transition-colors duration-200">Profile</a>
            </nav>
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-yellow-300 transition-colors duration-200"><Facebook size={24} /></a>
              <a href="#" className="hover:text-yellow-300 transition-colors duration-200"><Twitter size={24} /></a>
              <a href="#" className="hover:text-yellow-300 transition-colors duration-200"><Instagram size={24} /></a>
              <a href="#" className="hover:text-yellow-300 transition-colors duration-200"><Github size={24} /></a>
            </div>
          </div>
          <div className="mt-8 text-center text-blue-200">
            &copy; {new Date().getFullYear()} Developers Dine. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}