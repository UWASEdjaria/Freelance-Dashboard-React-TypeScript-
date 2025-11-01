export interface Client {
  id: string;
  name: string;
  email?: string;
}

export interface Project {
  id: string;
  title: string;
  paid: boolean;
}

export interface Payment {
  id: string;
  projectId: string;
  amount: number;
}
