
import { Project } from "../types";

interface Props {
  projects: Project[];
  markPaid: (id: string) => void;
}

export default function ProjectList({ projects, markPaid }: Props) {
  return (
    <ul>
      {projects.map(p => (
        <li key={p.id}>
          {p.title} - {p.status} - {p.paymentStatus}
          {p.paymentStatus === "unpaid" && (
            <button onClick={() => markPaid(p.id)}>Mark Paid</button>
          )}
        </li>
      ))}
    </ul>
  );
}
