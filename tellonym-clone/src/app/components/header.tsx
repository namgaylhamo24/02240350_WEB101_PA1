import Link from "next/link"
import { Search, MessageSquare, Home } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <span className="font-bold text-xl text-gray-800">tellonym</span>
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <Link href="/" className="text-gray-500 hover:text-gray-700">
          <Home className="w-5 h-5" />
          <span className="sr-only">Home</span>
        </Link>
        <Link href="/search" className="text-gray-500 hover:text-gray-700">
          <Search className="w-5 h-5" />
          <span className="sr-only">Search</span>
        </Link>
        <Link href="/messages" className="text-gray-500 hover:text-gray-700">
          <MessageSquare className="w-5 h-5" />
          <span className="sr-only">Messages</span>
        </Link>
        <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white">C</div>
      </div>
    </header>
  )
}

