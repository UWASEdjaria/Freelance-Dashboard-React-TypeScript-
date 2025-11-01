
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-red-900 text-white p-4 rounded-full shadow-lg mb-6 flex justify-between items-center transition-all duration-300 hover:scale-105">
      <h1 className="text-xl font-bold font-serif">Mini Dashboard</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:bg-red-500 rounded-full">Dashboard</Link>
        <Link to="/clients" className="hover:bg-red-500 rounded-full">Clients</Link>
        <Link to="/projects" className="hover:bg-red-500 rounded-full">Projects</Link>
      </div>
    </nav>
  );
}
