"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout, ShoppingCart, BarChart, Truck } from 'lucide-react'

export default function BuyersPage() {
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
            <Link className="text-sm font-medium text-green-500" href="/buyers">
              Buyers
            </Link>
            <Link className="text-sm font-medium hover:text-green-500 transition-colors" href="/government-ngos">
              Government & NGOs
            </Link>
            <Link className="text-sm font-medium hover:text-green-500 transition-colors" href="/technology-providers">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
                  Streamline Your Supply Chain with AgriBuddy
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Connect directly with farmers and secure high-quality produce for your business.
                </p>
              </div>
           <Link href="/buyers/join"><Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                Join as a Buyer
              </Button></Link>   
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Benefits for Buyers
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <BarChart className="h-8 w-8 mb-2 text-blue-500" />
                  <CardTitle>Quality Assurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Ensure consistent quality of produce through direct contracts with farmers.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <ShoppingCart className="h-8 w-8 mb-2 text-green-500" />
                  <CardTitle>Supply Stability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Secure a stable supply of agricultural products, reducing market uncertainties.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <Truck className="h-8 w-8 mb-2 text-purple-500" />
                  <CardTitle>Efficient Logistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Streamline your supply chain with our integrated logistics solutions.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              How It Works
            </h2>
            <div className="grid gap-6 lg:grid-cols-4 lg:gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-500 p-3 mb-4">
                  <ShoppingCart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sign Up</h3>
                <p className="text-gray-300">Create your buyer profile on AgriBuddy.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-green-500 p-3 mb-4">
                  <Sprout className="h-6 w-6 text-white" />
                </div>
                <h3  className="text-xl font-bold mb-2">Browse Farmers</h3>
                <p className="text-gray-300">Explore profiles of farmers and their available crops.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-purple-500 p-3 mb-4">
                  <BarChart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Make Offers</h3>
                <p className="text-gray-300">Send contract offers to farmers that meet your requirements.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-yellow-500 p-3 mb-4">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Receive Produce</h3>
                <p className="text-gray-300">Get high-quality produce delivered as per the contract terms.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Optimize Your Supply Chain?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                  Join AgriBuddy today and start securing high-quality agricultural products.
                </p>
              </div>
              <Link href="/buyers/join"> <Button size="lg" className="bg-blue-500 hover:bg-blue-600">Get Started as a Buyer</Button></Link>
             
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