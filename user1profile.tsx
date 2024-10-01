import React, { useState } from 'react'
import { Search, Bell, User, ChevronRight, Code, Settings, Shield, Bell as BellIcon, Award } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('profile')

  const badges = [
    { id: 1, title: 'JavaScript Ninja', description: 'Mastered advanced JavaScript concepts', color: 'yellow' },
    { id: 2, title: 'React Guru', description: 'Built 10 React applications', color: 'blue' },
    { id: 3, title: 'API Wizard', description: 'Successfully integrated 5 external APIs', color: 'purple' },
    { id: 4, title: 'Git Master', description: 'Contributed to 20 open-source projects', color: 'green' },
    { id: 5, title: 'Database Pro', description: 'Optimized queries for high-performance', color: 'red' },
    { id: 6, title: 'UI/UX Enthusiast', description: 'Designed user-friendly interfaces', color: 'pink' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 via-blue-50 to-yellow-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-blue-500" />
            <span className="font-bold text-xl bg-gradient-to-r from-yellow-500 to-blue-500 bg-clip-text text-transparent">Developers Dine</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/challenges" className="text-sm font-medium transition-colors hover:text-blue-500 hover:scale-105 transform">Challenges</Link>
            <Link href="/store" className="text-sm font-medium transition-colors hover:text-yellow-500 hover:scale-105 transform">Store</Link>
            <Link href="/leaderboard" className="text-sm font-medium transition-colors hover:text-green-500 hover:scale-105 transform">Leaderboard</Link>
            <Link href="/profile" className="text-sm font-medium transition-colors hover:text-purple-500 hover:scale-105 transform">Profile</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4 flex-grow">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* User Information */}
          <section className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-500"></div>
            <div className="relative group">
              <img src="/placeholder.svg?height=128&width=128" alt="User Avatar" className="w-32 h-32 rounded-full border-4 border-blue-500 transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 rounded-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button variant="ghost" size="sm" className="text-white">Change</Button>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">John Doe</h1>
              <p className="text-gray-600">john.doe@example.com</p>
              <p className="text-gray-600">San Francisco, CA</p>
              <div className="mt-2">
                <Badge variant="outline" className="mr-2 bg-yellow-100 text-yellow-800 border-yellow-300">Level 7</Badge>
                <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">1250 Points</Badge>
              </div>
            </div>
          </section>

          {/* Bio Section */}
          <section className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500"></div>
            <h2 className="text-xl font-semibold mb-4 text-green-600">Bio</h2>
            <div className="max-w-2xl h-32 overflow-y-auto bg-gray-50 p-4 rounded border border-gray-200 transition-all duration-300 hover:shadow-md">
              <p className="text-gray-700">
                Passionate developer with 5+ years of experience in full-stack web development. 
                Specializing in React, Node.js, and cloud technologies. Always eager to learn 
                and take on new challenges in the ever-evolving world of software development.
              </p>
            </div>
          </section>

          {/* Points History */}
          <section className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"></div>
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Points History</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gradient-to-r from-blue-100 to-purple-100">
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Points</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { date: '2023-06-01', description: 'Completed React Challenge', points: 100, color: 'blue' },
                    { date: '2023-05-28', description: 'Helped in Community Forum', points: 50, color: 'green' },
                    { date: '2023-05-25', description: 'Submitted Project', points: 200, color: 'purple' },
                    { date: '2023-05-20', description: 'Daily Login Streak', points: 25, color: 'yellow' },
                    { date: '2023-05-15', description: 'Won Code Golf Challenge', points: 150, color: 'pink' },
                  ].map((entry, index) => (
                    <TableRow key={index} className={`bg-${entry.color}-50 hover:bg-${entry.color}-100 transition-colors duration-200`}>
                      <TableCell>{entry.date}</TableCell>
                      <TableCell>{entry.description}</TableCell>
                      <TableCell className={`font-semibold text-${entry.color}-600`}>+{entry.points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Achievements and Badges */}
          <section className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
            <h2 className="text-xl font-semibold mb-4 text-yellow-600">Achievements and Badges</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {badges.map((badge) => (
                <Card key={badge.id} className={`cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-${badge.color}-50 border-${badge.color}-200`}>
                  <CardHeader>
                    <CardTitle className={`text-center text-${badge.color}-700`}>{badge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Award className={`w-12 h-12 mx-auto mb-2 text-${badge.color}-500`} />
                    <p className={`text-sm text-center text-${badge.color}-600`}>{badge.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Account Settings */}
          <section className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>
            <h2 className="text-xl font-semibold mb-4 text-purple-600">Account Settings</h2>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-purple-100 via-pink-100 to-red-100">
                <TabsTrigger value="profile" className="data-[state=active]:bg-white">Profile</TabsTrigger>
                <TabsTrigger value="security" className="data-[state=active]:bg-white">Security</TabsTrigger>
                <TabsTrigger value="notifications" className="data-[state=active]:bg-white">Notifications</TabsTrigger>
              </TabsList>
              <TabsContent value="profile" className="mt-4">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" defaultValue="John Doe" className="border-purple-200 focus:border-purple-500" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" className="border-purple-200 focus:border-purple-500" />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="San Francisco, CA" className="border-purple-200 focus:border-purple-500" />
                  </div>
                  <Button className="bg-purple-500 hover:bg-purple-600">Save Changes</Button>
                </form>
              </TabsContent>
              <TabsContent value="security" className="mt-4">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" className="border-pink-200 focus:border-pink-500" />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" className="border-pink-200 focus:border-pink-500" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" className="border-pink-200 focus:border-pink-500" />
                  </div>
                  <Button className="bg-pink-500 hover:bg-pink-600">Change Password</Button>
                </form>
              </TabsContent>
              <TabsContent value="notifications" className="mt-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div className="space-y-0.5">
                      <Label htmlFor="emailNotifications" className="text-red-800">Email Notifications</Label>
                      <p className="text-sm text-red-600">Receive notifications via email</p>
                    </div>
                    <Switch id="emailNotifications" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                    <div className="space-y-0.5">
                      <Label htmlFor="pushNotifications" className="text-orange-800">Push Notifications</Label>
                      <p className="text-sm text-orange-600">Receive notifications on your device</p>
                    </div>
                    <Switch id="pushNotifications" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 border-t border-gray-200 mt-12">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">&copy; 2023 Developers Dine. All rights reserved.</p>
            <nav className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-500 transition-colors duration-200">Terms of Service</Link>
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-yellow-500 transition-colors duration-200">Privacy Policy</Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-green-500 transition-colors duration-200">Contact Us</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}