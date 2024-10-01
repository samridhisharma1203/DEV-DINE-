import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Code, Search, Facebook, Twitter, Instagram, Github } from 'lucide-react'

export default function Leaderboard() {
  const [timePeriod, setTimePeriod] = useState('current-week')
  const [category, setCategory] = useState('all')

  const users = [
    { id: 1, username: "CodeMaster", score: 1500, avatar: "/placeholder.svg?height=32&width=32&text=CM", color: "bg-pink-500" },
    { id: 2, username: "AlgoQueen", score: 1450, avatar: "/placeholder.svg?height=32&width=32&text=AQ", color: "bg-purple-500" },
    { id: 3, username: "ByteWizard", score: 1400, avatar: "/placeholder.svg?height=32&width=32&text=BW", color: "bg-indigo-500" },
    { id: 4, username: "DataNinja", score: 1350, avatar: "/placeholder.svg?height=32&width=32&text=DN", color: "bg-blue-500" },
    { id: 5, username: "LogicLord", score: 1300, avatar: "/placeholder.svg?height=32&width=32&text=LL", color: "bg-green-500" },
    { id: 6, username: "SyntaxSage", score: 1250, avatar: "/placeholder.svg?height=32&width=32&text=SS", color: "bg-yellow-500" },
    { id: 7, username: "BugBuster", score: 1200, avatar: "/placeholder.svg?height=32&width=32&text=BB", color: "bg-orange-500" },
    { id: 8, username: "CipherSolver", score: 1150, avatar: "/placeholder.svg?height=32&width=32&text=CS", color: "bg-red-500" },
    { id: 9, username: "QueryQuest", score: 1100, avatar: "/placeholder.svg?height=32&width=32&text=QQ", color: "bg-teal-500" },
    { id: 10, username: "StackMaster", score: 1050, avatar: "/placeholder.svg?height=32&width=32&text=SM", color: "bg-cyan-500" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center bg-gradient-to-r from-pink-500 to-indigo-500 text-white p-2 rounded-lg">
                <Code className="h-6 w-6 mr-2" />
                <span className="font-bold text-lg">DevDine</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-4">
              <Button variant="ghost" className="text-pink-600 hover:text-pink-800 hover:bg-pink-100">Home</Button>
              <Button variant="ghost" className="text-purple-600 hover:text-purple-800 hover:bg-purple-100">Challenges</Button>
              <Button variant="ghost" className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100">Leaderboard</Button>
              <Button variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-100">Profile</Button>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search users..."
                  className="pl-10 pr-4 py-2 border rounded-full border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400" size={20} />
              </div>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">Leaderboard</h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <Select value={timePeriod} onValueChange={setTimePeriod}>
            <SelectTrigger className="w-full sm:w-[200px] border-pink-300 focus:border-pink-500 focus:ring-pink-500">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current-week">Current Week</SelectItem>
              <SelectItem value="last-week">Last Week</SelectItem>
              <SelectItem value="current-month">Current Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
            </SelectContent>
          </Select>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full sm:w-[200px] border-purple-300 focus:border-purple-500 focus:ring-purple-500">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="algorithms">Algorithms</SelectItem>
              <SelectItem value="data-structures">Data Structures</SelectItem>
              <SelectItem value="web-development">Web Development</SelectItem>
              <SelectItem value="machine-learning">Machine Learning</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* User Rankings */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-indigo-200">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                <TableHead className="w-12 text-white">Rank</TableHead>
                <TableHead className="text-white">User</TableHead>
                <TableHead className="text-right text-white">Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={user.id} className={index % 2 === 0 ? "bg-indigo-50" : "bg-white"}>
                  <TableCell className="font-medium">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${user.color} text-white font-bold`}>
                      {index + 1}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Avatar className={`h-10 w-10 mr-3 ${user.color}`}>
                        <AvatarImage src={user.avatar} alt={user.username} />
                        <AvatarFallback className="text-white font-bold">{user.username.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="font-semibold text-gray-800">{user.username}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-bold text-indigo-600">{user.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 sm:mb-0">
              <a href="#" className="text-pink-400 hover:text-pink-500">
                <span className="sr-only">Facebook</span>
                <Facebook size={24} />
              </a>
              <a href="#" className="text-purple-400 hover:text-purple-500">
                <span className="sr-only">Twitter</span>
                <Twitter size={24} />
              </a>
              <a href="#" className="text-indigo-400 hover:text-indigo-500">
                <span className="sr-only">Instagram</span>
                <Instagram size={24} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-500">
                <span className="sr-only">GitHub</span>
                <Github size={24} />
              </a>
            </div>
            <p className="text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Developers Dine. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}