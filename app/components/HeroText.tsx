'use client'
import { Herotexts } from "../data"
import { HeroTextsType } from "../types"
import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

export const HeroText = () => {
  const { language } = useContext(LanguageContext) || {}
  let texts: HeroTextsType;
  switch (language) {
    case 'en':
      texts = Herotexts.en
      break;
    case 'es':
      texts = Herotexts.es
      break;
    case 'ja':
      texts = Herotexts.ja
      break;
    default:
      texts = Herotexts.en
      break;
  }
  
  return (
    <div className="text-4xl md:text-6xl text-left self-start pt-12 px-10 lg:px-0">
      <p>{texts.first}</p>
      <p>{texts.second}</p>
      <p className="text-right md:text-left md:ml-20">{texts.third}</p>
    </div>
  )
}
