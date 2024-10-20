"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Scale } from 'lucide-react'

export default function ExplorePartnershipPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    partnershipInterest: '',
    projectIdeas: '',
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
      const response = await fetch('/api/government-ngos/explore-partnership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/government-ngos/thank-you')
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
            <Scale className="h-12 w-12 text-purple-500" />
          </div>
          <CardTitle className="mt-6 text-center text-3xl font-extrabold">Explore Partnership</CardTitle>
          <CardDescription className="mt-2 text-center text-sm">
            Collaborate with AgriBuddy to promote sustainable agriculture and rural development
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
                <Label htmlFor="organization">Organization Name</Label>
                <Input
                  id="organization"
                  name="organization"
                  type="text"
                  required
                  className="bg-gray-700 text-gray-100"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="role">Your Role</Label>
                <Input
                  id="role"
                  name="role"
                  type="text"
                  required
                  className="bg-gray-700 text-gray-100"
                  value={formData.role}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="partnershipInterest">Partnership Interest</Label>
                <Input
                  id="partnershipInterest"
                  name="partnershipInterest"
                  type="text"
                  required
                  className="bg-gray-700 text-gray-100"
                  value={formData.partnershipInterest}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="projectIdeas">Project Ideas</Label>
                <Textarea
                  id="projectIdeas"
                  name="projectIdeas"
                  required
                  className="bg-gray-700 text-gray-100"
                  value={formData.projectIdeas}
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
            <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white">
              Submit Partnership Inquiry
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-gray-400 w-full">
            Want to learn more about our initiatives?{' '}
            <Link href="/government-ngos" className="font-medium text-purple-500 hover:text-purple-400">
              Visit our Government & NGOs page
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}