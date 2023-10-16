'use client'

import React, { FC, useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { aboutText } from '../data';
import Link from 'next/link';
import { LanguageDropdown } from '../components/LanguageDropdown';
import { ToggleSwitch } from '../components/ThemeSwitch';

const AboutComponent: FC = () => {
  const { language, isDark } = useContext(LanguageContext) || {}
  let headerText: string
  let navText: string
  let body: string
  let blogText: string
  let blogLink: string
  switch (language) {
    case 'en':
      headerText = aboutText.head.en
      navText = aboutText.nav.en
      body = aboutText.body.en
      blogText = aboutText.blog.text.en
      blogLink = aboutText.blog.link
      break;
    case 'es':
      headerText = aboutText.head.es
      navText = aboutText.nav.es
      body = aboutText.body.es
      blogText = aboutText.blog.text.es
      blogLink = aboutText.blog.link
      break;
    case 'ja':
      headerText = aboutText.head.ja
      navText = aboutText.nav.ja
      body = aboutText.body.ja
      blogText = aboutText.blog.text.ja
      blogLink = aboutText.blog.link
      break;
    default:
      headerText = aboutText.head.en
      navText = aboutText.nav.en
      body = aboutText.body.en
      blogText = aboutText.blog.text.en
      blogLink = aboutText.blog.link
      break;
  }

  return (
    <main className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col-reverse md:flex-row h-screen relative`}>
      <div className='absolute top-0 left-0 m-2 md:m-10 z-10 flex gap-3'>
        <ToggleSwitch />
        <LanguageDropdown />
      </div>
      
      <div className="flex-1 flex relative overflow-hidden">
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div className="border-b border-gray-500 inline-block absolute top-0 right-0 pt-10 lg:pt-8 xl:pt-10 pr-20 lg:pr-28 xl:pr-40">
          <p className="text-4xl md:text-6xl">{headerText}</p>
        </div>

        <div className='mt-32 md:mt-0 px-4 md:px-8 xl:px-12 text-right'>
          <p>{body}</p>
          <a className='block underline italic mt-4 cursor-pointer' href={blogLink} target='_blank'>{blogText}</a>
        </div>
      </div>

      <Link className='absolute bottom-10 right-10 lg:bottom-14 lg:right-14 underline hover:text-gray-400' href="/">
          {navText}
      </Link>
    </main>
  );
};

export default AboutComponent;
