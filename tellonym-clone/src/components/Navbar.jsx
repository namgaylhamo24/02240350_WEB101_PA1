import { FaHome, FaSearch, FaEnvelope, FaCog } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-6 py-4 bg-white shadow-md">
      <h1 className="text-lg font-bold">tellonym</h1>
      <div className="flex gap-4">
        <FaHome />
        <FaSearch />
        <FaEnvelope />
        <FaCog />
      </div>
    </nav>
  );
} 

