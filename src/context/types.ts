export interface Client {
  id: string;
  name: string;
  country: string;
  email?: string;
}

export interface Project {
  id: string;
  clientId: string;
  title: string;
  budget: number;
  status: "pending" | "in-progress" | "completed";
  paymentStatus: "paid" | "unpaid";
}

export interface Payment {
  projectId: string;
  amount: number;
  date: string;
}

export type Action =
  | { type: "MARK_PAID"; projectId: string }
  | { type: "ADD_PROJECT"; project: Project }
  | { type: "ADD_CLIENT"; client: Client }
  | { type: "ADD_PAYMENT"; payment: Payment };

export interface State {
  clients: Client[];
  projects: Project[];
  payments: Payment[];
}

export interface ContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}
