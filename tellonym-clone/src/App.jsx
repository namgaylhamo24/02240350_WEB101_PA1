import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import MessageBox from "./components/MessageBox";
import Footer from "./components/Footer";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <Navbar />
      <div className="mt-10 w-full max-w-md">
        <ProfileCard />
        <MessageBox />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
