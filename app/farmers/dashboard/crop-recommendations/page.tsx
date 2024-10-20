"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Leaf } from 'lucide-react'

export default function CropRecommendationsPage() {
  const [location, setLocation] = useState('')
  const [recommendations, setRecommendations] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setRecommendations([])

    try {
      const response = await fetch('/api/crop-recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ location }),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch recommendations')
      }

      const data = await response.json()
      setRecommendations(data.recommendations)
    } catch (err) {
      setError('An error occurred while fetching recommendations. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-2xl mx-auto bg-gray-800 text-gray-100">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Crop Recommendations</CardTitle>
          <CardDescription>Get AI-powered crop recommendations based on your location and market demands</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium mb-1">
                Your Location
              </label>
              <Input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your location"
                className="w-full bg-gray-700 text-gray-100"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Getting Recommendations...
                </>
              ) : (
                'Get Recommendations'
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {recommendations.length > 0 && (
            <div className="w-full">
              <h3 className="text-xl font-semibold mb-2">Recommended Crops:</h3>
              <ul className="list-disc pl-5 space-y-2">
                {recommendations.map((crop, index) => (
                  <li key={index} className="flex items-center">
                    <Leaf className="mr-2 h-5 w-5 text-green-500" />
                    {crop}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}