import Link from 'next/link'

export default function FAQ() {
  return (
    <div className="min-h-screen bg-purple-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
      <p className="mb-8">Find answers to common questions about our business and services.</p>
      <Link href="/" className="text-purple-600 hover:underline">Back to Home</Link>
    </div>
  )
}