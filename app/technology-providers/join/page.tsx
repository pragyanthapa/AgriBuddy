"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Cpu } from 'lucide-react'

export default function JoinAsTechProviderPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    expertise: '',
    technologyOffering: '',
    integrationIdeas: '',
    additionalInfo: ''
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
      const response = await fetch('/api/technology-providers/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/technology-providers/welcome')
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
            <Cpu className="h-12 w-12 text-yellow-500" />
          </div>
          <CardTitle className="mt-6 text-center text-3xl font-extrabold">Join as a Tech Provider</CardTitle>
          <CardDescription className="mt-2 text-center text-sm">
            Innovate with AgriBuddy and shape the future of agriculture
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
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  className="bg-gray-700 text-gray-100"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="expertise">Areas of Expertise</Label>
                <Input
                  id="expertise"
                  name="expertise"
                  type="text"
                  required
                  className="bg-gray-700 text-gray-100"
                  value={formData.expertise}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="technologyOffering">Technology Offering</Label>
                <Textarea
                  id="technologyOffering"
                  name="technologyOffering"
                  required
                  className="bg-gray-700 text-gray-100"
                  value={formData.technologyOffering}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="integrationIdeas">Integration Ideas</Label>
                <Textarea
                  id="integrationIdeas"
                  name="integrationIdeas"
                  required
                  className="bg-gray-700 text-gray-100"
                  value={formData.integrationIdeas}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  className="bg-gray-700 text-gray-100"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900">
              Submit Application
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-gray-400 w-full">
            Already a tech partner?{' '}
            <Link href="/signin" className="font-medium text-yellow-500 hover:text-yellow-400">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}