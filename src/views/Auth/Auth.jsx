import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { signInUser, signUpUser } from '../../services/fetch';
import style from './Auth.css';

export default function Authorize() {
  const { setCurrentUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const [check, setCheck] = useState('sign-in');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (check === 'sign-in') {
        const data = await signInUser({ email, password });
        setCurrentUser(data);
        history.push('/');
      } else {
        const data = await signUpUser({ email, password });
        setCurrentUser(data);
        history.push('/');
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <div className="txt">
        <h1
          className={check === 'sign-in' ? style.active : style.blank}
          onClick={() => setCheck('sign-in')}
        >
          Sign in
        </h1>

        <h1
          className={check === 'sign-up' ? style.active : style.blank}
          onClick={() => setCheck('sign-up')}
        >
          Sign up
        </h1>
      </div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
