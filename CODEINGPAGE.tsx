'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChefHat, Code, Trophy, Gift, User, HelpCircle, Play, Send, RotateCcw, Sun, Moon, ChevronLeft, ChevronRight } from 'lucide-react'

const problems = [
  {
    id: 1,
    title: "Two Sum",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    example: "Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1]."
  },
  {
    id: 2,
    title: "Reverse Linked List",
    description: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    example: "Input: head = [1,2,3,4,5]\nOutput: [5,4,3,2,1]"
  },
  // Add more problems as needed
]

export default function DEVDINE() {
  const [code, setCode] = useState('')
  const [points, setPoints] = useState(50)
  const [darkMode, setDarkMode] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('javascript')
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0)

  const runCode = () => {
    // Placeholder for code execution logic
    console.log('Running code:', code)
  }

  const submitCode = () => {
    // Placeholder for code submission logic
    console.log('Submitting code:', code)
    setPoints(points + 10) // Increment points on submission
  }

  const resetCode = () => {
    setCode('')
  }

  const goToNextProblem = () => {
    setCurrentProblemIndex((prevIndex) => 
      prevIndex < problems.length - 1 ? prevIndex + 1 : prevIndex
    )
    resetCode()
  }

  const goToPreviousProblem = () => {
    setCurrentProblemIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    )
    resetCode()
  }

  const currentProblem = problems[currentProblemIndex]

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <header className="bg-gradient-to-r from-blue-400 to-yellow-300 text-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8" />
            <span className="text-2xl font-bold">DEVDINE</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              {[
                { icon: <Code className="h-4 w-4" />, label: 'Solve' },
                { icon: <Trophy className="h-4 w-4" />, label: 'Leaderboard' },
                { icon: <Gift className="h-4 w-4" />, label: 'Rewards' },
                { icon: <User className="h-4 w-4" />, label: 'Profile' },
                { icon: <HelpCircle className="h-4 w-4" />, label: 'Help' },
              ].map(({ icon, label }) => (
                <li key={label}>
                  <Button variant="ghost" className="text-gray-800 hover:text-blue-600">
                    {icon}
                    <span className="ml-2">{label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-1/2">
            <div className="flex justify-between items-center mb-4">
              <Button 
                onClick={goToPreviousProblem} 
                disabled={currentProblemIndex === 0}
                className="bg-blue-400 hover:bg-blue-500 text-white"
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <h2 className="text-2xl font-bold">Problem: {currentProblem.title}</h2>
              <Button 
                onClick={goToNextProblem} 
                disabled={currentProblemIndex === problems.length - 1}
                className="bg-blue-400 hover:bg-blue-500 text-white"
              >
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="mb-4">{currentProblem.description}</p>
            <h3 className="text-xl font-bold mb-2">Example:</h3>
            <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded">{currentProblem.example}</pre>
          </div>
          <div className="lg:w-1/2">
            <Tabs defaultValue="javascript" onValueChange={setSelectedLanguage}>
              <TabsList>
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="java">Java</TabsTrigger>
                <TabsTrigger value="cpp">C++</TabsTrigger>
                <TabsTrigger value="c">C</TabsTrigger>
                <TabsTrigger value="rust">Rust</TabsTrigger>
                <TabsTrigger value="go">Go</TabsTrigger>
              </TabsList>
              {['javascript', 'python', 'java', 'cpp', 'c', 'rust', 'go'].map((lang) => (
                <TabsContent key={lang} value={lang} className="mt-2">
                  <div className={`p-4 rounded-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <textarea
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className={`w-full h-64 p-2 font-mono text-sm ${
                        darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                      }`}
                      placeholder={`Write your ${lang} code here...`}
                    />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="space-x-2">
            <Button onClick={runCode} className="bg-blue-400 hover:bg-blue-500 text-white">
              <Play className="mr-2 h-4 w-4" /> Test
            </Button>
            <Button onClick={submitCode} className="bg-yellow-400 hover:bg-yellow-500 text-gray-800">
              <Send className="mr-2 h-4 w-4" /> Submit
            </Button>
            <Button onClick={resetCode} variant="outline" className="text-gray-800 dark:text-white">
              <RotateCcw className="mr-2 h-4 w-4" /> Reset
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <span>Dark Mode</span>
            <Input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="toggle"
            />
            {darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-xl font-bold mb-2">Leaderboard</h3>
            <ul>
              {['Chef Alice', 'Baker Bob', 'Cook Charlie', 'Dietitian Diana', 'Epicure Ethan'].map((name, index) => (
                <li key={name} className="flex justify-between items-center py-2 border-b">
                  <span>{name}</span>
                  <span>{100 - index * 10} points</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`p-4 rounded-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-xl font-bold mb-2">Your Progress</h3>
            <Progress value={points} max={100} className="mb-2" />
            <p>You have {points} points. Earn {Math.max(0, 100 - points)} more to unlock a special recipe!</p>
          </div>
        </div>
      </main>

      <footer className={`mt-8 p-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <div className="container mx-auto text-center">
          <p>&copy; 2023 DEVDINE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}