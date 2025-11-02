import { useState } from 'react';
import { useAppContext } from "../context";
import SearchBar from './SearchBar';

export default function ProjectList() {
  const { state, dispatch } = useAppContext();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredProjects = state.projects
    .filter(p => 
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      state.clients.find(c => c.id === p.clientId)?.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter(p => statusFilter === 'all' || p.status === statusFilter);

  return (
    <div className="mt-4">
      <div className="flex gap-4 mb-4">
        <SearchBar 
          onSearch={setSearch} 
          placeholder="Search projects..." 
        />
        <select 
          className="p-2 border rounded"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      
      <div className="space-y-4">
        {filteredProjects.map(p => {
          const client = state.clients.find(c => c.id === p.clientId);
          return (
            <div key={p.id} className="p-4 bg-white shadow-lg rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">{p.title}</h3>
                  <p>Client: {client?.name || 'Unknown'}</p>
                  <p>Status: {p.status}</p>
                  <p>Budget: ${p.budget}</p>
                  <p className={p.paymentStatus === 'paid' ? 'text-green-600' : 'text-red-600'}>
                    {p.paymentStatus.toUpperCase()}
                  </p>
                </div>
                {p.paymentStatus === "unpaid" && (
                  <button 
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    onClick={() => dispatch({ type: "MARK_PROJECT_PAID", payload: p.id })}
                  >
                    Mark Paid
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
