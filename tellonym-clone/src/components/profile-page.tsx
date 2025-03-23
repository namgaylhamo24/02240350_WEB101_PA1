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
        avatar: "https://images.app.goo.gl/PaHnmTYVUqsbVCbXA", 
        stats: {
            followers: 0,
            tells: 0,
            following: 0,
        },
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <div className="flex-1 flex justify-center px-4">
                <div className="w-full max-w-xl bg-white shadow-sm my-4 rounded-sm relative">
                    <ProfileInfo profile={profileData} />
                    <div className="absolute top-4 right-4 flex items-center">
                        <Settings className="w-5 h-5 text-gray-400" />
                    </div>
                    <MessageInput />
                    <EmptyState />
                </div>
            </div>
            <Footer />
        </div>
    )
}
