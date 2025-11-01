import { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { AppState, AppAction } from './types';

// Initial state
const initialState: AppState = {
  clients: [
    { id: '1', name: 'Acme Corp', country: 'USA', email: 'contact@acme.com' },
    { id: '2', name: 'Globex', country: 'Canada' }
  ],
  projects: [
    { id: 'p1', clientId: '1', title: 'Website Redesign', budget: 5000, status: 'in-progress', paymentStatus: 'unpaid' },
    { id: 'p2', clientId: '2', title: 'Mobile App', budget: 10000, status: 'completed', paymentStatus: 'paid' }
  ],
  payments: [
    { projectId: 'p2', amount: 10000, date: new Date().toISOString() }
  ]
};

// Create context
export const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | undefined>(undefined);

// Reducer function
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'ADD_CLIENT':
      return { ...state, clients: [...state.clients, action.payload] };
    case 'ADD_PROJECT':
      return { ...state, projects: [...state.projects, action.payload] };
    case 'ADD_PAYMENT':
      return { ...state, payments: [...state.payments, action.payload] };
    case 'MARK_PROJECT_PAID':
      return {
        ...state,
        projects: state.projects.map(project =>
          project.id === action.projectId
            ? { ...project, paymentStatus: 'paid' as const }
            : project
        ),
        payments: [
          ...state.payments,
          {
            projectId: action.projectId,
            amount: state.projects.find(p => p.id === action.projectId)?.budget || 0,
            date: new Date().toISOString()
          }
        ]
      };
    default:
      return state;
  }
}

// Provider component
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook
export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
