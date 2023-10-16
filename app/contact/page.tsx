'use client'

import React, { FC, useState, useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { contactText, contacts, email } from '../data';
import Link from 'next/link';
import { LanguageDropdown } from '../components/LanguageDropdown';
import { ToggleSwitch } from "../components/ThemeSwitch";

const ContactComponent: FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const { language, isDark } = useContext(LanguageContext) || {}
  const [isCopied, setIsCopied] = useState(false);
  let headerText: string
  let navText: string
  let copiedText: string
  switch (language) {
    case 'en':
      headerText = contactText.head.en
      navText = contactText.nav.en
      copiedText = email.copyText.en
      break;
    case 'es':
      headerText = contactText.head.es
      navText = contactText.nav.es
      copiedText = email.copyText.es
      break;
    case 'ja':
      headerText = contactText.head.ja
      navText = contactText.nav.ja
      copiedText = email.copyText.ja
      break;
    default:
      headerText = contactText.head.en
      navText = contactText.nav.en
      copiedText = email.copyText.en
      break;
  }

  const onProjectHover = (imageUrl: string) => {
    setPreviewImage(imageUrl);
  };

  const onProjectLeave = () => {
    setPreviewImage(null);
  };

  const onProjectClick = (link: string) => {
    window.open(link, '_blank');
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(email.email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(err => alert(`Error al copiar el texto: ${err}`));
  };

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

        <div className="flex flex-col items-center">
          {isCopied && <span className="text-gray-400 mt-2">{copiedText}</span>}
          <span 
            onClick={handleCopyClick} 
            className="cursor-pointer hover:text-gray-400 p-3 text-lg md:text-xl"
          >
            {email.email}
          </span>
        </div>

        {contacts.map((contact) => (
          <div key={contact.id}>
            <p
              onMouseEnter={() => onProjectHover(contact.imageUrl)}
              onMouseLeave={onProjectLeave}
              onClick={() => onProjectClick(contact.link)}
              className="cursor-pointer hover:text-gray-400 p-3 text-lg md:text-xl"
            >
              {contact.name}
            </p>
          </div>
        ))}
      </div>

      <Link className='absolute bottom-10 right-10 lg:bottom-14 lg:right-14 underline hover:text-gray-400' href="/">
          {navText}
      </Link>
    </main>
  );
};

export default ContactComponent;