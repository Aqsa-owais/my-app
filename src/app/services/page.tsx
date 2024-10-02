import Link from 'next/link'

export default function Services() {
  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <p className="mb-8">Explore the services we offer to our clients.</p>
      <Link href="/" className="text-yellow-600 hover:underline">Back to Home</Link>
    </div>
  )
}