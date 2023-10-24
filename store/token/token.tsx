import React, {createContext, useContext, useEffect, useState} from 'react';
import {deleteStringAsync, getStringAsync, setStringAsync} from './storage';

const ACCESS_TOKEN_KEY = 'LINKS_ACCESS_TOKEN';

interface initialValuesInterface {
  token: string;
  setToken: (token: string) => void;
  isTokenLoaded: boolean;
  setIsTokenLoaded: (state: boolean) => void;
}

const initialValues: initialValuesInterface = {token: '', setToken: () => {}, isTokenLoaded: false, setIsTokenLoaded: () => {}};

export const TokenContext = createContext<initialValuesInterface>(initialValues);

export function TokenProvider({children}: {children: React.ReactNode}) {
  const [token, setToken] = useState<string>('');
  const [isTokenLoaded, setIsTokenLoaded] = useState(false);

  const value: initialValuesInterface = {
    token,
    setToken,
    isTokenLoaded,
    setIsTokenLoaded,
  };

  return <TokenContext.Provider value={value}>{children}</TokenContext.Provider>;
}

export function useToken() {
  const {token, setToken: setTokenInternal, isTokenLoaded, setIsTokenLoaded} = useContext(TokenContext);

  useEffect(() => {
    if (!isTokenLoaded) {
      getStringAsync(ACCESS_TOKEN_KEY).then(newToken => {
        if (newToken) {
          Internal(newToken);
        }
        setIsTokenLoaded(true);
      });
    }
  }, [isTokenLoaded, setTokenInternal, setIsTokenLoaded]);

  async function setToken(newToken: string) {
    await setStringAsync(ACCESS_TOKEN_KEY, newToken);
    setTokenInternal(newToken);
  }

  async function clearToken() {
    await deleteStringAsync(ACCESS_TOKEN_KEY);
    setTokenInternal('');
  }

  const isLoggedIn = token !== null;

  return {token, isLoggedIn, isTokenLoaded, setToken, clearToken};
}
