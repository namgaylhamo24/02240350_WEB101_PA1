import Header from "./header"
import ProfileInfo from "./profile-info"
import MessageInput from "./message-input"
import EmptyState from "./empty-state"
import Footer from "./footer"
import { Settings } from "lucide-react"

export default function ProfilePage() {
  const profileData = {
    username: "code.sendtells",
    handle: "@code.sendtells",
    avatar: "C",
    stats: {
      followers: 0,
      tells: 0,
      following: 0,
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-2xl bg-white shadow-sm my-4">
          <div className="relative">
            <div className="absolute top-4 right-4">
              <Settings className="w-5 h-5 text-gray-500" />
            </div>
            <ProfileInfo profile={profileData} />
            <MessageInput />
            <EmptyState />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

