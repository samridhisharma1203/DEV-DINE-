'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Utensils, Coffee, Pizza, Award, ChefHat, Code, Upload, X, Plus, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function EnhancedUserProfile() {
  const [activeTab, setActiveTab] = useState('profile')
  const [hoverBadge, setHoverBadge] = useState(null)
  const [projects, setProjects] = useState([
    { id: 1, name: 'Recipe Finder App', description: 'A React app to find recipes based on ingredients', link: 'https://example.com/recipe-finder' },
    { id: 2, name: 'Cooking Timer', description: 'A simple cooking timer built with JavaScript', link: 'https://example.com/cooking-timer' },
  ])
  const [showProjectDialog, setShowProjectDialog] = useState(false)
  const [newProject, setNewProject] = useState({ name: '', description: '', link: '' })

  const badges = [
    { id: 1, title: 'JavaScript Soufflé', description: 'Mastered advanced JavaScript concepts', color: 'yellow', icon: Coffee },
    { id: 2, title: 'React Risotto', description: 'Built 10 React applications', color: 'blue', icon: Utensils },
    { id: 3, title: 'API Appetizer', description: 'Successfully integrated 5 external APIs', color: 'purple', icon: Pizza },
    { id: 4, title: 'Git Gourmet', description: 'Contributed to 20 open-source projects', color: 'green', icon: Award },
    { id: 5, title: 'Database Delicacy', description: 'Optimized queries for high-performance', color: 'red', icon: Coffee },
    { id: 6, title: 'UI/UX Umami', description: 'Designed user-friendly interfaces', color: 'pink', icon: Utensils },
  ]

  const addProject = () => {
    if (newProject.name && newProject.description) {
      setProjects([...projects, { ...newProject, id: projects.length + 1 }])
      setNewProject({ name: '', description: '', link: '' })
      setShowProjectDialog(false)
    }
  }

  const removeProject = (id) => {
    setProjects(projects.filter(project => project.id !== id))
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 via-blue-50 to-yellow-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Utensils className="h-6 w-6 text-orange-500" />
            <span className="font-bold text-xl bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">DEVDINE</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/challenges" className="text-sm font-medium transition-colors hover:text-orange-500 hover:scale-105 transform">Challenges</Link>
            <Link href="/store" className="text-sm font-medium transition-colors hover:text-yellow-500 hover:scale-105 transform">Store</Link>
            <Link href="/leaderboard" className="text-sm font-medium transition-colors hover:text-green-500 hover:scale-105 transform">Leaderboard</Link>
            <Link href="/profile" className="text-sm font-medium transition-colors hover:text-purple-500 hover:scale-105 transform">Profile</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4 flex-grow">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* User Information */}
          <motion.section 
            className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-blue-500 to-purple-500"></div>
            <div className="relative group">
              <img src="/placeholder.svg?height=128&width=128" alt="User Avatar" className="w-32 h-32 rounded-full border-4 border-orange-500 transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 rounded-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button variant="ghost" size="sm" className="text-white">Change</Button>
              </div>
            </div>
            <div className="text-center md:text-left flex-grow">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">Chef John Doe</h1>
              <p className="text-gray-600">john.doe@devdine.com</p>
              <p className="text-gray-600">San Francisco, CA</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-300">Master Chef</Badge>
                <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">1250 Culinary Points</Badge>
                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">5 Years Experience</Badge>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Button className="bg-orange-500 hover:bg-orange-600">Edit Profile</Button>
              <Button variant="outline">View Public Profile</Button>
            </div>
          </motion.section>

          {/* Horizontal Scrolling Badges */}
          <motion.section 
            className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
            <h2 className="text-xl font-semibold mb-4 text-yellow-600">Culinary Achievements</h2>
            <ScrollArea className="w-full whitespace-nowrap rounded-md border">
              <div className="flex w-max space-x-4 p-4">
                {badges.map((badge) => (
                  <Card 
                    key={badge.id} 
                    className={`w-[250px] flex-shrink-0 cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-${badge.color}-50 border-${badge.color}-200`}
                    onMouseEnter={() => setHoverBadge(badge.id)}
                    onMouseLeave={() => setHoverBadge(null)}
                  >
                    <CardHeader>
                      <CardTitle className={`text-center text-${badge.color}-700`}>{badge.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <motion.div
                        animate={{ 
                          rotateY: hoverBadge === badge.id ? 180 : 0,
                          scale: hoverBadge === badge.id ? 1.2 : 1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <badge.icon className={`w-12 h-12 mx-auto mb-2 text-${badge.color}-500`} />
                      </motion.div>
                      <p className={`text-sm text-center text-${badge.color}-600`}>{badge.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </motion.section>

          {/* Projects Section */}
          <motion.section 
            className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500"></div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-green-600">My Culinary Projects</h2>
              <Dialog open={showProjectDialog} onOpenChange={setShowProjectDialog}>
                <DialogTrigger asChild>
                  <Button className="bg-green-500 hover:bg-green-600">
                    <Plus className="mr-2 h-4 w-4" /> Add Project
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Project</DialogTitle>
                    <DialogDescription>
                      Share your latest culinary coding creation with the DEVDINE community.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="projectName">Project Name</Label>
                      <Input 
                        id="projectName" 
                        value={newProject.name} 
                        onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                        placeholder="e.g., Recipe Management System"
                      />
                    </div>
                    <div>
                      <Label htmlFor="projectDescription">Description</Label>
                      <Input 
                        id="projectDescription" 
                        value={newProject.description} 
                        onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                        placeholder="Brief description of your project"
                      />
                    </div>
                    <div>
                      <Label htmlFor="projectLink">Project Link (optional)</Label>
                      <Input 
                        id="projectLink" 
                        value={newProject.link} 
                        onChange={(e) => setNewProject({...newProject, link: e.target.value})}
                        placeholder="https://example.com/your-project"
                      />
                    </div>
                    <Button onClick={addProject} className="w-full">Add Project</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatePresence>
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                          <span>{project.name}</span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => removeProject(project.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-500 hover:text-blue-700 flex items-center"
                          >
                            View Project <ExternalLink className="ml-1 h-4 w-4" />
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.section>

          {/* Points History */}
          <motion.section 
            className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"></div>
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Culinary Points History</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gradient-to-r from-blue-100 to-purple-100">
                    <TableHead>Date</TableHead>
                    <TableHead>Culinary Achievement</TableHead>
                    <TableHead>Points</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { date: '2023-06-01', description: 'Cooked up a React Challenge', points: 100, color: 'blue' },
                    { date: '2023-05-28', description: 'Served help in Community Kitchen', points: 50, color: 'green' },
                    { date: '2023-05-25', description: 'Plated a Full-Stack Project', points: 200, color: 'purple' },
                    { date: '2023-05-20', description: 'Daily Coding Recipe Streak', points: 25, color: 'yellow' },
                    { date: '2023-05-15', description: 'Won Code Cuisine Challenge', points: 150, color: 'pink' },
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
          </motion.section>

          {/* Account Settings */}
          <motion.section 
            className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>
            <h2 className="text-xl font-semibold mb-4 text-purple-600">Kitchen Settings</h2>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-purple-100 via-pink-100 to-red-100">
                <TabsTrigger value="profile" className="data-[state=active]:bg-white">Chef Profile</TabsTrigger>
                <TabsTrigger value="security" className="data-[state=active]:bg-white">Kitchen Security</TabsTrigger>
                <TabsTrigger value="notifications" className="data-[state=active]:bg-white">Taste Alerts</TabsTrigger>
              </TabsList>
              <TabsContent value="profile" className="mt-4">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Chef Name</Label>
                    <Input id="fullName" defaultValue="John Doe" className="border-purple-200 focus:border-purple-500" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@devdine.com" className="border-purple-200 focus:border-purple-500" />
                  </div>
                  <div>
                    <Label htmlFor="location">Culinary Location</Label>
                    <Input id="location" defaultValue="San Francisco, CA" className="border-purple-200 focus:border-purple-500" />
                  </div>
                  <Button className="bg-purple-500 hover:bg-purple-600">Save Recipe Changes</Button>
                </form>
              </TabsContent>
              <TabsContent value="security" className="mt-4">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword">Current Secret Ingredient</Label>
                    <Input id="currentPassword" type="password" className="border-pink-200 focus:border-pink-500" />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">New Secret Ingredient</Label>
                    <Input id="newPassword" type="password" className="border-pink-200 focus:border-pink-500" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Secret Ingredient</Label>
                    <Input id="confirmPassword" type="password" className="border-pink-200 focus:border-pink-500" />
                  </div>
                  <Button className="bg-pink-500 hover:bg-pink-600">Change Secret Recipe</Button>
                </form>
              </TabsContent>
              <TabsContent value="notifications" className="mt-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div className="space-y-0.5">
                      <Label htmlFor="emailNotifications" className="text-red-800">Email Taste Tests</Label>
                      <p className="text-sm text-red-600">Receive new recipe notifications via email</p>
                    </div>
                    <Switch id="emailNotifications" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                    <div className="space-y-0.5">
                      <Label htmlFor="pushNotifications" className="text-orange-800">Push Flavor Alerts</Label>
                      <p className="text-sm text-orange-600">Receive cooking notifications on your device</p>
                    </div>
                    <Switch id="pushNotifications" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 border-t border-gray-200 mt-12">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">&copy; 2023 DEVDINE. All recipes reserved.</p>
            <nav className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/terms" className="text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200">Cooking Terms</Link>
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-yellow-500 transition-colors duration-200">Recipe Privacy</Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-green-500 transition-colors duration-200">Contact Our Chefs</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}