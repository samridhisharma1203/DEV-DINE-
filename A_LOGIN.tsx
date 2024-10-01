'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Github, Mail } from 'lucide-react'

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 to-blue-500 flex flex-col">
      <header className="p-4 flex justify-between items-center bg-white bg-opacity-10 backdrop-blur-md">
        <div className="text-3xl font-bold text-white">Logo</div>
        <nav>
          <ul className="flex space-x-4 text-white">
            {['Home', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
              {isSignUp ? "Create an Account" : "Log In"}
            </h2>
            <form className="space-y-4">
              {isSignUp && (
                <div className="space-y-1">
                  <Label htmlFor="username" className="text-sm font-medium text-gray-700">Username</Label>
                  <Input 
                    id="username" 
                    placeholder="johndoe" 
                    required 
                    className="w-full border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                  />
                </div>
              )}
              <div className="space-y-1">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  required 
                  className="w-full border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  className="w-full border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
              {isSignUp && (
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the Terms and Conditions
                  </label>
                </div>
              )}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                {isSignUp ? "Sign Up" : "Log In"}
              </Button>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Mail className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
            <p className="text-xs text-gray-600 text-center">
              {isSignUp ? "Already have an account? " : "Don't have an account? "}
              <button 
                className="font-medium text-blue-600 hover:text-blue-500"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Log in" : "Sign up"}
              </button>
            </p>
          </div>
        </div>
      </main>

      <footer className="p-4 bg-white bg-opacity-10 backdrop-blur-md text-center text-white">
        <p>&copy; 2023 YourBrand. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          {['Privacy', 'Terms', 'Contact'].map((item) => (
            <li key={item}>
              <a href="#" className="hover:underline">{item}</a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  )
}