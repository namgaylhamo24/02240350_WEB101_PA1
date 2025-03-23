import { Button } from "@/components/ui/button"

interface ProfileProps {
  profile: {
    username: string
    handle: string
    avatar: string
    stats: {
      followers: number
      tells: number
      following: number
    }
  }
}

export default function ProfileInfo({ profile }: ProfileProps) {
  return (
    <div className="flex flex-col items-center pt-12 pb-6">
      <div className="w-20 h-20 rounded-md bg-green-500 border-2 border-red-400 flex items-center justify-center text-white text-3xl mb-2">
        {profile.avatar}
      </div>

      <h1 className="text-lg font-semibold mt-2">{profile.username}</h1>
      <p className="text-gray-500 text-sm">{profile.handle}</p>

      <div className="flex justify-center space-x-8 mt-4 text-center">
        <div className="flex flex-col">
          <span className="font-semibold">{profile.stats.followers}</span>
          <span className="text-xs text-gray-500">Followers</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">{profile.stats.tells}</span>
          <span className="text-xs text-gray-500">Tells</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">{profile.stats.following}</span>
          <span className="text-xs text-gray-500">Following</span>
        </div>
      </div>

      <Button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6 py-1 text-sm">
        Edit Profile
      </Button>
    </div>
  )
}

