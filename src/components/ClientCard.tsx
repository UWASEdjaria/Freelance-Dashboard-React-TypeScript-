import { useState } from 'react';
import { useAppContext } from "../context";
import SearchBar from './SearchBar';

export default function ClientCard() {
  const { state } = useAppContext();
  const [search, setSearch] = useState('');

  const filteredClients = state.clients.filter(client =>
    client.name.toLowerCase().includes(search.toLowerCase()) ||
    client.country.toLowerCase().includes(search.toLowerCase()) ||
    (client.email && client.email.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="mt-4">
      <SearchBar 
        onSearch={setSearch} 
        placeholder="Search clients..." 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredClients.map((c) => (
          <div key={c.id} className="p-4 bg-blue-50 shadow-lg rounded-lg hover:bg-blue-100 transition-colors duration-200">
            <h3 className="font-bold text-red-900">{c.name}</h3>
            <p>Country: {c.country}</p>
            {c.email && <p>Email: {c.email}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
