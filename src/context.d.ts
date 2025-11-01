// This file helps TypeScript understand the context module
declare module './context' {
  import { ReactNode, Dispatch } from 'react';
  import { AppState, AppAction } from './types';

  export const AppContext: React.Context<{
    state: AppState;
    dispatch: Dispatch<AppAction>;
  } | undefined>;

  export function AppProvider({ children }: { children: ReactNode }): JSX.Element;
  export function useAppContext(): {
    state: AppState;
    dispatch: Dispatch<AppAction>;
  };
}
