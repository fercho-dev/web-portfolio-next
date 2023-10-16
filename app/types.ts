export type CardProps = {
  imageSrc: string;
  backText: {en: string, es: string, ja: string};
  backLink: string;
  isFlipped: boolean;
  onCardClick: () => void;
}

export type CardData = {
  id: number;
  imageSrc: string;
  backText: {en: string, es: string, ja: string};
  backLink: string;
}

export type HeroTextsType = {
  first: string;
  second: string;
  third: string;
}

export type Project = {
  name: string;
  imageUrl: string;
  link: string;
  id: number;
  description: {
    en: string;
    es: string;
    ja: string;
  };
}
