import React, { useEffect, useState } from 'react';
import { createEntry, getEntries } from '../../services/entries';
import { signOutUser } from '../../services/fetch';
import BookList from './BookList';

export default function GuestBook() {
  const [text, setText] = useState([]);
  const [error, setError] = useState('');
  const [insert, setInsert] = useState('');

  useEffect(() => {
    const renderEntries = async () => {
      const render = await getEntries();
      console.log(render);
      setText(render);
    };
    renderEntries();
  }, []);

  const enterText = async () => {
    try {
      const info = await createEntry({ content });
      setText((prevState) => [...prevState, info]);
      // setText(info);
      // await getEntries();
      console.log(info);
      setInsert('');
    } catch (error) {
      setError('text did not go through');
    }
  };

  const logOut = async () => {
    await signOutUser();
    window.location.reload();
  };

  return (
    <>
      {error && <p>{error}</p>}
      <>
        <button onClick={logOut}>Logout</button>
      </>
      <div>
        <label>
          Add to the guestbook:
          <input
            type="text"
            value={insert}
            onChange={(e) => setInsert(e.target.value)}
          />
        </label>
        <button onClick={enterText}>Add</button>
      </div>

      <>
        {text.map((data) => (
          <BookList key={data.id} data={data} />
        ))}
      </>
    </>
  );
}
