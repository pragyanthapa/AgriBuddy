import DocumentAnalysisDemo from '@/components/document-analysis-demo'

export default function DocumentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Market Sentiment Analysis</h1>
      <DocumentAnalysisDemo />
    </div>
  )
}