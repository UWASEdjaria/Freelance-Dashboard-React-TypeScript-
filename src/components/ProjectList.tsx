import { useAppContext } from "../context";

export default function ProjectList() {
  const { state, dispatch } = useAppContext();

  return (
    <div className="mt-4 space-y-2">
      {state.projects.map(p => (
        <div key={p.id} className="p-4 bg-white shadow rounded flex justify-between items-center">
          <div>
            <h3 className="font-bold">{p.title}</h3>
            <p>Status: {p.status}</p>
            <p>Payment: {p.paymentStatus}</p>
          </div>
          {p.paymentStatus === "unpaid" && (
            <button 
              className="bg-red-700 text-white px-3 py-1 rounded"
              onClick={() => dispatch({ type: "MARK_PROJECT_PAID", projectId: p.id })}
            >
              Mark Paid
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
