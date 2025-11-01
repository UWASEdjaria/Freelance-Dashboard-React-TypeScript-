import React from 'react';
import { useAppContext } from '../context';

export default function DashboardStats() {
  const { state } = useAppContext();

  const stats = [
    { name: 'Total Projects', value: state.projects.length },
    { name: 'Paid Projects', value: state.projects.filter(p => p.paymentStatus === 'paid').length },
    { name: 'Active Clients', value: new Set(state.projects.map(p => p.clientId)).size },
    { name: 'Total Revenue', value: `$${state.payments.reduce((sum, p) => sum + p.amount, 0).toLocaleString()}` },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(s => (
        <div key={s.name} className="px-4 py-5 overflow-hidden bg-white rounded-lg shadow">
          <p className="text-sm font-medium text-gray-500 truncate">{s.name}</p>
          <p className="mt-1 text-3xl font-semibold text-gray-900">{s.value}</p>
        </div>
      ))}
    </div>
  );
}
