import { useAppContext } from "../context";

export default function DashboardStatus() {
  const { state } = useAppContext();
  const totalProjects = state.projects.length;
  const paidProjects = state.projects.filter(p => p.paymentStatus === "paid").length;

  return (
    <div className="p-4 bg-white shadow rounded mt-4">
      <h2 className="text-xl font-bold mb-2">Dashboard</h2>
      <p>Total Clients: {state.clients.length}</p>
      <p>Total Projects: {totalProjects}</p>
      <p>Paid Projects: {paidProjects}</p>
      <p>Unpaid Projects: {totalProjects - paidProjects}</p>
    </div>
  );
}
