"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout, Code, BarChart, Cpu } from 'lucide-react'

export default function TechnologyProvidersPage() {
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
            <Link className="text-sm font-medium text-green-500" href="/technology-providers">
              Tech Providers
            </Link>
          </nav>
          <Button variant="outline" className="hidden md:inline-flex">Sign In</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-green-500">
                  Innovate Agriculture with AgriBuddy
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Develop cutting-edge solutions for the future of farming and supply chain management.
                </p>
              </div>
              <Link href="/technology-providers/join"><Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                Join as a Tech Provider
              </Button></Link>
              
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Benefits for Technology Providers
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <Code className="h-8 w-8 mb-2 text-yellow-500" />
                  <CardTitle>Innovation Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Access a robust platform to develop and deploy agricultural technology solutions.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <BarChart className="h-8 w-8 mb-2 text-green-500" />
                  <CardTitle>Market Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Connect with a wide network of farmers, buyers, and stakeholders in the agricultural sector.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <Cpu className="h-8 w-8 mb-2 text-blue-500" />
                  <CardTitle>Data-Driven Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Leverage comprehensive agricultural data to inform and improve your technology solutions.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              How to Integrate
            </h2>
            <div className="grid gap-6 lg:grid-cols-4 lg:gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-yellow-500 p-3 mb-4">
                  <Code className="h-6 w-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold mb-2">API Integration</h3>
                <p className="text-gray-300">Access our comprehensive API documentation.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-green-500 p-3 mb-4">
                  <Sprout className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Develop Solutions</h3>
                <p className="text-gray-300">Create innovative tools for farmers and buyers.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-500 p-3 mb-4">
                  <BarChart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Test and Deploy</h3>
                <p className="text-gray-300">Utilize our sandbox environment for testing before deployment.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-purple-500 p-3 mb-4">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Scale and Grow</h3>
                <p className="text-gray-300">Expand your reach as AgriBuddy's network grows.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Innovate in AgriTech?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                  Join AgriBuddy's technology ecosystem and shape the future of agriculture.
                </p>
              </div>
              <Link href="/technology-providers/join"><Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">Get Started as a Tech Provider</Button></Link>
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