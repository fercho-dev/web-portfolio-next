'use client'
import React, { ChangeEvent, useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

export const ToggleSwitch: React.FC = () => {
  const { isDark, setIsDark } = useContext(LanguageContext) || {}

  const onToggle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setIsDark && setIsDark(true);
    } else {
      setIsDark && setIsDark(false);
    }
  };

  return (
    <input
      type="checkbox"
      className="theme-checkbox"
      checked={isDark}
      onChange={onToggle}
    />
  );
};
