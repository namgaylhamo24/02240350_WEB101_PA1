import React, { useState } from 'react';

function MessageInput() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle message submission
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <textarea
        className="w-full p-2 border rounded"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Send an anonymous message..."
      />
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
        Send
      </button>
    </form>
  );
}

export default MessageInput;