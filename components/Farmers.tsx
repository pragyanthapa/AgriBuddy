"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout, Users, BarChart, Tractor, ChevronRight } from 'lucide-react'

export default function FarmersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="w-full px-4 lg:px-6 h-16 flex items-center border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="flex items-center justify-center" href="/">
            <Sprout className="h-6 w-6 text-green-500" />
            <span className="ml-2 text-lg font-semibold">AgriBuddy</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium text-green-500" href="/farmers">
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
          <div className="flex gap-4">
            <Link href="/farmers/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <Button variant="outline">Sign In</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  Empowering Farmers with AgriBuddy
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Secure your future with guaranteed contracts and access to a wider market.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/farmers/join">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600">
                    Join as a Farmer
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/farmers/dashboard">
                  <Button size="lg" variant="outline">Go to Dashboard</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose AgriBuddy?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Tractor className="mr-2 h-6 w-6 text-green-500" />
                    Guaranteed Contracts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Secure your income with pre-agreed contracts before planting season begins.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-6 w-6 text-blue-500" />
                    Wider Market Access
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Connect with a diverse range of buyers from local markets to international corporations.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart className="mr-2 h-6 w-6 text-yellow-500" />
                    Data-Driven Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Make informed decisions with our advanced analytics and market trend reports.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Farming Business?</h2>
            <Link href="/farmers/join">
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                Get Started Today
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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