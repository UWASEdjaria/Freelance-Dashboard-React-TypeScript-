import { useState } from "react";
import { useAppContext } from "../context";
import SearchBar from "./SearchBar";

export default function ClientCard() {
  const { state } = useAppContext();
  const [text, setText] = useState("");

  // Show only clients that match search text
  const showClients = state.clients.filter((one) => {
    const word = text.toLowerCase();
    return (
      one.name.toLowerCase().includes(word) ||
      one.country.toLowerCase().includes(word)
    );
  });

  return (
    <div className="mt-4">
      <SearchBar onSearch={setText} placeholder="Search..." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {showClients.map((one) => (
          <div
            key={one.id}
            className="p-4 bg-blue-200 shadow-lg rounded-lg hover:bg-blue-100"
          >
            <h3 className="font-bold text-red-800">{one.name}</h3>
            <p>Country: {one.country}</p>
            <p>Email: {one.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
