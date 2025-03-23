import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center">
                <Link href="/" className="flex items-center">
                    {/* Tellonym logo with notebook icon */}
                    <div className="mr-2 relative w-6 h-6">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-gray-500">
                            <rect width="18" height="20" x="3" y="2" rx="2" />
                            <line x1="7" y1="8" x2="17" y2="8" />
                            <line x1="7" y1="12" x2="17" y2="12" />
                            <line x1="7" y1="16" x2="17" y2="16" />
                        </svg>
                    </div>
                    <span className="font-bold text-xl text-gray-800">tellonym</span>
                </Link>
            </div>

            <div className="flex items-center justify-center space-x-5">
                <Link href="/" className="text-gray-500 hover:text-gray-600 p-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <span className="sr-only">Home</span>
                </Link>
                <Link href="/search" className="text-gray-500 hover:text-gray-600 p-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <span className="sr-only">Search</span>
                </Link>
                <Link href="/messages" className="text-gray-500 hover:text-gray-600 p-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <span className="sr-only">Messages</span>
                </Link>
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white ml-5">C</div>
            </div>
        </header>
    );
}
