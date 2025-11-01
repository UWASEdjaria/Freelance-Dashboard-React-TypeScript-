import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-red-900 text-white p-4 rounded mb-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">Mini Dashboard</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/clients" className="hover:underline">
          Clients
        </Link>
        <Link to="/projects" className="hover:underline">
          Projects
        </Link>
      </div>
    </nav>
  );
}
