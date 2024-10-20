"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tractor,Flower, BarChart, FileText, Users, Settings, TrendingUp, MessageSquare } from 'lucide-react'

export default function FarmerDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="w-full px-4 lg:px-6 h-16 flex items-center border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="flex items-center justify-center" href="/">
            <Tractor className="h-6 w-6 text-green-500" />
            <span className="ml-2 text-lg font-semibold">Farmer Dashboard</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium hover:text-green-500 transition-colors" href="/farmers">
              Home
            </Link>
            <Link className="text-sm font-medium hover:text-green-500 transition-colors" href="/farmers/profile">
              Profile
            </Link>
            <Link className="text-sm font-medium hover:text-green-500 transition-colors" href="/farmers/contracts">
              Contracts
            </Link>
          </nav>
          <Button variant="outline">Sign Out</Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Welcome, Farmer Harry</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Tractor className="mr-2 h-6 w-6 text-green-500" />
                Farm Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage your farm details, crops, and production.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Manage Farm</Button>
            </CardFooter>
          </Card>
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Flower className="mr-2 h-6 w-6 text-green-500" />
                Crop Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Get AI-powered crop recommendations based on your location and market demands.</p>
            </CardContent>
            <CardFooter>
              <Link href="/farmers/dashboard/crop-recommendations">
                <Button variant="outline">View Recommendations</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart className="mr-2 h-6 w-6 text-blue-500" />
                Market Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>View current market trends and pricing information.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View Insights</Button>
            </CardFooter>
          </Card>
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-6 w-6 text-yellow-500" />
                Contracts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage your active and pending contracts with buyers.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View Contracts</Button>
            </CardFooter>
          </Card>
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-6 w-6 text-purple-500" />
                Buyer Network
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Connect with potential buyers and explore new opportunities.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Explore Network</Button>
            </CardFooter>
          </Card>
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 h-6 w-6 text-red-500" />
                Market Sentiment Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Analyze market reports and gauge overall sentiment using Microsoft's Text Analytics API.</p>
            </CardContent>
            <CardFooter>
              <Link href="/farmers/dashboard/documents">
                <Button variant="outline">Analyze Sentiment</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="mr-2 h-6 w-6 text-gray-400" />
                Account Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage your account preferences and security settings.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Manage Settings</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <footer className="w-full py-6 mt-12 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6 flex flex-col gap-2 sm:flex-row items-center">
          <p className="text-xs text-gray-400">© 2024 AgriBuddy. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:text-green-500 transition-colors" href="#">
              Help Center
            </Link>
            <Link className="text-xs hover:text-green-500 transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="text-xs hover:text-green-500 transition-colors" href="#">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}