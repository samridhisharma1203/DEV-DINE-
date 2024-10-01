import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Search, ShoppingCart, User, HelpCircle, ChevronDown, Facebook, Twitter, Instagram, Code } from 'lucide-react'

export default function DevDineWebstore() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'ingredients', name: 'Coding Ingredients', description: 'Essential components for your coding recipes' },
    { id: 'tools', name: 'Developer Tools', description: 'Enhance your coding kitchen with pro tools' },
    { id: 'courses', name: 'Learning Courses', description: 'Recipes to boost your coding skills' },
  ]

  const products = [
    { id: 1, name: 'Algorithm Cookbook', category: 'courses', price: 29.99, rating: 4.5, image: '/placeholder.svg?height=200&width=200&text=Algorithm+Cookbook' },
    { id: 2, name: 'Code Compiler Mug', category: 'tools', price: 15.99, rating: 4.8, image: '/placeholder.svg?height=200&width=200&text=Code+Mug' },
    { id: 3, name: 'Debugging Spice Set', category: 'ingredients', price: 19.99, rating: 4.7, image: '/placeholder.svg?height=200&width=200&text=Debug+Spices' },
    { id: 4, name: 'Full-Stack Feast Course', category: 'courses', price: 49.99, rating: 4.6, image: '/placeholder.svg?height=200&width=200&text=Full-Stack+Feast' },
    { id: 5, name: 'Syntax Sugar Packets', category: 'ingredients', price: 9.99, rating: 4.4, image: '/placeholder.svg?height=200&width=200&text=Syntax+Sugar' },
    { id: 6, name: 'Code Editor Pan Set', category: 'tools', price: 79.99, rating: 4.9, image: '/placeholder.svg?height=200&width=200&text=Editor+Pans' },
  ]

  const promotions = [
    { id: 1, title: 'Summer Code Buffet', description: 'All-you-can-learn summer courses', image: '/placeholder.svg?height=400&width=800&text=Summer+Code+Buffet' },
    { id: 2, title: 'New Debugging Tools', description: 'Fresh arrivals in our kitchen tools section', image: '/placeholder.svg?height=400&width=800&text=New+Debug+Tools' },
    { id: 3, title: 'Free Shipping on Courses', description: 'No delivery fee on all digital courses', image: '/placeholder.svg?height=400&width=800&text=Free+Course+Shipping' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-2 rounded-lg">
                <Code className="h-6 w-6 mr-2" />
                <span className="font-bold text-lg">DevDine Store</span>
              </div>
              <div className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-4">
                  <Button variant="ghost">Challenges</Button>
                  <Button variant="ghost">Store</Button>
                  <Button variant="ghost">Cart</Button>
                  <Button variant="ghost">Profile</Button>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <Input
                type="text"
                placeholder="Search coding ingredients..."
                className="mr-2"
              />
              <Button variant="outline">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Promotions and Deals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">Featured Code Recipes</h2>
          <Carousel>
            <CarouselContent>
              {promotions.map((promo) => (
                <CarouselItem key={promo.id}>
                  <div className="relative h-64 w-full">
                    <img src={promo.image} alt={promo.title} className="w-full h-full object-cover rounded-lg" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-75 flex flex-col justify-end p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-white mb-2">{promo.title}</h3>
                      <p className="text-white">{promo.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Expanded Catalog */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">Code Kitchen Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="cursor-pointer hover:shadow-lg transition-shadow border-2 border-indigo-200 hover:border-indigo-400">
                <CardHeader>
                  <CardTitle className="text-indigo-700">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={`/placeholder.svg?height=200&width=200&text=${category.name}`} alt={category.name} className="w-full h-40 object-cover rounded-md" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Product Listings */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">Featured Coding Ingredients</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="border-2 border-indigo-200 hover:border-indigo-400 transition-all">
                <CardHeader>
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-indigo-700">{product.name}</CardTitle>
                  <CardDescription>${product.price.toFixed(2)}</CardDescription>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{product.rating.toFixed(1)}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white">Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About DevDine</h3>
              <p className="text-indigo-200">We offer the finest coding ingredients and tools for developers to create delicious code recipes.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-indigo-200 hover:text-white">Terms and Conditions</a></li>
                <li><a href="#" className="text-indigo-200 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-indigo-200 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-indigo-200 hover:text-white"><Facebook /></a>
                <a href="#" className="text-indigo-200 hover:text-white"><Twitter /></a>
                <a href="#" className="text-indigo-200 hover:text-white"><Instagram /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-indigo-700 pt-8 text-center text-indigo-200">
            &copy; {new Date().getFullYear()} DevDine. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}