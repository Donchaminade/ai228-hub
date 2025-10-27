"use client";

import { AI } from '../data/ai';

interface AICardProps {
  ai: AI;
}

export default function AICard({ ai }: AICardProps) {
  const handleCardClick = () => {
    window.open(ai.link, '_blank');
  };

  return (
    <div
      className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl hover:border-primary hover:bg-primary/10 transition-all duration-300 border border-border cursor-pointer flex flex-col justify-between"
      onClick={handleCardClick}
    >
      <div>
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold leading-6 text-card-foreground">
            {ai.name}
          </h3>
          <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
            {ai.category}
          </span>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">{ai.description}</p>
        <div className="bg-background/50 p-3 rounded-md mb-4">
            <p className="text-sm text-muted-foreground italic">❝ {ai.utilisation} ❞</p>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
        <div>
          <span className="font-medium">Ajouté par:</span> {ai.author}
        </div>
        <div className="text-xs">
          {new Date(ai.date_added).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
      </div>
    </div>
  );
}
