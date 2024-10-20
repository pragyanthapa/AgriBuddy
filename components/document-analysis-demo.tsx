'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"
import { ToastProvider } from "@/components/ui/toast"

type AnalysisResult = {
  sentiment: string
  keyPhrases: string[]
}

export default function DocumentAnalysisDemo() {
  const [text, setText] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const { toast } = useToast()

  const handleAnalyze = async () => {
    if (!text.trim()) {
      toast({
        title: "Empty input",
        description: "Please enter some text to analyze.",
        variant: "destructive",
      })
      return
    }

    setIsAnalyzing(true)
    setResult(null)

    try {
      const formData = new FormData()
      formData.append('content', text)

      const response = await fetch('/api/analyze-document', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to analyze text')
      }

      const data = await response.json()
      setResult(data)

      toast({
        title: "Analysis complete",
        description: "Text has been successfully analyzed.",
      })
    } catch (error) {
      console.error('Error analyzing text:', error)
      toast({
        title: "Analysis failed",
        description: "Failed to analyze the text. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <ToastProvider>
      <div className="container mx-auto px-4 py-8">
        <Card className="w-full bg-gray-800 text-gray-100">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Market Sentiment Analysis</CardTitle>
            <CardDescription>Analyze market reports to gauge overall sentiment using Microsoft's Text Analytics API</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Enter or place a market report here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={5}
              className="w-full p-2 bg-gray-700 text-gray-100 border border-gray-600 rounded"
            />
            <Button onClick={handleAnalyze} disabled={isAnalyzing} className="w-full">
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                'Analyze Sentiment'
              )}
            </Button>
            {result && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Analysis Results:</h3>
                <p><strong>Sentiment:</strong> {result.sentiment}</p>
                <p><strong>Key Phrases:</strong></p>
                <ul className="list-disc list-inside">
                  {result.keyPhrases.map((phrase, index) => (
                    <li key={index}>{phrase}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </ToastProvider>
  )
}