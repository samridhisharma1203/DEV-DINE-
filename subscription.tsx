'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, ChefHat, Code, Trophy, Gift, User, HelpCircle } from 'lucide-react'

const plans = [
  {
    name: "Free",
    price: "₹0",
    features: [
      "Basic access to coding problems",
      "No rewards or discounts on culinary items",
      "Limited access to coding tutorials"
    ],
    popular: false
  },
  {
    name: "Basic",
    price: "₹499",
    features: [
      "Full access to all coding problems",
      "Earn 1 reward coupon per month",
      "Access to basic coding tutorials",
      "Priority support"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "₹999",
    features: [
      "Full access to all coding problems",
      "Earn 2 reward coupons per month",
      "Access to advanced coding tutorials",
      "Exclusive badges and profile customization",
      "Priority customer support",
      "Early access to new challenges"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "₹1,999",
    features: [
      "All Pro Plan benefits",
      "Unlimited reward coupons",
      "Access to premium culinary events and workshops",
      "Direct mentorship from coding experts",
      "VIP customer support",
      "Exclusive rewards and merchandise"
    ],
    popular: false
  }
]

const allFeatures = [
  "Access to coding problems",
  "Reward coupons",
  "Coding tutorials",
  "Customer support",
  "Profile customization",
  "Early access to challenges",
  "Culinary events and workshops",
  "Mentorship",
  "Exclusive rewards"
]

const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)

  const handlePlanSelection = (planName) => {
    setSelectedPlan(planName)
  }

  const isPlanSelected = (planName) => selectedPlan === planName

  const isFeatureIncluded = (planName, feature) => {
    const plan = plans.find(p => p.name === planName)
    return plan.features.some(f => f.toLowerCase().includes(feature.toLowerCase()))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-yellow-100">
      <header className="bg-gradient-to-r from-blue-400 to-yellow-300 p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-gray-800" />
            <span className="text-2xl font-bold text-gray-800">DEVDINE</span>
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
                    <span className="ml-2 hidden md:inline">{label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Subscription Plan</h1>
          <p className="text-xl text-gray-700">
            Unlock exclusive rewards and premium features by choosing a plan that fits your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card 
                className={`flex flex-col h-full cursor-pointer transition-all duration-300 ${plan.popular ? 'border-blue-500 border-2' : ''} ${isPlanSelected(plan.name) ? 'ring-2 ring-blue-500 transform scale-105' : 'hover:shadow-xl'}`}
                onClick={() => handlePlanSelection(plan.name)}
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-3xl font-semibold">
                    {plan.price}<span className="text-sm font-normal">/month</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    {plan.name === "Free" ? "Get Started" : "Subscribe Now"}
                  </Button>
                </CardFooter>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 text-sm font-semibold rounded-bl">
                    Most Popular
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.section 
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Feature</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="border p-2 text-center">{plan.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="border p-2">{feature}</td>
                    {plans.map((plan) => (
                      <td key={plan.name} className="border p-2 text-center">
                        {isFeatureIncluded(plan.name, feature) ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                          >
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          </motion.div>
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "Can I cancel anytime?",
                answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period."
              },
              {
                question: "What happens after my free trial ends?",
                answer: "After your free trial ends, you'll be automatically upgraded to the paid plan you selected. You can cancel before the trial ends to avoid being charged."
              },
              {
                question: "How do I redeem my reward coupons?",
                answer: "You can redeem your reward coupons in the Rewards section of your account. Each coupon will have specific instructions for use."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 DEVDINE. All rights reserved.</p>
            <nav className="mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-blue-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-300">Contact Us</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SubscriptionPlans