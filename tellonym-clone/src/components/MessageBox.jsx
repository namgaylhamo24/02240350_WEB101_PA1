export default function MessageBox() {
    return (
      <div className="mt-6 p-4 bg-red-100 rounded-lg w-full">
        <p>Send me anonymous messages...</p>
        <textarea className="w-full p-2 mt-2 border rounded-md"></textarea>
        <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    );
  }
  