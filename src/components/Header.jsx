import React from 'react';
import { useUserContext } from '../context/UserContext';

export default function Header() {
  const { currentUser } = useUserContext();
  return (
    <>
      <h1>Welcome: ({currentUser.email})</h1>
    </>
  );
}
