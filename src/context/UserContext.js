'use client';

import { createContext, useState, useContext } from 'react';
import Cookies from 'js-cookie';

const UserContext = createContext(null);


export const UserProvider = ({ children, initialUser }) => {
  const [user, setUser] = useState(initialUser);

  if (user===null) {
    Cookies.remove('auth_token');
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
