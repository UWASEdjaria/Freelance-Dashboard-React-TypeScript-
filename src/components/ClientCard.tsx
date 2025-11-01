
import { Client } from "../types";

type Props = { clients: Client[] };

export default function Clients({ clients }: Props) {
  return (
    <div>
      <h2 className="text-blue-700 font-semibold mb-2 text-lg">Clients</h2>
      <div className="flex flex-wrap gap-4">
        {clients.map(c => (
          <div key={c.id} className="border p-4 rounded w-36 bg-white shadow">
            <p className="font-bold">{c.name}</p>
            <p className="text-gray-500 text-sm">{c.country}</p>
            {c.email && <p className="text-gray-500 text-sm">{c.email}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
