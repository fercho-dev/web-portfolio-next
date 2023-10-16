'use client'
import { CardsContainer } from "./components/CardsContainer"
import { HeroText } from "./components/HeroText";
import { FooterText } from "./components/FooterText";
import { LanguageDropdown } from "./components/LanguageDropdown";
import { ToggleSwitch } from "./components/ThemeSwitch";
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

export default function Home() {
  const { isDark } = useContext(LanguageContext) || {}
  return (
    <main className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} flex min-h-screen flex-col items-center justify-center`}>
      <div className="relative">
        <div className="absolute top-0 right-0 m-2 flex justify-between gap-3">
          <LanguageDropdown />
          <ToggleSwitch />
        </div>
        <HeroText />
        <CardsContainer />
        <FooterText />
      </div>
    </main>
  )
}
