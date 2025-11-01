import { useAppContext } from "../context";

export default function ClientCard() {
  const { state } = useAppContext();

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {state.clients.map((c) => (
        <div key={c.id} className="p-4 bg-white shadow rounded">
          <h3 className="font-bold">{c.name}</h3>
          <p>Country: {c.country}</p>
          {c.email && <p>Email: {c.email}</p>}
        </div>
      ))}
    </div>
  );
}
