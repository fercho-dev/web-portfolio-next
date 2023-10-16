'use client'

import React, { FC, useState, useContext } from 'react';
import Image from 'next/image';
import { LanguageContext } from '../LanguageContext';
import { projectsText, projects } from '../data';
import Link from 'next/link';
import { LanguageDropdown } from '../components/LanguageDropdown';
import { ToggleSwitch } from '../components/ThemeSwitch';

const ProjectsComponent: FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const { language, isDark } = useContext(LanguageContext) || {}
  let headerText: string
  let navText: string
  switch (language) {
    case 'en':
      headerText = projectsText.head.en
      navText = projectsText.nav.en
      break;
    case 'es':
      headerText = projectsText.head.es
      navText = projectsText.nav.es
      break;
    case 'ja':
      headerText = projectsText.head.ja
      navText = projectsText.nav.ja
      break;
    default:
      headerText = projectsText.head.en
      navText = projectsText.nav.en
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

  return (
    <main className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col-reverse md:flex-row h-screen relative`}>
      <div className='absolute top-0 left-0 m-2 md:m-10 z-10 flex gap-3'>
        <ToggleSwitch />
        <LanguageDropdown />
      </div>
      
      <div className="flex-1 flex relative overflow-hidden">
        {projects.map((project, index) => (
          <Image key={index} className={`projectimg rounded absolute inset-0 object-cover transition-transform transition-opacity duration-500 ease-in-out transform-gpu ${previewImage === project.imageUrl ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`} src={project.imageUrl} alt={project.name} width={640} height={360} objectFit="cover" />
        ))}
      </div>
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div className="border-b border-gray-500 inline-block absolute top-0 right-0 pt-10 lg:pt-8 xl:pt-10 pr-20 lg:pr-28 xl:pr-40">
          <p className="text-4xl md:text-6xl">{headerText}</p>
        </div>

        {projects.map((project) => (
          <div className='labelWithTooltip' key={project.id}>
            <span className='tooltip'>{language && project.description[language as keyof typeof project.description]}</span>
            <p
              onMouseEnter={() => onProjectHover(project.imageUrl)}
              onMouseLeave={onProjectLeave}
              onClick={() => onProjectClick(project.link)}
              className="cursor-pointer hover:text-gray-400 p-3 text-lg md:text-xl"
            >
              {project.name}
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

export default ProjectsComponent;
