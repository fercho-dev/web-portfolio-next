'use client'
import Image from 'next/image';
import Link from 'next/link';
import { CardProps } from '../types';
import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

export const CardComponent: React.FC<CardProps> = ({ imageSrc, backText, backLink, isFlipped, onCardClick }) => {
  const { language } = useContext(LanguageContext) || {}
  let cardText: string
  switch (language) {
    case 'en':
      cardText = backText.en
      break;
    case 'es':
      cardText = backText.es
      break;
    case 'ja':
      cardText = backText.ja
      break;
    default:
      cardText = backText.en
      break;
  }

  return (
    <div className={`card w-60 h-60 mx-auto ${isFlipped ? 'is-flipped' : ''}`} onClick={onCardClick}>
      <div className={`card-inner w-full h-full`}>
        <div className="cursor-pointer card-front w-full h-full rounded">
          <Image className='rounded' src={imageSrc} alt="Front of card" layout='fill' objectFit="cover" />
        </div>
        <div className="rounded card-back w-full h-full bg-black flex items-center justify-center text-white text-3xl p-4">
          <Link className="underline" href={backLink}>
            {cardText}
          </Link>
        </div>
      </div>
    </div>
  );
};
