'use client'
import { ChangeEvent, FC, useContext} from 'react';
import { LanguageContext } from '../LanguageContext';

export const LanguageDropdown: FC = () => {
  const { language, setLanguage, isDark } = useContext(LanguageContext) || {}
  
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
