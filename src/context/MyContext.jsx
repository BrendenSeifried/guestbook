import { createContext, useState } from 'react';

export const logInContext = createContext();

const ProvideAuth = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <logInContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </logInContext.Provider>
  );
};

const useLoginContext = () => {
  const data = createContext(logInContext);
  if (data === undefined) {
    throw new Error('somethings up with the context.');
  }
  return data;
};

export { ProvideAuth, useLoginContext };
