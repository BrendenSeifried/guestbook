import React from 'react';

export default function BookList({ data }) {
  return (
    <div key={data.id}>
      <p>{data.content}</p>
      <p>{data.created_at}</p>
    </div>
  );
}
