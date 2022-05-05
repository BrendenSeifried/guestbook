import { useContext } from 'react';
import { logInContext } from '../context/MyContext';

export function useAuth() {
  const context = useContext(logInContext);

  if (context === undefined) {
    throw new Error('useauth isnt inside a Prvoider!');
  }

  return context;
}
