'use client'
import { ChangeEvent, FC, useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../LanguageContext';

export const LanguageDropdown: FC = () => {
  const { language, setLanguage, isDark } = useContext(LanguageContext) || {}
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const languages = ['en', 'ja', 'es', 'ja', 'en'];

  useEffect(() => {
    if (currentLanguageIndex < languages.length) {
      const timeout = setTimeout(() => {
        setCurrentLanguageIndex(prevIndex => prevIndex + 1);
        if (currentLanguageIndex < languages.length) {
          setLanguage && setLanguage(languages[currentLanguageIndex]);
        }
      }, 1200);

      // Limpia el timeout si es necesario.
      return () => clearTimeout(timeout);
    }
  }, [currentLanguageIndex]);
  
  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    if (setLanguage) {
      setLanguage(e.target.value)
    }
  };
  
  return (
    <select
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
        cursor: 'pointer',
        outline: 'none'
      }} 
      value={language} onChange={changeLanguage}>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="ja">日本語</option>
    </select>
  );
};
