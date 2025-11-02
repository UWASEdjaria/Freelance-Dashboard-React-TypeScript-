import { createContext, useContext, useReducer } from "react";
import type { ReactNode } from "react";
import type { AppState, AppAction } from "./types";

// 1️⃣ Initial state
const initialState: AppState = {
  clients: [
    { id: "1", name: "Adeline", country: "Rwanda", email: "ibanzeadl@gamil.com" },
    { id: "2", name: "Mado", country: "USA" , email: "kan@gamil.com"}
  ],
  projects: [
    { id: "p1", clientId: "1", title: "Website Redesign", budget: 8000, status: "in-progress", paymentStatus: "unpaid" },
    { id: "p2", clientId: "2", title: "Mobile App", budget: 50000, status: "completed", paymentStatus: "paid" }
  ],
  payments: [
    { projectId: "p2", amount: 50000, date: new Date().toISOString() }
  ]
};

//  Create context
const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<AppAction> } | undefined>(undefined);

// Reducer (handles actions)
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "ADD_CLIENT":
      return { ...state, clients: [...state.clients, action.payload] };
    case "ADD_PROJECT":
      return { ...state, projects: [...state.projects, action.payload] };
    case "ADD_PAYMENT":
      return { ...state, payments: [...state.payments, action.payload] };
    case "MARK_PROJECT_PAID": {
      return {
        ...state,
        projects: state.projects.map(p =>
          p.id === action.payload ? { ...p, paymentStatus: "paid" } : p
        ),
        payments: [
          ...state.payments,
          {
            projectId: action.payload,
            amount: state.projects.find(p => p.id === action.payload)?.budget || 0,
            date: new Date().toISOString()
          }
        ]
      };
    }
    default:
      return state;
  }
}

// Provider
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

// Hook to use context
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used inside AppProvider");
  return context;
}
