import { createContext, useContext, useReducer, useCallback, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { AppState, AppAction, Project } from './types';

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

function findProject(projects: Project[], projectId: string): Project | undefined {
  return projects.find(p => p.id === projectId);
}

function appReducer(state: AppState, action: AppAction): AppState {
    switch (action.type) {
      case 'ADD_CLIENT':
        return { ...state, clients: [...state.clients, action.payload] };
      case 'ADD_PROJECT':
        return { ...state, projects: [...state.projects, action.payload] };
      case 'ADD_PAYMENT':
        return { ...state, payments: [...state.payments, action.payload] };
      case 'MARK_PROJECT_PAID': {
        const projectId = action.payload;
        const projectToPay = findProject(state.projects, projectId);
        
        if (!projectToPay || projectToPay.paymentStatus === 'paid') return state;
        
        const newPayment = {
          projectId,
          amount: projectToPay.budget,
          date: new Date().toISOString()
        };
        
        const updatedState = {
          ...state,
          projects: state.projects.map(project =>
            project.id === projectId
              ? { ...project, paymentStatus: 'paid' as const }
              : project
          ),
          payments: [...state.payments, newPayment]
        };
        
        return updatedState;
      }
      default:
        return state;
    }
}

const useEnhancedDispatch = (baseDispatch: React.Dispatch<AppAction>) => {
  return useCallback((action: AppAction) => baseDispatch(action), [baseDispatch]);
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, baseDispatch] = useReducer(appReducer, initialState);
  const dispatch = useEnhancedDispatch(baseDispatch);
  

  const contextValue = useMemo(() => ({
    state,
    dispatch
  }), [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
