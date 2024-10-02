import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Simple Website</h1>
      <p className="mb-8">This is the home page (Page 1)</p>
      <nav className="space-x-4">
        <Link href="/about" className="text-blue-600 hover:underline">About</Link> 
        <br />
        <Link href="/services" className="text-blue-600 hover:underline">Services</Link> <br />
        <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link> <br />
        <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link> <br />
      </nav>
    </div>
  )
}