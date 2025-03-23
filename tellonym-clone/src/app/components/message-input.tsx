"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "../ui/switch"

export default function MessageInput() {
  const [message, setMessage] = useState("")
  const [isAnonymous, setIsAnonymous] = useState(true)

  return (
    <div className="px-4 py-4 bg-pink-50 rounded-md mx-4 mb-4">
      <Textarea
        placeholder="Send me anonymous messages..."
        className="w-full border-none bg-transparent resize-none focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-700 placeholder:text-gray-500"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center space-x-2">
          <Switch checked={isAnonymous} onCheckedChange={setIsAnonymous} className="data-[state=checked]:bg-pink-500" />
          <span className="text-sm text-gray-600">
            Your message is <span className="text-gray-500 font-medium">anonymous</span>
          </span>
        </div>

        <Button className="bg-pink-200 hover:bg-pink-300 text-pink-500 rounded-full px-6">Send</Button>
      </div>
    </div>
  )
}

