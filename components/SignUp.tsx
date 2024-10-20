"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout } from 'lucide-react'

export default function SignUpPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })

    if (response.ok) {
      router.push('/signin')
    } else {
      const data = await response.json()
      setError(data.message || 'An error occurred during sign up.')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md space-y-8 bg-gray-800 text-gray-100">
        <CardHeader>
          <div className="flex justify-center">
            <Sprout className="h-12 w-12 text-green-500" />
          </div>
          <CardTitle className="mt-6 text-center text-3xl font-extrabold">Create your account</CardTitle>
          <CardDescription className="mt-2 text-center text-sm">
            Join AgriBuddy and start your agricultural journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4 rounded-md shadow-sm">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="bg-gray-700 text-gray-100"
                  value={name}
                  onChange={(e:any) => setName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="bg-gray-700 text-gray-100"
                  value={email}
                  onChange={(e:any) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="bg-gray-700 text-gray-100"
                  value={password}
                  onChange={(e:any) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && <p className="mt-2 text-center text-sm text-red-500">{error}</p>}
          <Link href="/farmers"><Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
              Sign up
            </Button></Link>
          </form>
        </CardContent>
        <CardFooter>
          <p className="mt-2 text-center text-sm text-gray-400">
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