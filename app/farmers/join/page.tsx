"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout, Tractor } from 'lucide-react'

export default function JoinAsFarmerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    farmName: '',
    location: '',
    cropTypes: '',
    farmSize: '',
    experience: ''
  })
  const [error, setError] = useState('')
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const response = await fetch('/api/farmers/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/farmers/welcome')
      } else {
        const data = await response.json()
        setError(data.message || 'An error occurred during submission.')
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl m-auto space-y-8 bg-gray-800 text-gray-100">
        <CardHeader>
          <div className="flex justify-center">
            <Tractor className="h-12 w-12 text-green-500" />
          </div>
          <CardTitle className="mt-6 text-center text-3xl font-extrabold">Join as a Farmer</CardTitle>
          <CardDescription className="mt-2 text-center text-sm">
            Start your journey with AgriBuddy and connect with buyers worldwide
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="bg-gray-700 text-gray-100"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-gray-700 text-gray-100"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="bg-gray-700 text-gray-100"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="farmName">Farm Name</Label>
                <Input
                  id="farmName"
                  name="farmName"
                  type="text"
                  required
                  className="bg-gray-700 text-gray-100"
                  value={formData.farmName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  type="text"
                  required
                  className="bg-gray-700 text-gray-100"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="cropTypes">Types of Crops</Label>
                <Input
                  id="cropTypes"
                  name="cropTypes"
                  type="text"
                  required
                  className="bg-gray-700 text-gray-100"
                  value={formData.cropTypes}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="farmSize">Farm Size (in acres)</Label>
                <Input
                  id="farmSize"
                  name="farmSize"
                  type="text"
                  required
                  className="bg-gray-700 text-gray-100"
                  value={formData.farmSize}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="experience">Farming Experience</Label>
                <Textarea
                  id="experience"
                  name="experience"
                  required
                  className="bg-gray-700 text-gray-100"
                  value={formData.experience}
                  onChange={handleChange}
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
              Submit Application
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-gray-400 w-full">
            Already have an account?{' '}
            <Link href="/signin" className="font-medium text-green-500 hover:text-green-400">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}