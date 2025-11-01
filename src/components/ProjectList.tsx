
import { AppContext } from "../context";

export default function ProjectList() {
  const ctx = useContext(AppContext);
  if (!ctx) return null;

  const markPaid = (id: string) => {
    ctx.dispatch({ type: "MARK_PAID", projectId: id });
  };

  return (
    <div className="mt-4 space-y-2">
      {ctx.state.projects.map(p => (
        <div key={p.id} className="p-4 bg-white shadow rounded flex justify-between items-center">
          <div>
            <h3 className="font-bold">{p.title}</h3>
            <p>Status: {p.status}</p>
            <p>Payment: {p.paymentStatus}</p>
          </div>
          {p.paymentStatus === "unpaid" && (
            <button 
              className="bg-red-700 text-white px-3 py-1 rounded"
              onClick={() => markPaid(p.id)}
            >
              Mark Paid
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
