import { useState } from "react";
import { useAppContext } from "../context";
import SearchBar from "./SearchBar";

export default function ProjectList() {
  const { state, dispatch } = useAppContext();
  const [t, setT] = useState(""); // search text
  const [f, setF] = useState("all"); // filter

  // Filter projects
  const list = state.projects.filter(p => {
    const c = state.clients.find(c => c.id === p.clientId)?.name || "";
    return (p.title + c).toLowerCase().includes(t.toLowerCase()) && (f === "all" || p.status === f)
  });

  return (
    <div className="mt-4">
      {/* Search + Filter */}
      <div className="flex gap-4 mb-4">
        <SearchBar onSearch={setT} placeholder="Search..." />
        <select
          className="p-2 bg-transparent border-2  border-red-900 rounded-full"
          value={f}
          onChange={e => setF(e.target.value)}
          aria-label="Filter projects"   // accessibility fix
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Project list */}
      {list.map(p => {
        const c = state.clients.find(c => c.id === p.clientId)?.name || "Unknown";
        return (
          <div key={p.id} className="p-4  bg-blue-200 hover:bg-blue-100  shadow-lg rounded-lg mb-3">
            <h3 className="font-bold text-red-800">{p.title}</h3>
            <p>Client: {c}</p>
            <p>Status: {p.status}</p>
            <p>Budget: ${p.budget}</p>
            <p className={p.paymentStatus === "paid" ? "text-green-600" : "text-red-600"}>
              {p.paymentStatus}
            </p>

            {p.paymentStatus === "unpaid" && (
              <button
                className="bg-red-600 text-white px-3 py-1 rounded mt-2"
                onClick={() => dispatch({ type: "MARK_PROJECT_PAID", payload: p.id })}
              >
                Paid
              </button>
            )}
          </div>
        )
      })}
    </div>
  )
}
