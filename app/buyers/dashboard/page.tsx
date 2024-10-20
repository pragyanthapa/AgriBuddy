'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, BarChart, FileText, Users, Settings, Search } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type Contract = {
  id: string
  cropType: string
  quantity: number
  price: number
  farmer: {
    user: {
      name: string
    }
    farmName: string
  }
}

type Farmer = {
  id: string
  farmName: string
  location: string
  cropTypes: string
  user: {
    name: string
  }
}

export default function BuyerDashboard() {
  const [recentContracts, setRecentContracts] = useState<Contract[]>([])
  const [availableFarmers, setAvailableFarmers] = useState<Farmer[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch('/api/buyers/dashboard')
        if (!response.ok) {
          const errorData = await response.text(); // Log the raw response
          throw new Error(errorData || 'Failed to fetch dashboard data')
        }
        const data = await response.json()
        console.log('Dashboard data:', data)
        setRecentContracts(data.recentContracts)
        setAvailableFarmers(data.availableFarmers)
      } catch (err) {
        console.error('Error in fetchDashboardData:', err)
        setError(err.message || 'Error fetching dashboard data')
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="w-full px-4 lg:px-6 h-16 flex items-center border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="flex items-center justify-center" href="/">
            <ShoppingCart className="h-6 w-6 text-blue-500" />
            <span className="ml-2 text-lg font-semibold">Buyer Dashboard</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="/buyers">
              Home
            </Link>
            <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="/buyers/profile">
              Profile
            </Link>
            <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="/buyers/contracts">
              Contracts
            </Link>
          </nav>
          <Button variant="outline">Sign Out</Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Welcome, Buyer</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-6 w-6 text-blue-500" />
                Recent Contracts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Farmer</TableHead>
                    <TableHead>Crop</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentContracts.map((contract) => (
                    <TableRow key={contract.id}>
                      <TableCell>{contract.farmer.user.name}</TableCell>
                      <TableCell>{contract.cropType}</TableCell>
                      <TableCell>{contract.quantity}</TableCell>
                      <TableCell>${contract.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View All Contracts</Button>
            </CardFooter>
          </Card>
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-6 w-6 text-green-500" />
                Available Farmers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {availableFarmers.map((farmer) => (
                  <li key={farmer.id} className="flex justify-between items-center">
                    <span>{farmer.user.name} - {farmer.farmName}</span>
                    <Button variant="outline" size="sm">View Profile</Button>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Find More Farmers</Button>
            </CardFooter>
          </Card>
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart className="mr-2 h-6 w-6 text-yellow-500" />
                Market Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>View current market trends and pricing information for various crops.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View Insights</Button>
            </CardFooter>
          </Card>
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="mr-2 h-6 w-6 text-purple-500" />
                Search Crops
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Search for specific crops and find farmers offering them.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Start Search</Button>
            </CardFooter>
          </Card>
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShoppingCart className="mr-2 h-6 w-6 text-red-500" />
                Create Contract
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Initiate a new contract with a farmer for crop purchase.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Create Contract</Button>
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
            <Link className="text-xs hover:text-blue-500 transition-colors" href="#">
              Help Center
            </Link>
            <Link className="text-xs hover:text-blue-500 transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="text-xs hover:text-blue-500 transition-colors" href="#">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
