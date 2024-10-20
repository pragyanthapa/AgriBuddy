"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout, Users, ShoppingCart, Building2, Code, ChevronRight, BarChart, Shield } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="w-full px-4 lg:px-6 h-16 flex items-center border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="flex items-center justify-center" href="/">
            <Sprout className="h-6 w-6 text-green-500" />
            <span className="ml-2 text-lg font-semibold">AgriBuddy</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium hover:text-green-500 transition-colors" href="/farmers">
              Farmers
            </Link>
            <Link className="text-sm font-medium hover:text-green-500 transition-colors" href="/buyers">
              Buyers
            </Link>
            <Link className="text-sm font-medium hover:text-green-500 transition-colors" href="/government-ngos">
              Government & NGOs
            </Link>
            <Link className="text-sm font-medium hover:text-green-500 transition-colors" href="/technology-providers">
              Tech Providers
            </Link>
          </nav>
          <Link href="/signup"><Button variant="outline" className="hidden md:inline-flex">Sign In</Button></Link>    
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  AgriBuddy: Revolutionizing Agriculture
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Connecting farmers, buyers, and stakeholders through innovative contract farming solutions.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/signup"> <Button size="lg" className="bg-green-500 hover:bg-green-600">
                  Get Started<ChevronRight className="ml-2 h-4 w-4" /></Button></Link>
               
                <Button size="lg" variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-center max-w-[800px] mx-auto mb-12 text-gray-300">
            AgriBuddy aims to create a scalable contract farming model that assures farmers of stable market access and buyers of consistent, quality produce. By leveraging digital technology, we facilitate clear contracts, ensure compliance, and build trust between all parties involved.
            </p>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <BarChart className="h-8 w-8 mb-2 text-green-500" />
                  <CardTitle>Market Stability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Mitigate risks for farmers by providing stable market access and protecting against price fluctuations.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <Shield className="h-8 w-8 mb-2 text-blue-500" />
                  <CardTitle>Quality Assurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Ensure buyers receive consistent, high-quality produce that meets their specific requirements.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-purple-500" />
                  <CardTitle>Transparent Ecosystem</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Foster a transparent and fair agricultural ecosystem that benefits all stakeholders.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="stakeholders" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Stakeholders
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card className="bg-gray-800 border-gray-700 hover:border-green-500 transition-colors">
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-green-500" />
                  <CardTitle>Farmers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">Primary producers of crops or livestock, involved in contract farming agreements.</p>
                  <Button asChild variant="outline">
                    <Link href="/farmers">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors">
                <CardHeader>
                  <ShoppingCart className="h-8 w-8 mb-2 text-blue-500" />
                  <CardTitle>Buyers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">Companies, retailers, or processors who enter into contracts with farmers for assured supply.</p>
                  <Button asChild variant="outline">
                    <Link href="/buyers">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors">
                <CardHeader>
                  <Building2 className="h-8 w-8 mb-2 text-purple-500" />
                  <CardTitle>Government and NGOs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">Play a role in promoting and regulating contract farming, ensuring fairness and sustainability.</p>
                  <Button asChild variant="outline">
                    <Link href="/government-ngos">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700 hover:border-yellow-500 transition-colors">
                <CardHeader>
                  <Code className="h-8 w-8 mb-2 text-yellow-500" />
                  <CardTitle>Technology Providers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">Responsible for developing and maintaining the digital platform that powers ContractFarm.</p>
                  <Button asChild variant="outline">
                    <Link href="/technology-providers">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Key Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center">
                <Sprout className="h-12 w-12 mb-4 text-green-500" />
                <h3 className="text-xl font-bold mb-2">Digital Contracts</h3>
                <p className="text-gray-300">Secure and transparent contract creation and management.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Matchmaking</h3>
                <p className="text-gray-300">Connect farmers with suitable buyers based on requirements.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ShoppingCart className="h-12 w-12 mb-4 text-purple-500" />
                <h3 className="text-xl font-bold mb-2">Quality Tracking</h3>
                <p className="text-gray-300">Monitor and ensure produce quality throughout the supply chain.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Agriculture?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                  Join AgriBuddy today and be part of the agricultural revolution.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/signup"><Button size="lg" className="bg-green-500 hover:bg-green-600">Get Started</Button></Link>
                <Button size="lg" variant="outline">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6 flex flex-col gap-2 sm:flex-row items-center">
          <p className="text-xs text-gray-400">© 2024 AgriBuddy. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:text-green-500 transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:text-green-500 transition-colors" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}