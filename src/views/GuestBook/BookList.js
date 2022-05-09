import React from 'react';
import { useUserContext } from '../../context/UserContext';

export default function BookList({ data }) {
  const { currentUser } = useUserContext();
  return (
    <div key={data.id}>
      <p>{data.content}</p>
      <p>{data.created_at}</p>
      <p>Made By: {currentUser.email}</p>
    </div>
  );
}
