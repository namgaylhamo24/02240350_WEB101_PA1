"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function MessageInput() {
    const [message, setMessage] = useState("")
    const [isAnonymous, setIsAnonymous] = useState(true)

    const toggleAnonymous = () => {
        setIsAnonymous(!isAnonymous)
    }

    return (
        <div className="px-6 py-5 rounded-md mx-4 mb-6" style={{ backgroundColor: "#F2ACB9" }}>
            <Textarea
            placeholder="Send me anonymous messages..."
            className="w-full border-none bg-transparent resize-none focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-700 placeholder:text-gray-500 min-h-[80px]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />

            <div className="flex items-center justify-between mt-3">
            <div className="flex items-center space-x-2">
                <button
                onClick={toggleAnonymous}
                className="bg-pink-500 rounded-full w-10 h-5 flex items-center relative cursor-pointer"
                >
                <div
                    className={`absolute bg-white rounded-full w-4 h-4 shadow-sm transition-transform ${isAnonymous ? "translate-x-5" : "translate-x-1"}`}
                ></div>
                </button>
                <span className="text-sm text-gray-600">
                Your message is <span className="text-gray-500 font-medium">anonymous</span>
                </span>
            </div>

            <Button
                className="rounded-full px-6 bg-pink-500 text-white"
            >
                Send
            </Button>
            </div>
        </div>
    )
}
