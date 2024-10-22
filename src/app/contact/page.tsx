import Link from 'next/link'
import Notfound from '../404'

export default function Contact() {
  return (
    <div className="min-h-screen bg-red-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="mb-8">For further information please contact me.</p>
    </div>
  )
}