
import { Project } from "../types";

interface Props {
  projects: Project[];
  markPaid: (id: string) => void;
}

export default function ProjectList({ projects, markPaid }: Props) {
  return (
    <ul className="space-y-2">
      {projects.map(p => (
        <li key={p.id} className="flex justify-between items-center border p-2 rounded bg-white shadow">
          <div>
            <p className="font-bold">{p.title} - ${p.budget}</p>
            <p className="text-gray-500 text-sm">
              Status: {p.status}, Payment: {p.paymentStatus === "paid" ? "✅ Paid" : "❌ Unpaid"}
            </p>
          </div>
          {p.paymentStatus === "unpaid" && (
            <button 
              className="bg-red-800 text-white px-2 rounded" 
              onClick={() => markPaid(p.id)}
            >
              Mark Paid
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
