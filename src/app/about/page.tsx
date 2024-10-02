import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="mb-8">Hello I am Aqsa I  am a Passionate Developer</p>
      <Link href="/" className="text-green-600 hover:underline">Back to Home</Link>
    </div>
  )
}