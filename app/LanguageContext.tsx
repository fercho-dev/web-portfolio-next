'use client'

import React, { useState, ReactNode } from 'react';

type LanguageContextProps = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LanguageContext = React.createContext<LanguageContextProps | null>(null);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }): ReactNode => {
  const [language, setLanguage] = useState('en');
  const [isDark, setIsDark] = useState(false);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isDark, setIsDark }}>
      {children}
    </LanguageContext.Provider>
  )
};