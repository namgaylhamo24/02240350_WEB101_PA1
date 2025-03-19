export default function ProfileCard() {
    return (
      <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
        <div className="w-20 h-20 bg-green-500 text-white flex items-center justify-center text-3xl rounded-md border-2 border-pink-500">
          C
        </div>
        <h2 className="mt-2 text-lg font-semibold">code.sendtells</h2>
        <p className="text-gray-500">@code.sendtells</p>
        <div className="flex gap-6 mt-2">
          <p><b>0</b> Followers</p>
          <p><b>0</b> Tells</p>
          <p><b>0</b> Following</p>
        </div>
        <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded">
          Edit Profile
        </button>
      </div>
    );
  }
  
  