import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export function useAuth() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useauth isnt inside a Provider!');
  }

  return context;
}
