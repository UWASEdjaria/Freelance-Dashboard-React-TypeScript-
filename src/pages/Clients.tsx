
import { AppContext } from "../context";

export default function Clients() {
  const ctx = useContext(AppContext);
  if(!ctx) return null;

  return (
    <>
      {ctx.state.clients.map(c => (
        <div key={c.id}>
          {c.name} - {c.country} {c.email && `- ${c.email}`}
        </div>
      ))}
    </>
  );
}
