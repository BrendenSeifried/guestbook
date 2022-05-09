import React, { useEffect, useState } from 'react';
import { createEntry, getEntries } from '../../services/entries';
// import { signOutUser } from '../../services/fetch';
import BookList from './BookList';

export default function GuestBook() {
  const [text, setText] = useState([]);
  const [error, setError] = useState('');
  const [insert, setInsert] = useState('');

  useEffect(() => {
    const renderEntries = async () => {
      const render = await getEntries();
      setText(render);
    };
    renderEntries();
  }, []);

  const enterText = async () => {
    const info = await createEntry({ content: insert });
    setText((prevState) => [...prevState, info]);
    // console.log(info);
    setInsert('');
  };

  return (
    <>
      {error && <p>{error}</p>}

      <div>
        <label>
          Add to the guestbook:
          <input
            placeholder="enter message"
            type="text"
            value={insert}
            onChange={(e) => setInsert(e.target.value)}
          />
        </label>
        <button aria-label="addBtn" onClick={enterText}>
          Add
        </button>
      </div>

      <div>
        {text.map((data) => (
          <BookList key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}
