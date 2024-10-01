import React from 'react'
import { Search, Calendar, Bell, User, ChevronRight, Code, Trophy, Zap, Github, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 via-blue-50 to-yellow-100 text-gray-700">
      {/* Header Section */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-blue-500" />
            <span className="font-bold text-xl bg-gradient-to-r from-yellow-500 to-blue-500 bg-clip-text text-transparent">Developers Dine</span>
          </Link>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="hidden md:flex items-center space-x-4">
              <Link href="/challenges" className="text-sm font-medium transition-colors hover:text-blue-500">
                Challenges
              </Link>
              <Link href="/store" className="text-sm font-medium transition-colors hover:text-yellow-500">
                Store
              </Link>
              <Link href="/leaderboard" className="text-sm font-medium transition-colors hover:text-green-500">
                Leaderboard
              </Link>
              <Link href="/profile" className="text-sm font-medium transition-colors hover:text-purple-500">
                Profile
              </Link>
            </nav>
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search challenges..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white/50 focus:bg-white transition-colors duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 space-y-8 flex-grow">
        {/* Challenges Overview Section */}
        <section className="animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent">Challenges Overview</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Ongoing Challenges</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "React Mastery", color: "blue", progress: 75 },
                  { title: "Python Challenge", color: "yellow", progress: 40 },
                  { title: "AI Integration", color: "purple", progress: 20 }
                ].map((challenge, index) => (
                  <Card key={index} className="overflow-hidden transition-transform duration-300 hover:scale-105 bg-white/80">
                    <CardHeader className={`bg-${challenge.color}-100 text-${challenge.color}-700`}>
                      <CardTitle>{challenge.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-gray-600 mb-2">
                        Master the art of {challenge.title.toLowerCase()} and earn points!
                      </p>
                      <p className="text-sm font-medium mb-2">Deadline: 7 days left</p>
                      <Progress value={challenge.progress} className={`h-2 bg-${challenge.color}-100`} />
                      <p className="text-right text-sm mt-1">{challenge.progress}% complete</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-yellow-600">Upcoming Challenges</h3>
              <div className="space-y-4">
                {[
                  { title: "Vue.js Deep Dive", startDate: "June 15" },
                  { title: "Machine Learning Basics", startDate: "June 20" },
                  { title: "GraphQL Mastery", startDate: "June 25" }
                ].map((challenge, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/60 rounded-lg transition-colors duration-300 hover:bg-white/80">
                    <div>
                      <h4 className="font-medium text-lg">{challenge.title}</h4>
                      <p className="text-sm text-gray-600">Starts on {challenge.startDate}</p>
                    </div>
                    <Button size="sm" variant="outline" className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200 transition-colors duration-300">
                      <Calendar className="mr-2 h-4 w-4" />
                      Add to Calendar
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Points Balance Section */}
        <section className="bg-white/60 p-8 rounded-lg shadow-lg animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-500 to-blue-500 bg-clip-text text-transparent">Points Balance</h2>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-yellow-200 to-blue-200 flex items-center justify-center mb-6 shadow-lg animate-pulse">
              <span className="text-5xl font-bold text-gray-800">1250</span>
            </div>
            <Progress value={60} className="w-full max-w-md h-3 mb-2 bg-gray-200" />
            <p className="text-lg text-gray-600">60% to next level</p>
            <div className="mt-4 flex space-x-4">
              <div className="text-center">
                <Trophy className="h-8 w-8 text-yellow-500 mx-auto" />
                <p className="text-sm font-medium mt-1">Rank: 15</p>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 text-blue-500 mx-auto" />
                <p className="text-sm font-medium mt-1">Level: 7</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activity Section */}
        <section className="animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { type: 'challenge', title: 'Completed Challenge: React Basics', time: '2 hours ago', color: 'blue' },
              { type: 'achievement', title: 'Earned Badge: JavaScript Ninja', time: '1 day ago', color: 'yellow' },
              { type: 'notification', title: 'New Challenge Available: Vue.js Mastery', time: '2 days ago', color: 'green' },
            ].map((activity, index) => (
              <div key={index} className={`flex items-center justify-between p-4 bg-${activity.color}-50 rounded-lg transition-all duration-300 hover:shadow-md hover:translate-x-1`}>
                <div className="flex items-center space-x-4">
                  {activity.type === 'challenge' && <Calendar className={`h-6 w-6 text-${activity.color}-500`} />}
                  {activity.type === 'achievement' && <Trophy className={`h-6 w-6 text-${activity.color}-500`} />}
                  {activity.type === 'notification' && <Bell className={`h-6 w-6 text-${activity.color}-500`} />}
                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
                <ChevronRight className={`h-5 w-5 text-${activity.color}-500`} />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-white/80 border-t border-gray-200 mt-12">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm text-gray-600">Developers Dine is a platform for developers to enhance their skills through exciting coding challenges and competitions.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-gray-600 hover:text-blue-500">About</Link></li>
                <li><Link href="/faq" className="text-sm text-gray-600 hover:text-blue-500">FAQ</Link></li>
                <li><Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-500">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-sm text-gray-600 hover:text-blue-500">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm text-gray-600">Email: support@developersdine.com</p>
              <p className="text-sm text-gray-600">Phone: +1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/developersdine" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://twitter.com/developersdine" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/company/developersdine" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">&copy; 2023 Developers Dine. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}