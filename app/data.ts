import { CardData } from "./types";
import { Project } from './types';

export const projectsText = {
  head: {
    en: 'Projects',
    es: 'Proyectos',
    ja: 'プロジェクト',
  },
  nav: {
    en: 'Back to home',
    es: 'Volver al inicio',
    ja: 'ホームに戻る',
  }
};

export const projects: Project[] = [
  {
    name: 'English Partner',
    imageUrl: 'https://i.imgur.com/1QcdIAN.png',
    link: 'https://english-partner.vercel.app/',
    id: 1,
    description: {
      en: 'A conversational IA that helps you learn English - Next.js OpenAI API',
      es: 'Una IA conversacional que te ayuda a aprender inglés - Next.js OpenAI API',
      ja: '英語を学ぶのを助ける会話型AI - Next.js OpenAI API',
    },
  },
  {
    name: 'QuickCurriculum',
    imageUrl: 'https://i.imgur.com/3S1hEaG.png',
    link: 'https://quickcurriculum.vercel.app/',
    id: 2,
    description: {
      en: 'Create your curriculum vitae in seconds with AI - Next.js Firebase OpenAI API',
      es: 'Crea tu curriculum vitae en segundos con IA - Next.js Firebase OpenAI API',
      ja: 'AIで数秒で履歴書を作成します - Next.js Firebase OpenAI API',
    },
  },
  {
    name: 'CSS Wiki',
    imageUrl: 'https://i.imgur.com/tTQugvX.png',
    link: 'https://www.csswiki.dev/',
    id: 3,
    description: {
      en: 'The best resources to master CSS - Next.js MongoDB TailwindCSS',
      es: 'Los mejores recursos para dominar CSS - Next.js MongoDB TailwindCSS',
      ja: 'CSSをマスターするための最高のリソース - Next.js MongoDB TailwindCSS',
    },
  },
  {
    name: 'CoinTracker',
    imageUrl: 'https://i.imgur.com/3HkW45N.png',
    link: 'https://pf-03-cointracker.vercel.app/',
    id: 4,
    description: {
      en: 'Track your favorite cryptocurrencies - React.js Express PostgreSQL',
      es: 'Da seguimiento a tus criptomonedas favoritas - React.js Express PostgreSQL',
      ja: 'お気に入りの暗号通貨を追跡する - React.js Express PostgreSQL',
    },
  },
  // Más proyectos...
];

export const cards: CardData[] = [
  {
    id: 3,
    imageSrc: "/contact-alt.png",
    backText: {en: "Contact", es: "Contacto", ja: "コンタクト"},
    backLink: "/contact",
  },
  {
    id: 2,
    imageSrc: "/projects-alt.png",
    backText: {en: "Projects", es: "Proyectos", ja: "プロジェクト"},
    backLink: "/projects",
  },
  {
    id: 1,
    imageSrc: "/about.png",
    backText: {en: "About", es: "Acerca de", ja: "アバウト"},
    backLink: "/about",
  },
];

export const Herotexts = {
  en: {
    first: 'Web',
    second: 'Developer',
    third: 'Portfolio',
  },
  es: {
    first: 'Desarrollador',
    second: 'Web',
    third: 'Portafolio',
  },
  ja: {
    first: 'ウェブ',
    second: 'デベロッパー',
    third: 'ポートフォリオ',
  }
}

export const footerText = {
  name: "Fernando Campos",
  link: "@ferchodev"
}

export const contactText = {
  head: {
    en: 'Contact',
    es: 'Contacto',
    ja: '接触',
  },
  nav: {
    en: 'Back to home',
    es: 'Volver al inicio',
    ja: 'ホームに戻る',
  }
};

export const contacts = [
  {
    name: 'X | Twitter',
    imageUrl: '',
    link: 'https://twitter.com/fercho_dev_',
    id: 1,
  },
  {
    name: 'LinkedIn',
    imageUrl: '',
    link: 'https://www.linkedin.com/in/ferchodev/',
    id: 1,
  },
]

export const email = {
  email: 'ferchoeth@gmail.com',
  copyText: {
    en: 'Copied',
    es: 'Copiado',
    ja: 'コピーされました'
  }
}

export const aboutText = {
  head: {
    en: 'About',
    es: 'Sobre mí',
    ja: '私について',
  },
  nav: {
    en: 'Back to home',
    es: 'Volver al inicio',
    ja: 'ホームに戻る',
  },
  body: {
    en: `Software developer based in Mexico. I transitioned from pursuing university 
      studies in Political Science to immersing myself in the world of tech and development. 
      This shift wasn't arbitrary; I recognized technology as a powerful means to add value 
      and positively impact people's lives. My personal goal is to design and build digital 
      products that truly benefit their users. I am on the lookout for opportunities where 
      I can merge my diverse background with tech innovation to create impactful solutions.`,
    es: `Desarrollador de software viviendo en México. Pasé de cursar mis estudios universitarios
      en Ciencias Políticas a sumergirme en el mundo de la tecnología y el desarrollo. 
      Este cambio no fue arbitrario; reconocí la tecnología como un medio poderoso para aportar 
      valor e impactar positivamente en la vida de las personas. Mi objetivo personal es diseñar 
      y construir productos digitales que realmente beneficien a sus usuarios. Además, me encanta 
      compartir mis aprendizajes y trayectoria.`,
    ja: `メキシコ在住のソフトウェア開発者。私は大学で政治学を学ぶことから、
      テクノロジーと開発の世界に没頭するようになりました。この変更は恣意的なものではありませんでした。
      私はテクノロジーが価値を付加し、人々の生活にプラスの影響を与える強力な手段であると認識していました。
      私の個人的な目標は、ユーザーに真の利益をもたらすデジタル製品を設計し構築することです。さらに、
      私は自分の学んだことやキャリアを共有することが大好きです。`,
  },
  blog: {
    text: {
      en: 'Read my blog',
      es: 'Visita mi blog',
      ja: '私のブログにアクセスしてください'
    },
    link: 'https://www.linkedin.com/newsletters/7031115786857402369/'
  }
};