'use client'
import React, { useState } from 'react';
import { CardComponent } from './Card';
import { cards } from '../data';

export const CardsContainer = () => {
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null);

  return (
    <div className="flex gap-4 flex-wrap">
      {cards.map(card => (
        <CardComponent 
          key={card.id}
          imageSrc={card.imageSrc}
          backText={card.backText}
          backLink={card.backLink}
          isFlipped={card.id === flippedCardId}
          onCardClick={() => setFlippedCardId(card.id === flippedCardId ? null : card.id)}
        />
      ))}
    </div>
  );
};
