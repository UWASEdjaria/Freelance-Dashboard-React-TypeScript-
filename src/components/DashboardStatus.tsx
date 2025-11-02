import { useAppContext } from "../context";

export default function DashboardStatus() {
  const { state } = useAppContext();
  const paid = state.projects.filter(p => p.paymentStatus === "paid").length;

  return (
    <div className="p-4 bg-blue-200 hover:bg-blue-100 shadow-lg rounded-lg mt-4">
      <h2 className="text-xl font-bold mb-2 text-red-800">Dashboard</h2>
      <p>Total Clients: {state.clients.length}</p>
      <p>Total Projects: {state.projects.length}</p>
      <p>Paid: {paid}</p>
      <p>Unpaid: {state.projects.length - paid}</p>
    </div>
  );
}
