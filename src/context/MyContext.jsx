import { createContext, useState } from 'react';

export const logContext = createContext();

export default function MyContext({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const loggedIn =
      email === process.env.AUTH_EMAIL &&
      password === process.env.AUTH_PASSWORD;
    if (loggedIn) setUser({ email });
    return loggedIn;
  };

  const logout = (callback) => {
    setUser(null);
    callback();
  };

  return (
    <logContext.Provider value={{ user, login, logout }}>
      {children}
    </logContext.Provider>
  );
}
