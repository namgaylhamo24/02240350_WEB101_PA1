import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white py-4 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-4 text-xs text-gray-500">
            <Link href="/imprint" className="hover:underline">
              Imprint
            </Link>
            <span>·</span>
            <Link href="/privacy" className="hover:underline">
              Privacy Settings
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-600 mb-2">Download the app on your mobile phone</p>
            <div className="flex space-x-2">
              <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <div className="h-8 w-24 bg-black rounded-md flex items-center justify-center text-white text-xs">
                  App Store
                </div>
              </Link>
              <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <div className="h-8 w-24 bg-black rounded-md flex items-center justify-center text-white text-xs">
                  Google Play
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

